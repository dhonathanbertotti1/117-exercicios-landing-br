import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

type Testimonial = {
  name: string;
  role: string;
  city: string;
  img: string;
  stars: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mariana Lopes",
    role: "Professora",
    city: "Coimbra",
    img: avatar1,
    stars: 5,
    text: "Andava à procura de algo simples para melhorar a minha mobilidade e encontrei exatamente o que precisava. O material é muito visual e fácil de seguir, mesmo para quem nunca treinou isto antes.",
  },
  {
    name: "Carlos Mendes",
    role: "Motorista TVDE",
    city: "Lisboa",
    img: avatar2,
    stars: 5,
    text: "Passo o dia a conduzir e as minhas costas viviam bloqueadas. O que mais gostei foi a praticidade: abro o PDF no telemóvel e já sei a série, as repetições e o descanso. Sem complicações.",
  },
  {
    name: "Juliana Santos",
    role: "Estudante de enfermagem",
    city: "Braga",
    img: avatar3,
    stars: 5,
    text: "Tive uma experiência muito positiva. Os exercícios estão organizados por categoria, por isso escolho o que faz sentido para o meu dia. Notei diferença na postura logo nas primeiras semanas.",
  },
  {
    name: "Roberto Almeida",
    role: "Reformado",
    city: "Setúbal",
    img: avatar4,
    stars: 5,
    text: "Antes de conhecer o material, tinha dúvidas se conseguiria acompanhar na minha idade. Hoje vejo que foi uma ótima decisão. Os movimentos estão bem explicados e respeitam o meu ritmo.",
  },
  {
    name: "Helena Ribeiro",
    role: "Contabilista",
    city: "Porto",
    img: avatar5,
    stars: 4,
    text: "Gostei da forma clara como tudo é apresentado. Trabalho sentada o dia inteiro e os exercícios de mobilidade articular passaram a fazer parte da minha rotina. Recomendo sem receio.",
  },
  {
    name: "André Oliveira",
    role: "Personal trainer",
    city: "Faro",
    img: avatar6,
    stars: 5,
    text: "Uso o material como referência para montar as sessões de mobilidade dos meus alunos. Ter 117 exercícios únicos, sem repetição, poupa imenso tempo de planeamento. Valeu cada cêntimo.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação: ${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-gold text-gold" : "text-muted-foreground/40"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={t.img}
          alt={`Foto de ${t.name}`}
          width={512}
          height={512}
          loading="lazy"
          className="size-14 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
        />
        <div className="min-w-0">
          <p className="truncate font-extrabold text-card-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">
            {t.role} • {t.city}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Stars count={t.stars} />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{t.text}”
      </p>
    </article>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    const child = track.children[clamped] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(clamped);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.clientWidth;
    const index = Math.round(track.scrollLeft / (width * 0.85));
    setActive(Math.max(0, Math.min(index, testimonials.length - 1)));
  };

  return (
    <section className="bg-background px-6 py-20" aria-labelledby="depoimentos-titulo">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-primary-foreground">
            Depoimentos
          </span>
          <h2
            id="depoimentos-titulo"
            className="mt-6 text-3xl font-extrabold text-foreground md:text-4xl"
          >
            O que dizem os nossos clientes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Experiências reais de pessoas que escolheram a nossa solução.
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile: carrossel */}
        <div className="mt-10 md:hidden">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-[85%] shrink-0 snap-start">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo(active - 1)}
              aria-label="Depoimento anterior"
              className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Indicadores de depoimentos">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`size-2.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-primary" : "bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollTo(active + 1)}
              aria-label="Próximo depoimento"
              className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
