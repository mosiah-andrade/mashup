"use client";

import { useRouter } from "next/navigation";
import { useOnboarding, OnboardingShell, Field, Section, Choice } from "../components";

export default function StartupOnboarding() {
  const router = useRouter();
  const { step, setStep, data, setData } = useOnboarding("startup");
  const update = (key: string, value: string | boolean) => setData({ ...data, [key]: value });

  if (step === 0) return <OnboardingShell role="startup" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="1" title="Identificação Básica & Posicionamento">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome da Startup" value={String(data.name || "")} onChange={v => update("name", v)} placeholder="FinFlow Inteligência Financeira" />
        <Field label="Ano de Fundação" value={String(data.year || "")} onChange={v => update("year", v)} placeholder="2022" />
        <Field label="Tagline / Pitch Curto" value={String(data.pitch || "")} onChange={v => update("pitch", v)} placeholder="Automatizando conciliação financeira..." />
        <Field label="Vertical Principal" value={String(data.vertical || "")} onChange={v => update("vertical", v)} placeholder="Fintech & Open Finance" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["Ideação", "Pre-Seed", "Seed", "Série A"].map(x => <Choice key={x} label={x} active={data.stage === x} onClick={() => update("stage", x)} />)}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Sede e Polo de Inovação" value={String(data.location || "")} onChange={v => update("location", v)} placeholder="São Paulo, SP • Cubo Itaú" />
        <Field label="Tamanho da Equipe" value={String(data.team || "")} onChange={v => update("team", v)} placeholder="14 colaboradores full-time" />
      </div>
    </Section>
    <Section number="2" title="Tração & Indicadores Financeiros (Auditáveis)">
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="ARR Atual" value={String(data.arr || "")} onChange={v => update("arr", v)} placeholder="R$ 1.200.000" />
        <Field label="MRR Recorrente" value={String(data.mrr || "")} onChange={v => update("mrr", v)} placeholder="R$ 102.400" />
        <Field label="Crescimento MoM" value={String(data.growth || "")} onChange={v => update("growth", v)} placeholder="+18.4%" />
        <Field label="Clientes Ativos" value={String(data.clients || "")} onChange={v => update("clients", v)} placeholder="68 contas B2B" />
        <Field label="NRR" value={String(data.nrr || "")} onChange={v => update("nrr", v)} placeholder="114%" />
        <Field label="Runway" value={String(data.runway || "")} onChange={v => update("runway", v)} placeholder="9 meses" />
      </div>
    </Section>
  </OnboardingShell>;

  if (step === 1) return <OnboardingShell role="startup" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="3" title="Rodada de Investimento & Termos">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Meta de Captação" value={String(data.amount || "")} onChange={v => update("amount", v)} placeholder="R$ 1.500.000" />
        <Field label="Valuation Pre-Money" value={String(data.valuation || "")} onChange={v => update("valuation", v)} placeholder="R$ 15.000.000" />
        <Field label="Equity Diluído" value={String(data.equity || "")} onChange={v => update("equity", v)} placeholder="10%" />
      </div>
      <div className="mt-4"><Field label="Instrumento de Investimento" value={String(data.instrument || "")} onChange={v => update("instrument", v)} placeholder="Mútuo Conversível em Participação Societária (CVM 88)" /></div>
      <div className="mt-4"><Field label="Alocação Estratégica do Capital" value={String(data.allocation || "")} onChange={v => update("allocation", v)} placeholder="50% P&D e Modelos de IA • 30% GTM • 20% Compliance" /></div>
    </Section>
    <Section number="4" title="Moat & Diferenciais Competitivos">
      <Field label="Diferenciais" value={String(data.moat || "")} onChange={v => update("moat", v)} placeholder="Algoritmo proprietário, integrações, distribuição..." />
      <div className="mt-4"><Field label="Perfil de Smart Money Buscado" value={String(data.smartMoney || "")} onChange={v => update("smartMoney", v)} placeholder="Investidores-anjo com experiência em Fintech..." /></div>
    </Section>
    <Section number="5" title="Data Room & Compliance">
      <div className="grid gap-2 sm:grid-cols-2">
        {["CNPJ ativo", "Métricas via Open Finance", "Minuta de Mútuo Conversível", "Cap Table detalhado"].map(x => <Choice key={x} label={x} active={Boolean(data[x])} onClick={() => update(x, !data[x])} />)}
      </div>
    </Section>
  </OnboardingShell>;

  if (step === 2) return <OnboardingShell role="startup" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="6" title="Governança & Termos">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Tipo Societário" value={String(data.companyType || "")} onChange={v => update("companyType", v)} placeholder="LTDA / S.A." />
        <Field label="Conselho / Governança" value={String(data.governance || "")} onChange={v => update("governance", v)} placeholder="Conselho consultivo / board" />
        <Field label="Lead Investor" value={String(data.lead || "")} onChange={v => update("lead", v)} placeholder="Nome ou status" />
        <Field label="NDA / Confidencialidade" value={String(data.nda || "")} onChange={v => update("nda", v)} placeholder="NDA Digital ativo" />
      </div>
    </Section>
    <Section number="7" title="Preferências de Matching">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["Fintech", "IA Aplicada", "B2B SaaS", "Enterprise"].map(x => <Choice key={x} label={x} active={Boolean(data[x])} onClick={() => update(x, !data[x])} />)}
      </div>
    </Section>
  </OnboardingShell>;

  return <OnboardingShell role="startup" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="8" title="Auditoria Final & Data Room">
      <div className="rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
        <p className="font-bold">✓ Perfil pronto para revisão</p>
        <p className="mt-1">Revise os dados preenchidos. Após concluir, seu perfil poderá entrar na simulação do Feed de Investidores.</p>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {Object.entries(data).slice(0, 8).map(([key, value]) => <div key={key} className="rounded-lg bg-slate-50 p-3 text-[9px]"><b>{key}</b><p className="mt-1 truncate text-slate-500">{String(value)}</p></div>)}
      </div>
      <button type="button" onClick={() => router.push("/home/startup")} className="mt-5 w-full rounded-lg bg-emerald-600 py-3 text-xs font-bold text-white">Publicar Perfil e Entrar no Deal Flow</button>
    </Section>
  </OnboardingShell>;
}
