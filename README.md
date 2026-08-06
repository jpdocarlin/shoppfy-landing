# Shoppfy — Landing Page

Landing page oficial do Shoppfy. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + GSAP + Radix UI + Lucide Icons.

## Como rodar localmente

Opção mais fácil: dê dois cliques em `iniciar-shoppfy-landing.command`, na pasta acima desta. Ele instala as dependências e abre a página sozinho no navegador.

Ou, pelo terminal:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Estrutura

```
src/app/layout.tsx          Layout raiz, metadata, tema escuro
src/app/page.tsx            Monta todas as seções da página
src/app/globals.css         Tokens de cor, glass, glow, noise, keyframes
src/components/
  BackgroundFX.tsx           Blobs de glow + grid + grain, fixos atrás de tudo
  Navbar.tsx                 Nav fixa com efeito glass ao rolar
  Hero.tsx                   Headline, CTAs, stats
  DashboardMockup.tsx         Mockup do dashboard flutuando (Framer Motion)
  Benefits.tsx                4 cards de benefício
  HowItWorks.tsx               3 passos com scroll reveal
  Features.tsx                 19 funcionalidades agrupadas em 4 categorias
  Comparison.tsx                Tabela sem Shoppfy vs com Shoppfy
  Testimonials.tsx              3 depoimentos (avatares de iniciais, não fotos)
  Pricing.tsx                   Planos mensal (R$149) e vitalício (R$249, destacado)
  FAQ.tsx                       Accordion (Radix UI)
  FinalCTA.tsx                  Chamada final
  Footer.tsx
  ui/Button.tsx                 Botão com glow/gradiente reutilizável
```

## Notas de implementação

- **Fontes:** por padrão usa a stack de fontes do sistema (`-apple-system`, `Segoe UI` etc.) — zero requisições externas, carregamento instantâneo. Se quiser trocar por uma fonte do Google (ex: Space Grotesk nos títulos), me avise que eu troco pra `next/font/google`.
- **Cores:** tudo centralizado em `src/app/globals.css`, dentro do bloco `@theme inline` — preto `#070707` + laranja `#FF6B00` / `#FF8A00` / `#FF9E2C`.
- **Sem `tailwind.config.js`:** Tailwind v4 usa CSS-first config (`@theme` dentro do próprio `globals.css`).
- Os botões de plano (`Assinar mensal` / `Quero o vitalício`) apontam pra `#` — troque pelo link de checkout real quando definir onde processar pagamento.

## Build de produção

```bash
npm run build
npm run start
```
