"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronDown,
  Heart,
  Check,
  ShieldAlert,
} from "lucide-react";

export default function DetalhesInvestidor() {
  const router = useRouter();

  return (
    <section className="h-full w-full bg-white relative overflow-hidden flex items-center justify-center">
      <div className="w-[min(255px,calc(100vw-340px))] max-h-[calc(100vh-145px)] overflow-y-auto rounded-[11px] bg-[#020617] text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] p-2.5">
        <div className="flex items-center justify-between text-[6px] text-white/70 mb-2">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            DOSSIÊ DE INVESTIMENTO
          </span>
          <button className="px-2 py-1 rounded-full bg-white/10 flex items-center gap-1">
            Fechar Detalhes <ChevronDown size={7} />
          </button>
        </div>

        <div className="rounded-lg bg-[#111827] border border-white/10 p-2 flex items-center gap-2">
          <img src="/beatriz-ramos.png" alt="Camila Silveira" className="w-7 h-7 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <h1 className="text-[9px] font-bold">Camila Silveira</h1>
            <p className="text-[5.5px] text-white/55">Ex-VP • Investidora Anjo • Syndicate</p>
            <p className="text-[5.5px] text-white/55">Brasil</p>
          </div>
          <div className="rounded-md bg-emerald-400 px-2 py-1 text-center text-[6px] font-bold text-white">
            MATCH<br />98%
          </div>
        </div>

        <div className="flex gap-1 mt-2 flex-wrap">
          <span className="px-1.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[5px] text-emerald-300">Investidora Anjo Qualificada CVM 88</span>
          <span className="px-1.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-[5px] text-blue-300">IA & Automação • Syndicate</span>
          <span className="px-1.5 py-1 rounded-full bg-white/5 text-[5px] text-white/70">São Paulo, SP</span>
        </div>

        <div className="mt-2 rounded-lg bg-[#05282d] border border-emerald-400/10 p-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[6px] font-semibold text-emerald-300">✓ Por que o Match com a FinFlow AI é 98/100?</h2>
            <span className="rounded-full bg-emerald-400 px-1.5 py-0.5 text-[4.5px] font-bold text-[#022c22]">Super Aderente</span>
          </div>
          <p className="text-[5.5px] leading-[8px] text-white/65 mt-1">
            Alinhamento exato entre a tese, histórico e experiência da investidora com automação, backoffice financeiro e conexão com instituições financeiras.
          </p>
        </div>

        <div className="mt-2 rounded-lg bg-[#111827] p-2">
          <h2 className="text-[6px] text-blue-300 mb-1">◉ TESE DE INVESTIMENTO & FOCO</h2>
          <div className="grid grid-cols-2 gap-1">
            <Info title="Verticais Principais" value="Fintech, IA Aplicada, B2B SaaS" />
            <Info title="Estágio Alvo" value="Seed & Pré-Seed" />
            <Info title="Cheque Inicial" value="R$ 100k - R$ 250k" />
            <Info title="Cheques Sindicais" value="Até R$ 1.5M / rodada" />
          </div>
          <div className="mt-1 text-[5px] text-white/45 flex justify-between">
            <span>Alocação Anual Disponível</span>
            <b className="text-emerald-300">R$ 800k (2024/2025)</b>
          </div>
        </div>

        <div className="mt-2 rounded-lg bg-[#111827] p-2">
          <h2 className="text-[6px] text-amber-300 mb-1">◉ SMART MONEY & VALOR AGREGADO</h2>
          <Benefit title="Conexões Comerciais & C-Level Bancos" text="Pontes com decisores de grandes contas financeiras." />
          <Benefit title="Governança & Cap Table Blindado" text="Experiência com estruturação societária e governança." />
          <Benefit title="GTI Enterprise & Venda Consultiva B2B" text="Histórico em operações complexas e ciclos longos." />
        </div>

        <div className="mt-2 rounded-lg bg-[#111827] p-2">
          <h2 className="text-[6px] text-blue-300 mb-1">◉ TRACK RECORD & PORTFÓLIO</h2>
          <div className="grid grid-cols-3 gap-1">
            <Stat value="8" label="Startups Investidas" />
            <Stat value="1 Exit" label="M&A / Liquidação" />
            <Stat value="+15 anos" label="Setor Financeiro" />
          </div>
        </div>

        <div className="mt-2 rounded-lg bg-[#260817] border border-pink-400/20 p-2">
          <h2 className="text-[6px] text-pink-300 flex items-center gap-1"><ShieldAlert size={7} /> CRITÉRIOS ELIMINATÓRIOS (DEAL BREAKERS)</h2>
          <p className="text-[5.5px] leading-[8px] text-white/65 mt-1">
            Não investe em negócios sem compliance ou com dependência excessiva de um único cliente.
          </p>
          <p className="text-[5.5px] leading-[8px] text-white/65">
            Mercados intensivos ou modelos dependentes de logística física.
          </p>
        </div>

        <button className="mt-2 w-full h-7 rounded-md bg-emerald-400 text-[6px] font-bold flex items-center justify-center gap-1 text-white">
          <Heart size={8} fill="currentColor" /> Conectar
        </button>
        <button
          onClick={() => router.back()}
          className="mt-1 w-full h-5 rounded-md bg-white/10 text-[5px] text-white/70"
        >
          Voltar
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#273246] px-4 py-2 text-[6px] text-white flex items-center gap-3">
        <span>ATALHOS</span>
        <span className="text-white/40">|</span>
        <span>← Passar</span>
        <span>→ Match</span>
        <span>I Detalhes do Pitch</span>
        <span>J Fechar</span>
        <span>Espaço Próxima Foto</span>
      </div>
    </section>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-md bg-[#080d19] p-1.5">
      <p className="text-[4.5px] text-white/40">{title}</p>
      <p className="text-[5.5px] text-white mt-0.5">{value}</p>
    </div>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md bg-[#080d19] p-1.5 mb-1 last:mb-0">
      <p className="text-[5.5px] text-white">{title}</p>
      <p className="text-[4.8px] text-white/45 mt-0.5">{text}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md bg-[#080d19] p-2 text-center">
      <p className="text-[8px] font-bold text-white">{value}</p>
      <p className="text-[4.5px] text-white/40 mt-0.5">{label}</p>
    </div>
  );
}
