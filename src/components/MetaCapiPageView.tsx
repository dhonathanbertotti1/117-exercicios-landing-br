import { useEffect } from "react";

declare global {
  interface Window {
    /** Gerado pelo snippet do pixel em __root.tsx, para deduplicar o evento. */
    __metaPageViewId?: string;
  }
}

/**
 * Reenvia o PageView pela API de Conversoes, no servidor.
 *
 * O pixel no browser ja disparou este evento com o mesmo `event_id`; o Meta
 * junta os dois e conta uma vez so.
 */
export function MetaCapiPageView() {
  useEffect(() => {
    const eventId = window.__metaPageViewId;
    if (!eventId) return;

    void fetch("/api/meta-capi", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        eventName: "PageView",
        eventId,
        eventSourceUrl: window.location.href,
      }),
      // Nao vale a pena partir a pagina se isto falhar.
      keepalive: true,
    }).catch(() => {});
  }, []);

  return null;
}
