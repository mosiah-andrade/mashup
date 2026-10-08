"use client";

import { useRouter } from "next/navigation";
import { Rocket, TrendingUp, ArrowRight } from "lucide-react";

export default function OnboardingSelector() {
  const router = useRouter();
  return <main className="min-h-screen bg-[#fbfcff] px-4 py-10 sm:px-8">
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#004ac6]">MatchUp • Onboarding Institucional</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Como você participa do ecossistema?</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">Escolha seu perfil para configurarmos os critérios corretos de captação, diligência e matching.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <button onClick={() => router.push("/onboarding/startup")} className="group rounded-3xl border border-blue-100 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#004ac6]"><Rocket /></div>
          <h2 className="mt-5 text-xl font-bold">Sou uma Startup</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Cadastre tese, tração, rodada, cap table, Data Room e perfil de Smart Money buscado.</p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#004ac6]">Cadastrar Startup <ArrowRight size={14} /></span>
        </button>
        <button onClick={() => router.push("/onboarding/investidor")} className="group rounded-3xl border border-purple-100 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-[#712ae2]"><TrendingUp /></div>
          <h2 className="mt-5 text-xl font-bold">Sou um Investidor</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Configure ticket, estágio, verticais, filtros de exclusão, Smart Money e compliance CVM 88.</p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#712ae2]">Cadastrar Investidor <ArrowRight size={14} /></span>
        </button>
      </div>
    </div>
  </main>;
}
