"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { startMockSession, getMockSession } from "../../lib/mock-auth";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Informe um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    startMockSession(email.trim().toLowerCase());
    const role = getMockSession()?.role;
    if (remember) window.localStorage.setItem("ENLA-remember", "true");

    router.push(role ? "/home/" + role : "/onboarding");
  };

  return (
    <main className="min-h-screen bg-[var(--bege-2)] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
          <button type="button" onClick={() => router.push("/")} className="flex items-center gap-2 text-xl font-black text-[var(--vermelho-2)]"><Image src="/icon2-png.png" alt="" width={76} height={66} /></button>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[var(--vermelho-2)]">Acesso à plataforma</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Entrar</h1>
          <p className="mt-2 text-sm text-slate-500">No modo mock, use qualquer e-mail válido e uma senha com 6+ caracteres.</p>

          <form onSubmit={handleLogin} className="mt-7 space-y-4">
            <label className="block"><span className="mb-1 block text-xs font-semibold text-slate-700">E-mail</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@empresa.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[var(--vermelho-1)] focus:ring-2 focus:ring-[var(--bege-2)]" /></label>
            <label className="block"><span className="mb-1 block text-xs font-semibold text-slate-700">Senha</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[var(--vermelho-1)] focus:ring-2 focus:ring-[var(--bege-2)]" /></label>

            <label className="flex items-center gap-2 text-xs text-slate-600"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Manter-me conectado</label>

            {error && <p role="alert" className="rounded-lg bg-[var(--bege-2)] p-3 text-xs font-medium text-[var(--vermelho-2)]">{error}</p>}

            <button type="submit" className="w-full rounded-xl bg-[var(--vermelho-2)] py-3 text-sm font-bold text-white transition hover:bg-[var(--vermelho-1)]">Entrar</button>
            <button type="button" onClick={() => router.push("/register")} className="w-full rounded-xl border border-[var(--vermelho-1)]/30 py-3 text-sm font-bold text-[var(--vermelho-2)] transition hover:bg-[var(--bege-2)]">Criar conta</button>
          </form>
        </section>
      </div>
    </main>
  );
}
