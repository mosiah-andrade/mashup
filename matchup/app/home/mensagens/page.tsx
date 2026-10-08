"use client";

import { Suspense, useEffect, useRef, useState, type ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarDays, FileText, MoreVertical, Paperclip, Search, Send, ShieldCheck, Smile, X } from "lucide-react";
import { appendMockMessage, getMockMessages } from "../../../lib/mock-store";
import { getProfile } from "../../../lib/mock-data";
import type { ChatMessage } from "../../../lib/types";

const QUICK_ACTIONS = [
  ["call", "⚑ Propor horário de call", "Tenho disponibilidade para uma conversa. Podemos alinhar um horário?"],
  ["room", "📊 Compartilhar Data Room", "Libertei o acesso ao Data Room para você. Fico à disposição para esclarecer os documentos."],
  ["term", "🤝 Enviar Term Sheet", "Posso compartilhar uma minuta de Term Sheet para alinharmos os próximos passos."],
] as const;

function MensagensContent() {
  const params = useSearchParams();
  const selectedId = params.get("user") || "camila";
  const person = getProfile(selectedId) ?? getProfile("camila");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [dataRoomOpen, setDataRoomOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!person) return;
    setMessages(getMockMessages(person.id));
  }, [person]);

  if (!person) return null;

  const send = (value: string, kind: ChatMessage["kind"] = "text") => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const message: ChatMessage = {
      id: "message-" + Date.now(),
      from: "me",
      text: trimmed,
      time: "agora",
      kind,
    };

    appendMockMessage(person.id, message);
    setMessages((current) => [...current, message]);
    setText("");
  };

  const sendMessage = () => send(text);

  const sendSchedule = (time: string) => {
    send("Sugestão de call: " + time + ". Podemos confirmar este horário?");
    setScheduleOpen(false);
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    send("📎 " + file.name + " (" + Math.ceil(file.size / 1024 / 1024) + " MB)", "file");
    event.target.value = "";
  };

  return (
    <section className="flex h-full min-h-0 flex-col bg-[#f8faff]">
      <header className="relative flex min-h-[76px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative shrink-0">
            <img src={person.image} alt={person.name} className="h-11 w-11 rounded-full border border-slate-200 object-cover" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-[15px] font-semibold text-slate-900">{person.name}</h1>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[9px] font-semibold text-blue-700">{person.kind === "investidor" ? "Investidor" : "Startup"}</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">✦ {person.matchScore}% Match</span>
            </div>
            <p className="truncate text-[10px] text-slate-500">{person.headline} • {person.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setDataRoomOpen((value) => !value)} className="hidden h-9 items-center gap-2 rounded-xl bg-slate-100 px-4 text-[11px] font-semibold text-slate-700 hover:bg-slate-200 sm:flex"><FileText size={14} /> Data Room</button>
          <button type="button" onClick={() => setScheduleOpen((value) => !value)} className="hidden h-9 items-center gap-2 rounded-xl bg-blue-600 px-4 text-[11px] font-semibold text-white hover:bg-blue-700 sm:flex"><CalendarDays size={14} /> Agendar Call</button>
          <button type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Mais opções" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><MoreVertical size={17} /></button>
          {menuOpen && (
            <div className="absolute right-4 top-14 z-30 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              <button type="button" onClick={() => { setMessages((current) => current); setMenuOpen(false); }} className="w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-50">Marcar como lida</button>
              <button type="button" onClick={() => { setText(""); setMenuOpen(false); }} className="w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-50">Limpar rascunho</button>
            </div>
          )}
        </div>
      </header>

      {(dataRoomOpen || scheduleOpen) && (
        <div className="border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
          <div className="mx-auto flex max-w-[760px] items-center justify-between gap-3">
            {dataRoomOpen ? (
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-50 text-red-500"><FileText size={17} /></div>
                <div><p className="text-[10px] font-semibold text-slate-700">Data Room mock</p><p className="text-[9px] text-slate-400">Pitch Deck, métricas e documentos jurídicos disponíveis para simulação.</p></div>
                <button type="button" onClick={() => { send("📂 Compartilhei o Data Room com você.", "file"); setDataRoomOpen(false); }} className="rounded-lg bg-blue-600 px-3 py-2 text-[9px] font-semibold text-white">Compartilhar</button>
              </div>
            ) : (
              <div className="flex min-w-0 items-center gap-2">
                <CalendarDays size={17} className="text-blue-600" />
                <div className="flex flex-wrap gap-2">
                  {["Hoje 16:00", "Amanhã 11:00", "Quinta 15:30"].map((time) => <button key={time} type="button" onClick={() => sendSchedule(time)} className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-[9px] font-semibold text-blue-700 hover:bg-blue-100">{time}</button>)}
                </div>
              </div>
            )}
            <button type="button" onClick={() => { setDataRoomOpen(false); setScheduleOpen(false); }} className="text-slate-400"><X size={15} /></button>
          </div>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-auto px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-6 rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-500 text-white">♥</div>
            <h2 className="text-[14px] font-bold text-slate-800">Conexão liberada no MatchUp</h2>
            <p className="mt-1 text-[11px] text-slate-400">Use o chat para alinhar os próximos passos. Todas as mensagens ficam persistidas localmente neste mock.</p>
          </div>

          {messages.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-[11px] text-slate-400">Ainda não há mensagens. Envie a primeira mensagem para iniciar a conversa.</div>
          ) : (
            <div className="space-y-5">
              {messages.map((message) => (
                <div key={message.id} className={"flex gap-2 " + (message.from === "me" ? "justify-end" : "justify-start")}>
                  {message.from === "them" && <img src={person.image} alt="" className="mt-1 h-8 w-8 shrink-0 rounded-full object-cover" />}
                  <div className={"flex max-w-[72%] flex-col " + (message.from === "me" ? "items-end" : "items-start")}>
                    <div className="mb-1 flex items-center gap-2"><span className="text-[10px] font-semibold text-slate-800">{message.from === "me" ? "Você" : person.name}</span><span className="text-[9px] text-slate-400">{message.time}</span></div>
                    <div className={"whitespace-pre-line rounded-2xl px-4 py-3 text-[11px] leading-5 shadow-sm " + (message.from === "me" ? "rounded-tr-sm bg-blue-600 text-white" : "rounded-tl-sm border border-slate-200 bg-white text-slate-600")}>{message.text}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="shrink-0 border-t border-slate-200 bg-white px-4 pb-4 pt-3 sm:px-6">
        <div className="mx-auto max-w-[1040px]">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
            <span>Atalhos:</span>
            {QUICK_ACTIONS.map(([id, label, message]) => <button key={id} type="button" onClick={() => send(message)} className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200">{label}</button>)}
          </div>

          <div className="flex h-14 items-center gap-3 rounded-2xl border border-slate-300 bg-white px-3 shadow-sm">
            <input ref={fileRef} type="file" className="hidden" onChange={handleFile} />
            <button type="button" onClick={() => fileRef.current?.click()} title="Anexar arquivo" className="text-slate-400 hover:text-blue-600"><Paperclip size={18} /></button>
            <input value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); sendMessage(); } }} placeholder={"Escreva uma mensagem para " + person.name + "..."} className="flex-1 bg-transparent text-[12px] text-slate-700 outline-none placeholder:text-slate-400" />
            <button type="button" onClick={() => setText((value) => value + (value ? " " : "") + "🙂")} title="Adicionar emoji" className="text-slate-400 hover:text-blue-600"><Smile size={18} /></button>
            <button type="button" onClick={sendMessage} aria-label="Enviar mensagem" className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white hover:bg-blue-700"><Send size={16} /></button>
          </div>

          <div className="mt-2 flex items-center justify-between text-[8px] text-slate-400">
            <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-emerald-500" /> Canal preparado para integração segura.</span>
            <span>Enter envia • Shift+Enter quebra linha</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default function MensagensPage() {
  return <Suspense fallback={<div className="flex h-full items-center justify-center bg-[#f8faff] text-sm text-slate-400">Carregando mensagens...</div>}><MensagensContent /></Suspense>;
}
