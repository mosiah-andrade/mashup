"use client";

import { useRouter } from "next/navigation";
import { useOnboarding, OnboardingShell, Field, Section, Choice } from "../components";

export default function InvestorOnboarding() {
  const router = useRouter();
  const { step, setStep, data, setData } = useOnboarding("investidor");
  const update = (key: string, value: string | boolean) => setData({ ...data, [key]: value });

  if (step === 0) return <OnboardingShell role="investidor" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="1" title="Tipo de Investidor & Dados Institucionais">
      <div className="grid gap-2 sm:grid-cols-2">
        {["Investidor Anjo (PF)", "Syndicato / Pool", "Family Office / CVC", "Micro-VC / Fundo Seed"].map(x => <Choice key={x} label={x} active={data.investorType === x} onClick={() => update("investorType", x)} />)}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Nome Completo ou Denominação do Pool" value={String(data.name || "")} onChange={v => update("name", v)} placeholder="Carlos Mendes (Syndicate Alpha)" />
        <Field label="Polo de Inovação Principal" value={String(data.location || "")} onChange={v => update("location", v)} placeholder="São Paulo, SP • Cubo Itaú" />
        <Field label="Enquadramento Regulatório CVM" value={String(data.regulatory || "")} onChange={v => update("regulatory", v)} placeholder="Investidor Qualificado (> R$ 1M)" />
        <Field label="Tese Executiva & Histórico" value={String(data.thesis || "")} onChange={v => update("thesis", v)} placeholder="Experiência em early-stage B2B SaaS..." />
      </div>
    </Section>
    <Section number="2" title="Parâmetros de Cheque & Capacidade de Aporte">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Cheque Médio por Rodada" value={String(data.amount || "")} onChange={v => update("amount", v)} placeholder="R$ 150.000" />
        <Field label="Capacidade Anual" value={String(data.capacity || "")} onChange={v => update("capacity", v)} placeholder="R$ 1.200.000" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Ideação", "Pre-Seed", "Seed", "Série A"].map(x => <Choice key={x} label={x} active={Boolean(data["stage-"+x])} onClick={() => update("stage-"+x, !data["stage-"+x])} />)}
      </div>
    </Section>
  </OnboardingShell>;

  if (step === 1) return <OnboardingShell role="investidor" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="3" title="Verticais Prioritárias & Filtros de Exclusão">
      <p className="mb-2 text-[9px] font-bold text-slate-500">VERTICAIS PRIORITÁRIAS</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["Fintech & Open Finance", "Inteligência Artificial Aplicada", "Logística & Supply Chain Tech", "Adv. Vertical"].map(x => <Choice key={x} label={x} active={Boolean(data[x])} onClick={() => update(x, !data[x])} />)}
      </div>
      <p className="mb-2 mt-5 text-[9px] font-bold text-red-500">FILTROS DE EXCLUSÃO (CRITÉRIOS ELIMINATÓRIOS)</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {["Sem faturamento comprovado", "Hardware intensivo", "B2C puro sem retenção orgânica"].map(x => <Choice key={x} label={x} active={Boolean(data["exclude-"+x])} onClick={() => update("exclude-"+x, !data["exclude-"+x])} />)}
      </div>
    </Section>
    <Section number="4" title="Smart Money Oferecido aos Fundadores">
      <div className="grid gap-2 sm:grid-cols-2">
        {["Acesso a C-Level de Bancos & Seguradoras", "Governança, Conselho e Cap Table Limpo", "Go-To-Market Enterprise B2B LatAm", "Recrutamento e Formação de Squad Tech"].map(x => <Choice key={x} label={x} active={Boolean(data["smart-"+x])} onClick={() => update("smart-"+x, !data["smart-"+x])} />)}
      </div>
    </Section>
  </OnboardingShell>;

  if (step === 2) return <OnboardingShell role="investidor" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="5" title="Governança & Termos">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Instrumentos Jurídicos Aceitos" value={String(data.instruments || "")} onChange={v => update("instruments", v)} placeholder="Mútuo Conversível • SAFE • Participação Direta" />
        <Field label="Pode atuar como Lead Investor?" value={String(data.lead || "")} onChange={v => update("lead", v)} placeholder="Sim / Não" />
        <Field label="Conselho / Board" value={String(data.board || "")} onChange={v => update("board", v)} placeholder="Disponibilidade para conselho" />
        <Field label="KYC / AML" value={String(data.kyc || "")} onChange={v => update("kyc", v)} placeholder="Verificação aprovada" />
      </div>
    </Section>
    <Section number="6" title="Credenciais & Compliance CVM 88">
      <div className="grid gap-2 sm:grid-cols-2">
        {["Autodeclaração de Investidor Qualificado", "Termo de Sigilo NDA", "Verificação de Identidade (KYC / AML)", "Vinculação de Custódia / Conta Escrow"].map(x => <Choice key={x} label={x} active={Boolean(data["compliance-"+x])} onClick={() => update("compliance-"+x, !data["compliance-"+x])} />)}
      </div>
    </Section>
  </OnboardingShell>;

  return <OnboardingShell role="investidor" step={step} setStep={setStep} data={data} setData={setData}>
    <Section number="7" title="Aprovação & Liquidez">
      <div className="rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
        <p className="font-bold">✓ Cadastro pronto para auditoria</p>
        <p className="mt-1">Os critérios serão usados para calcular a força da tese e ordenar o Deal Flow de startups.</p>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {Object.entries(data).slice(0, 8).map(([key, value]) => <div key={key} className="rounded-lg bg-slate-50 p-3 text-[9px]"><b>{key}</b><p className="mt-1 truncate text-slate-500">{String(value)}</p></div>)}
      </div>
      <button type="button" onClick={() => router.push("/home/investidor")} className="mt-5 w-full rounded-lg bg-[#712ae2] py-3 text-xs font-bold text-white">Concluir e Acessar Deal Flow</button>
    </Section>
  </OnboardingShell>;
}
