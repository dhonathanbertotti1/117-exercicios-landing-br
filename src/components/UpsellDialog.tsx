import * as Dialog from "@radix-ui/react-dialog";
import { Check } from "lucide-react";

import { PRICES, UPGRADE_DIFFERENCE, formatBRL } from "@/lib/pricing";

/**
 * Pop-up de upsell da oferta de entrada.
 *
 * Quem clica no cronograma de R$ 9,90 nao vai direto ao checkout: primeiro ve
 * o que fica de fora e quanto custa levar tudo. E o ultimo ponto em que da
 * para subir o ticket, por isso o caminho de aceitar e um botao grande e o de
 * recusar e uma linha discreta — mas a recusa esta sempre visivel e leva ao
 * que a pessoa pediu, sem truques.
 *
 * Assente no Dialog do Radix por causa do que nao se ve: foco presenciado
 * dentro do pop-up, Esc para fechar, scroll da pagina travado e os papeis de
 * acessibilidade corretos.
 */
export function UpsellDialog({
  open,
  onOpenChange,
  fullHref,
  scheduleHref,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Checkout da oferta completa, para quem aceita. */
  fullHref: string;
  /** Checkout do cronograma, para quem recusa. */
  scheduleHref: string;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          // O conteudo pode passar da altura do ecra em telemoveis pequenos.
          style={{ maxHeight: "calc(100dvh - 2rem)", overflowY: "auto" }}
        >
          <div className="plan-featured rounded-3xl p-7 text-center sm:p-8">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-bold text-primary">
              {/* Emoji em vez de icone: o fogo colorido puxa mais o olho no
                  topo do pop-up do que um tracado monocromatico. */}
              <span aria-hidden="true" className="text-sm leading-none">
                🔥
              </span>{" "}
              Espere um instante
            </span>

            <Dialog.Title className="font-display mt-5 text-2xl font-extrabold leading-tight text-foreground sm:text-[1.75rem]">
              Quer levar os <span className="text-primary">117 exercícios</span> por mais{" "}
              <span className="text-primary">{formatBRL(UPGRADE_DIFFERENCE)}</span>?
            </Dialog.Title>

            <Dialog.Description className="mt-3 text-sm leading-relaxed text-muted-foreground">
              O cronograma diz o que treinar em cada dia. Os 117 exercícios são o conteúdo que
              preenche esses dias — e vêm com os 3 bônus inclusos.
            </Dialog.Description>

            <ul className="mx-auto mt-6 max-w-xs space-y-2.5 text-left">
              {[
                "117 Exercícios de Mobilidade e Estabilidade",
                "Plano de Emagrecimento e Definição",
                "Guia de Treino para CORE",
                "40 Planos de Treino Pesado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug">
                  <Check className="mt-0.5 size-[17px] shrink-0 text-primary" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-baseline justify-center gap-2">
              <span className="font-display text-4xl font-extrabold leading-none text-foreground">
                {formatBRL(PRICES.offer)}
              </span>
              <span className="text-sm font-bold text-muted-foreground line-through">
                {formatBRL(PRICES.offerAnchor)}
              </span>
            </p>

            <a
              href={fullHref}
              className="cta-shine mt-6 block w-full rounded-full bg-primary px-5 py-5 text-center text-base font-extrabold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_18px_40px_-12px] shadow-primary/60 transition-transform duration-300 hover:scale-[1.03]"
            >
              Adicionar os 117 exercícios
            </a>

            {/* A recusa: pequena e apagada, como pedido, mas continua a ser um
                link a serio — sublinhado, com area de toque suficiente e a
                escurecer no hover, para quem a procura a encontrar. Leva mesmo
                ao checkout de R$ 9,90, sem desvios. */}
            <a
              href={scheduleHref}
              className="mx-auto mt-4 block w-fit px-2 py-1 text-[10px] text-destructive/40 underline underline-offset-2 transition-colors duration-200 hover:text-destructive/80"
            >
              Não quero, seguir só com o cronograma
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
