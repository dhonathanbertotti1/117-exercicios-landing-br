import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    // Redireciona a entrada de servidor do TanStack Start para src/server.ts,
    // que envolve o SSR com tratamento de erros.
    //
    // prerender: a landing e conteudo fixo — nao le base de dados nem
    // personaliza nada por visitante. Sem isto, cada visita acordava uma
    // funcao serverless para montar o mesmo HTML de sempre: lento no arranque
    // a frio e a gastar quota de execucao a troco de nada. Com o prerender, o
    // HTML e gerado no build e servido do CDN. A rota /api/meta-capi continua
    // a ser funcao, porque essa precisa mesmo de correr no servidor.
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, failOnError: true },
      pages: [{ path: "/", prerender: { enabled: true } }],
    }),
    nitro({
      routeRules: {
        // O HTML revalida a cada visita: assim um deploy novo chega na hora,
        // sem ninguem ficar preso numa versao antiga guardada no browser.
        //
        // Isto vale SO para o documento. Os ficheiros em /assets tem hash no
        // nome e continuam com cache de um ano (regra que o preset da Vercel
        // ja escreve): se fossem revalidados tambem, cada visita voltaria a
        // descarregar o JS, o CSS e as imagens todas — o contrario do que se
        // quer numa pagina que precisa de abrir depressa no 4G.
        "/": { headers: { "cache-control": "public, max-age=0, must-revalidate" } },
      },
    }),
    viteReact(),
  ],
});
