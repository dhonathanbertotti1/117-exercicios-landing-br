import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Gift, Star, ShieldCheck, Zap, Clock, Layers, Ban } from "lucide-react";
import { SalesNotification } from "@/components/SalesNotification";

import { Faq } from "@/components/Faq";
import { HeroBook } from "@/components/HeroBook";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { StickyCta } from "@/components/StickyCta";
import { Testimonials } from "@/components/Testimonials";
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
          "Recupere a mobilidade do seu corpo em poucas semanas. Guia em PDF com 117 exercícios, séries, repetições e intervalos prontos para usar. Acesso imediato.",
      },
      { property: "og:title", content: "117 Exercícios de Mobilidade e Estabilidade" },
      {
        property: "og:description",
        content:
          "Recupere a mobilidade do seu corpo em poucas semanas. 117 exercícios prontos para usar, sem equipamento e sem academia.",
      },
    ],
  }),
  component: Index,
});

const heroBullets = [
  "117 exercícios prontos para usar para variar os seus treinos sem repetir o mesmo movimento durante meses",
  "Organizado por categoria — você sabe exatamente o que treinar hoje",
  "3 fases de evolução: da mobilidade básica ao desempenho",
  "Séries, repetições e descanso já calculados — excelente para iniciantes",
];

/** Numeros que sustentam a promessa. Todos saem do proprio material. */
const stats = [
  { icon: Layers, value: "117", label: "exercícios únicos, sem repetição" },
  { icon: Zap, value: "3", label: "fases, da base ao desempenho" },
  { icon: Clock, value: "15–30", label: "minutos por treino" },
  { icon: Ban, value: "0", label: "equipamentos necessários" },
];

const categorias = [
  {
    numeral: "01",
    title: "Mobilidade Articular",
    text: "Pare de sentir as articulações travadas. Devolva amplitude de movimento ao ombro, quadril e coluna com controle — para se mover sem dores no dia a dia e no treino.",
  },
  {
    numeral: "02",
    title: "Estabilidade e Controle",
    text: "Mobilidade sem estabilidade dá lesão. Desenvolva o controle motor que sustenta cada movimento, melhorando o equilíbrio e a postura.",
  },
  {
    numeral: "03",
    title: "Mobilidade e Desempenho",
    text: "A fase final: junte mobilidade e força para treinar mais pesado, com mais amplitude e menos risco de lesão.",
  },
];

const bonus = [
  {
    tag: "Bônus #1",
    img: bonusLowCarb,
    title: "Plano de Emagrecimento e Definição",
    text: "Um plano completo para acelerar a queima de gordura e definir o corpo, com orientações práticas de treino e alimentação.",
    originalPrice: "R$ 25,00",
  },
  {
    tag: "Bônus #2",
    img: bonusAnabolica,
    title: "Guia de Treino para CORE",
    text: "Fortaleça o centro do seu corpo com treinos focados no CORE, melhorando a postura, o equilíbrio e o desempenho nos exercícios.",
    originalPrice: "R$ 35,00",
  },
  {
    tag: "Bônus #3",
    img: bonusSaudavel,
    title: "40 Planos de Treino Pesado",
    text: "40 planos de treino pesado prontos para usar para variar os seus treinos e continuar evoluindo em força e hipertrofia.",
    originalPrice: "R$ 45,00",
  },
];

/* O Premium vem primeiro: e a oferta que queremos que seja lida como padrao.
 * Quem chega ao bloco de precos ve primeiro o pacote completo e so depois a
 * versao reduzida, em vez de ancorar no mais barato. */
