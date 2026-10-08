"use client";

import {
  Heart,
  SlidersHorizontal,
  Zap,
  Shield,
  Settings,
  LogOut,
  Plus,
  Search,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const matches = [
  { name: "BioMassa", image: "/images/biomassa.jpg", new: true },
  { name: "FreteNorte", image: "/images/fretenorte.jpg", new: true },
  { name: "PixCanga", image: "/images/pixcanga.jpg", new: false },
];

const conversations = [
  {
    id: "camila",
    name: "Camila Silveira",
    image: "/beatriz-ramos.png",
    role: "Angel CVM 88",
    match: "98% Match",
    preview: "Perfeito! Vamos agendar nossa conversa",
    time: "14:32",
    unread: true,
    status: "online",
  },
  {
    id: "carlos",
    name: "Carlos Mendes",
    image: "/images/carlos.jpg",
    role: "Mendes Syndicate",
    preview: "Avaliando o Pitch Deck enviado no data room.",
    time: "11:15",
  },
  {
    id: "biomassa",
    name: "BioMassa Tech",
    image: "/images/biomassa.jpg",
    role: "Agtech",
    preview: "Novo match! Inicie uma conversa com a founder.",
    time: "Ontem",
  },
  {
    id: "healthmind",
    name: "HealthMind AI",
    image: "/images/finflow.jpg",
    role: "Healthtech",
    preview: "Obrigado pela intro compartilhada.",
    time: "Terça",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isMessages = pathname.includes("/home/mensagens");
  const selectedId = searchParams.get("user") || "camila";

  const openMessages = (id = "camila") => {
    router.push(`/home/mensagens?user=${id}`);
  };

  const openMatches = () => {
    router.push("/home/investidor");
  };

  return (
    <aside className="w-[270px] h-full border-r border-slate-200 bg-white flex flex-col">
      <div className="px-2 pt-3">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-3">
          <div className="flex items-center justify-between mb-4 px-1">
            <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Heart size={17} fill="currentColor" />
            </button>
            <button className="text-slate-600 hover:text-blue-600"><SlidersHorizontal size={17} /></button>
            <button className="text-slate-600 hover:text-blue-600"><Zap size={17} /></button>
            <button className="text-slate-600 hover:text-blue-600"><Shield size={17} /></button>
            <button className="text-slate-600 hover:text-blue-600"><Settings size={17} /></button>
          </div>

          <div className="h-10 rounded-xl bg-blue-50 border border-blue-100 p-1 flex items-center mb-4">
            <button
              onClick={openMatches}
              className={`h-full flex-1 rounded-lg flex items-center justify-center gap-2 text-[12px] font-medium ${!isMessages ? "bg-white shadow-sm text-slate-700" : "text-slate-600"}`}
            >
              Matches
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[9px] flex items-center justify-center font-bold">8</span>
            </button>

            <button
              onClick={() => openMessages()}
              className={`h-full flex-1 rounded-lg flex items-center justify-center gap-2 text-[12px] font-medium ${isMessages ? "bg-white shadow-sm text-slate-700" : "text-slate-600"}`}
            >
              Mensagens
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[9px] flex items-center justify-center font-bold">3</span>
            </button>
          </div>

          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-semibold text-slate-600 uppercase">Novas conexões</span>
            <button className="text-[10px] text-blue-700 font-medium">Ver todos</button>
          </div>

          <div className="flex items-start gap-3 px-1">
            {matches.map((match) => (
              <div key={match.name} className="flex flex-col items-center gap-1">
                <div className="relative">
                  {match.new && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 bg-red-500 text-white text-[7px] px-1.5 py-[2px] rounded-full">
                      NOVO
                    </span>
                  )}
                  <div className={`w-11 h-11 rounded-full p-[2px] ${match.new ? "bg-red-500" : "bg-slate-200"}`}>
                    <img src={match.image} alt={match.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
                  </div>
                </div>
                <span className="text-[9px] text-slate-700 whitespace-nowrap">{match.name}</span>
              </div>
            ))}

            <button className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-full border border-dashed border-blue-300 flex items-center justify-center text-blue-600">
                <Plus size={15} />
              </div>
              <span className="text-[9px] text-slate-500">+5 mais</span>
            </button>
          </div>
        </div>
      </div>

      {isMessages && (
        <div className="px-2 pt-3 flex flex-col min-h-0">
          <div className="h-8 rounded-xl border border-slate-200 bg-white flex items-center px-2.5 gap-2 text-slate-400">
            <Search size={14} />
            <span className="text-[10px]">Buscar conversas ou founders...</span>
          </div>

          <div className="mt-2 overflow-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => openMessages(conversation.id)}
                className={`w-full flex items-center gap-2 px-2 py-2.5 text-left border-b border-slate-100 transition ${selectedId === conversation.id ? "bg-blue-50 border-l-[3px] border-l-blue-600" : "hover:bg-slate-50"}`}
              >
                <div className="relative shrink-0">
                  <img src={conversation.image} alt={conversation.name} className="w-9 h-9 rounded-full object-cover" />
                  {conversation.status === "online" && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold text-slate-800 truncate">{conversation.name}</p>
                    <span className="text-[8px] text-blue-600 shrink-0">{conversation.time}</span>
                  </div>
                  {conversation.match && (
                    <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[8px]">{conversation.match}</span>
                  )}
                  <p className="text-[9px] text-slate-400 truncate mt-0.5">{conversation.role}</p>
                  <p className="text-[9px] text-slate-500 truncate mt-0.5">{conversation.preview}</p>
                </div>

                {conversation.unread && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto px-2 pb-2 pt-2">
        <div className="h-12 rounded-xl bg-blue-50 flex items-center px-2">
          <div className="relative">
            <img src="/images/carlos.jpg" alt="Carlos Mendes" className="w-8 h-8 rounded-full object-cover" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
          </div>
          <div className="ml-2 flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-slate-800 truncate">Carlos Mendes</p>
            <p className="text-[9px] text-blue-700 truncate">Investidor Anjo</p>
          </div>
          <button className="text-slate-500 hover:text-blue-600"><LogOut size={15} /></button>
        </div>
      </div>
    </aside>
  );
}
