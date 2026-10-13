import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { AFFILIATES } from "@/lib/affiliates";

// Só gera as páginas de afiliado cadastradas; qualquer outro caminho = 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(AFFILIATES).map((slug) => ({ slug }));
}

export default async function AffiliatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const checkout = AFFILIATES[slug];
  if (!checkout) notFound();
  return <LandingPage checkout={checkout} />;
}
