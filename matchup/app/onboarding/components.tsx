"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, CircleHelp, LockKeyhole, ShieldCheck } from "lucide-react";

export type Role = "startup" | "investidor";

export type OnboardingData = Record<string, string | boolean>;

const steps = [
  ["1", "Perfil & Identificação"],
  ["2", "Métricas & Tese"],
  ["3", "Termos & Governança"],
  ["4", "Auditoria & Data Room"],
] as const;

export function OnboardingShell({
  role,
  children,
  step,
  setStep,
  data,
  setData,
}: {
  role: Role;
  children: ReactNode;
  step: number;
  setStep: (value: number) => void;
  data: OnboardingData;
  setData: (value: OnboardingData) => void;
}) {
  const title = role === "startup" ? "Cadastro Estruturado de Captação" : "Cadastro de Investidor";
  const subtitle = role === "startup"
    ? "Conectando teses de startups de alto crescimento a sindicatos e investidores anjo qualificados."
    : "Configure sua tese de alocação, faixas de cheque e critérios de matching algorítmico com startups qualificadas e diligenciadas.";

  const progress = Math.round(((step + 1) / 4) * 100);

  function update(key: string, value: string | boolean) {
    setData({ ...data, [key]: value });
  }

  function next() {
    if (step < 3) setStep(step + 1);
    else onComplete?.();
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <main className="min-h-screen bg-[#fbfcff] text-slate-900">
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#eef3ff] text-[10px] font-black text-[#004ac6]">MU</div>
            <div className="border-l border-slate-200 pl-3">
              <p className="text-[10px] font-bold uppercase tracking-wide">Onboarding Institucional</p>
              <p className="text-[10px] text-slate-500">Cadastro de {role === "startup" ? "Startup" : "Investidor"} • Rodada & Captação</p>
            </div>
          </div>
          <div className="hidden items-center gap-5 text-[11px] font-semibold text-slate-600 sm:flex">
            <span>Suporte</span>
            <span>Diretrizes de Diligência</span>
            <span className="flex items-center gap-1"><LockKeyhole size={12} /> Sair com Segurança</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">● Protocolo de Diligência 2024.4</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
              <p className="mt-1 max-w-3xl text-xs text-slate-500 sm:text-sm">{subtitle}</p>
            </div>
            <div className="min-w-[210px] rounded-xl bg-[#eef4ff] p-3">
              <div className="flex items-center justify-between text-[9px] font-bold uppercase text-slate-500">
                <span>Preenchimento técnico</span><span className="text-[#004ac6]">{progress}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full rounded-full bg-[#004ac6] transition-all" style={{ width: progress + "%" }} />
              </div>
              <p className="mt-1 text-[8px] text-emerald-700">+15% pós pitch deck</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-1.5 md:grid-cols-4">
            {steps.map(([number, label], index) => (
              <button
                key={number}
                type="button"
                onClick={() => index <= step && setStep(index)}
                className={`flex min-h-12 items-center gap-2 rounded-lg px-3 text-left transition ${index === step ? "bg-[#dbe4ff] text-[#004ac6]" : index < step ? "bg-[#eef5ff] text-slate-700" : "bg-[#f1f4fa] text-slate-500"}`}
              >
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${index < step ? "bg-emerald-600 text-white" : index === step ? "bg-[#125bd6] text-white" : "bg-slate-200"}`}>
                  {index < step ? <Check size={14} /> : number}
                </span>
                <span><small className="block text-[8px]">Etapa {number}</small><strong className="text-[10px] sm:text-[11px]">{label}</strong></span>
              </button>
            ))}
          </div>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(330px,.8fr)]">
          <section>
            <div className="mb-4 flex items-start gap-3 rounded-xl border border-blue-100 bg-[#eef4ff] p-4">
              <ShieldCheck className="mt-0.5 text-[#004ac6]" size={20} />
              <div>
                <p className="text-[10px] font-bold uppercase text-[#004ac6]">Algoritmo MatchMaker CVM 88</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-600">
                  {role === "startup"
                    ? "Nosso algoritmo calcula alinhamento de tese, métricas, estágio e sinergia de portfólio para priorizar investidores aderentes."
                    : "Startups elegíveis são avaliadas por tese, estágio, ticket e sinergia de portfólio sem expor sua identidade prematuramente."}
                </p>
              </div>
            </div>
            {children}

            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[9px] text-slate-500">● Rascunho salvo automaticamente</div>
              <div className="flex gap-2">
                <button type="button" onClick={back} disabled={step === 0} className="rounded-lg bg-[#e9effb] px-5 py-2.5 text-[10px] font-bold text-slate-700 disabled:opacity-40">
                  Voltar
                </button>
                <button type="button" onClick={next} className="flex items-center gap-2 rounded-lg bg-[#0759d5] px-6 py-2.5 text-[10px] font-bold text-white shadow-sm hover:bg-[#004ac6]">
                  {step === 3 ? "Concluir Cadastro" : "Avançar"} <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <Preview role={role} data={data} />
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="flex items-center gap-2 text-[10px] font-bold"><CircleHelp size={14} className="text-[#712ae2]" /> Força do Perfil para Matching</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[85%] rounded-full bg-[#712ae2]" /></div>
              <div className="mt-2 flex justify-between text-[9px]"><span>Score estimado</span><b className="text-[#712ae2]">85/100</b></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return <label className="block">
    <span className="mb-1 block text-[9px] font-bold text-slate-600">{label}</span>
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none transition focus:border-[#0759d5] focus:ring-2 focus:ring-blue-100" />
  </label>;
}

export function Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className="mb-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
    <h2 className="flex items-center gap-2 text-sm font-bold"><span className="text-[#0759d5]">●</span>{number}. {title}</h2>
    <div className="mt-4">{children}</div>
  </section>;
}

export function Choice({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} className={`rounded-lg border p-3 text-left text-[10px] font-semibold transition ${active ? "border-[#0759d5] bg-[#eef4ff] text-[#0759d5] ring-1 ring-[#0759d5]" : "border-slate-200 bg-white hover:bg-slate-50"}`}>{active && <Check size={12} className="mr-1 inline" />}{label}</button>;
}

function Preview({ role, data }: { role: Role; data: OnboardingData }) {
  const name = String(data.name || (role === "startup" ? "Sua Startup" : "Seu Nome"));
  return <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
    <div className="flex items-center justify-between">
      <p className="text-[9px] font-bold uppercase text-slate-500">Simulação em tempo real</p>
      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-700">Ao Vivo</span>
    </div>
    <div className="mt-3 rounded-xl bg-gradient-to-br from-[#0759d5] to-[#712ae2] p-4 text-white">
      <p className="text-[8px] opacity-80">Perfil MatchUp</p>
      <p className="mt-4 text-lg font-bold">{name}</p>
      <p className="text-[9px] opacity-80">{role === "startup" ? "Startup • Captação" : "Investidor • Deal Flow"}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-white/10 p-2"><small className="block text-[7px] opacity-70">Estágio</small><b className="text-[10px]">{String(data.stage || "Seed")}</b></div>
        <div className="rounded-lg bg-white/10 p-2"><small className="block text-[7px] opacity-70">{role === "startup" ? "Captação" : "Ticket"}</small><b className="text-[10px]">{String(data.amount || (role === "startup" ? "R$ 1.5M" : "R$ 150k"))}</b></div>
      </div>
    </div>
    <p className="mt-3 text-[9px] text-slate-500">Os dados exibidos aqui são atualizados conforme o preenchimento.</p>
  </div>;
}

export function useOnboarding(role: Role) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({});
  const key = `matchup-onboarding-${role}`;

  useEffect(() => {
    const saved = sessionStorage.getItem(key);
    if (saved) setData(JSON.parse(saved));
  }, [key]);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return { step, setStep, data, setData };
}
