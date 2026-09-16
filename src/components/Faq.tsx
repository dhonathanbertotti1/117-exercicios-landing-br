import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como recebo o material após a compra?",
    a: "Assim que o pagamento é confirmado, você recebe o acesso imediato por WhatsApp e e-mail, com o link para baixar o material em PDF.",
  },
  {
    q: "O pagamento é único ou mensal?",
    a: "É pagamento único. Você paga uma vez e fica com acesso vitalício ao material, sem mensalidades nem cobranças recorrentes.",
  },
  {
    q: "Preciso de equipamento para fazer os exercícios?",
    a: "Não. A grande maioria dos exercícios usa apenas o peso do corpo e pode ser feita em casa, sem equipamento especial.",
  },
  {
    q: "Serve para iniciantes?",
    a: "Sim. Os exercícios estão organizados por categoria e vêm com séries, repetições e intervalos indicados, o que facilita a execução mesmo para quem está começando.",
  },
  {
    q: "Serve para qualquer idade ou se eu já tiver alguma lesão?",
    a: "Os exercícios são de baixo impacto e podem ser adaptados. Se você tem uma lesão específica, recomendamos que consulte um profissional de saúde antes de começar.",
  },
  {
    q: "Quanto tempo por dia preciso dedicar?",
    a: "A maioria dos treinos leva entre 15 e 30 minutos, encaixando na rotina mesmo de quem tem pouco tempo livre.",
  },
  {
    q: "O que exatamente vem no pacote?",
    a: "Vem o material completo com os 117 exercícios mais os 3 bônus: Plano de Emagrecimento e Definição, Guia de Treino para CORE e 40 Planos de Treino Pesado. Não há versão reduzida nem upgrade a pagar depois — é tudo num pagamento só.",
  },
  {
    q: "E se eu não gostar do material?",
    a: "Você tem garantia incondicional de 7 dias. Se não ficar satisfeito, basta pedir o reembolso dentro desse prazo e devolvemos 100% do valor.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 md:py-28" aria-labelledby="faq-titulo">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary">
            Dúvidas
          </span>
          <h2
            id="faq-titulo"
            className="font-display mt-6 text-3xl font-extrabold leading-[1.08] text-foreground md:text-[2.75rem]"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>

        <div className="mt-14 divide-y divide-hairline border-y border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-resposta-${i}`}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-primary"
                >
                  <span className="text-sm font-bold text-foreground md:text-base">{f.q}</span>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-primary bg-primary text-primary-foreground"
                        : "border-hairline text-primary"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>
                <div
                  id={`faq-resposta-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
