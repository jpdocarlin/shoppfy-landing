export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#FF9E2C,#FF6B00)] font-display text-[13px] font-bold text-white">
            S
          </span>
          <span className="font-display text-[15px] font-medium text-foreground">Shoppfy</span>
        </div>

        <div className="flex items-center gap-6 text-[13px] text-muted-2">
          <a href="#funcionalidades" className="transition-colors hover:text-foreground">
            Funcionalidades
          </a>
          <a href="#planos" className="transition-colors hover:text-foreground">
            Planos
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </div>

        <p className="text-[12.5px] text-muted-2">© 2026 Shoppfy. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
