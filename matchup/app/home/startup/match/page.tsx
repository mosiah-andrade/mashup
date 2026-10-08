"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Check, Eye, MessageSquare, Sparkles } from "lucide-react";

export default function MatchStartup() {
  const router = useRouter();

  return (
    <section className="relative min-h-full w-full overflow-y-auto bg-white">
      <div className="flex min-h-full items-center justify-center px-3 py-8 pb-24 sm:px-6 lg:px-10">
        <div className="w-full max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500" />

          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[8px] font-semibold text-indigo-700 sm:text-[9px]">
                <Sparkles size={11} /> SINERGIA MÚTUA CONFIRMADA
              </span>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">✨ Novo Match Realizado!</h1>
              <p className="mx-auto mt-1 max-w-[560px] text-[10px] leading-5 text-slate-500 sm:text-xs md:text-sm">
                Você e o investidor demonstraram interesse mútuo em construir uma parceria estratégica.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
              <ProfileCard name="FinFlow" image="/images/finflow.jpg" verified subtitle="Startup • FinTech B2B" detail="São Paulo, BR • Seed" items={[["Captação:", "R$ 1.5M"], ["ARR:", "R$ 1.2M"]]} tags={["IA Bancária", "+18% MoM", "CVM 88"]} />
              <div className="mx-auto flex flex-col items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg sm:h-12 sm:w-12"><Check size={20} strokeWidth={3} /></div>
                <span className="text-center text-[7px] font-bold uppercase leading-3 text-indigo-600">MatchUp<br />Confirmado</span>
              </div>
              <ProfileCard name="Carlos Mendes" image="/images/carlos.jpg" verified subtitle="Investidor Anjo Ativo" detail="Mendes Syndicate • São Paulo" items={[["Tese:", "B2B SaaS & FinTech"], ["Ticket:", "R$ 250k - R$ 1.5M"]]} tags={["Enterprise Sales", "Series A Prep", "Governança"]} />
            </div>

            <div className="mt-5 rounded-xl bg-[#eef4ff] p-3 sm:p-4">
              <h2 className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-800 sm:text-xs"><Sparkles size={13} className="text-indigo-600" />Por que este match tem alto potencial de aceleração?</h2>
              <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
                <Reason title="Tese e Mercado Compatilhados" text="Interesse em IA, FinTech, B2B SaaS e expansão na América Latina." />
                <Reason title="Smart Money" text="Experiência do investidor em Enterprise Sales, Governança e preparação para Series A." />
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
              <button onClick={() => router.push("/home/mensagens?user=carlos")} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-[10px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:bg-blue-700 sm:text-[11px]">
                <MessageSquare size={14} /> Iniciar Conversa no Chat
              </button>
              <button onClick={() => router.push("/home/startup/detalhes")} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-blue-50 px-5 text-[10px] font-semibold text-slate-700 hover:bg-blue-100 sm:text-[11px]">
                <Eye size={14} /> Explorar Perfil Completo do Investidor
              </button>
            </div>

            <button onClick={() => router.push("/home/startup")} className="mx-auto mt-4 flex items-center gap-1 text-[8px] text-slate-400 hover:text-slate-600 sm:text-[9px]">
              Continuar descobrindo novas oportunidades <ArrowRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ name, image, verified, subtitle, detail, items, tags }: {
  name: string; image: string; verified?: boolean; subtitle: string; detail: string; items: [string, string][]; tags: string[];
}) {
  return (
    <div className="relative rounded-xl bg-[#eef4ff] p-3 sm:p-4">
      <div className="flex items-center gap-2.5">
        <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white sm:h-11 sm:w-11" />
        <div className="min-w-0">
          <h3 className="flex items-center gap-1 text-[12px] font-semibold text-slate-800 sm:text-sm">
            <span className="truncate">{name}</span>{verified && <span className="shrink-0 text-blue-600">✓</span>}
          </h3>
          <p className="text-[8px] text-emerald-600 sm:text-[9px]">{subtitle}</p>
          <p className="truncate text-[8px] text-slate-500 sm:text-[9px]">{detail}</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {items.map(([label, value]) => <div key={label} className="rounded-lg bg-white px-2 py-1.5"><p className="text-[7px] text-slate-500">{label}</p><p className="mt-0.5 text-[8px] font-semibold text-slate-700">{value}</p></div>)}
      </div>
      <div className="mt-2 flex flex-wrap gap-1">{tags.map(tag => <span key={tag} className="rounded bg-white px-1.5 py-1 text-[6px] font-medium text-blue-700 sm:text-[7px]">{tag}</span>)}</div>
    </div>
  );
}

function Reason({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg bg-white p-2.5"><p className="flex items-center gap-1 text-[8px] font-semibold text-slate-800 sm:text-[9px]"><Check size={11} className="text-emerald-500" />{title}</p><p className="mt-1 text-[8px] leading-4 text-slate-500 sm:text-[9px]">{text}</p></div>;
}
