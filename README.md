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

## Identidade visual

O favicon é um arco aberto (mobilidade) à volta de um núcleo sólido (estabilidade), nas cores do site: navy `#081221` e teal `#00b19a`.

| Ficheiro                      | Uso                                                   |
| ----------------------------- | ----------------------------------------------------- |
| `public/favicon.svg`          | Browsers modernos — vetorial, nítido em qualquer ecrã |
| `public/favicon.ico`          | Fallback, com 16/32/48/64/128/256px                   |
| `public/apple-touch-icon.png` | Ecrã inicial do iOS (180px)                           |

Estão ligados em `src/routes/__root.tsx`, no bloco `links`. Para os regerar, edite o `favicon.svg` e exporte os restantes a partir dele.

## Mockup animado do hero

O livro no hero é a fotografia `src/assets/ebook-cover-3d.jpg` tratada como objeto 3D, em `src/components/HeroBook.tsx`:

- **levitação** contínua de 20px, com a sombra no chão a encolher e desvanecer à medida que o livro sobe;
- **inclinação** que segue o cursor (`rotateX`/`rotateY` via variáveis CSS, atualizadas em `requestAnimationFrame`);
- **aura** teal pulsante por trás, a ecoar os anéis de néon da capa;
- **selo dos 92%** à frente no eixo Z e fora de fase, para os planos não se moverem em bloco.

A fotografia tem o fundo quase preto: o `mix-blend-mode: screen` funde-o com o fundo da secção e as máscaras em gradiente esbatem as quatro arestas, para não se ver o retângulo do enquadramento. O ficheiro `ebook-cover.jpg` é o original sem recorte, mantido como fonte.

Quem tiver "reduzir movimento" ativo no sistema vê tudo estático, sem perder o aspeto final. Em ecrãs táteis não há inclinação.

## Tracking

Os scripts de análise estão em `src/routes/__root.tsx`, no topo do `RootShell`:

- **Meta Pixel** — conversões do Facebook e Instagram Ads. ID em `META_PIXEL_ID`. Dispara `PageView` no carregamento; inclui o `<noscript>` com o pixel em imagem.
- **Microsoft Clarity** — mapas de calor e gravação de sessões. ID em `CLARITY_PROJECT_ID`.

Os IDs estão em constantes no topo do ficheiro — é aí que se troca de conta, não no meio do script.

## Deploy

`npm run build` gera uma aplicação SSR via Nitro, em `.output/`. Funciona em Vercel, Netlify, Cloudflare ou qualquer host Node:

```sh
npm run build
node .output/server/index.mjs
```
