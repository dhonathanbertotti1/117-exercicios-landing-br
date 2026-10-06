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
    nitro(),
    viteReact(),
  ],
});
