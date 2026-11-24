"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { startMockSession } from "../../lib/mock-auth";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email.includes("@")) return setError("Informe um e-mail válido.");
    if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) return setError("Os e-mails não conferem.");
    if (password.length < 6) return setError("A senha deve ter pelo menos 6 caracteres.");
    if (password !== confirmPassword) return setError("As senhas não conferem.");

    startMockSession(email.trim().toLowerCase());
    router.push("/onboarding");
  };

  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
          <button type="button" onClick={() => router.push("/")} className="flex items-center gap-2 text-xl font-black text-[var(--vermelho-2)]"><Image src="/icon2-png.png" alt="" width={76} height={66} /></button>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[var(--vermelho-2)]">Primeiro acesso</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Criar conta</h1>
          <p className="mt-2 text-sm text-slate-500">Depois do cadastro, você escolhe se participa como Startup ou Investidor.</p>

          <form onSubmit={handleRegister} className="mt-7 space-y-4">
            <Field label="E-mail" type="email" value={email} onChange={setEmail} placeholder="voce@empresa.com" />
            <Field label="Confirmar e-mail" type="email" value={confirmEmail} onChange={setConfirmEmail} placeholder="Repita seu e-mail" />
            <Field label="Senha" type="password" value={password} onChange={setPassword} placeholder="Mínimo de 6 caracteres" />
            <Field label="Confirmar senha" type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="Repita sua senha" />

            {error && <p role="alert" className="rounded-lg bg-[var(--bege-2)] p-3 text-xs font-medium text-[var(--vermelho-2)]">{error}</p>}

            <button type="submit" className="w-full rounded-xl bg-[var(--vermelho-2)] py-3 text-sm font-bold text-white transition hover:bg-[var(--vermelho-1)]">Continuar cadastro</button>
            <button type="button" onClick={() => router.push("/login")} className="w-full rounded-xl border border-slate-300 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Já tenho uma conta</button>
          </form>
        </section>
      </div>
    </main>
  );
}

function Field({ label, type, value, onChange, placeholder }: { label: string; type: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return <label className="block"><span className="mb-1 block text-xs font-semibold text-slate-700">{label}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[var(--vermelho-1)] focus:ring-2 focus:ring-[var(--bege-2)]" /></label>;
}
