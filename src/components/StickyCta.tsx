import { useEffect, useState } from "react";

/**
 * Barra de compra fixa no rodape, no celular.
 *
 * A pagina e longa: sem isto, quem esta no meio tem de rolar ate os planos
 * para comprar. Aparece so depois do hero sair de vista, para nao tapar a
 * primeira impressao, e desaparece quando a secao de planos esta na tela,
 * onde ja ha botoes.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const planos = document.getElementById("planos");

    const update = () => {
      const passouOHero = window.scrollY > window.innerHeight * 0.9;
      const planosAVista = planos
        ? planos.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setVisible(passouOHero && !planosAVista);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <div className="min-w-0">
        <p className="eyebrow text-[9px] font-bold text-primary">Plano Premium</p>
        <p className="mt-0.5 flex items-baseline gap-2">
          <span className="font-display text-xl font-extrabold leading-none text-foreground">
            R$ 27,90
          </span>
          <span className="text-xs font-semibold text-muted-foreground line-through">R$ 97,00</span>
        </p>
      </div>
      <a
        href="#planos"
        className="cta-shine shrink-0 rounded-full bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-primary-foreground"
        tabIndex={visible ? 0 : -1}
      >
        Quero acessar
      </a>
    </div>
  );
}
