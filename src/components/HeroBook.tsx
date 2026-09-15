import { useEffect, useRef } from "react";

import { HEADLINE_DISCOUNT } from "@/lib/pricing";

// Recorte da capa colado ao livro: quanto menos fundo da fotografia sobrar,
// menos se nota a juncao feita pelo mix-blend-mode.
import ebookCover from "@/assets/ebook-cover-3d.jpg";

/**
 * Mockup animado do livro no hero.
 *
 * A imagem de origem é uma fotografia do livro sobre fundo quase preto, com a
 * perspetiva já renderizada. Em vez de reconstruir o livro em CSS, tratamo-lo
 * como um objeto 3D: `mix-blend-mode: screen` funde o fundo escuro da foto com
 * o fundo da secção (que é mais claro), pelo que o livro parece recortado, e as
 * camadas em redor dão-lhe halo, levitação e sombra no chão.
 */
export function HeroBook() {
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt) return;

    // Sem inclinação em telas de toque (não há cursor a seguir) nem para quem
    // configurou o sistema para menos movimento.
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarse.matches || reduced.matches) return;

    let frame = 0;

    const clamp = (n: number) => Math.max(-1, Math.min(1, n));

    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const dx = clamp((event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2));
      const dy = clamp((event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2));

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        tilt.style.setProperty("--book-ry", `${(dx * 9).toFixed(2)}deg`);
        tilt.style.setProperty("--book-rx", `${(dy * -6).toFixed(2)}deg`);
      });
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      tilt.style.setProperty("--book-ry", "0deg");
      tilt.style.setProperty("--book-rx", "0deg");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-book mx-auto mt-10 max-w-[26rem]">
      <div ref={tiltRef} className="hero-book__tilt">
        <div className="hero-book__aura" aria-hidden="true" />

        <div className="hero-book__float">
          <img
            src={ebookCover}
            alt="Capa do material 117 Exercícios de Mobilidade e Estabilidade"
            width={755}
            height={1024}
            className="hero-book__cover"
            fetchPriority="high"
          />

          <div className="hero-book__badge">
            <span className="text-2xl font-extrabold leading-none">{HEADLINE_DISCOUNT}%</span>
            <span className="text-xs font-bold uppercase">OFF</span>
          </div>
        </div>

        <div className="hero-book__shadow" aria-hidden="true" />
      </div>
    </div>
  );
}
