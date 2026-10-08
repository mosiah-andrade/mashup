"use client";

export default function Investidor() {
    return (
        <div className="h-full w-full bg-white flex flex-col items-center relative overflow-hidden min-h-0">

            {/* ================= CARD ================= */}
            <div className="mt-[clamp(28px,6vh,68px)] w-[min(600px,calc(100vw-380px))] h-[clamp(470px,70vh,555px)] rounded-[20px] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.18)]">

                {/* IMAGEM DE FUNDO */}
                <img
                    src="/images/finflow.jpg"
                    alt="FinFlow"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* ESCURECIMENTO */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#020617]/95" />

                {/* ================= TOPO ================= */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">

                    {/* INDICADOR */}
                    <div className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-medium shadow-lg">
                        ⚡ 94% Sinergia de Tese
                    </div>

                    {/* RANKING */}
                    <div className="px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] backdrop-blur-sm">
                        🏆 Top 10 Cubo Itaú
                    </div>

                </div>

                {/* ================= LINHA DO STORY ================= */}
                <div className="absolute top-3 left-3 right-3 flex gap-1 mt-[2px]">

                    <div className="h-[4px] flex-1 rounded-full bg-white" />

                    <div className="h-[4px] flex-1 rounded-full bg-white/40" />

                    <div className="h-[4px] flex-1 rounded-full bg-white/40" />

                    <div className="h-[4px] flex-1 rounded-full bg-white/40" />

                </div>

                {/* ================= CONTEÚDO INFERIOR ================= */}
                <div className="absolute bottom-0 left-0 right-0 p-[18px]">

                    {/* TAGS */}
                    <div className="flex items-center gap-2 mb-2">

                        <span className="px-2 py-1 rounded-full bg-emerald-500/90 text-white text-[9px] font-medium">
                            ● Rodada Aberta CVM 88
                        </span>

                        <span className="text-[9px] text-white/90">
                            ● Recém Ativa
                        </span>

                    </div>

                    {/* NOME */}
                    <div className="flex items-center gap-2">

                        <h1 className="text-[22px] font-bold text-white">
                            FinFlow
                        </h1>

                        <span className="text-blue-400 text-[15px]">
                            ✦
                        </span>

                        <span className="text-white/80 text-[14px]">
                            2 anos
                        </span>

                    </div>

                    {/* LOCAL */}
                    <p className="text-[9px] text-white/75 mt-1">
                        ♧ São Paulo, SP • 6 km de você • Seed Stage
                    </p>

                    {/* SETA */}
                    <button className="absolute right-[clamp(120px,29%,173px)] bottom-[150px] w-8 h-8 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition">
                        ↑
                    </button>

                    {/* ================= MÉTRICAS ================= */}
                    <div className="grid grid-cols-2 gap-2 mt-4">

                        <div className="rounded-xl bg-black/60 border border-white/10 px-3 py-2 backdrop-blur-md">

                            <p className="text-[8px] uppercase tracking-wide text-white/60">
                                Captação Seed
                            </p>

                            <p className="text-[12px] text-white font-semibold">
                                R$1.5M
                                <span className="text-emerald-400 text-[9px] ml-1">
                                    (63% alocado)
                                </span>
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/60 border border-white/10 px-3 py-2 backdrop-blur-md">

                            <p className="text-[8px] uppercase tracking-wide text-white/60">
                                ARR & Crescimento
                            </p>

                            <p className="text-[12px] text-white font-semibold">
                                R$1.2M
                                <span className="text-blue-400 text-[9px] ml-1">
                                    (+18% MoM)
                                </span>
                            </p>

                        </div>

                    </div>

                    {/* DESCRIÇÃO */}
                    <p className="text-[10px] text-white/75 leading-[14px] mt-3 max-w-[390px]">
                        Automatizando conciliação financeira multimodo em tempo real
                        para PMEs e fintechs na América Latina com agentes de IA.
                    </p>

                </div>

            </div>

            {/* ================= BOTÕES ================= */}

            <div className="flex items-center gap-4 mt-[clamp(12px,2.5vh,24px)] shrink-0">

                {/* PASSAR */}
                <button
                    className="
                        w-11 h-11 rounded-full
                        bg-white
                        border border-slate-200
                        shadow-md
                        flex items-center justify-center
                        text-amber-500 text-xl
                        hover:scale-110 transition
                    "
                    title="Voltar"
                >
                    ↶
                </button>

                {/* DESCARTAR */}
                <button
                    className="
                        w-11 h-11 rounded-full
                        bg-white
                        border border-red-100
                        shadow-md
                        flex items-center justify-center
                        text-red-400 text-2xl
                        hover:scale-110 transition
                    "
                    title="Passar"
                >
                    ×
                </button>

                {/* FAVORITAR */}
                <button
                    className="
                        w-11 h-11 rounded-full
                        bg-white
                        border border-purple-100
                        shadow-md
                        flex items-center justify-center
                        text-purple-500 text-xl
                        hover:scale-110 transition
                    "
                    title="Favoritar"
                >
                    ★
                </button>

                {/* MATCH */}
                <button
                    className="
                        w-12 h-12 rounded-full
                        bg-emerald-400
                        shadow-[0_8px_20px_rgba(16,185,129,0.35)]
                        flex items-center justify-center
                        text-white text-xl
                        hover:scale-110 transition
                    "
                    title="Match"
                >
                    ♥
                </button>

                {/* DETALHES */}
                <button
                    className="
                        w-11 h-11 rounded-full
                        bg-white
                        border border-blue-100
                        shadow-md
                        flex items-center justify-center
                        text-blue-600 text-xl
                        hover:scale-110 transition
                    "
                    title="Detalhes"
                >
                    ▷
                </button>

            </div>

            {/* ================= ATALHOS ================= */}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[calc(100%-32px)]">

                <div className="
                    h-7
                    px-4 whitespace-nowrap
                    rounded-full
                    bg-[#273246]
                    shadow-lg
                    flex
                    items-center
                    gap-3
                    text-white
                    text-[8px]
                ">

                    <span className="font-semibold">
                        ATALHOS
                    </span>

                    <span className="text-white/40">
                        |
                    </span>

                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[7px]">
                            ←
                        </kbd>
                        <span className="text-white/70">
                            Passar
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[7px]">
                            →
                        </kbd>
                        <span className="text-white/70">
                            Match
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[7px]">
                            I
                        </kbd>
                        <span className="text-white/70">
                            Detalhes do Pitch
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[7px]">
                            J
                        </kbd>
                        <span className="text-white/70">
                            Fechar
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[7px]">
                            Espaço
                        </kbd>
                        <span className="text-white/70">
                            Próxima Foto
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}