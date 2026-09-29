import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { MetaCapiPageView } from "@/components/MetaCapiPageView";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Tente atualizar ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "117 Exercícios" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#081221" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..900&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      // SVG primeiro: os browsers modernos preferem-no e fica nitido em qualquer ecra.
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/** ID do Meta Pixel. Dispara o PageView no browser. */
const META_PIXEL_ID = "2159523891309098";

/**
 * ID do pixel da UTMify.
 *
 * A UTMify entrega este snippet ofuscado (base64 + XOR) no painel dela. O que
 * esta aqui e o conteudo decifrado desse blob, na forma legivel: poe o global
 * `pixelId` e carrega o mesmo ficheiro do mesmo CDN. Efeito identico, com a
 * diferenca de se poder rever o que corre na pagina.
 */
const UTMIFY_PIXEL_ID = "6abbcf54d5477351bc811de4";

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />

        {/* Antes de o body pintar: marca que ha JS, para o CSS de revelacao
            so esconder conteudo quando ele pode mesmo voltar a aparecer. */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js");` }}
        />

        {/* UTMify — pixel de conversao. O global tem de existir antes de o
            script carregar, por isso sao duas tags e nesta ordem. */}
        <script dangerouslySetInnerHTML={{ __html: `window.pixelId = "${UTMIFY_PIXEL_ID}";` }} />
        <script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js" async defer />

        {/* UTMify — captura os parametros da campanha (utm_*, fbclid) e
            propaga-os para os links do checkout, para o Ticto saber de que
            anuncio veio a venda. Sem isto a venda chega sem atribuicao. */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />

        {/* Meta Pixel — conversoes do Facebook e Instagram Ads. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');window.__metaPageViewId=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Date.now())+Math.random();fbq('track','PageView',{},{eventID:window.__metaPageViewId});`,
          }}
        />
        {/* Fallback para quem bloqueia JS: o PageView vai na propria imagem. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" alt="" />`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MetaCapiPageView />
      {/* Obrigatório: as rotas filhas renderizam aqui. Remover <Outlet /> parte o site. */}
      <Outlet />
    </QueryClientProvider>
  );
}
