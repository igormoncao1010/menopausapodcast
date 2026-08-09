import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Fraunces({ variable: "--font-serif", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers(); const host = h.get("host") ?? "localhost:3000"; const protocol = host.startsWith("localhost") ? "http" : "https"; const image = `${protocol}://${host}/og-menopausa.png`;
  return { title: { default: "Menopausa Não Tem Cor", template: "%s | Menopausa Não Tem Cor" }, description: "Conversas reais, informação confiável e acolhimento para viver a menopausa sem tabu.", openGraph: { title: "Menopausa Não Tem Cor", description: "Conversas reais. Informação sem tabu.", images: [image], locale: "pt_BR", type: "website" }, twitter: { card: "summary_large_image", title: "Menopausa Não Tem Cor", description: "Conversas reais. Informação sem tabu.", images: [image] } };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>; }
