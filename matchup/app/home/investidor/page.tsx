"use client";

import dynamic from "next/dynamic";

const DealFlowFeed = dynamic(() => import("../components/DealFlowFeed"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[620px] w-full items-center justify-center bg-white">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[var(--vermelho-1)]" aria-label="Carregando Deal Flow" />
    </div>
  ),
});

export default function Investidor() {
  return <DealFlowFeed role="investidor" />;
}
