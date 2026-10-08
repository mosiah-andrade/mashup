import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function MenuLandingPage() {
  return (
    <header className="flex min-h-14 items-center gap-8 bg-white px-6 text-black">
      <Link href="/" className="text-xl font-bold">MatchUp</Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/onboarding" className="hover:text-blue-600">Como Funciona</Link>
        <Link href="/onboarding/startup" className="hover:text-blue-600">Para Startups</Link>
        <Link href="/onboarding/investidor" className="hover:text-blue-600">Para Investidores</Link>
        <Link href="/onboarding" className="hover:text-blue-600">Matching Inteligente</Link>
        <Link href="/onboarding" className="hover:text-blue-600">Casos de Sucesso</Link>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <Link href="/login" className="hover:text-blue-800">Entrar</Link>
        <Link href="/register" className="flex h-7 w-[126px] items-center justify-center rounded-md bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">Criar Conta</Link>
        <Link href="/login" aria-label="Acessar conta" className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"><FaUser className="text-sm text-white" /></Link>
      </div>
    </header>
  );
}
