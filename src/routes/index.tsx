import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Lock, Gift, Star, ShieldCheck, Zap, Clock, Layers, Ban } from "lucide-react";
import { SalesNotification } from "@/components/SalesNotification";
import {
  PRICES,
  BONUS_PRICES,
  BONUS_TOTAL,
  HEADLINE_DISCOUNT,
  formatBRL,
  savings,
} from "@/lib/pricing";

import { Faq } from "@/components/Faq";
import { HeroBook } from "@/components/HeroBook";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { StickyCta } from "@/components/StickyCta";
import { Testimonials } from "@/components/Testimonials";
import { UpsellDialog } from "@/components/UpsellDialog";
import { GuaranteeSeal } from "@/components/GuaranteeSeal";
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
  "117 exercícios, sem repetir movimento",
  "Séries, repetições e descanso já definidos",
  "Ideal para iniciantes",
];

/** Numeros que sustentam a promessa. Todos saem do proprio material. */
const stats = [
  // countTo: anima de 0 ate ao numero. Fica de fora onde nao faz sentido —
  // o intervalo "15-30" nao e um numero, e o 0 dos equipamentos e o argumento
  // (nao se precisa de nada), nao um contador por comecar.
  { icon: Layers, value: "117", countTo: 117, label: "exercícios únicos, sem repetição" },
  { icon: Zap, value: "3", countTo: 3, label: "fases, da base ao desempenho" },
  { icon: Clock, value: "15–30", label: "minutos por treino" },
  { icon: Ban, value: "0", label: "equipamentos necessários" },
] as const;

const categorias = [
  {
    numeral: "01",
    title: "Mobilidade Articular",
    text: "Destrave ombro, quadril e coluna e volte a se mover sem dor.",
  },
  {
    numeral: "02",
    title: "Estabilidade e Controle",
    text: "Ganhe controle, equilíbrio e postura para não se lesionar.",
  },
  {
    numeral: "03",
    title: "Mobilidade e Desempenho",
    text: "Junte mobilidade e força para treinar mais pesado, com segurança.",
  },
];

const bonus = [
  {
    tag: "Bônus #1",
    img: bonusLowCarb,
    title: "Plano de Emagrecimento e Definição",
    text: "Treino e alimentação para queimar gordura e definir.",
    price: BONUS_PRICES.emagrecimento,
  },
  {
    tag: "Bônus #2",
    img: bonusAnabolica,
    title: "Guia de Treino para CORE",
    text: "Abdômen e lombar fortes para mais postura e equilíbrio.",
    price: BONUS_PRICES.core,
  },
  {
    tag: "Bônus #3",
    img: bonusSaudavel,
    title: "40 Planos de Treino Pesado",
    text: "Treinos prontos para seguir evoluindo em força e hipertrofia.",
    price: BONUS_PRICES.treinoPesado,
  },
];

/** O que vai dentro do pacote, na ordem em que aparece no cartao. */
const included = [
  "117 Exercícios de Mobilidade e Estabilidade",
  "Plano de Emagrecimento e Definição",
  "Guia de Treino para CORE",
  "40 Planos de Treino Pesado",
  "Acesso imediato",
  "Garantia de 7 dias",
];

/** A oferta principal: material completo mais os 3 bonus. */
const offer = {
  name: "Acesso Completo",
  price: formatBRL(PRICES.offer),
  original: formatBRL(PRICES.offerAnchor),
  saving: `Economize ${formatBRL(savings(PRICES.offer, PRICES.offerAnchor))}`,
  href: "https://payment.ticto.app/OF82F3D36",
  cta: "Quero acessar agora",
  note: `Inclui os 3 bônus — ${formatBRL(BONUS_TOTAL)} em extras.`,
  included,
};

/**
 * Checkout da oferta de entrada (o cronograma, R$ 9,90).
 *
 * Enquanto estiver vazio, a oferta de entrada NAO aparece na pagina: um botao
 * de compra a apontar para lado nenhum perde a venda e ainda queima a
 * confianca de quem clicou. Preencher com o link do Ticto para a publicar.
 */
const SCHEDULE_CHECKOUT_URL = "https://payment.ticto.app/O786A2996";

/**
 * Checkout do upsell, usado SO pelo botao do pop-up.
 *
 * E uma oferta a parte, que da acesso ao cronograma E aos 117 exercicios — e
 * por isso nao e a mesma do cartao principal. Quem entra por aqui veio pelo
 * caminho do cronograma e esta a acrescentar os exercicios por cima; quem
 * clica no cartao de cima compra so o pacote completo, noutra oferta.
 * Trocar um pelo outro vende a coisa errada, por isso sao duas constantes.
 */
