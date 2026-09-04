# 117 Exercícios de Mobilidade e Estabilidade — Landing Page

Página de vendas do e-book **117 Exercícios de Mobilidade e Estabilidade**, com secções de benefícios, categorias de treino, bónus, comparação de planos, testemunhos, FAQ e notificações de venda em tempo real.

Site estático com renderização no servidor (SSR). Não tem base de dados, backend próprio nem área de membros — o pagamento é feito num checkout externo.

## Stack

- [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router)
- React 19 + TypeScript
- Tailwind CSS 4 + componentes [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- Vite 8 + Nitro

## Como correr localmente

Requisitos: Node.js 20+ e npm.

```sh
git clone https://github.com/dhonathanbertotti1/mobilidade-estabilidade-landing.git
cd mobilidade-estabilidade-landing
npm install
npm run dev
```

O site fica em `http://localhost:5173`. Não são necessárias variáveis de ambiente.

## Scripts

| Comando           | O que faz                                  |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento com hot reload |
| `npm run build`   | Build de produção                          |
| `npm run preview` | Pré-visualiza o build de produção          |
| `npm run lint`    | ESLint                                     |
| `npm run format`  | Formata o código com Prettier              |

## Estrutura

```
src/
  routes/
    __root.tsx   Shell HTML, scripts de tracking, páginas 404 e de erro
    index.tsx    A landing page inteira
  components/    Faq, Testimonials, SalesNotification
  components/ui/ Componentes base shadcn/ui
  assets/        Imagens (capa do e-book, bónus, avatares)
  lib/           Utilitários e tratamento de erros de SSR
  styles.css     Tema Tailwind e variáveis de cor
```

## Onde mexer no conteúdo

| O quê                                        | Onde                                                              |
| -------------------------------------------- | ----------------------------------------------------------------- |
| Textos, preços, bónus, tabela comparativa    | `src/routes/index.tsx`                                            |
| Links do checkout                            | `src/routes/index.tsx` (procure por `checkout.facilerapido.site`) |
| Perguntas frequentes                         | `src/components/Faq.tsx`                                          |
| Testemunhos                                  | `src/components/Testimonials.tsx`                                 |
| Notificações de venda                        | `src/components/SalesNotification.tsx`                            |
| Cores e tipografia                           | `src/styles.css`                                                  |
| Título e descrição para Google/redes sociais | `src/routes/index.tsx`, bloco `head`                              |

## Tracking

Os scripts de análise estão em `src/routes/__root.tsx`, no topo do `RootShell`:

- **UTMify** — pixel de conversão e propagação de parâmetros UTM para o checkout. O ID está na constante `UTMIFY_PIXEL_ID`.
- **Microsoft Clarity** — mapas de calor e gravação de sessões. O ID está na constante `CLARITY_PROJECT_ID`.

## Deploy

`npm run build` gera uma aplicação SSR via Nitro, em `.output/`. Funciona em Vercel, Netlify, Cloudflare ou qualquer host Node:

```sh
npm run build
node .output/server/index.mjs
```
