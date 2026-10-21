import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./typography.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = { title: { default: "ICONO SRL · Ingeniería eléctrica", template: "%s · ICONO SRL" }, description: "ICONO SRL. Ingeniería eléctrica, ensayos y consultoría en electrónica de potencia.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html className={montserrat.variable} lang="es-AR" data-scroll-behavior="smooth"><body><a href="#contenido" className="skip-link">Saltar al contenido</a>{children}</body></html>;
}
