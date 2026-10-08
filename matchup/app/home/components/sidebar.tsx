"use client";

import { useMemo, useState } from "react";
import {
  Heart, SlidersHorizontal, Zap, Shield, Settings, LogOut, Plus, Search, X,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getProfile, mockConversations } from "../../../lib/mock-data";
import { getMockMatches } from "../../../lib/mock-store";
import type { Role } from "../../../lib/types";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tool, setTool] = useState<"filter" | "smart" | "security" | null>(null);
  const [search, setSearch] = useState("");
  const role = pathname.includes("/startup") ? "startup" : "investidor";
  const isMessages = pathname.includes("/home/mensagens");
  const selectedId = searchParams.get("user") || "camila";
  const matches = getMockMatches();
  const matchProfiles = matches.map((match) => getProfile(match.profileId)).filter(Boolean);
  const conversations = mockConversations
    .map((conversation) => ({ ...conversation, profile: getProfile(conversation.profileId) }))
    .filter((conversation) => conversation.profile)
    .filter((conversation) => conversation.profile!.name.toLowerCase().includes(search.toLowerCase()));

  const utilityText = useMemo(() => ({
    filter: "Filtros rápidos: estágio, vertical, ticket e aderência.",
    smart: "Smart Money prioriza experiência, governança e conexões comerciais.",
    security: "Perfis e conversas usam dados mockados; a camada está pronta para autenticação e compliance.",
  }), []);

  const toggleTool = (value: "filter" | "smart" | "security") => {
    setTool((current) => current === value ? null : value);
  };

  const openMessages = (id = "camila") => router.push("/home/mensagens?user=" + encodeURIComponent(id));
  const openMatches = () => router.push("/home/" + role);

  return (
    <aside className="flex h-full w-[270px] shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="px-2 pt-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="mb-3 flex items-center justify-between px-1">
            <button type="button" onClick={openMatches} title="Matches" className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 text-blue-700"><Heart size={17} fill="currentColor" /></button>
            <button type="button" onClick={() => toggleTool("filter")} title="Filtros" className="text-slate-600 hover:text-blue-600"><SlidersHorizontal size={17} /></button>
            <button type="button" onClick={() => toggleTool("smart")} title="Smart Money" className="text-slate-600 hover:text-blue-600"><Zap size={17} /></button>
            <button type="button" onClick={() => toggleTool("security")} title="Segurança" className="text-slate-600 hover:text-blue-600"><Shield size={17} /></button>
            <button type="button" onClick={() => router.push("/onboarding/" + role)} title="Configurações" className="text-slate-600 hover:text-blue-600"><Settings size={17} /></button>
          </div>

          {tool && (
            <div className="mb-3 rounded-xl bg-slate-50 p-3 text-[9px] text-slate-600">
              <div className="mb-1 flex items-center justify-between font-bold text-slate-800"><span>{tool === "filter" ? "Filtros" : tool === "smart" ? "Smart Money" : "Segurança"}</span><button type="button" onClick={() => setTool(null)}><X size={12} /></button></div>
              {utilityText[tool]}
            </div>
          )}

          <div className="mb-4 flex h-10 items-center rounded-xl border border-blue-100 bg-blue-50 p-1">
            <button type="button" onClick={openMatches} className={"h-full flex-1 rounded-lg text-[12px] font-medium " + (!isMessages ? "bg-white shadow-sm text-slate-700" : "text-slate-600")}>Matches <span className="ml-1 inline-grid h-4 w-4 place-items-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-700">{matches.length}</span></button>
            <button type="button" onClick={() => openMessages()} className={"h-full flex-1 rounded-lg text-[12px] font-medium " + (isMessages ? "bg-white shadow-sm text-slate-700" : "text-slate-600")}>Mensagens <span className="ml-1 inline-grid h-4 w-4 place-items-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-700">{conversations.filter((item) => item.unread).length}</span></button>
          </div>

          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[10px] font-semibold uppercase text-slate-600">Novas conexões</span>
            <button type="button" onClick={openMatches} className="text-[10px] font-medium text-blue-700">Ver todos</button>
          </div>

          <div className="flex flex-wrap items-start gap-3 overflow-x-auto px-1 pb-1 max-h-[550px] ">
            {matchProfiles.slice(0, 3).map((profile) => (
              <button key={profile!.id} type="button" onClick={() => router.push("/home/" + role + "/detalhes?profile=" + encodeURIComponent(profile!.id))} className="flex mt-4 flex-col items-center gap-1 ">
                <div className="relative">
                  <span className="absolute -top-[14px] left-1/2 z-10 -translate-x-1/2 rounded-full bg-emerald-500 px-1.5 py-[2px] text-[7px] text-white">MATCH</span>
                  <img src={profile!.image} alt={profile!.name} className="h-11 w-11 min-w-11 rounded-full border-2 border-white object-cover ring-2 ring-emerald-400" />
                </div>
                <span className="max-w-16 truncate text-[9px] text-slate-700">{profile!.name}</span>
              </button>
            ))}
            <button type="button" onClick={openMatches} className="flex shrink-0 flex-col items-center gap-1">
              <div className="grid h-11 w-11 mt-4 place-items-center rounded-full border border-dashed border-blue-300 text-blue-600"><Plus size={15} /></div>
              <span className="text-[9px] text-slate-500">Descobrir</span>
            </button>
          </div>
        </div>
      </div>

      {isMessages && (
        <div className="flex min-h-0 flex-col px-2 pt-3">
          <label className="flex h-8 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 text-slate-400">
            <Search size={14} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar conversas..." className="min-w-0 flex-1 bg-transparent text-[10px] text-slate-700 outline-none" />
          </label>
          <div className="mt-2 overflow-auto">
            {conversations.map((conversation) => (
              <button key={conversation.id} type="button" onClick={() => openMessages(conversation.profileId)} className={"flex w-full items-center gap-2 border-b border-slate-100 px-2 py-2.5 text-left transition " + (selectedId === conversation.profileId ? "border-l-[3px] border-l-blue-600 bg-blue-50" : "hover:bg-slate-50")}>
                <img src={conversation.profile!.image} alt={conversation.profile!.name} className="h-9 w-9 shrink-0 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2"><p className="truncate text-[11px] font-semibold text-slate-800">{conversation.profile!.name}</p><span className="shrink-0 text-[8px] text-blue-600">{conversation.time}</span></div>
                  <p className="truncate text-[9px] text-slate-400">{conversation.profile!.headline}</p>
                  <p className="mt-0.5 truncate text-[9px] text-slate-500">{conversation.lastMessage}</p>
                </div>
                {conversation.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto px-2 pb-2 pt-2">
        <div className="flex h-12 items-center rounded-xl bg-blue-50 px-2">
          <img src="/beatriz-ramos.png" alt="Perfil atual" className="h-8 w-8 rounded-full object-cover" />
          <div className="ml-2 min-w-0 flex-1"><p className="truncate text-[11px] font-semibold text-slate-800">Meu Perfil</p><p className="truncate text-[9px] text-blue-700">{role === "investidor" ? "Investidor" : "Startup"}</p></div>
          <button type="button" title="Sair" onClick={() => router.push("/login")} className="text-slate-500 hover:text-red-600"><LogOut size={15} /></button>
        </div>
      </div>
    </aside>
  );
}
