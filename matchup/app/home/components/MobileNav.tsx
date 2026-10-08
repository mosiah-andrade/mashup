"use client";

import { Heart, MessageSquare, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();
  const role = pathname.includes("/startup") ? "startup" : "investidor";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 grid h-14 grid-cols-3 border-t border-slate-200 bg-white/95 px-2 shadow-[0_-8px_20px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
      <button type="button" onClick={() => router.push("/home/" + role)} className={"flex flex-col items-center justify-center gap-0.5 text-[9px] font-semibold " + (!pathname.includes("/mensagens") ? "text-blue-700" : "text-slate-500")}><Heart size={17} />Matches</button>
      <button type="button" onClick={() => router.push("/home/mensagens")} className={"flex flex-col items-center justify-center gap-0.5 text-[9px] font-semibold " + (pathname.includes("/mensagens") ? "text-blue-700" : "text-slate-500")}><MessageSquare size={17} />Mensagens</button>
      <button type="button" onClick={() => router.push("/onboarding/" + role)} className="flex flex-col items-center justify-center gap-0.5 text-[9px] font-semibold text-slate-500"><UserRound size={17} />Perfil</button>
    </nav>
  );
}
