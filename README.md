# MatchUp

Plataforma de matchmaking para startups e investidores, focada em conectar founders com capital, contexto e oportunidades relevantes em um fluxo simples, visual e estratégico.

## Visão geral

O MatchUp foi pensado para reduzir a fricção entre startups em busca de financiamento e investidores que buscam oportunidades com alinhamento real de negócio, setor e governança. A experiência combina onboarding, perfil de empresa/investidor, match inteligente, chat e visão de pipeline de oportunidades.

A interface atual funciona como uma prova de conceito de produto, com dados mockados para simular cenários de relacionamento e decisão.

## Funcionalidades principais

- Onboarding para startups e investidores
- Cadastro e perfil com dados estratégicos
- Feed de oportunidades com score de compatibilidade
- Visualização de perfis e métricas relevantes
- Fluxo de match e qualificação
- Conversas simuladas entre partes
- Navegação responsiva para desktop e mobile
- UX orientada a produto B2B e operação de captação

## Stack tecnológica

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons

## Estrutura do projeto

```bash
matchup/
├── app/
│   ├── components/
│   ├── home/
│   ├── login/
│   ├── onboarding/
│   ├── register/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── mock-auth.ts
│   ├── mock-data.ts
│   ├── mock-store.ts
│   └── types.ts
├── public/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Requisitos

- Node.js 18+ ou 20+
- npm, pnpm, yarn ou bun

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev     # inicia o servidor de desenvolvimento
npm run build   # gera a build de produção
npm run start   # inicia a aplicação em modo produção
npm run lint    # executa a análise estática do projeto
```

## Fluxo principal do produto

### Para startups
- criar perfil da empresa
- apresentar modelo de negócio, crescimento e captação
- visualizar investidores com maior aderência
- entrar em contato e preparar processo de diligence

### Para investidores
- filtrar perfis com compatibilidade e tese
- avaliar startups por métricas e contexto
- acompanhar pipeline de oportunidades
- conversar diretamente por canais de abordagem

## Dados e comportamento

A aplicação foi construída como uma experiência demo, com dados mockados em `lib/mock-data.ts` e serviços simulados em `lib/mock-store.ts`. Isso permite validar o fluxo de UX e a lógica de navegação antes de integrar com backend real, autenticação e banco de dados.

## Convenções de desenvolvimento

- Componentes em React/Next.js com abordagem modular
- Estrutura baseada em arquivos de rota dentro de `app/`
- Dados de exemplo centralizados em `lib/`
- Estilo visual com Tailwind e componentes reutilizáveis

## Próximos passos sugeridos

- integrar autenticação real
- conectar com banco de dados e API
- criar painel administrativo
- adicionar filtros e ranking por score
- implementar chat real e notificações
- habilitar fluxo de proposta e follow-up

## Licença

Este projeto está disponível sob a licença do repositório atual.

## Observação

Este README foi adaptado para refletir a proposta real do produto e facilitar onboarding de novos desenvolvedores, designers e stakeholders.
