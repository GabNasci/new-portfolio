// src/components/shared/header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-275 mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
        <Link 
          href="#sobre" 
          className="font-serif font-normal text-lg tracking-wide hover:opacity-80 transition-opacity"
        >
          GN
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </Link>
          <Link href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projetos
          </Link>
          <Link href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}