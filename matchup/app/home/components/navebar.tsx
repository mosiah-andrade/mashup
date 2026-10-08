"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Bell, Check, ChevronDown, LogOut, Settings2 } from "lucide-react";
import Image from "next/image";
import type { Role } from "../../../lib/types";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [role, setRole] = useState<Role>(pathname.includes("/startup") ? "startup" : "investidor");

  useEffect(() => {
    const stored = window.localStorage.getItem("matchup-role") as Role | null;
    if (stored === "startup" || stored === "investidor") setRole(stored);
  }, [pathname]);

  const changeMode = (newRole: Role) => {
    window.localStorage.setItem("matchup-role", newRole);
    setRole(newRole);
    setOpen(false);
    router.push("/home/" + newRole);
  };

  return (
    <header className="relative z-30 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
      <button type="button" onClick={() => router.push("/home/" + role)} className="text-xl font-black tracking-tight text-[#004ac6]">
        MatchUp
      </button>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-8 items-center gap-2 rounded-lg bg-slate-100 px-2.5 text-[11px] font-bold text-slate-700 transition hover:bg-slate-200">
            <span className={"h-2 w-2 rounded-full " + (role === "investidor" ? "bg-emerald-500" : "bg-blue-500")} />
            {role === "investidor" ? "Modo Investidor" : "Modo Startup"}
            <ChevronDown size={13} />
          </button>
          {open && (
            <div className="absolute right-0 top-10 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              <button type="button" onClick={() => changeMode("investidor")} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-50"><span className="h-2 w-2 rounded-full bg-emerald-500" />Modo Investidor</button>
              <button type="button" onClick={() => changeMode("startup")} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-50"><span className="h-2 w-2 rounded-full bg-blue-500" />Modo Startup</button>
            </div>
          )}
        </div>

        <div className="relative">
          <button type="button" onClick={() => setRead((value) => !value)} aria-label="Notificações" className="relative rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
            <IoMdNotificationsOutline className="h-6 w-6" />
            {!read && <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />}
          </button>
          {read && (
            <div className="absolute right-0 top-11 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
              <div className="flex items-center justify-between"><p className="text-xs font-bold">Notificações</p><button onClick={() => setRead(false)} className="text-[9px] text-blue-600">Fechar</button></div>
              <div className="mt-3 rounded-lg bg-blue-50 p-3 text-[10px] text-slate-600"><Bell size={13} className="mb-1 text-blue-600" />Você tem novos perfis compatíveis no Deal Flow.</div>
              <div className="mt-2 flex items-center gap-2 text-[9px] text-emerald-700"><Check size={12} /> Dados mockados prontos para integração.</div>
            </div>
          )}
        </div>

        <div className="relative">
          <button type="button" onClick={() => setProfileOpen((value) => !value)} aria-label="Abrir menu do perfil" className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200">
            <Image src="/beatriz-ramos.png" alt="Perfil" width={40} height={40} className="rounded-full border-2 border-blue-300" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 top-12 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              <button type="button" onClick={() => router.push("/onboarding/" + role)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-50"><Settings2 size={14} />Editar perfil</button>
              <button type="button" onClick={() => router.push("/login")} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-red-600 hover:bg-red-50"><LogOut size={14} />Sair</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
