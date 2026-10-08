"use client";

import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Heart,
  ShieldAlert,
} from "lucide-react";

export default function DetalhesInvestidor() {
  const router = useRouter();

  return (
    <section className="relative h-full min-h-0 w-full overflow-hidden bg-white">
      {/* Área principal */}
      <div className="h-full w-full overflow-y-auto px-3 pb-24 pt-4 sm:px-6 sm:pt-6 lg:px-10">
        <div
          className="
            mx-auto
            w-full
            max-w-[760px]
            rounded-xl
            bg-[#020617]
            p-3
            text-white
            shadow-[0_18px_40px_rgba(0,0,0,0.28)]
            sm:p-4
            md:p-5
          "
        >
          {/* Cabeçalho */}
          <div className="mb-3 flex items-center justify-between gap-3 text-[10px] text-white/70 sm:text-xs md:text-sm">
            <span className="flex min-w-0 items-center gap-2 font-medium">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
              <span className="truncate">
                DOSSIÊ DE INVESTIMENTO
              </span>
            </span>

            <button
              type="button"
              className="
                flex shrink-0 items-center gap-1
                rounded-full
                bg-white/10
                px-2.5 py-1.5
                text-[9px]
                transition
                hover:bg-white/15
                sm:px-3 sm:text-[10px]
              "
            >
              <span className="hidden sm:inline">
                Fechar Detalhes
              </span>

              <span className="sm:hidden">
                Fechar
              </span>

              <ChevronDown size={12} />
            </button>
          </div>

          {/* Perfil */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border border-white/10
              bg-[#111827]
              p-3
              sm:gap-4
              sm:p-4
            "
          >
            <img
              src="/beatriz-ramos.png"
              alt="Camila Silveira"
              className="
                h-11 w-11
                shrink-0
                rounded-full
                object-cover
                sm:h-14 sm:w-14
                md:h-16 md:w-16
              "
            />

            <div className="min-w-0 flex-1">
              <h1 className="truncate text-sm font-bold sm:text-base md:text-lg">
                Camila Silveira
              </h1>

              <p className="mt-0.5 truncate text-[9px] text-white/55 sm:text-[11px] md:text-xs">
                Ex-VP • Investidora Anjo • Syndicate
              </p>

              <p className="mt-0.5 text-[8px] text-white/55 sm:text-[10px]">
                Brasil
              </p>
            </div>

            <div
              className="
                shrink-0
                rounded-lg
                bg-emerald-400
                px-2.5 py-1.5
                text-center
                text-[8px]
                font-bold
                sm:px-3 sm:text-[9px]
                md:text-[10px]
              "
            >
              MATCH
              <br />
              98%
            </div>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[8px] text-emerald-300 sm:text-[9px]">
              Investidora Anjo Qualificada CVM 88
            </span>

            <span className="rounded-full border border-blue-400/30 bg-blue-500/15 px-2.5 py-1 text-[8px] text-blue-300 sm:text-[9px]">
              IA & Automação • Syndicate
            </span>

            <span className="rounded-full bg-white/5 px-2.5 py-1 text-[8px] text-white/70 sm:text-[9px]">
              São Paulo, SP
            </span>
          </div>

          {/* Match */}
          <div className="mt-3 rounded-xl border border-emerald-400/10 bg-[#05282d] p-3 sm:p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[10px] font-semibold leading-tight text-emerald-300 sm:text-xs md:text-sm">
                ✓ Por que o Match com a FinFlow AI é 98/100?
              </h2>

              <span className="w-fit shrink-0 rounded-full bg-emerald-400 px-2.5 py-1 text-[7px] font-bold text-[#022c22] sm:text-[8px]">
                Super Aderente
              </span>
            </div>

            <p className="mt-2 max-w-full text-[9px] leading-4 text-white/65 sm:max-w-[90%] sm:text-[10px] sm:leading-5 md:text-[11px]">
              Alinhamento exato entre a tese, histórico e experiência
              da investidora com automação, backoffice financeiro e
              conexão com instituições financeiras.
            </p>
          </div>

          {/* Tese */}
          <div className="mt-3 rounded-xl bg-[#111827] p-3 sm:p-4">
            <h2 className="mb-2 text-[10px] text-blue-300 sm:text-xs">
              ◉ TESE DE INVESTIMENTO & FOCO
            </h2>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Info
                title="Verticais Principais"
                value="Fintech, IA Aplicada, B2B SaaS"
              />

              <Info
                title="Estágio Alvo"
                value="Seed & Pré-Seed"
              />

              <Info
                title="Cheque Inicial"
                value="R$ 100k - R$ 250k"
              />

              <Info
                title="Cheques Sindicais"
                value="Até R$ 1.5M / rodada"
              />
            </div>

            <div className="mt-3 flex flex-col gap-1 text-[8px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-[9px]">
              <span>Alocação Anual Disponível</span>

              <b className="text-emerald-300">
                R$ 800k (2024/2025)
              </b>
            </div>
          </div>

          {/* Smart Money */}
          <div className="mt-3 rounded-xl bg-[#111827] p-3 sm:p-4">
            <h2 className="mb-2 text-[10px] text-amber-300 sm:text-xs">
              ◉ SMART MONEY & VALOR AGREGADO
            </h2>

            <div className="space-y-2">
              <Benefit
                title="Conexões Comerciais & C-Level Bancos"
                text="Pontes com decisores de grandes contas financeiras."
              />

              <Benefit
                title="Governança & Cap Table Blindado"
                text="Experiência com estruturação societária e governança."
              />

              <Benefit
                title="GTI Enterprise & Venda Consultiva B2B"
                text="Histórico em operações complexas e ciclos longos."
              />
            </div>
          </div>

          {/* Track Record */}
          <div className="mt-3 rounded-xl bg-[#111827] p-3 sm:p-4">
            <h2 className="mb-2 text-[10px] text-blue-300 sm:text-xs">
              ◉ TRACK RECORD & PORTFÓLIO
            </h2>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Stat
                value="8"
                label="Startups Investidas"
              />

              <Stat
                value="1 Exit"
                label="M&A / Liquidação"
              />

              <Stat
                value="+15 anos"
                label="Setor Financeiro"
              />
            </div>
          </div>

          {/* Deal Breakers */}
          <div className="mt-3 rounded-xl border border-pink-400/20 bg-[#260817] p-3 sm:p-4">
            <h2 className="flex items-center gap-1.5 text-[9px] text-pink-300 sm:text-[10px] md:text-xs">
              <ShieldAlert
                size={13}
                className="shrink-0"
              />

              <span>
                CRITÉRIOS ELIMINATÓRIOS (DEAL BREAKERS)
              </span>
            </h2>

            <p className="mt-2 text-[8px] leading-4 text-white/65 sm:text-[9px] sm:leading-5">
              Não investe em negócios sem compliance ou com dependência
              excessiva de um único cliente.
            </p>

            <p className="text-[8px] leading-4 text-white/65 sm:text-[9px] sm:leading-5">
              Mercados intensivos ou modelos dependentes de logística
              física.
            </p>
          </div>

          {/* Ações */}
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
            <button
              type="button"
              className="
                flex h-9
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-emerald-400
                text-[10px]
                font-bold
                text-white
                transition
                hover:bg-emerald-500
                sm:h-10
              "
            >
              <Heart
                size={13}
                fill="currentColor"
              />

              Conectar
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="
                h-9
                rounded-lg
                bg-white/10
                px-6
                text-[9px]
                text-white/70
                transition
                hover:bg-white/15
                sm:h-10
              "
            >
              Voltar
            </button>
          </div>
        </div>
      </div>

      {/* Barra de atalhos */}
      <div
        className="
          fixed
          bottom-3
          left-1/2
          z-20
          flex
          max-w-[calc(100vw-24px)]
          -translate-x-1/2
          items-center
          gap-2
          overflow-x-auto
          whitespace-nowrap
          rounded-full
          bg-[#273246]
          px-3
          py-2
          text-[7px]
          text-white
          shadow-lg
          sm:bottom-4
          sm:gap-3
          sm:px-4
          sm:text-[8px]
          md:text-[9px]
        "
      >
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

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-[#080d19] p-2.5 sm:p-3">
      <p className="text-[7px] text-white/40 sm:text-[8px]">
        {title}
      </p>

      <p className="mt-1 text-[9px] leading-4 text-white sm:text-[10px]">
        {value}
      </p>
    </div>
  );
}

function Benefit({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-lg bg-[#080d19] p-2.5 sm:p-3">
      <p className="text-[8px] font-medium text-white sm:text-[9px]">
        {title}
      </p>

      <p className="mt-1 text-[7px] leading-3.5 text-white/45 sm:text-[8px] sm:leading-4">
        {text}
      </p>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-lg bg-[#080d19] p-3 text-center">
      <p className="text-sm font-bold text-white sm:text-base">
        {value}
      </p>

      <p className="mt-1 text-[7px] text-white/40 sm:text-[8px]">
        {label}
      </p>
    </div>
  );
}