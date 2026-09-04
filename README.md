# 117 Exercícios de Mobilidade e Estabilidade — Landing Page

Página de vendas (landing page) do e-book **117 Exercícios de Mobilidade e Estabilidade**, com secções de benefícios, categorias de treino, bónus, comparação de planos, testemunhos, FAQ e notificações de venda em tempo real.

## Stack

- [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router)
- React 19 + TypeScript
- Tailwind CSS 4 + componentes [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- Vite 8
- Supabase (autenticação / dados)

## Como correr localmente

Requisitos: Node.js 20+ e npm.

```sh
git clone <url-do-repositorio>
cd "Mirror Site Builder"
npm install
cp .env.example .env   # e preencha os valores
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | ESLint |
| `npm run format` | Formata o código com Prettier |

## Variáveis de ambiente

Todas as variáveis estão documentadas em [`.env.example`](.env.example). O ficheiro `.env` real está no `.gitignore` e **não deve ser versionado**.

- Variáveis com prefixo `VITE_` são embutidas no bundle e ficam **visíveis no browser** — use apenas chaves públicas (`publishable`/`anon`).
- `SUPABASE_SERVICE_ROLE_KEY` é uma chave privada: só no servidor, nunca com prefixo `VITE_`.

## Estrutura

```
src/
  routes/        Rotas (index.tsx é a landing page)
  components/    Componentes da página (Faq, Testimonials, SalesNotification)
  components/ui/ Componentes base shadcn/ui
  assets/        Imagens (capa do e-book, bónus, avatares)
  integrations/  Clientes Supabase e Lovable
  lib/           Utilitários e ferramentas MCP
```

## Deploy

O build gera uma app SSR (Nitro), compatível com Vercel, Netlify, Cloudflare ou qualquer host Node. Lembre-se de configurar as variáveis de ambiente no painel do serviço escolhido.

---

Projeto criado com [Lovable](https://lovable.dev).
