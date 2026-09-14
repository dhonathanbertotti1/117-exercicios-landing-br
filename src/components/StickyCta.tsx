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
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          A partir de
        </p>
        <p className="text-xl font-extrabold leading-none text-foreground">R$ 19,10</p>
      </div>
      <a
        href="#planos"
        className="rounded-full bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-primary-foreground"
        tabIndex={visible ? 0 : -1}
      >
        Quero acessar
      </a>
    </div>
  );
}
