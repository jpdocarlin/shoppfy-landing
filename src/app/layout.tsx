import type { Metadata } from "next";
import "./globals.css";
import { BackgroundFX } from "@/components/BackgroundFX";

export const metadata: Metadata = {
  title: "Shoppfy — O sistema operacional do afiliado Shopee",
  description:
    "Encontre produtos vencedores, crie vídeos com IA e gerencie seus links de afiliado numa única plataforma. Shoppfy: tecnologia de ponta para quem leva afiliação a sério.",
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
