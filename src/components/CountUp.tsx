import { useEffect, useRef, useState } from "react";

/**
 * Conta de 0 ate ao valor final quando entra no ecra.
 *
 * O 117 e o argumento central da pagina; ve-lo a subir fixa o numero muito
 * melhor do que le-lo parado.
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
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

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
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