const UPGRADE_CHECKOUT_URL = "https://payment.ticto.app/OBD8E7BDD";

/**
 * A oferta de entrada.
 *
 * So o cronograma: os 117 exercicios e os 3 bonus ficam de fora, riscados, a
 * mostrar o que nao vem. E o que sustenta o upsell no pop-up.
 */
const scheduleOffer = {
  name: "Cronograma Semanal de Mobilidade",
  price: formatBRL(PRICES.schedule),
  cta: "Quero o cronograma",
  href: SCHEDULE_CHECKOUT_URL,
  /* A descricao posiciona o cronograma como o mapa da semana: util por si so,
     mas que so fica cheio com os exercicios. E o que prepara o upsell do
     pop-up sem prometer nada que o material nao tenha. */
  description: "O que treinar em cada dia da semana, já organizado. Não inclui os 117 exercícios.",
  items: [
    { label: "Cronograma Semanal de Mobilidade", included: true },
    { label: "Acesso imediato", included: true },
    { label: "Garantia de 7 dias", included: true },
    { label: "117 Exercícios de Mobilidade e Estabilidade", included: false },
    { label: "Plano de Emagrecimento e Definição", included: false },
    { label: "Guia de Treino para CORE", included: false },
    { label: "40 Planos de Treino Pesado", included: false },
  ],
};

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
  const [upsellOpen, setUpsellOpen] = useState(false);

  return (
    <main className="grain font-sans">
      <SalesNotification />
      <StickyCta />

      {/* HERO — duas colunas no desktop: o texto conduz, o livro ancora. */}
      <section className="section-glow overflow-hidden px-6 pb-12 pt-8 md:pb-20 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <Eyebrow>
              <span className="inline-block size-1.5 rounded-full bg-primary" />
              Oferta especial · {HEADLINE_DISCOUNT}% de desconto
            </Eyebrow>

            <h1 className="font-display mt-5 text-[1.6rem] font-extrabold leading-[1.1] text-foreground sm:text-[2rem] lg:text-[2.5rem]">
              Recupere a mobilidade do seu corpo em poucas semanas
              <span className="mt-1.5 block text-[0.85em] text-primary">
                sem equipamento, sem academia
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 md:text-lg">
              Guia em PDF com <strong className="font-bold text-foreground">117 exercícios</strong>{" "}
              prontos. É só abrir e seguir.
            </p>

            <ul className="mx-auto mt-6 w-fit max-w-xl space-y-2.5 text-left lg:mx-0">
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

            {/* Sem preco no hero: o valor so aparece na secao de oferta. */}
            <div className="mt-7 flex flex-col items-center gap-4 lg:items-start">
              <CtaButton>Quero acessar o material</CtaButton>
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
                    {"countTo" in s && s.countTo ? <CountUp to={s.countTo} /> : s.value}
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
          lead="Você abre e sabe exatamente o que treinar hoje."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal key={c.title} delay={i * 120} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-elev-1 p-6 transition-colors duration-300 hover:border-primary/35">
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
          lead="Todos inclusos, sem custo extra."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {bonus.map((b, i) => (
            <Reveal key={b.title} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-elev-1 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.title}
                    width={760}
                    height={570}
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
                    Valor: <span className="line-through">{formatBRL(b.price)}</span>{" "}
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
            {formatBRL(BONUS_TOTAL)} em bônus — inclusos no preço.
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* OFERTA — uma so, centrada. Nao ha comparacao a fazer. */}
      <section
        id="planos"
        className="section-glow scroll-mt-8 px-6 py-20 md:py-28"
        style={{ "--glow-top": "-4%", "--glow-size": "800px" } as React.CSSProperties}
      >
        <SectionHeading
          eyebrow="A oferta"
          title={
            <>
              Tudo incluído, <span className="text-primary">num pagamento único</span>
            </>
          }
          lead="O material completo mais os 3 bônus. Acesso imediato após a confirmação e garantia de 7 dias."
        />

        <div className="mx-auto mt-16 max-w-md">
          <Reveal>
            <div className="plan-featured relative flex flex-col rounded-3xl p-7 text-left sm:p-9">
              <span className="eyebrow absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold text-primary-foreground shadow-lg shadow-primary/30">
                <Star className="size-3 fill-gold text-gold" /> Tudo incluído
              </span>

              <p className="eyebrow text-[11px] font-bold text-primary">{offer.name}</p>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-[3.4rem] font-extrabold leading-none text-foreground">
                  {offer.price}
                </span>
                <span className="text-sm font-bold text-muted-foreground line-through">
                  {offer.original}
                </span>
              </div>

              <p className="mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-bold text-primary">
                {offer.saving}
              </p>

              <ul className="mt-7 space-y-3.5 border-t border-hairline pt-7">
                {offer.included.map((label) => (
                  <li key={label} className="flex items-start gap-3 text-sm leading-snug">
                    <Check className="mt-0.5 size-[18px] shrink-0 text-primary" />
                    <span className="text-foreground/90">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <p className="mb-4 text-center text-xs font-bold text-primary">{offer.note}</p>
                <a
                  href={offer.href}
                  className="cta-shine block w-full rounded-full bg-primary px-5 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60 transition-transform duration-300 hover:scale-[1.03] sm:text-base"
                >
                  {offer.cta}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-base text-muted-foreground">
          São {formatBRL(BONUS_TOTAL)} só em bônus, inclusos no preço — e o material principal por{" "}
          <strong className="font-bold text-primary">{formatBRL(PRICES.offer)}</strong>, uma vez só,
          com acesso vitalício.
        </p>

        {/* OFERTA DE ENTRADA — so aparece quando houver checkout configurado. */}
        {SCHEDULE_CHECKOUT_URL && (
          <div className="mx-auto mt-14 max-w-md">
            <Reveal>
              <div className="rounded-3xl border border-hairline bg-elev-1/60 p-7 text-left sm:p-8">
                <p className="eyebrow text-[11px] font-bold text-muted-foreground">
                  {scheduleOffer.name}
                </p>

                <div className="mt-4 flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-4xl font-extrabold leading-none text-foreground">
                    {scheduleOffer.price}
                  </span>
                  <span className="text-sm text-muted-foreground">pagamento único</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {scheduleOffer.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                  {scheduleOffer.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm leading-snug">
                      {item.included ? (
                        <Check className="mt-0.5 size-[18px] shrink-0 text-primary" />
                      ) : (
                        <Lock
                          className="mt-0.5 size-[18px] shrink-0 text-muted-foreground/40"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={
                          item.included
                            ? "text-foreground/90"
                            : "text-muted-foreground/45 line-through"
                        }
                      >
                        {item.label}
                      </span>
                      {!item.included && <span className="sr-only">(não incluído)</span>}
                    </li>
                  ))}
                </ul>

                {/* Abre o pop-up em vez de ir direto ao checkout: e o ultimo
                    ponto em que da para oferecer o pacote completo. */}
                <button
                  type="button"
                  onClick={() => setUpsellOpen(true)}
                  className="mt-8 block w-full rounded-full border border-hairline bg-elev-2 px-5 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-foreground transition-colors duration-300 hover:border-primary/40"
                >
                  {scheduleOffer.cta}
                </button>
              </div>
            </Reveal>
          </div>
        )}
      </section>

      <UpsellDialog
        open={upsellOpen}
        onOpenChange={setUpsellOpen}
        fullHref={UPGRADE_CHECKOUT_URL}
        scheduleHref={SCHEDULE_CHECKOUT_URL}
      />

      {/* GARANTIA — selo grande, centrado, com os tres pontos que tiram o risco. */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/10 via-elev-1 to-elev-1 px-6 py-12 text-center md:flex md:items-center md:gap-12 md:px-12 md:text-left">
            <GuaranteeSeal className="mx-auto w-44 shrink-0 drop-shadow-[0_18px_40px_rgba(227,179,76,0.25)] md:mx-0 md:w-52" />
            <div className="mt-8 md:mt-0">
              <p className="eyebrow text-[11px] font-bold text-gold">Risco zero</p>
              <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight text-foreground md:text-3xl">
                Garantia incondicional de 7 dias
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Teste o material por 7 dias. Se não gostar, por qualquer motivo, devolvemos 100% do
                seu dinheiro.
              </p>
              <ul className="mx-auto mt-6 w-fit space-y-2.5 text-left md:mx-0">
                {[
                  "Reembolso de 100% do valor",
                  "Sem perguntas e sem burocracia",
                  "Basta pedir dentro dos 7 dias",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <ShieldCheck className="size-[18px] shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
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
