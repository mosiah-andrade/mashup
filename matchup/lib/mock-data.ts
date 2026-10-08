import type { ChatMessage, DealProfile, MockConversation } from "./types";

export const mockProfiles: DealProfile[] = [
  {
    id: "finflow", kind: "startup", name: "FinFlow", image: "/images/finflow.jpg", verified: true, matchScore: 94,
    headline: "Infraestrutura financeira B2B com IA", location: "São Paulo, SP", stage: "Seed", vertical: "FinTech • B2B SaaS",
    description: "Automatizando conciliação financeira em tempo real para PMEs e fintechs na América Latina com agentes de IA.",
    tags: ["IA Bancária", "CVM 88", "+18% MoM"],
    metrics: [{ label: "Captação Seed", value: "R$ 1,5M", accent: "green" }, { label: "ARR & Crescimento", value: "R$ 1,2M · +18% MoM", accent: "blue" }],
    details: {
      thesis: ["FinTech, IA Aplicada e B2B SaaS", "Seed com preparação para Série A", "Expansão LatAm"],
      smartMoney: ["Enterprise Sales", "Governança e cap table", "Conexões com instituições financeiras"],
      trackRecord: [{ value: "R$ 1,2M", label: "ARR atual" }, { value: "68", label: "Clientes ativos" }, { value: "114%", label: "NRR" }],
      dealBreakers: ["Sem compliance mínimo", "Métricas financeiras não comprovadas"],
    },
  },
  {
    id: "biomassa", kind: "startup", name: "BioMassa Tech", image: "/images/biomassa.jpg", verified: true, matchScore: 91,
    headline: "Agtech para inteligência de biomassa", location: "Campinas, SP", stage: "Seed", vertical: "Agtech • Climate",
    description: "Plataforma de dados e otimização para produtores e compradores de biomassa.",
    tags: ["Agtech", "Climate", "B2B"],
    metrics: [{ label: "Captação", value: "R$ 2,0M", accent: "green" }, { label: "Crescimento", value: "+24% MoM", accent: "blue" }],
    details: {
      thesis: ["Agtech e Climate", "Seed", "Mercado B2B"], smartMoney: ["Distribuição", "Parcerias industriais", "Governança"],
      trackRecord: [{ value: "R$ 820k", label: "ARR" }, { value: "42", label: "Clientes" }, { value: "21%", label: "Margem" }],
      dealBreakers: ["Dependência de um único cliente"],
    },
  },
  {
    id: "pixcanga", kind: "startup", name: "PixCanga", image: "/images/finflow.jpg", verified: false, matchScore: 87,
    headline: "Pagamentos B2B para cadeias regionais", location: "Recife, PE", stage: "Pré-Seed", vertical: "FinTech • Payments",
    description: "Infraestrutura de pagamentos e conciliação para negócios regionais.",
    tags: ["Payments", "B2B", "Nordeste"],
    metrics: [{ label: "Captação", value: "R$ 900k", accent: "green" }, { label: "Crescimento", value: "+31% MoM", accent: "blue" }],
    details: {
      thesis: ["FinTech e Payments", "Pré-Seed", "Mercados regionais"], smartMoney: ["Banking", "GTM", "Parcerias"],
      trackRecord: [{ value: "R$ 310k", label: "TPV mensal" }, { value: "27", label: "Clientes" }, { value: "+31%", label: "Crescimento MoM" }],
      dealBreakers: ["B2C puro"],
    },
  },
  {
    id: "carlos", kind: "investidor", name: "Carlos Mendes", image: "/images/carlos.jpg", verified: true, matchScore: 94,
    headline: "Investidor Anjo & Lead Syndicate", location: "São Paulo, SP", stage: "Seed • Série A", vertical: "B2B SaaS • FinTech • IA",
    description: "Buscando startups B2B com produto validado onde posso abrir portas no setor financeiro tradicional.",
    tags: ["Enterprise Sales", "Governança", "Series A Prep"],
    metrics: [{ label: "Ticket médio", value: "R$ 250k–1,5M", accent: "purple" }, { label: "Deals feitos", value: "14 aportes", accent: "blue" }],
    details: {
      thesis: ["B2B SaaS, FinTech e IA", "Seed & Série A", "Enterprise Sales e Governança"],
      smartMoney: ["Conexões comerciais", "Preparação para Série A", "Board e governança"],
      trackRecord: [{ value: "14", label: "Aportes" }, { value: "R$ 1,5M", label: "Ticket máximo" }, { value: "+15 anos", label: "Experiência FinTech" }],
      dealBreakers: ["Sem compliance", "Dependência excessiva de um cliente"],
    },
  },
  {
    id: "camila", kind: "investidor", name: "Camila Silveira", image: "/beatriz-ramos.png", verified: true, matchScore: 98,
    headline: "Investidora Anjo • SP Angel Syndicate", location: "São Paulo, SP", stage: "Pré-Seed • Seed", vertical: "FinTech • IA • B2B SaaS",
    description: "Investidora com experiência em automação de backoffice financeiro e conexão com instituições.",
    tags: ["CVM 88", "Smart Money", "Banking"],
    metrics: [{ label: "Cheque inicial", value: "R$ 100k–250k", accent: "purple" }, { label: "Alocação anual", value: "R$ 800k", accent: "green" }],
    details: {
      thesis: ["FinTech, IA Aplicada e B2B SaaS", "Seed & Pré-Seed", "Automação financeira"],
      smartMoney: ["C-Level de bancos", "Governança", "Venda consultiva B2B"],
      trackRecord: [{ value: "8", label: "Startups investidas" }, { value: "1", label: "Exit" }, { value: "+15 anos", label: "Setor financeiro" }],
      dealBreakers: ["Sem compliance", "Logística física intensiva"],
    },
  },
  {
    id: "alpha", kind: "investidor", name: "Alpha Ventures", image: "/images/carlos.jpg", verified: true, matchScore: 89,
    headline: "Micro-VC focado em tecnologia B2B", location: "Rio de Janeiro, RJ", stage: "Seed • Série A", vertical: "SaaS • IA • Climate",
    description: "Fundo seed com atuação próxima aos founders e foco em crescimento previsível.",
    tags: ["Micro-VC", "B2B", "Growth"],
    metrics: [{ label: "Ticket", value: "R$ 500k–2M", accent: "purple" }, { label: "Portfólio", value: "22 startups", accent: "blue" }],
    details: {
      thesis: ["SaaS, IA e Climate", "Seed & Série A", "B2B"], smartMoney: ["GTM", "Hiring", "Follow-on"],
      trackRecord: [{ value: "22", label: "Investidas" }, { value: "R$ 2M", label: "Ticket máximo" }, { value: "6", label: "Follow-ons" }],
      dealBreakers: ["Mercado sem potencial de escala"],
    },
  },
];

