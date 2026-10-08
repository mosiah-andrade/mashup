"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  MoreVertical,
  Paperclip,
  Search,
  Send,
  Smile,
  ShieldCheck,
  Video,
} from "lucide-react";

const people = {
  camila: {
    name: "Camila Silveira",
    image: "/beatriz-ramos.png",
    role: "Investidora Anjo • SP Angel Syndicate",
    detail: "Ticket R$ 100k - 250k • Foco: Seed & B2B SaaS",
    badge: "CVM 88 Qualificada",
    match: "98% Alinhamento de Tese",
    online: true,
  },
  carlos: {
    name: "Carlos Mendes",
    image: "/images/carlos.jpg",
    role: "Mendes Syndicate",
    detail: "Investidor Anjo • Data Room",
    badge: "Investidor",
    match: "92% Match",
    online: true,
  },
  biomassa: {
    name: "BioMassa Tech",
    image: "/images/biomassa.jpg",
    role: "Agtech",
    detail: "Founder • Rodada Seed",
    badge: "Startup",
    match: "91% Match",
    online: false,
  },
  healthmind: {
    name: "HealthMind AI",
    image: "/images/finflow.jpg",
    role: "Healthtech",
    detail: "Founder • Série Seed",
    badge: "Startup",
    match: "89% Match",
    online: false,
  },
} as const;

type PersonId = keyof typeof people;

const messages: Record<PersonId, { from: "them" | "me"; text: string; time: string }[]> = {
  camila: [
    {
      from: "them",
      text: "Olá pessoal! Analisei a lâmina executiva da FinFlow AI e fiquei muito bem impressionada com a retenção de 94% nos clientes bancários piloto.\n\nQual é a alocação atual dos R$ 1.2M da meta da rodada Seed?",
      time: "14:18",
    },
    {
      from: "me",
      text: "Olá Camila! É um prazer conectar com você. Admiro muito sua tese em automação de backoffice financeiro.\n\nJá temos R$ 600k comprometidos (50% da rodada) por dois fundos anjo. Estamos reservando a cota restante para parceiros estratégicos que tenham sinergia de governança e contato com instituições financeiras, que é exatamente seu foco!",
      time: "14:24",
    },
    {
      from: "them",
      text: "Perfeito! Vamos agendar nossa conversa. Gostaria de aprofundar um pouco mais nos índices de CAC, LTV e projeção de breakeven.\n\nQuinta-feira às 15:30 ou sexta às 11:00 fica viável pra vocês?",
      time: "14:32",
    },
  ],
  carlos: [
    {
      from: "them",
      text: "Olá! Estou avaliando o Pitch Deck enviado no Data Room. A tese está bem alinhada com o nosso mandato.",
      time: "11:10",
    },
    {
      from: "me",
      text: "Ótimo, Carlos. Fico à disposição caso queira aprofundar algum indicador financeiro.",
      time: "11:15",
    },
  ],
  biomassa: [
    {
      from: "them",
      text: "Novo match! Inicie uma conversa com a nossa founder para conhecer a rodada.",
      time: "Ontem",
    },
  ],
  healthmind: [
    {
      from: "them",
      text: "Obrigado pela intro compartilhada. Podemos conversar sobre a próxima etapa?",
      time: "Terça",
    },
  ],
};

