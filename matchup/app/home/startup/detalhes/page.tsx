"use client";

import { useRouter } from "next/navigation";
import { ChevronDown, Heart, ShieldAlert } from "lucide-react";

export default function DetalhesStartup() {
  const router = useRouter();

  return (
    <section className="h-full w-full overflow-y-auto bg-white">
      <div className="flex min-h-full items-center justify-center px-3 py-6 pb-24 sm:px-6 lg:px-10">
        <div className="w-full max-w-[760px] rounded-2xl bg-[#020617] p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-[9px] text-white/70 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              DOSSIÊ DO INVESTIDOR
            </span>
            <button className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
              Fechar Detalhes <ChevronDown size={12} />
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#111827] p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <img src="/images/carlos.jpg" alt="Carlos Mendes" className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14" />
              <div className="min-w-0 flex-1">
                <h1 className="text-sm font-bold sm:text-base">Carlos Mendes</h1>
                <p className="text-[9px] text-white/55 sm:text-xs">Investidor Anjo Ativo • Mendes Syndicate</p>
                <p className="text-[8px] text-white/55 sm:text-[10px]">Brasil</p>
              </div>
              <div className="rounded-lg bg-emerald-400 px-3 py-1.5 text-center text-[8px] font-bold">MATCH<br />94%</div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[8px] text-emerald-300">Investidor Anjo Ativo</span>
            <span className="rounded-full border border-blue-400/30 bg-blue-500/15 px-2.5 py-1 text-[8px] text-blue-300">B2B SaaS • FinTech</span>
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-[8px] text-white/70">São Paulo, SP</span>
          </div>

          <div className="mt-3 rounded-xl border border-emerald-400/10 bg-[#05282d] p-3 sm:p-4">
            <h2 className="text-[10px] font-semibold text-emerald-300 sm:text-xs">✓ Por que o Match com a FinFlow é 94/100?</h2>
            <p className="mt-2 text-[9px] leading-4 text-white/65 sm:text-[10px] sm:leading-5">
              Forte alinhamento entre a tese de investimento do investidor, o estágio da FinFlow e sua experiência em vendas Enterprise, FinTech e preparação para Series A.
            </p>
          </div>

          <Section title="◉ TESE DE INVESTIMENTO & FOCO">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Info title="Verticais Principais" value="B2B SaaS, FinTech e IA" />
              <Info title="Estágio Alvo" value="Seed & Series A" />
              <Info title="Ticket Médio" value="R$ 250k - R$ 1.5M" />
              <Info title="Foco" value="Enterprise Sales e Governança" />
            </div>
          </Section>

          <Section title="◉ SMART MONEY & VALOR AGREGADO">
            <Benefit title="Enterprise Sales" text="Conexões comerciais e experiência em grandes contas." />
            <Benefit title="Preparação para Series A" text="Apoio na estruturação da rodada e relacionamento com investidores." />
            <Benefit title="Governança" text="Experiência para apoiar decisões estratégicas e estruturação societária." />
          </Section>

          <Section title="◉ TRACK RECORD & PORTFÓLIO">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Stat value="+15 anos" label="Experiência FinTech" />
              <Stat value="R$ 1.5M" label="Ticket máximo" />
              <Stat value="8+" label="Startups no portfólio" />
            </div>
          </Section>

          <div className="mt-3 rounded-xl border border-pink-400/20 bg-[#260817] p-3">
            <h2 className="flex items-center gap-1.5 text-[9px] text-pink-300 sm:text-xs">
              <ShieldAlert size={13} />
              CRITÉRIOS DE DESALINHAMENTO
            </h2>
            <p className="mt-2 text-[8px] leading-4 text-white/65 sm:text-[9px]">
              Avaliar estágio da rodada, governança e aderência aos critérios de investimento antes da conexão.
            </p>
          </div>

          <button className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 text-[10px] font-bold text-white hover:bg-emerald-500">
            <Heart size={14} fill="currentColor" /> Conectar
          </button>

          <button onClick={() => router.back()} className="mt-2 h-9 w-full rounded-lg bg-white/10 text-[9px] text-white/70 hover:bg-white/15">
            Voltar
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="mt-3 rounded-xl bg-[#111827] p-3 sm:p-4"><h2 className="mb-2 text-[10px] text-blue-300 sm:text-xs">{title}</h2>{children}</div>;
}

function Info({ title, value }: { title: string; value: string }) {
  return <div className="rounded-lg bg-[#080d19] p-2.5"><p className="text-[7px] text-white/40">{title}</p><p className="mt-1 text-[9px] text-white sm:text-[10px]">{value}</p></div>;
}

function Benefit({ title, text }: { title: string; text: string }) {
  return <div className="mb-2 rounded-lg bg-[#080d19] p-2.5 last:mb-0"><p className="text-[8px] text-white sm:text-[9px]">{title}</p><p className="mt-1 text-[7px] leading-4 text-white/45 sm:text-[8px]">{text}</p></div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-lg bg-[#080d19] p-3 text-center"><p className="text-sm font-bold text-white">{value}</p><p className="mt-1 text-[7px] text-white/40 sm:text-[8px]">{label}</p></div>;
}
