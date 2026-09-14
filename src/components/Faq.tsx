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
    q: "Qual é a diferença entre o Plano Básico e o Premium?",
    a: "O Plano Básico inclui o material com os 117 exercícios. O Plano Premium inclui tudo o que vem no Básico mais 3 bônus exclusivos: Plano de Emagrecimento e Definição, Guia de Treino para CORE e 40 Planos de Treino Pesado.",
  },
  {
    q: "E se eu não gostar do material?",
    a: "Você tem garantia incondicional de 7 dias. Se não ficar satisfeito, basta pedir o reembolso dentro desse prazo e devolvemos 100% do valor.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-light px-6 py-20 text-light-foreground" aria-labelledby="faq-titulo">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-primary-foreground">
            Dúvidas
          </span>
          <h2 id="faq-titulo" className="mt-6 text-3xl font-extrabold md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 opacity-70">Tudo o que você precisa saber antes de começar.</p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl bg-surface shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-resposta-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-extrabold">{f.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-resposta-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed opacity-75">{f.a}</p>
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
