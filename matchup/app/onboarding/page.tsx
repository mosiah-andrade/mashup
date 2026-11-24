"use client";

import { useRouter } from "next/navigation";
import { Rocket, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";
import { setMockRole } from "../../lib/mock-auth";
import Image from "next/image";

export default function OnboardingSelector() {
  const router = useRouter();

  const choose = (role: "startup" | "investidor") => {
    setMockRole(role);
    window.localStorage.setItem("ENLA-role", role);
    router.push("/onboarding/" + role);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <button type="button" onClick={() => router.push("/login")} className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[var(--vermelho-1)]"><ArrowLeft size={14} /> Voltar para login</button>
        <div className="mt-8 text-center">
          <Image src="/icon1.png" alt="ENLA" width={64} height={64} className="mx-auto mb-3" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--vermelho-1)]">ENLA • Onboarding Institucional</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Como você participa do ecossistema?</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">Escolha seu perfil para configurarmos os critérios corretos de captação, diligência e matching.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <button type="button" onClick={() => choose("startup")} className="group rounded-3xl border border-[var(--vermelho-1)]/20 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-[var(--vermelho-1)]/50 hover:shadow-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--bege-1)] text-[var(--vermelho-1)]"><Rocket /></div>
            <h2 className="mt-5 text-xl font-bold">Sou uma Startup</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Cadastre tese, tração, rodada, cap table, Data Room e perfil de Smart Money buscado.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[var(--vermelho-1)]">Cadastrar Startup <ArrowRight size={14} /></span>
          </button>

          <button type="button" onClick={() => choose("investidor")} className="group rounded-3xl border border-[var(--vermelho-1)]/20 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-[var(--vermelho-1)]/50 hover:shadow-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--bege-1)] text-[var(--vermelho-1)]"><TrendingUp /></div>
            <h2 className="mt-5 text-xl font-bold">Sou um Investidor</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Configure ticket, estágio, verticais, filtros de exclusão, Smart Money e compliance CVM 88.</p>
          </button>
        </div>
      </div>
    </main>
  );
}
