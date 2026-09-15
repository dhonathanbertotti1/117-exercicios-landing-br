/**
 * Fonte unica dos precos.
 *
 * O checkout do Ticto e a verdade; estes numeros tem de o espelhar. Tudo o
 * que a pagina diz sobre dinheiro — valor, ancora riscada, economia,
 * diferenca entre planos e percentagem de desconto — e derivado daqui, para
 * nao voltar a haver dois numeros a discordar um do outro.
 *
 * Ao mudar um preco: muda-se so aqui.
 */
export const PRICES = {
  premium: 27.9,
  premiumAnchor: 97.0,
  basic: 19.9,
  basicAnchor: 47.0,
} as const;

/** Valor de cada bonus. O total anunciado e a soma destes, nunca um numero a parte. */
export const BONUS_PRICES = {
  emagrecimento: 25.0,
  core: 35.0,
  treinoPesado: 45.0,
} as const;

export const BONUS_TOTAL = Object.values(BONUS_PRICES).reduce((a, b) => a + b, 0);

/**
 * "R$ 27,90".
 *
 * Feito a mao em vez de Intl.NumberFormat: o formatador do pt-BR usa espaco
 * nao separavel entre o simbolo e o numero, o que mudaria o texto ja
 * publicado e partiria qualquer procura por "R$ 27,90" no projeto.
 */
export function formatBRL(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

/** Percentagem de desconto, arredondada. 27,90 sobre 97,00 da 71. */
export function discountPercent(price: number, anchor: number): number {
  return Math.round((1 - price / anchor) * 100);
}

/** Quanto se poupa face a ancora, em reais. */
export function savings(price: number, anchor: number): number {
  return anchor - price;
}

/**
 * O desconto anunciado no topo e no selo da capa.
 *
 * E o do plano em destaque (Premium sobre a sua ancora), que e o mesmo que o
 * cartao ja mostra como "Economize". O Basico tem o seu proprio desconto,
 * menor, e por isso nao serve de manchete.
 */
export const HEADLINE_DISCOUNT = discountPercent(PRICES.premium, PRICES.premiumAnchor);
