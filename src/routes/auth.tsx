import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

function safeNext(value: unknown): string {
  if (typeof value !== "string") return "/";
  // Same-origin relative path only.
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({ next: safeNext(s['next']) }),
  head: () => ({
    meta: [
      { title: "Entrar | 117 Exercícios de Mobilidade e Estabilidade" },
      {
        name: "description",
        content:
          "Acesse sua conta para conectar ferramentas e assistentes ao material 117 Exercícios de Mobilidade e Estabilidade.",
      },
      { property: "og:title", content: "Entrar | 117 Exercícios de Mobilidade e Estabilidade" },
      {
        property: "og:description",
        content: "Entre com e-mail e senha ou com o Google para acessar sua conta.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const returnUrl = `${typeof window === "undefined" ? "" : window.location.origin}${next}`;

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.href = next;
    });
  }, [next]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setInfo(null);
    if (mode === "signup") {
      const { data, error: err } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: returnUrl },
      });
      setBusy(false);
      if (err) return setError(err.message);
      if (!data.session)
        return setInfo("Enviamos um e-mail de confirmação. Confirme para continuar.");
      window.location.href = next;
      return;
    }
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (err) return setError(err.message);
    window.location.href = next;
  }

  async function handleGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: returnUrl });
    if (result.error) return setError(String(result.error));
    if (result.redirected) return;
    void navigate({ to: next as string });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 font-sans">
      <div className="w-full max-w-sm rounded-2xl bg-ink p-8 shadow-xl">
        <h1 className="text-2xl font-extrabold text-foreground">
          {mode === "signin" ? "Entrar" : "Criar conta"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Acesse sua conta para conectar assistentes e ferramentas com segurança.
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          className="mt-6 w-full rounded-full border border-input bg-background px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
        >
          Continuar com Google
        </button>

        <div className="my-5 text-center text-xs uppercase tracking-wide text-muted-foreground">
          ou
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full rounded-lg bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary focus:ring-2"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full rounded-lg bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary focus:ring-2"
          />
          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          {info && <p className="text-sm text-primary">{info}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full bg-primary px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-primary-foreground disabled:opacity-60"
          >
            {mode === "signin" ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setInfo(null);
          }}
          className="mt-5 w-full text-sm text-muted-foreground underline"
        >
          {mode === "signin" ? "Não tem conta? Criar conta" : "Já tem conta? Entrar"}
        </button>
      </div>
    </main>
  );
}