export default function MensagensPage() {
  const params = useSearchParams();
  const requested = params.get("user") as PersonId | null;
  const selectedId: PersonId = requested && requested in people ? requested : "camila";
  const person = people[selectedId];

  const [text, setText] = useState("");
  const [sentMessages, setSentMessages] = useState<typeof messages[PersonId]>([]);

  const conversation = useMemo(
    () => [...messages[selectedId], ...sentMessages],
    [selectedId, sentMessages],
  );

  const sendMessage = () => {
    const value = text.trim();
    if (!value) return;

    setSentMessages((current) => [
      ...current,
      { from: "me", text: value, time: "agora" },
    ]);
    setText("");
  };

  return (
    <section className="h-full min-h-0 bg-[#f8faff] flex flex-col">
      <header className="h-[76px] shrink-0 border-b border-slate-200 bg-white px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative">
            <img src={person.image} alt={person.name} className="w-11 h-11 rounded-full object-cover border border-slate-200" />
            {person.online && <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-[15px] font-semibold text-slate-900 truncate">{person.name}</h1>
              <span className="px-2 py-0.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[9px] font-semibold">{person.badge}</span>
              <span className="px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 text-[9px] font-semibold">✦ {person.match}</span>
            </div>
            <p className="text-[10px] text-slate-500 truncate">{person.role} • {person.detail}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-9 px-4 rounded-xl bg-slate-100 text-slate-700 text-[11px] font-semibold flex items-center gap-2 hover:bg-slate-200">
            <FileText size={14} /> Data Room
          </button>
          <button className="h-9 px-4 rounded-xl bg-blue-600 text-white text-[11px] font-semibold flex items-center gap-2 hover:bg-blue-700">
            <CalendarDays size={14} /> Agendar Call
          </button>
          <button className="text-slate-500 p-2"><MoreVertical size={17} /></button>
        </div>
      </header>

      <div className="flex-1 min-h-0 overflow-auto px-6 py-6">
        <div className="max-w-[760px] mx-auto">
          {selectedId === "camila" && (
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm p-5 text-center mb-7">
              <div className="mx-auto w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center mb-2">♥</div>
              <h2 className="text-[14px] font-bold text-slate-800">Vocês deram Match no MatchUp!</h2>
              <p className="text-[11px] text-slate-400 mt-1">Ambos demonstraram interesse recíproco na rodada Seed com foco em IA Financeira B2B.</p>
              <div className="flex justify-center gap-2 mt-3">
                <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px]">Smart Money: CRM & Enterprise</span>
                <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-600 text-[9px]">Ponte C-Level Bancos</span>
                <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[9px]">Governança & Cap Table</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-2">Hoje, às 14:15</p>
            </div>
          )}

          <div className="space-y-5">
            {conversation.map((message, index) => (
              <div key={`${selectedId}-${index}`} className={`flex gap-2 ${message.from === "me" ? "justify-end" : "justify-start"}`}>
                {message.from === "them" && (
                  <img src={person.image} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
                )}

                <div className={`max-w-[72%] ${message.from === "me" ? "items-end" : "items-start"} flex flex-col`}>
                  <div className={`flex items-center gap-2 mb-1 ${message.from === "me" ? "flex-row-reverse" : ""}`}>
                    <span className="text-[10px] font-semibold text-slate-800">{message.from === "me" ? "Você (FinFlow AI)" : person.name}</span>
                    <span className="text-[9px] text-slate-400">{message.time}</span>
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-[11px] leading-5 whitespace-pre-line shadow-sm ${message.from === "me" ? "bg-blue-600 text-white rounded-tr-sm" : "bg-white border border-slate-200 text-slate-600 rounded-tl-sm"}`}>
                    {message.text}
                  </div>

                  {message.from === "me" && index === 1 && selectedId === "camila" && (
                    <div className="mt-1 w-[330px] rounded-xl border border-blue-100 bg-white px-3 py-2 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"><FileText size={17} /></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-slate-700 truncate">PitchDeck_FinFlow_Seed_Q3.pdf</p>
                        <p className="text-[9px] text-slate-400">14.2 MB • Apresentação aos investidores</p>
                      </div>
                      <button className="text-[10px] font-semibold text-blue-600">Visualizar</button>
                    </div>
                  )}
                </div>

                {message.from === "me" && (
                  <img src="/images/carlos.jpg" alt="Você" className="w-8 h-8 rounded-full object-cover shrink-0 mt-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="shrink-0 bg-white border-t border-slate-200 px-6 pt-3 pb-4">
        <div className="max-w-[1040px] mx-auto">
          <div className="flex items-center gap-2 mb-3 text-[10px] text-slate-500">
            <span>Atalhos rápidos:</span>
            <button className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200">⚑ Propor Horário de Call</button>
            <button className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200">📊 Compartilhar Data Room</button>
            <button className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200">🤝 Enviar Minuta Term Sheet</button>
          </div>

          <div className="h-14 rounded-2xl border border-slate-300 bg-white flex items-center px-3 gap-3 shadow-sm">
            <button className="text-slate-400"><Paperclip size={18} /></button>
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
              placeholder={`Escreva uma mensagem para ${person.name}...`}
              className="flex-1 outline-none text-[12px] text-slate-700 placeholder:text-slate-400 bg-transparent"
            />
            <button className="text-slate-400"><Smile size={18} /></button>
            <button
              onClick={sendMessage}
              className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
            >
              <Send size={16} />
            </button>
          </div>

          <div className="flex items-center justify-between mt-2 text-[8px] text-slate-400">
            <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-emerald-500" /> Canal seguro com criptografia de ponta a ponta e compliance com a Resolução CVM 88 & LGPD.</span>
            <span>Pressione Enter para enviar</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