export const initialMessages: Record<string, ChatMessage[]> = {
  camila: [
    { id: "camila-1", from: "them", text: "Olá! Analisei a lâmina executiva da FinFlow AI e fiquei muito bem impressionada com a retenção dos clientes piloto. Qual é a alocação atual da rodada Seed?", time: "14:18" },
    { id: "camila-2", from: "me", text: "Já temos R$ 600k comprometidos e estamos reservando a cota restante para parceiros estratégicos com sinergia de governança e contato com instituições financeiras.", time: "14:24" },
    { id: "camila-3", from: "them", text: "Perfeito! Vamos agendar nossa conversa. Gostaria de aprofundar CAC, LTV e projeção de breakeven. Quinta às 15:30 ou sexta às 11:00 fica viável?", time: "14:32" },
  ],
  carlos: [
    { id: "carlos-1", from: "them", text: "Olá! Estou avaliando o Pitch Deck enviado no Data Room. A tese está bem alinhada com o nosso mandato.", time: "11:10" },
    { id: "carlos-2", from: "me", text: "Ótimo, Carlos. Fico à disposição caso queira aprofundar algum indicador financeiro.", time: "11:15" },
  ],
  biomassa: [{ id: "biomassa-1", from: "them", text: "Novo match! Inicie uma conversa com a nossa founder para conhecer a rodada.", time: "Ontem" }],
  healthmind: [{ id: "healthmind-1", from: "them", text: "Obrigado pela intro compartilhada. Podemos conversar sobre a próxima etapa?", time: "Terça" }],
};

export const mockConversations: MockConversation[] = [
  { id: "camila", profileId: "camila", unread: true, lastMessage: "Vamos agendar nossa conversa.", time: "14:32" },
  { id: "carlos", profileId: "carlos", unread: false, lastMessage: "Avaliando o Pitch Deck enviado no Data Room.", time: "11:15" },
  { id: "biomassa", profileId: "biomassa", unread: false, lastMessage: "Novo match! Inicie uma conversa.", time: "Ontem" },
];

export function getProfile(id: string | null | undefined) {
  return mockProfiles.find((profile) => profile.id === id);
}

export function getProfilesForRole(role: "startup" | "investidor") {
  const kind = role === "startup" ? "investidor" : "startup";
  return mockProfiles.filter((profile) => profile.kind === kind);
}
