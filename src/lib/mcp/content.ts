// Public marketing content exposed by the MCP tools. Mirrors the landing page.

export const product = {
  name: "117 Exercícios de Mobilidade e Estabilidade",
  headline:
    "Recupere a mobilidade do seu corpo em poucas semanas — sem equipamento, sem ginásio",
  subheadline:
    "Um guia em PDF com 117 exercícios, séries, repetições e intervalos já definidos. É só abrir e seguir. Acesso imediato após a compra.",
  summary:
    "Material visual em PDF com 117 exercícios únicos de mobilidade e estabilidade, organizados por categoria, com séries, repetições e intervalos de descanso. Acesso imediato após a compra.",
  highlights: [
    "117 exercícios prontos a usar para variar os seus treinos sem repetir o mesmo movimento durante meses",
    "Organizado por categoria — sabe exatamente o que treinar hoje",
    "3 fases de evolução: da mobilidade básica ao desempenho",
    "Séries, repetições e descanso já calculados — excelente para iniciantes",
  ],
  categories: [
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
  ],
  bonuses: [
    {
      tag: "Bónus #1",
      title: "Plano de Emagrecimento e Definição",
      text: "Um plano completo para acelerar a queima de gordura e definir o corpo, com orientações práticas de treino e alimentação.",
      originalPrice: "25,00 €",
    },
    {
      tag: "Bónus #2",
      title: "Guia de Treino para CORE",
      text: "Fortaleça o centro do seu corpo com treinos focados no CORE, melhorando a postura, o equilíbrio e o desempenho nos exercícios.",
      originalPrice: "35,00 €",
    },
    {
      tag: "Bónus #3",
      title: "40 Planos de Treino Pesado",
      text: "40 planos de treino pesado prontos a usar para variar os seus treinos e continuar a evoluir em força e hipertrofia.",
      originalPrice: "45,00 €",
    },
  ],
  bonusTotal: "105,00 €",
  guarantee: "Garantia incondicional de 7 dias com reembolso de 100% do valor.",
} as const;

export const plans = [
  {
    id: "premium",
    name: "Plano Premium",
    price: "27,90 €",
    priceCents: 2790,
    badge: "Mais vendido",
    includes: [
      "117 Exercícios de Mobilidade e Estabilidade",
      "Plano de Emagrecimento e Definição",
      "Guia de Treino para CORE",
      "40 Planos de Treino Pesado",
    ],
    checkoutUrl: "https://checkout.facilerapido.site/VCCL1O8SD7EU",
  },
  {
    id: "basico",
    name: "Plano Básico",
    price: "19,90 €",
    priceCents: 1990,
    badge: null,
    includes: ["117 Exercícios de Mobilidade e Estabilidade", "Sem bónus"],
    checkoutUrl: "https://checkout.facilerapido.site/VCCL1O8SD7IC",
  },
] as const;

export const faqs = [
  {
    q: "Como recebo o material após a compra?",
    a: "Assim que o pagamento é confirmado, recebe o acesso imediato por WhatsApp e e-mail, com a ligação para descarregar o material em PDF.",
  },
  {
    q: "O pagamento é único ou mensal?",
    a: "É pagamento único. Paga uma vez e fica com acesso vitalício ao material, sem mensalidades nem cobranças recorrentes.",
  },
  {
    q: "Preciso de equipamento para fazer os exercícios?",
    a: "Não. A grande maioria dos exercícios usa apenas o peso do corpo e pode ser feita em casa, sem equipamento especial.",
  },
  {
    q: "Serve para principiantes?",
    a: "Sim. Os exercícios estão organizados por categoria e vêm com séries, repetições e intervalos indicados, o que facilita a execução mesmo para quem está a começar.",
  },
  {
    q: "Serve para qualquer idade ou se eu já tiver alguma lesão?",
    a: "Os exercícios são de baixo impacto e podem ser adaptados. Se tem uma lesão específica, recomendamos que consulte um profissional de saúde antes de começar.",
  },
  {
    q: "Quanto tempo por dia preciso de dedicar?",
    a: "A maioria dos treinos demora entre 15 e 30 minutos, encaixando na rotina mesmo de quem tem pouco tempo livre.",
  },
  {
    q: "Qual é a diferença entre o Plano Básico e o Premium?",
    a: "O Plano Básico inclui o material com os 117 exercícios. O Plano Premium inclui tudo o que vem no Básico mais 3 bónus exclusivos: Plano de Emagrecimento e Definição, Guia de Treino para CORE e 40 Planos de Treino Pesado.",
  },
  {
    q: "E se eu não gostar do material?",
    a: "Tem garantia incondicional de 7 dias. Se não ficar satisfeito, basta pedir o reembolso dentro desse prazo e devolvemos 100% do valor.",
  },
] as const;
