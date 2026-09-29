import type { Metadata } from "next";
import "./globals.css";
import { BackgroundFX } from "@/components/BackgroundFX";

export const metadata: Metadata = {
  title: "Shoppfy — Crie anúncios prontos na Shopee",
  description:
    "Escolha um produto no catálogo do nosso fornecedor e publique seu anúncio na Shopee em poucos cliques — foto, título e descrição prontos por IA. Shoppfy: infraestrutura de ponta pra quem revende sério.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark h-full antialiased">
      <body className="min-h-full bg-background text-foreground selection:bg-orange/30">
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
