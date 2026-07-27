// src/components/shared/footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-border py-7 px-5 sm:px-8">
      <div className="max-w-275 mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <span className="text-xs text-muted-foreground">© 2026 Gabriel Nascimento</span>
        <span className="text-xs text-muted-foreground">Feito com Next.js, Tailwind & shadcn/ui</span>
      </div>
    </footer>
  );
}