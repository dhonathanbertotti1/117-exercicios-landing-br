import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Gift, Star, ShieldCheck } from "lucide-react";
import { SalesNotification } from "@/components/SalesNotification";

import { Faq } from "@/components/Faq";
import { HeroBook } from "@/components/HeroBook";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { StickyCta } from "@/components/StickyCta";
import bonusLowCarb from "@/assets/bonus-lowcarb.jpg";
import bonusAnabolica from "@/assets/bonus-anabolica.jpg";
import bonusSaudavel from "@/assets/bonus-saudavel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "117 Exercícios de Mobilidade e Estabilidade" },
      {
        name: "description",
        content:
          "Recupere a mobilidade do seu corpo em poucas semanas. Guia em PDF com 117 exercícios, séries, repetições e intervalos prontos a usar. Acesso imediato.",
      },
      { property: "og:title", content: "117 Exercícios de Mobilidade e Estabilidade" },
      {
        property: "og:description",
        content:
          "Recupere a mobilidade do seu corpo em poucas semanas. 117 exercícios prontos a usar, sem equipamento e sem ginásio.",
      },
    ],
  }),
  component: Index,
});

const heroBullets = [
  "117 exercícios prontos a usar para variar os seus treinos sem repetir o mesmo movimento durante meses",
  "Organizado por categoria — sabe exatamente o que treinar hoje",
  "3 fases de evolução: da mobilidade básica ao desempenho",
  "Séries, repetições e descanso já calculados — excelente para iniciantes",
];

const categorias = [
  {
    title: "Mobilidade Articular",
    text: "Deixe de sentir as articulações bloqueadas. Devolva amplitude de movimento ao ombro, anca e coluna com controlo — para se mover sem dores no dia a dia e no treino.",
  },
  {
    title: "Estabilidade e Controlo",
    text: "Mobilidade sem estabilidade dá lesão. Desenvolva o controlo motor que sustenta cada movimento, melhorando o equilíbrio e a postura.",
  },
  {
    title: "Mobilidade e Desempenho",
    text: "A fase final: junte mobilidade e força para treinar mais pesado, com mais amplitude e menos risco de lesão.",
  },
];

const bonus = [
  {
    tag: "Bónus #1",
    img: bonusLowCarb,
    title: "Plano de Emagrecimento e Definição",
    text: "Um plano completo para acelerar a queima de gordura e definir o corpo, com orientações práticas de treino e alimentação.",
    originalPrice: "25,00 €",
  },
  {
    tag: "Bónus #2",
    img: bonusAnabolica,
    title: "Guia de Treino para CORE",
    text: "Fortaleça o centro do seu corpo com treinos focados no CORE, melhorando a postura, o equilíbrio e o desempenho nos exercícios.",
    originalPrice: "35,00 €",
  },
  {
    tag: "Bónus #3",
    img: bonusSaudavel,
    title: "40 Planos de Treino Pesado",
    text: "40 planos de treino pesado prontos a usar para variar os seus treinos e continuar a evoluir em força e hipertrofia.",
    originalPrice: "45,00 €",
  },
];

const plans = [
  {
    key: "basic" as const,
    name: "Plano Básico",
    price: "19,90 €",
    original: "47,00 €",
    saving: "Poupa 27,10 €",
    href: "https://pay.kiwify.com/k7o3mFx",
    cta: "Quero o básico",
    featured: false,
  },
  {
    key: "premium" as const,
    name: "Plano Premium",
    price: "27,90 €",
    original: "97,00 €",
    saving: "Poupa 69,10 €",
    href: "https://pay.kiwify.com/2BXlGhV",
    cta: "Quero o premium",
    featured: true,
    note: "Inclui os 3 bónus — 105,00 € em extras.",
  },
];

const comparisonFeatures = [
  { label: "117 Exercícios de Mobilidade e Estabilidade", basic: true, premium: true },
  { label: "Acesso imediato", basic: true, premium: true },
  { label: "Garantia de 7 dias", basic: true, premium: true },
  { label: "Plano de Emagrecimento e Definição", basic: false, premium: true },
  { label: "Guia de Treino para CORE", basic: false, premium: true },
  { label: "40 Planos de Treino Pesado", basic: false, premium: true },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-primary-foreground">
      {children}
    </span>
  );
}

function CtaButton({ children, href = "#planos" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
    >
      {children}
    </a>
  );
}

function GuaranteeSeal() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-bold text-foreground">
      <span className="text-xl">🛡️</span>
      <span>
        Garantia incondicional de 7 dias. Não gostou? Devolvemos 100% do valor, sem perguntas.
      </span>
    </div>
  );
}

