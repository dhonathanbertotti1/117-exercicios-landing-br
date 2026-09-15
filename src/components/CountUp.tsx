import { useEffect, useRef, useState } from "react";

/**
 * Conta de 0 ate ao valor final quando entra no ecra.
 *
 * O numero final e o estado inicial, de proposito: e ele que vai no HTML do
 * servidor. Se o JavaScript nao correr, se o IntersectionObserver nao
 * disparar, ou se o elemento nunca chegar a ser visto, o utilizador le o
 * numero certo — nunca um 0.
 *
 * A animacao so entra quando ha margem para ela: ao montar, se o elemento
 * ainda estiver fora do ecra, o valor cai para 0 (fora de vista, ninguem ve o
 * reset) e sobe quando o elemento aparece. Se ja estiver visivel, fica como
 * esta: animar aqui daria um salto de 117 para 0 e de volta, a pior das
 * hipoteses.
 */
export function CountUp({
  to,
  duration = 1400,
  className = "",
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Quem pediu menos movimento fica com o numero final, ja renderizado.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const jaVisivel = rect.top < window.innerHeight && rect.bottom > 0;
    if (jaVisivel) return;

    setValue(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();

          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Desacelera no fim, para o numero "assentar" em vez de parar seco.
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(to * eased));
            if (progress < 1) frame = requestAnimationFrame(step);
            // Fecha no valor exato: o arredondamento do easing pode parar a um
            // digito de distancia.
            else setValue(to);
          };
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      // Se o componente sair antes de animar, o valor certo fica no lugar.
      setValue(to);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
