"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { startMockSession, getMockSession } from "../../lib/mock-auth";

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
    if (remember) window.localStorage.setItem("matchup-remember", "true");

    router.push(role ? "/home/" + role : "/onboarding");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <button type="button" onClick={() => router.push("/")} className="text-xl font-black text-blue-700">MatchUp</button>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-blue-600">Acesso à plataforma</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Entrar</h1>
          <p className="mt-2 text-sm text-slate-500">No modo mock, use qualquer e-mail válido e uma senha com 6+ caracteres.</p>

          <form onSubmit={handleLogin} className="mt-7 space-y-4">
            <label className="block"><span className="mb-1 block text-xs font-semibold text-slate-700">E-mail</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@empresa.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" /></label>
            <label className="block"><span className="mb-1 block text-xs font-semibold text-slate-700">Senha</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" /></label>

            <label className="flex items-center gap-2 text-xs text-slate-600"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Manter-me conectado</label>

            {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-xs font-medium text-red-700">{error}</p>}

            <button type="submit" className="w-full rounded-xl bg-blue-700 py-3 text-sm font-bold text-white transition hover:bg-blue-800">Entrar</button>
            <button type="button" onClick={() => router.push("/register")} className="w-full rounded-xl border border-blue-700 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50">Criar conta</button>
          </form>
        </section>
      </div>
    </main>
  );
}