function Index() {
  return (
    <main className="font-sans">
      <SalesNotification />
      <StickyCta />
      {/* HERO */}
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Pill>Oferta especial - 92% de desconto</Pill>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            Recupere a mobilidade do seu corpo em poucas semanas — sem equipamento, sem ginásio
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-bold text-primary md:text-xl">
            Um guia em PDF com 117 exercícios, séries, repetições e intervalos já definidos. É só
            abrir e seguir. Acesso imediato após a compra.
          </p>

          <HeroBook />

          <ul className="mx-auto mt-10 max-w-2xl space-y-4 text-left">
            {heroBullets.map((b, i) => (
              <Reveal key={b} delay={i * 90}>
                <li className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4">
            <CtaButton>Quero aceder ao material</CtaButton>
            <GuaranteeSeal />
          </div>
        </div>
      </section>

      {/* O QUE VAI ENCONTRAR */}
      <section className="bg-light px-6 py-20 text-light-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <Pill>
            <CountUp to={117} /> exercícios de mobilidade e estabilidade
          </Pill>
          <h2 className="mt-8 text-3xl font-extrabold leading-tight md:text-5xl">
            Mais mobilidade e estabilidade para treinar sem depender de rotinas improvisadas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold text-primary">
            Consulte exercícios organizados por categoria, com séries, repetições e descanso
            reunidos num material visual.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-ink px-6 py-12 text-center text-foreground">
          <h3 className="text-2xl font-extrabold md:text-3xl">
            O que vai encontrar neste material
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Material disponibilizado em PDF com exercícios independentes, sem repetição, organizados
            por categoria.
          </p>
          <p className="mt-6 text-lg font-extrabold text-primary">
            Exercícios por categoria, com séries, repetições e descanso
          </p>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="bg-background px-6 pb-20 pt-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-light px-8 py-8 text-center text-light-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1.5">
                <h3 className="text-xl font-extrabold">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-80">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <CtaButton>Quero aceder ao material</CtaButton>
          <GuaranteeSeal />
        </div>
      </section>

      {/* BÓNUS */}
      <section className="bg-light px-6 py-20 text-light-foreground">
        <div className="mx-auto max-w-6xl text-center">
          <Pill>
            <Gift className="size-4" /> Bónus exclusivos
          </Pill>
          <h2 className="mt-6 text-3xl font-extrabold md:text-5xl">
            +3 Bónus Exclusivos Para Quem Adquirir Hoje
          </h2>
          <p className="mt-4 text-lg opacity-70">
            Além do material principal, recebe acesso imediato a estes bónus incríveis.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {bonus.map((b, i) => (
              <Reveal key={b.title} delay={i * 120} className="h-full">
                <article className="h-full overflow-hidden rounded-2xl bg-surface shadow-lg transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="relative">
                    <img
                      src={b.img}
                      alt={b.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-56 w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {b.tag}
                    </span>
                  </div>
                  <div className="px-6 py-8">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="text-xl font-extrabold">{b.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-through">
                      Valor: {b.originalPrice}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed opacity-75">{b.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-primary px-6 py-4 text-primary-foreground">
            <p className="text-lg font-extrabold">
              Total em bónus: 105,00 € — incluído gratuitamente no Plano Premium.
            </p>
          </div>
        </div>
      </section>

      {/* PLANOS - TABELA COMPARATIVA */}
      <section id="planos" className="bg-background px-6 py-24 text-foreground md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Pill>Escolha o seu plano</Pill>
          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">Escolha o seu plano</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-70">
            Acesso imediato após a confirmação do pagamento.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2 md:items-stretch">
            {plans.map((plan, i) => (
              <Reveal key={plan.key} delay={i * 120} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl bg-surface p-7 text-left text-light-foreground shadow-2xl sm:p-8 ${
                    plan.featured
                      ? "border-2 border-primary ring-4 ring-primary/20"
                      : "border border-border"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg">
                      <Star className="size-3 fill-gold text-gold" /> Mais vendido
                    </span>
                  )}

                  <p className="text-sm font-extrabold uppercase tracking-widest text-primary">
                    {plan.name}
                  </p>

                  <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-5xl font-extrabold leading-none">{plan.price}</span>
                    <span className="text-base font-bold opacity-45 line-through">
                      {plan.original}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-primary">{plan.saving}</p>

                  <ul className="mt-7 space-y-3.5 border-t border-border pt-7">
                    {comparisonFeatures.map((f) => {
                      const incluido = plan.key === "premium" ? f.premium : f.basic;
                      return (
                        <li key={f.label} className="flex items-start gap-3 text-sm leading-snug">
                          {incluido ? (
                            <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                          ) : (
                            <X className="mt-0.5 size-5 shrink-0 opacity-30" />
                          )}
                          <span className={incluido ? "font-medium" : "opacity-40"}>{f.label}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* mt-auto encosta o botao ao fundo, para os dois cartoes
                      terminarem alinhados mesmo com listas de alturas diferentes */}
                  <div className="mt-auto pt-8">
                    {plan.note && (
                      <p className="mb-4 text-center text-xs font-bold text-primary">{plan.note}</p>
                    )}
                    <a
                      href={plan.href}
                      className={`block w-full rounded-full px-5 py-4 text-center text-sm font-extrabold uppercase tracking-wide transition-transform hover:scale-[1.02] sm:text-base ${
                        plan.featured
                          ? "animate-pulse-glow bg-primary text-primary-foreground shadow-lg"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-xl font-bold text-primary">
            Por apenas mais 8,00 €, leva os 3 bónus completos. A maioria escolhe o Premium.
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-background px-6 pb-24 pt-8 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-primary/40 bg-primary/10 px-8 py-10 text-center shadow-xl md:flex-row md:text-left">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/20 text-4xl">
              🛡️
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-foreground md:text-3xl">
                Garantia incondicional de 7 dias
              </h3>
              <p className="mt-2 text-lg font-bold text-foreground/80">
                Não gostou? Devolvemos 100% do valor, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <Faq />

      <footer className="bg-ink px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 117 Exercícios de Mobilidade e Estabilidade. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
