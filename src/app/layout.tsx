import type { Metadata } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/oswald/latin-500.css";
import "@fontsource/oswald/latin-600.css";
import "@fontsource/libre-baskerville/latin-400.css";
import "@fontsource/libre-baskerville/latin-400-italic.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "./globals.css";
export const metadata: Metadata = { title: { default: "ICONO SRL · Ingeniería eléctrica", template: "%s · ICONO SRL" }, description: "ICONO SRL. Ingeniería eléctrica, ensayos y consultoría en electrónica de potencia.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR" data-scroll-behavior="smooth"><body><a href="#contenido" className="skip-link">Saltar al contenido</a>{children}</body></html>;
}
