"use client";

import {
  Heart,
  SlidersHorizontal,
  Zap,
  Shield,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";

const matches = [
  {
    name: "BioMassa",
    image: "/images/biomassa.jpg",
    new: true,
  },
  {
    name: "FreteNorte",
    image: "/images/fretenorte.jpg",
    new: true,
  },
  {
    name: "PixCanga",
    image: "/images/pixcanga.jpg",
    new: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[270px] h-full border-r border-slate-200 bg-white flex flex-col">
      
      
      {/* CONTEÚDO */}
      <div className="px-2 pt-3">
        
        {/* CARD PRINCIPAL */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-3">
          
          {/* ÍCONES */}
          <div className="flex items-center justify-between mb-4 px-1">
            
            <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Heart size={17} fill="currentColor" />
            </button>

            <button className="text-slate-600 hover:text-blue-600">
              <SlidersHorizontal size={17} />
            </button>

            <button className="text-slate-600 hover:text-blue-600">
              <Zap size={17} />
            </button>

            <button className="text-slate-600 hover:text-blue-600">
              <Shield size={17} />
            </button>

            <button className="text-slate-600 hover:text-blue-600">
              <Settings size={17} />
            </button>
          </div>

          {/* TABS */}
          <div className="h-10 rounded-xl bg-blue-50 border border-blue-100 p-1 flex items-center mb-4">
            
            <button className="h-full flex-1 rounded-lg bg-white shadow-sm flex items-center justify-center gap-2 text-[12px] font-medium text-slate-700">
              Matches

              <span className="w-4 h-4 rounded-full bg-blue-700 text-white text-[9px] flex items-center justify-center font-bold">
                8
              </span>
            </button>

            <button className="flex-1 h-full flex items-center justify-center gap-2 text-[12px] text-slate-600">
              Mensagens

              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[9px] flex items-center justify-center font-bold">
                3
              </span>
            </button>
          </div>

          {/* TÍTULO */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] font-semibold text-slate-600 uppercase">
              Novas conexões
            </span>

            <button className="text-[10px] text-blue-700 font-medium">
              Ver todos
            </button>
          </div>

          {/* MATCHES */}
          <div className="flex items-start gap-3 px-1">
            
            {matches.map((match) => (
              <div
                key={match.name}
                className="flex flex-col items-center gap-1"
              >
                <div className="relative">
                  
                  {match.new && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 bg-red-500 text-white text-[7px] px-1.5 py-[2px] rounded-full">
                      NOVO
                    </span>
                  )}

                  <div
                    className={`w-11 h-11 rounded-full p-[2px] ${
                      match.new
                        ? "bg-red-500"
                        : "bg-slate-200"
                    }`}
                  >
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>

                <span className="text-[9px] text-slate-700 whitespace-nowrap">
                  {match.name}
                </span>
              </div>
            ))}

            {/* MAIS */}
            <button className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-full border border-dashed border-blue-300 flex items-center justify-center text-blue-600">
                <Plus size={15} />
              </div>

              <span className="text-[9px] text-slate-500">
                +5 mais
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* USUÁRIO */}
      <div className="mt-auto px-2 pb-2">
        <div className="h-12 rounded-xl bg-blue-50 flex items-center px-2">
          
          <div className="relative">
            <img
              src="/images/carlos.jpg"
              alt="Carlos Mendes"
              className="w-8 h-8 rounded-full object-cover"
            />

            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
          </div>

          <div className="ml-2 flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-slate-800 truncate">
              Carlos Mendes
            </p>

            <p className="text-[9px] text-blue-700 truncate">
              Investidor Anjo
            </p>
          </div>

          <button className="text-slate-500 hover:text-blue-600">
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}