const plans = [
  {
    key: "premium" as const,
    name: "Plano Premium",
    price: "R$ 27,90",
    original: "R$ 97,00",
    saving: "Economize R$ 69,10",
    href: "https://payment.ticto.app/OF82F3D36",
    cta: "Quero o premium",
    featured: true,
    note: "Inclui os 3 bônus — R$ 105,00 em extras.",
  },
  {
    key: "basic" as const,
    name: "Plano Básico",
    price: "R$ 19,10",
    original: "R$ 47,00",
    saving: "Economize R$ 27,90",
    href: "https://payment.ticto.app/O3BB8B683",
    cta: "Quero o básico",
    featured: false,
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

const trustChips = ["Garantia de 7 dias", "Acesso imediato", "Pagamento único", "Abre no celular"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary">
      {children}
    </span>
  );
}

function CtaButton({
  children,
  href = "#planos",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`cta-shine group inline-flex items-center justify-center rounded-full bg-primary px-9 py-5 text-sm font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60 transition-transform duration-300 hover:scale-[1.03] active:scale-100 sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

/** Linha de garantias curtas. Fecha cada bloco de CTA sem repetir o selo todo. */
function TrustRow() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
      {trustChips.map((chip) => (
        <li key={chip} className="inline-flex items-center gap-1.5">
          <Check className="size-3.5 shrink-0 text-primary" />
          {chip}
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-6 text-3xl font-extrabold leading-[1.08] text-foreground md:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

function Index() {
  return (
    <main className="grain font-sans">
      <SalesNotification />
      <StickyCta />

      {/* HERO — duas colunas no desktop: o texto conduz, o livro ancora. */}
      <section className="section-glow overflow-hidden px-6 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <Eyebrow>
              <span className="inline-block size-1.5 rounded-full bg-primary" />
              Oferta especial · 92% de desconto
            </Eyebrow>

            <h1 className="font-display mt-7 text-[2.5rem] font-extrabold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Recupere a mobilidade do seu corpo em poucas semanas
              <span className="mt-3 block text-primary">sem equipamento, sem academia</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 md:text-lg">
              Um guia em PDF com{" "}
              <strong className="font-bold text-foreground">117 exercícios</strong>, séries,
              repetições e intervalos já definidos. É só abrir e seguir. Acesso imediato após a
              compra.
            </p>

            <ul className="mx-auto mt-8 max-w-xl space-y-3.5 text-left lg:mx-0">
              {heroBullets.map((b, i) => (
                <Reveal key={b} delay={i * 90}>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/25">
                      <Check className="size-3.5 text-primary" />
                    </span>
                    <span>{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-5 lg:items-start">
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-center">
                <CtaButton>Quero acessar o material</CtaButton>
                <p className="text-sm text-muted-foreground">
                  a partir de{" "}
                  <strong className="font-display text-lg font-extrabold text-foreground">
                    R$ 19,10
                  </strong>
                </p>
              </div>
              <div className="lg:[&>ul]:justify-start">
                <TrustRow />
              </div>
            </div>
          </div>

          <div className="lg:pl-4">
            <HeroBook />
          </div>
        </div>
      </section>

      {/* NUMEROS — credibilidade escaneável entre o hero e o argumento. */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <hr className="rule-fade" />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-9 py-10 md:grid-cols-4 md:py-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <s.icon className="size-5 text-primary/70" />
                  <dt className="font-display text-3xl font-extrabold leading-none text-foreground md:text-4xl">
                    {s.value === "117" ? <CountUp to={117} /> : s.value}
                  </dt>
                  <dd className="max-w-[9rem] text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <hr className="rule-fade" />
        </div>
      </section>

      {/* METODO — as 3 fases, com o numeral vazado a marcar a progressao. */}
      <section
        className="section-glow px-6 py-20 md:py-28"
        style={{ "--glow-top": "-6%", "--glow-size": "720px" } as React.CSSProperties}
      >
        <SectionHeading
          eyebrow="O método"
          title={
            <>
              Três fases, do travado ao <span className="text-primary">desempenho</span>
            </>
          }
          lead="Exercícios independentes, sem repetição, organizados por categoria — com séries, repetições e descanso reunidos num material visual. Você abre e sabe o que treinar hoje."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal key={c.title} delay={i * 120} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-elev-1 p-8 transition-colors duration-300 hover:border-primary/35">
                {/* Numeral vazado dentro da caixa: encostado ao canto mas sem
                    sair dela, senao o overflow-hidden do cartao corta-o. */}
                <span className="ghost-numeral pointer-events-none absolute right-5 top-4 text-[4.5rem] transition-transform duration-500 group-hover:-translate-y-1">
                  {c.numeral}
                </span>
                <p className="eyebrow relative text-[10px] font-bold text-primary">
                  Fase {c.numeral}
                </p>
                <h3 className="font-display relative mt-4 max-w-[11rem] text-xl font-extrabold leading-snug text-foreground">
                  {c.title}
                </h3>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5">
          <CtaButton>Quero acessar o material</CtaButton>
          <TrustRow />
        </div>
      </section>

      {/* BONUS */}
      <section className="px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow={
            <>
              <Gift className="size-3.5" /> Bônus exclusivos
            </>
          }
          title={
            <>
              +3 bônus para quem adquirir <span className="text-primary">hoje</span>
            </>
          }
          lead="Além do material principal, você recebe acesso imediato a estes bônus — inclusos no Plano Premium."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {bonus.map((b, i) => (
            <Reveal key={b.title} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-elev-1 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  {/* Scrim: liga a fotografia ao cartao escuro em vez de a cortar a seco. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-elev-1 via-elev-1/25 to-transparent" />
                  <span className="eyebrow absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold text-primary-foreground">
                    {b.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                  <h3 className="font-display text-lg font-extrabold leading-snug text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-muted-foreground">
                    Valor: <span className="line-through">{b.originalPrice}</span>{" "}
                    <span className="text-primary">grátis</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-6 py-5 text-center">
          <Gift className="size-5 shrink-0 text-primary" />
          <p className="font-display text-base font-extrabold text-foreground md:text-lg">
            R$ 105,00 em bônus — inclusos no Plano Premium.
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* PLANOS — o Premium primeiro, e visualmente dominante. */}
      <section
        id="planos"
        className="section-glow scroll-mt-8 px-6 py-20 md:py-28"
        style={{ "--glow-top": "-4%", "--glow-size": "800px" } as React.CSSProperties}
      >
        <SectionHeading
          eyebrow="Escolha o seu plano"
          title={
            <>
              Dois caminhos. <span className="text-primary">A maioria escolhe o Premium.</span>
            </>
          }
          lead="Pagamento único, acesso imediato após a confirmação e garantia de 7 dias nos dois planos."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2 md:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.key} delay={i * 120} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 text-left sm:p-8 ${
                  plan.featured
                    ? "plan-featured md:-mt-3 md:pb-10"
                    : "border border-hairline bg-elev-1/60"
                }`}
              >
                {plan.featured && (
                  <span className="eyebrow absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold text-primary-foreground shadow-lg shadow-primary/30">
                    <Star className="size-3 fill-gold text-gold" /> Mais vendido
                  </span>
                )}

                <p className="eyebrow text-[11px] font-bold text-primary">{plan.name}</p>

                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span
                    className={`font-display font-extrabold leading-none text-foreground ${
                      plan.featured ? "text-[3.4rem]" : "text-5xl"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground line-through">
                    {plan.original}
                  </span>
                </div>

                <p className="mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-bold text-primary">
                  {plan.saving}
                </p>

                <ul className="mt-7 space-y-3.5 border-t border-hairline pt-7">
                  {comparisonFeatures.map((f) => {
                    const incluido = plan.key === "premium" ? f.premium : f.basic;
                    return (
                      <li key={f.label} className="flex items-start gap-3 text-sm leading-snug">
                        {incluido ? (
                          <Check className="mt-0.5 size-[18px] shrink-0 text-primary" />
                        ) : (
                          <X className="mt-0.5 size-[18px] shrink-0 text-muted-foreground/35" />
                        )}
                        <span
                          className={
                            incluido
                              ? "text-foreground/90"
                              : "text-muted-foreground/45 line-through"
                          }
                        >
                          {f.label}
                        </span>
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
                    className={`block w-full rounded-full px-5 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] transition-transform duration-300 hover:scale-[1.03] sm:text-base ${
                      plan.featured
                        ? "cta-shine bg-primary text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60"
                        : "border border-hairline bg-elev-2 text-foreground hover:border-primary/40"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-base text-muted-foreground">
          A diferença entre os dois é de <strong className="font-bold text-primary">R$ 8,80</strong>{" "}
          — e o Premium leva os 3 bônus completos, R$ 105,00 em material extra.
        </p>
      </section>

      {/* GARANTIA */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/12 to-transparent px-8 py-10 text-center md:flex-row md:text-left">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
              <ShieldCheck className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-extrabold text-foreground">
                Garantia incondicional de 7 dias
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Não gostou? Peça o reembolso dentro do prazo e devolvemos 100% do valor, sem
                perguntas. O risco é todo nosso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <Faq />

      <footer className="border-t border-hairline px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="font-display text-sm font-extrabold tracking-tight text-foreground">
            117 Exercícios de Mobilidade e Estabilidade
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            Este material é informativo e não substitui acompanhamento profissional. Em caso de
            lesão ou condição de saúde, consulte um profissional antes de começar.
          </p>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
