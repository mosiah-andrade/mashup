"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Heart, ShieldAlert } from "lucide-react";
import { createMockMatch } from "../../../lib/mock-store";
import { getProfile, getProfilesForRole } from "../../../lib/mock-data";
import type { Role } from "../../../lib/types";

export default function ProfileDetails({ role }: { role: Role }) {
  const router = useRouter();
  const params = useSearchParams();
  const requestedId = params.get("profile");
  const fallback = getProfilesForRole(role)[0];
  const profile = getProfile(requestedId) ?? fallback;

  if (!profile) {
    router.replace("/home/" + role);
    return null;
  }

  const connect = () => {
    createMockMatch(profile.id);
    router.push("/home/" + role + "/match?profile=" + encodeURIComponent(profile.id));
  };

  return (
    <section className="relative h-full min-h-0 w-full overflow-hidden bg-white">
      <div className="h-full w-full overflow-y-auto px-3 pb-24 pt-4 sm:px-6 sm:pt-6 lg:px-10">
        <div className="mx-auto w-full max-w-[780px] rounded-2xl bg-[#020617] p-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-[10px] text-white/70 sm:text-xs">
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> DOSSIÊ DE {profile.kind === "startup" ? "INVESTIMENTO" : "INVESTIDOR"}</span>
            <button type="button" onClick={() => router.back()} className="rounded-full bg-white/10 px-3 py-1.5 transition hover:bg-white/15">Fechar</button>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111827] p-3 sm:p-4">
            <img src={profile.image} alt={profile.name} className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14" />
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-sm font-bold sm:text-base">{profile.name}</h1>
              <p className="mt-0.5 truncate text-[9px] text-white/55 sm:text-xs">{profile.headline}</p>
              <p className="text-[8px] text-white/55 sm:text-[10px]">{profile.location} • {profile.stage}</p>
            </div>
            <div className="rounded-lg bg-emerald-400 px-3 py-1.5 text-center text-[8px] font-bold text-slate-950">MATCH<br />{profile.matchScore}%</div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {profile.tags.map((tag) => <span key={tag} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[8px] text-blue-200">{tag}</span>)}
          </div>

          <div className="mt-3 rounded-xl border border-emerald-400/10 bg-[#05282d] p-3 sm:p-4">
            <h2 className="text-[10px] font-semibold text-emerald-300 sm:text-xs">✓ Por que este perfil tem {profile.matchScore}% de aderência?</h2>
            <p className="mt-2 text-[9px] leading-4 text-white/65 sm:text-[10px] sm:leading-5">{profile.description}</p>
          </div>

          <Section title="◉ TESE / FOCO">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {profile.details.thesis.map((item) => <Info key={item} value={item} />)}
            </div>
          </Section>

          <Section title="◉ SMART MONEY & VALOR AGREGADO">
            {profile.details.smartMoney.map((item) => <Benefit key={item} text={item} />)}
          </Section>

          <Section title="◉ TRACK RECORD">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {profile.details.trackRecord.map((item) => <Stat key={item.label} value={item.value} label={item.label} />)}
            </div>
          </Section>

          <div className="mt-3 rounded-xl border border-pink-400/20 bg-[#260817] p-3">
            <h2 className="flex items-center gap-1.5 text-[9px] text-pink-300 sm:text-xs"><ShieldAlert size={13} /> CRITÉRIOS DE DESALINHAMENTO</h2>
            <ul className="mt-2 space-y-1 text-[8px] leading-4 text-white/65 sm:text-[9px]">
              {profile.details.dealBreakers.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
            <button type="button" onClick={connect} className="flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-400 text-[10px] font-bold text-slate-950 transition hover:bg-emerald-300">
              <Heart size={14} fill="currentColor" /> Conectar e dar Match
            </button>
            <button type="button" onClick={() => router.back()} className="h-10 rounded-lg bg-white/10 px-6 text-[9px] text-white/70 transition hover:bg-white/15">Voltar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-3 rounded-xl bg-[#111827] p-3 sm:p-4"><h2 className="mb-2 text-[10px] text-blue-300 sm:text-xs">{title}</h2>{children}</section>;
}

function Info({ value }: { value: string }) {
  return <div className="rounded-lg bg-[#080d19] p-2.5 text-[9px] leading-4 text-white sm:text-[10px]">{value}</div>;
}

function Benefit({ text }: { text: string }) {
  return <div className="mb-2 rounded-lg bg-[#080d19] p-2.5 text-[8px] text-white last:mb-0 sm:text-[9px]">{text}</div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-lg bg-[#080d19] p-3 text-center"><p className="text-sm font-bold text-white">{value}</p><p className="mt-1 text-[7px] text-white/40 sm:text-[8px]">{label}</p></div>;
}
