"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Heart, ShieldAlert } from "lucide-react";
import { createMockMatch } from "../../../lib/mock-store";
import { getProfilesForRole } from "../../../lib/mock-data";
import type { Role } from "../../../lib/types";

export default function ProfileDetails({ role }: { role: Role }) {
  return (
    <Suspense fallback={<div className="h-full bg-white" />}>
      <ProfileDetailsContent role={role} />
    </Suspense>
  );
}

function ProfileDetailsContent({ role }: { role: Role }) {
  const router = useRouter();
  const params = useSearchParams();
  const requestedId = params.get("profile");
  const candidates = getProfilesForRole(role);
  const fallback = candidates[0];
  const profile = candidates.find((item) => item.id === requestedId) ?? fallback;

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
        <div className="mx-auto w-full max-w-[780px] rounded-2xl border border-slate-100 bg-white p-3 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-[10px] text-slate-500 sm:text-xs">
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[var(--vermelho-2)]" /> DOSSIÊ DE {profile.kind === "startup" ? "INVESTIMENTO" : "INVESTIDOR"}</span>
            <button type="button" onClick={() => router.back()} className="rounded-full bg-slate-100 px-3 py-1.5 transition hover:bg-slate-200">Fechar</button>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
            <img src={profile.image} alt={profile.name} className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14" />
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-sm font-bold sm:text-base">{profile.name}</h1>
              <p className="mt-0.5 truncate text-[9px] text-slate-500 sm:text-xs">{profile.headline}</p>
              <p className="text-[8px] text-slate-500 sm:text-[10px]">{profile.location} • {profile.stage}</p>
            </div>
            <div className="rounded-lg bg-[var(--bege-2)] px-3 py-1.5 text-center text-[8px] font-bold text-[var(--vermelho-2)]">MATCH<br />{profile.matchScore}%</div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {profile.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--bege-3)] bg-[var(--bege-2)] px-2.5 py-1 text-[8px] text-slate-700">{tag}</span>)}
          </div>

          <div className="mt-3 rounded-xl border border-[var(--bege-3)] bg-[var(--bege-2)]/60 p-3 sm:p-4">
            <h2 className="text-[10px] font-semibold text-[var(--vermelho-2)] sm:text-xs">✓ Por que este perfil tem {profile.matchScore}% de aderência?</h2>
            <p className="mt-2 text-[9px] leading-4 text-slate-600 sm:text-[10px] sm:leading-5">{profile.description}</p>
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

          <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <h2 className="flex items-center gap-1.5 text-[9px] text-[var(--vermelho-2)] sm:text-xs"><ShieldAlert size={13} /> CRITÉRIOS DE DESALINHAMENTO</h2>
            <ul className="mt-2 space-y-1 text-[8px] leading-4 text-slate-600 sm:text-[9px]">
              {profile.details.dealBreakers.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
            <button type="button" onClick={connect} className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[var(--vermelho-2)] text-[10px] font-bold text-white transition hover:bg-[var(--vermelho-1)]">
              <Heart size={14} fill="currentColor" /> Conectar e dar Match
            </button>
            <button type="button" onClick={() => router.back()} className="h-10 rounded-lg border border-slate-200 bg-white px-6 text-[9px] text-slate-600 transition hover:bg-slate-50">Voltar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-3 rounded-xl border border-slate-100 bg-white p-3 sm:p-4"><h2 className="mb-2 text-[10px] font-semibold text-[var(--vermelho-2)] sm:text-xs">{title}</h2>{children}</section>;
}

function Info({ value }: { value: string }) {
  return <div className="rounded-lg bg-slate-50 p-2.5 text-[9px] leading-4 text-slate-700 sm:text-[10px]">{value}</div>;
}

function Benefit({ text }: { text: string }) {
  return <div className="mb-2 rounded-lg bg-slate-50 p-2.5 text-[8px] text-slate-700 last:mb-0 sm:text-[9px]">{text}</div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-lg bg-[var(--bege-2)] p-3 text-center"><p className="text-sm font-bold text-[var(--vermelho-2)]">{value}</p><p className="mt-1 text-[7px] text-slate-500 sm:text-[8px]">{label}</p></div>;
}
