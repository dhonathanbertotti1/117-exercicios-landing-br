/**
 * Fonte unica dos precos.
 *
 * O checkout do Ticto e a verdade; estes numeros tem de o espelhar. Tudo o
 * que a pagina diz sobre dinheiro — valor, ancora riscada, economia, total
 * dos bonus e a percentagem de desconto — e derivado daqui, para nao voltar a
 * haver dois numeros a discordar um do outro.
 *
 * Ao mudar o preco: muda-se so aqui.
 */
export const PRICES = {
  /** A oferta principal: material completo mais os 3 bonus. */
  offer: 29.9,
  /** Valor de referencia riscado ao lado do preco. */
  offerAnchor: 97.0,
  /**
   * Oferta de entrada: so o cronograma de exercicios, sem os 117 exercicios e
   * sem bonus nenhum. Era o order bump do checkout; passou a ser uma escolha
   * dentro da propria pagina.
   */
  schedule: 9.9,
} as const;

/**
 * Quanto custa subir da oferta de entrada para a completa.
 *
 * E este numero que o pop-up de upsell mostra. Calculado, nunca escrito a
 * mao: se um dos dois precos mudar, a frase do pop-up acompanha.
 */
export const UPGRADE_DIFFERENCE = PRICES.offer - PRICES.schedule;

/** Valor de cada bonus. O total anunciado e a soma destes, nunca um numero a parte. */
export const BONUS_PRICES = {
  emagrecimento: 25.0,
  core: 35.0,
  treinoPesado: 45.0,
} as const;

export const BONUS_TOTAL = Object.values(BONUS_PRICES).reduce((a, b) => a + b, 0);

/**
 * "R$ 29,90".
 *
 * Feito a mao em vez de Intl.NumberFormat: o formatador do pt-BR usa espaco
 * nao separavel entre o simbolo e o numero, o que mudaria o texto ja
 * publicado e partiria qualquer procura por "R$ 29,90" no projeto.
 */
export function formatBRL(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

/** Percentagem de desconto, arredondada. 29,90 sobre 97,00 da 69. */
export function discountPercent(price: number, anchor: number): number {
  return Math.round((1 - price / anchor) * 100);
}

/** Quanto se poupa face a ancora, em reais. */
export function savings(price: number, anchor: number): number {
  return anchor - price;
}

/** O desconto anunciado no topo e no selo da capa. */
export const HEADLINE_DISCOUNT = discountPercent(PRICES.offer, PRICES.offerAnchor);
