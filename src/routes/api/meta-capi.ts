import { createFileRoute } from "@tanstack/react-router";

/**
 * Ponte para a API de Conversoes do Meta (Conversions API).
 *
 * Os tokens vivem so aqui, no servidor, e nunca chegam ao browser. Cada evento
 * e enviado em duplicado — uma vez pelo pixel no browser, outra por aqui — com
 * o mesmo `event_id`, para o Meta os deduplicar e contar como um so. Serve para
 * recuperar o sinal que bloqueadores e restricoes de iOS deitam fora.
 */

const GRAPH_VERSION = "v21.0";

/** Quantos pares pixel+token o servidor procura no ambiente. */
const MAX_DATASETS = 5;

/**
 * So estes eventos podem ser enviados. Sem esta lista, qualquer pessoa que
 * descubra o endpoint podia injetar eventos arbitrarios nos pixels.
 */
const ALLOWED_EVENTS = new Set(["PageView", "ViewContent", "InitiateCheckout"]);

type Dataset = { pixelId: string; token: string };

/**
 * Le os pares META_CAPI_PIXEL_n / META_CAPI_TOKEN_n do ambiente.
 *
 * Cada token do Meta so serve o seu proprio pixel, por isso nao ha um token
 * partilhado: para acrescentar um pixel, acrescenta-se um par numerado.
 */
function readDatasets(): Dataset[] {
  const datasets: Dataset[] = [];
  for (let i = 1; i <= MAX_DATASETS; i++) {
    const pixelId = process.env[`META_CAPI_PIXEL_${i}`];
    const token = process.env[`META_CAPI_TOKEN_${i}`];
    if (pixelId && token) datasets.push({ pixelId, token });
  }
  return datasets;
}

function readCookie(header: string | null, name: string): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name && rest.length > 0) return rest.join("=");
  }
  return undefined;
}

function clientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first;
  for (const header of ["cf-connecting-ip", "true-client-ip", "x-real-ip"]) {
    const value = request.headers.get(header)?.trim();
    if (value) return value;
  }
  return undefined;
}

async function send(dataset: Dataset, event: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${dataset.pixelId}/events?access_token=${encodeURIComponent(dataset.token)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: [event] }),
      },
    );
    if (!response.ok) {
      // Registar so o estado: o corpo da resposta do Meta pode repetir partes
      // do pedido, e nao queremos isso nos logs.
      console.error(`Meta CAPI: pixel ${dataset.pixelId} respondeu ${response.status}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`Meta CAPI: pixel ${dataset.pixelId} inacessivel`, error);
    return false;
  }
}

export const Route = createFileRoute("/api/meta-capi")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const datasets = readDatasets();

        // Sem credenciais o site funciona na mesma, apenas sem CAPI. Nunca
        // devolver erro por isto: partiria a pagina em ambientes de teste.
        if (datasets.length === 0) return new Response(null, { status: 204 });

        let payload: { eventName?: unknown; eventId?: unknown; eventSourceUrl?: unknown };
        try {
          payload = (await request.json()) as typeof payload;
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }

        const eventName = typeof payload.eventName === "string" ? payload.eventName : "";
        const eventId = typeof payload.eventId === "string" ? payload.eventId : "";
        if (!ALLOWED_EVENTS.has(eventName) || !eventId) {
          return Response.json({ ok: false }, { status: 400 });
        }

        const cookies = request.headers.get("cookie");
        const ip = clientIp(request);
        const userAgent = request.headers.get("user-agent");
        const fbp = readCookie(cookies, "_fbp");
        const fbc = readCookie(cookies, "_fbc");

        // O Meta rejeita o evento se nao conseguir identificar o utilizador:
        // exige IP e user agent em conjunto, ou entao fbp/fbc. Sem nada disso
        // nao vale a pena gastar os pedidos.
        if (!((ip && userAgent) || fbp || fbc)) {
          console.warn(`Meta CAPI: ${eventName} sem identificadores suficientes, ignorado`);
          return new Response(null, { status: 204 });
        }

        const userData: Record<string, string> = {};
        if (ip) userData["client_ip_address"] = ip;
        if (userAgent) userData["client_user_agent"] = userAgent;
        if (fbp) userData["fbp"] = fbp;
        if (fbc) userData["fbc"] = fbc;

        const event: Record<string, unknown> = {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          user_data: userData,
        };
        if (typeof payload.eventSourceUrl === "string") {
          event["event_source_url"] = payload.eventSourceUrl;
        }

        // Um pixel em baixo nao pode impedir os outros de receber o evento.
        const results = await Promise.all(datasets.map((d) => send(d, event)));
        const sent = results.filter(Boolean).length;

        return Response.json({ ok: sent > 0, sent }, { status: sent > 0 ? 200 : 502 });
      },
    },
  },
});
