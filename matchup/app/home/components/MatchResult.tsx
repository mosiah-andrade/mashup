"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Check, Eye, MessageSquare, Sparkles } from "lucide-react";
import { createMockMatch } from "../../../lib/mock-store";
import { getProfile, getProfilesForRole } from "../../../lib/mock-data";
import type { Role } from "../../../lib/types";

export default function MatchResult({ role }: { role: Role }) {
  const router = useRouter();
  const params = useSearchParams();
  const fallback = getProfilesForRole(role)[0];
  const profile = getProfile(params.get("profile")) ?? fallback;

  useMemo(() => {
    if (profile) createMockMatch(profile.id);
  }, [profile]);

  if (!profile) return null;

  const detailsPath = "/home/" + role + "/detalhes?profile=" + encodeURIComponent(profile.id);
  const chatPath = "/home/mensagens?user=" + encodeURIComponent(profile.id);

  return (
    <section className="relative min-h-full w-full overflow-y-auto bg-white">
      <div className="flex min-h-full items-center justify-center px-3 py-8 pb-24 sm:px-6 lg:px-10">
        <div className="w-full max-w-[780px] overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500" />
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[8px] font-semibold text-indigo-700 sm:text-[9px]"><Sparkles size={11} /> SINERGIA MÚTUA CONFIRMADA</span>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">✨ Novo Match Realizado!</h1>
              <p className="mx-auto mt-1 max-w-[560px] text-[10px] leading-5 text-slate-500 sm:text-sm">O interesse foi registrado e a conversa está liberada no mock do Deal Flow.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
              <ProfileCard name={role === "investidor" ? "Você • Startup" : "Você • Startup"} image="/images/finflow.jpg" detail={role === "investidor" ? "FinFlow • Seed" : "Seu perfil de startup"} />
              <div className="mx-auto flex flex-col items-center gap-1"><div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-600 text-white shadow-lg sm:h-12 sm:w-12"><Check size={20} strokeWidth={3} /></div><span className="text-center text-[7px] font-bold uppercase leading-3 text-indigo-600">MatchUp<br />Confirmado</span></div>
              <ProfileCard name={profile.name} image={profile.image} detail={profile.headline} match={profile.matchScore + "% Match"} />
            </div>

            <div className="mt-5 rounded-xl bg-[#eef4ff] p-3 sm:p-4">
              <h2 className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-800 sm:text-xs"><Sparkles size={13} className="text-indigo-600" /> Por que este match tem alto potencial?</h2>
              <div className="mt-2 grid gap-2 md:grid-cols-2">
                <Reason title="Tese compartilhada" text={profile.details.thesis.join(" • ")} />
                <Reason title="Smart Money" text={profile.details.smartMoney.join(" • ")} />
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
              <button type="button" onClick={() => router.push(chatPath)} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-[10px] font-semibold text-white transition hover:bg-blue-700 sm:text-[11px]"><MessageSquare size={14} /> Iniciar Conversa</button>
              <button type="button" onClick={() => router.push(detailsPath)} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-blue-50 px-5 text-[10px] font-semibold text-slate-700 transition hover:bg-blue-100 sm:text-[11px]"><Eye size={14} /> Explorar Perfil</button>
            </div>

            <button type="button" onClick={() => router.push("/home/" + role)} className="mx-auto mt-4 flex items-center gap-1 text-[8px] text-slate-400 transition hover:text-slate-600 sm:text-[9px]">Continuar descobrindo novas oportunidades <ArrowRight size={10} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ name, image, detail, match }: { name: string; image: string; detail: string; match?: string }) {
  return <div className="relative rounded-xl bg-[#eef4ff] p-3 sm:p-4">{match && <span className="absolute right-3 top-3 rounded-full bg-violet-100 px-2 py-1 text-[7px] font-bold text-violet-700">{match}</span>}<div className="flex items-center gap-2.5"><img src={image} alt={name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white sm:h-11 sm:w-11" /><div className="min-w-0"><h3 className="truncate text-[12px] font-semibold text-slate-800 sm:text-sm">{name}</h3><p className="truncate text-[8px] text-slate-500 sm:text-[9px]">{detail}</p></div></div></div>;
}

function Reason({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg bg-white p-2.5"><p className="flex items-center gap-1 text-[8px] font-semibold text-slate-800 sm:text-[9px]"><Check size={11} className="text-emerald-500" />{title}</p><p className="mt-1 text-[8px] leading-4 text-slate-500 sm:text-[9px]">{text}</p></div>;
}
