import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CzLMEjGM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Reenvia o PageView pela API de Conversoes, no servidor.
*
* O pixel no browser ja disparou este evento com o mesmo `event_id`; o Meta
* junta os dois e conta uma vez so. Serve para recuperar o sinal que
* bloqueadores de anuncios e as restricoes do iOS deitam fora.
*/
function MetaCapiPageView() {
	(0, import_react.useEffect)(() => {
		const eventId = window.__metaPageViewId;
		if (!eventId) return;
		fetch("/api/meta-capi", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				eventName: "PageView",
				eventId,
				eventSourceUrl: window.location.href
			}),
			keepalive: true
		}).catch(() => {});
	}, []);
	return null;
}
var styles_default = "/assets/styles-BM80Gk0r.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página que você procura não existe ou foi movida."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Voltar ao início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Esta página não carregou"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Algo deu errado do nosso lado. Tente atualizar ou voltar ao início."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Voltar ao início"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "117 Exercícios"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#081221"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..900&family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "48x48",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
/** ID do Meta Pixel. Dispara o PageView no browser. */
var META_PIXEL_ID = "2159523891309098";
/**
* ID do pixel da UTMify.
*
* A UTMify entrega este snippet ofuscado (base64 + XOR) no painel dela. O que
* esta aqui e o conteudo decifrado desse blob, na forma legivel: poe o global
* `pixelId` e carrega o mesmo ficheiro do mesmo CDN. Efeito identico, com a
* diferenca de se poder rever o que corre na pagina.
*/
var UTMIFY_PIXEL_ID = "6abbcf54d5477351bc811de4";
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `document.documentElement.classList.add("js");` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `window.pixelId = "${UTMIFY_PIXEL_ID}";` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				src: "https://cdn.utmify.com.br/scripts/pixel/pixel.js",
				async: true,
				defer: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
				"data-utmify-prevent-xcod-sck": "",
				"data-utmify-prevent-subids": "",
				async: true,
				defer: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');window.__metaPageViewId=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Date.now())+Math.random();fbq('track','PageView',{},{eventID:window.__metaPageViewId});` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { dangerouslySetInnerHTML: { __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" alt="" />` } })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaCapiPageView, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter = () => import("./routes-CV3YXKAF.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "117 Exercícios de Mobilidade e Estabilidade" },
		{
			name: "description",
			content: "Recupere a mobilidade do seu corpo em poucas semanas. Guia em PDF com 117 exercícios, séries, repetições e intervalos prontos para usar. Acesso imediato."
		},
		{
			property: "og:title",
			content: "117 Exercícios de Mobilidade e Estabilidade"
		},
		{
			property: "og:description",
			content: "Recupere a mobilidade do seu corpo em poucas semanas. 117 exercícios prontos para usar, sem equipamento e sem academia."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/** Numeros que sustentam a promessa. Todos saem do proprio material. */
/** O que vai dentro do pacote, na ordem em que aparece no cartao. */
/** A oferta principal: material completo mais os 3 bonus. */
/**
* Checkout da oferta de entrada (o cronograma, R$ 9,90).
*
* Enquanto estiver vazio, a oferta de entrada NAO aparece na pagina: um botao
* de compra a apontar para lado nenhum perde a venda e ainda queima a
* confianca de quem clicou. Preencher com o link do Ticto para a publicar.
*/
/**
* Checkout do upsell, usado SO pelo botao do pop-up.
*
* E uma oferta a parte, que da acesso ao cronograma E aos 117 exercicios — e
* por isso nao e a mesma do cartao principal. Quem entra por aqui veio pelo
* caminho do cronograma e esta a acrescentar os exercicios por cima; quem
* clica no cartao de cima compra so o pacote completo, noutra oferta.
* Trocar um pelo outro vende a coisa errada, por isso sao duas constantes.
*/
/**
* A oferta de entrada.
*
* So o cronograma: os 117 exercicios e os 3 bonus ficam de fora, riscados, a
* mostrar o que nao vem. E o que sustenta o upsell no pop-up.
*/
/** Linha de garantias curtas. Fecha cada bloco de CTA sem repetir o selo todo. */
/**
* Ponte para a API de Conversoes do Meta (Conversions API).
*
* Os tokens vivem so aqui, no servidor, lidos do ambiente, e nunca chegam ao
* browser. Cada evento e enviado em duplicado — uma vez pelo pixel no browser,
* outra por aqui — com o mesmo `event_id`, para o Meta os deduplicar e contar
* como um so. Serve para recuperar o sinal que bloqueadores e restricoes de
* iOS deitam fora.
*
* Configuracao (Vercel > Settings > Environment Variables):
*   META_CAPI_PIXEL_1 = 2159523891309098
*   META_CAPI_TOKEN_1 = <token da API de Conversoes>
*
* Sem estas variaveis o site funciona na mesma, apenas sem eventos
* server-side. Ver .env.example.
*/
var GRAPH_VERSION = "v21.0";
/** Quantos pares pixel+token o servidor procura no ambiente. */
var MAX_DATASETS = 5;
/**
* So estes eventos podem ser enviados. Sem esta lista, qualquer pessoa que
* descubra o endpoint podia injetar eventos arbitrarios nos pixels.
*/
var ALLOWED_EVENTS = /* @__PURE__ */ new Set([
	"PageView",
	"ViewContent",
	"InitiateCheckout"
]);
/**
* Le os pares META_CAPI_PIXEL_n / META_CAPI_TOKEN_n do ambiente.
*
* Cada token do Meta so serve o seu proprio pixel, por isso nao ha um token
* partilhado: para acrescentar um pixel, acrescenta-se um par numerado.
*/
function readDatasets() {
	const datasets = [];
	for (let i = 1; i <= MAX_DATASETS; i++) {
		const pixelId = process.env[`META_CAPI_PIXEL_${i}`];
		const token = process.env[`META_CAPI_TOKEN_${i}`];
		if (pixelId && token) datasets.push({
			pixelId,
			token
		});
	}
	return datasets;
}
function readCookie(header, name) {
	if (!header) return void 0;
	for (const part of header.split(";")) {
		const [key, ...rest] = part.trim().split("=");
		if (key === name && rest.length > 0) return rest.join("=");
	}
}
function clientIp(request) {
	const first = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
	if (first) return first;
	for (const header of [
		"cf-connecting-ip",
		"true-client-ip",
		"x-real-ip"
	]) {
		const value = request.headers.get(header)?.trim();
		if (value) return value;
	}
}
async function send(dataset, event) {
	try {
		const response = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${dataset.pixelId}/events?access_token=${encodeURIComponent(dataset.token)}`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ data: [event] })
		});
		if (!response.ok) {
			console.error(`Meta CAPI: pixel ${dataset.pixelId} respondeu ${response.status}`);
			return false;
		}
		return true;
	} catch (error) {
		console.error(`Meta CAPI: pixel ${dataset.pixelId} inacessivel`, error);
		return false;
	}
}
var Route = createFileRoute("/api/meta-capi")({ server: { handlers: { POST: async ({ request }) => {
	const datasets = readDatasets();
	if (datasets.length === 0) return new Response(null, { status: 204 });
	let payload;
	try {
		payload = await request.json();
	} catch {
		return Response.json({ ok: false }, { status: 400 });
	}
	const eventName = typeof payload.eventName === "string" ? payload.eventName : "";
	const eventId = typeof payload.eventId === "string" ? payload.eventId : "";
	if (!ALLOWED_EVENTS.has(eventName) || !eventId) return Response.json({ ok: false }, { status: 400 });
	const cookies = request.headers.get("cookie");
	const ip = clientIp(request);
	const userAgent = request.headers.get("user-agent");
	const fbp = readCookie(cookies, "_fbp");
	const fbc = readCookie(cookies, "_fbc");
	if (!(ip && userAgent || fbp || fbc)) {
		console.warn(`Meta CAPI: ${eventName} sem identificadores suficientes, ignorado`);
		return new Response(null, { status: 204 });
	}
	const userData = {};
	if (ip) userData["client_ip_address"] = ip;
	if (userAgent) userData["client_user_agent"] = userAgent;
	if (fbp) userData["fbp"] = fbp;
	if (fbc) userData["fbc"] = fbc;
	const event = {
		event_name: eventName,
		event_time: Math.floor(Date.now() / 1e3),
		event_id: eventId,
		action_source: "website",
		user_data: userData
	};
	if (typeof payload.eventSourceUrl === "string") event["event_source_url"] = payload.eventSourceUrl;
	const sent = (await Promise.all(datasets.map((d) => send(d, event)))).filter(Boolean).length;
	return Response.json({
		ok: sent > 0,
		sent
	}, { status: sent > 0 ? 200 : 502 });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	ApiMetaCapiRoute: Route.update({
		id: "/api/meta-capi",
		path: "/api/meta-capi",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
