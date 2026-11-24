
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

export default function MenuLandingPage() {
  return (
    <header className="flex min-h-14 items-center gap-8 bg-[var(--vermelho-1)] px-6 text-[var(--bege-1)] shadow-md">
      <Link href="/" className="flex shrink-0 items-center justify-center">
        <Image
          src="/icon3-png.png"
          alt="ENLA"
          width={48}
          height={48}
          priority
        />
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/onboarding" className="transition-colors hover:opacity-70">
          Como Funciona
        </Link>
        <Link href="/onboarding/startup" className="transition-colors hover:opacity-70">
          Para Startups
        </Link>
        <Link href="/onboarding/investidor" className="transition-colors hover:opacity-70">
          Para Investidores
        </Link>
        <Link href="/onboarding" className="transition-colors hover:opacity-70">
          Matching Inteligente
        </Link>
        <Link href="/onboarding" className="transition-colors hover:opacity-70">
          Casos de Sucesso
        </Link>
      </nav>

      <div className="ml-auto flex items-center gap-4">
        <Link href="/login" className="transition-opacity hover:opacity-70">
          Entrar
        </Link>

        <Link
          href="/register"
          className="flex h-9 w-[126px] items-center justify-center rounded-md bg-white text-sm font-medium text-[var(--vermelho-1)] transition-colors hover:bg-[var(--bege-1)]"
        >
          Criar Conta
        </Link>

        <Link
          href="/login"
          aria-label="Acessar conta"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors hover:bg-[var(--bege-1)]"
        >
          <FaUser className="text-sm text-[var(--vermelho-1)]" />
        </Link>
      </div>
    </header>
  );
}
