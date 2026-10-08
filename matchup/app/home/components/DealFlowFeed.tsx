"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Heart, RotateCcw, Star, X } from "lucide-react";
import type { Role } from "../../../lib/types";
import { getProfilesForRole } from "../../../lib/mock-data";
import { createMockMatch, loadMockState, markAsPassed, resetPassed, toggleFavorite } from "../../../lib/mock-store";

export default function DealFlowFeed({ role }: { role: Role }) {
  const router = useRouter();
  const profiles = useMemo(() => getProfilesForRole(role), [role]);
  const [passed, setPassed] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const state = loadMockState();
    setPassed(state.passed);
    setFavorites(state.favorites);
  }, []);

  const visibleProfiles = profiles.filter((profile) => !passed.includes(profile.id));
  const profile = visibleProfiles[currentIndex];

  useEffect(() => {
    if (currentIndex >= visibleProfiles.length && visibleProfiles.length > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, visibleProfiles.length]);

  const advance = () => {
    setCurrentIndex((index) => (index + 1) % Math.max(visibleProfiles.length, 1));
  };

  const pass = () => {
    if (!profile) return;
    markAsPassed(profile.id);
    setPassed((current) => [...current, profile.id]);
    setCurrentIndex(0);
  };

  const favorite = () => {
    if (!profile) return;
    const active = toggleFavorite(profile.id);
    setFavorites((current) =>
      active ? [...current, profile.id] : current.filter((id) => id !== profile.id),
    );
  };

  const match = () => {
    if (!profile) return;
    createMockMatch(profile.id);
    router.push("/home/" + role + "/match?profile=" + encodeURIComponent(profile.id));
  };

  const openDetails = () => {
    if (!profile) return;
    router.push("/home/" + role + "/detalhes?profile=" + encodeURIComponent(profile.id));
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes((event.target as HTMLElement)?.tagName)) return;
      if (event.key === "ArrowLeft") pass();
      if (event.key === "ArrowRight") match();
      if (event.key.toLowerCase() === "i") openDetails();
      if (event.key === " ") {
        event.preventDefault();
        advance();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  if (!profile) {
    return (
      <div className="flex h-full min-h-[620px] w-full items-center justify-center bg-white px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-blue-600">
            <Heart size={24} />
          </div>
          <h1 className="mt-4 text-xl font-bold text-slate-900">Você chegou ao fim do Deal Flow</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Você já avaliou todos os perfis disponíveis nesta simulação.
          </p>
          <button
            type="button"
            onClick={() => {
              resetPassed(profiles.map((item) => item.id));
              setPassed([]);
              setCurrentIndex(0);
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <RotateCcw size={15} /> Recomeçar
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(profile.id);
  const accent = role === "investidor" ? "emerald" : "violet";

  return (
    <div className="relative flex h-full min-h-[620px] w-full flex-col items-center overflow-hidden bg-white px-4">
      <div className="mt-[clamp(20px,5vh,58px)] w-full max-w-[600px]">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-white shadow-sm">
            ⚡ {profile.matchScore}% Sinergia de Tese
          </span>
          <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[10px] text-white">
            {currentIndex + 1} / {visibleProfiles.length}
          </span>
        </div>

        <article className="relative h-[clamp(500px,70vh,610px)] overflow-hidden rounded-[22px] bg-slate-900 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <img src={profile.image} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-[#020617]/95" />

          <div className="absolute left-3 right-3 top-3 flex gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} className={"h-1 flex-1 rounded-full " + (index === 0 ? "bg-white" : "bg-white/35")} />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-500/90 px-2 py-1 text-[9px] font-medium text-white">
                ● Perfil verificado
              </span>
              <span className="text-[9px] text-white/85">● Ativo no Deal Flow</span>
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-[25px] font-bold text-white">{profile.name}</h1>
              {profile.verified && <span className="text-blue-300">✦</span>}
            </div>
            <p className="mt-1 text-[10px] text-white/75">{profile.headline}</p>
            <p className="mt-1 text-[9px] text-white/65">
              {profile.location} • {profile.stage}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {profile.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
                  <p className="text-[8px] uppercase tracking-wide text-white/55">{metric.label}</p>
                  <p className={"mt-1 text-[12px] font-semibold " + (
                    metric.accent === "green" ? "text-emerald-400" :
                    metric.accent === "purple" ? "text-violet-300" : "text-white"
                  )}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 max-w-[480px] text-[10px] leading-[15px] text-white/75">{profile.description}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {profile.tags.map((tag) => (
                <span key={tag} className="rounded-lg bg-white/10 px-2 py-1 text-[8px] font-semibold text-white/85">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={openDetails}
            aria-label="Abrir detalhes do perfil"
            className="absolute bottom-40 right-5 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
          >
            <ChevronRight size={18} />
          </button>
        </article>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ActionButton label="Desfazer" onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))} icon={<RotateCcw size={18} />} />
        <ActionButton label="Passar" onClick={pass} icon={<X size={22} />} danger />
        <ActionButton label={isFavorite ? "Remover favorito" : "Favoritar"} onClick={favorite} icon={<Star size={18} fill={isFavorite ? "currentColor" : "none"} />} favorite={isFavorite} />
        <button
          type="button"
          onClick={match}
          aria-label="Dar match"
          title="Dar match"
          className="grid h-12 w-12 place-items-center rounded-full bg-emerald-400 text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] transition hover:scale-110 hover:bg-emerald-500"
        >
          <Heart size={22} fill="currentColor" />
        </button>
        <ActionButton label="Detalhes" onClick={openDetails} icon={<ChevronRight size={18} />} />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3 rounded-full bg-[#273246] px-4 py-2 text-[8px] text-white shadow-lg">
        <span className="font-semibold">ATALHOS</span>
        <span>← Passar</span>
        <span>→ Match</span>
        <span>I Detalhes</span>
        <span>Espaço Próximo perfil</span>
      </div>
    </div>
  );
}

function ActionButton({
  label,
  onClick,
  icon,
  danger,
  favorite,
}: {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  danger?: boolean;
  favorite?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={"grid h-11 w-11 place-items-center rounded-full border bg-white shadow-md transition hover:scale-110 " + (
        danger ? "border-red-100 text-red-500" :
        favorite ? "border-violet-200 text-violet-600" :
        "border-slate-200 text-slate-600"
      )}
    >
      {icon}
    </button>
  );
}
