import { useEffect, useRef, type ReactNode } from "react";

/**
 * Revela o conteudo quando ele entra no ecra: fade curto com uma subida
 * discreta. O elemento so fica escondido se o JavaScript estiver a correr
 * (a classe `js` no <html>), para quem tenha JS desligado ver tudo na mesma.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Atraso em ms. Usar para escalonar cartoes irmaos. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Quem pediu menos movimento ve o conteudo ja no lugar.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      // Comeca um pouco antes de chegar ao fundo do ecra, senao a animacao
      // acontece fora de vista em quem rola depressa.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
