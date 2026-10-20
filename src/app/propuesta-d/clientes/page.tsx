import type { Metadata, Viewport } from "next";
import { InstitutionalPage, InstitutionalContactCTA } from "@/components/institutional-page";
import { ClientDirectory } from "@/components/client-directory";
import { Arrow } from "@/components/navigation";

export const metadata: Metadata = { title: "Clientes", description: "Empresas y organizaciones que forman parte de la trayectoria de ICONO SRL." };
export const viewport: Viewport = { themeColor: "#fafbf9" };

export default function ClientsPage() {
  return <InstitutionalPage title="Clientes" eyebrow="Nuestra trayectoria" intro="La confianza se construye con trabajo. Conocé las empresas y organizaciones que forman parte de nuestra trayectoria." image="icono_3.jpg">
    <section className="d-section" aria-labelledby="clients-title"><div className="d-section-heading"><div><p className="eyebrow">Nuestros clientes</p><h2 id="clients-title">Relaciones que hablan<br /><em>de nuestra experiencia.</em></h2></div><p>Listado publicado en el sitio institucional de ICONO.</p></div><ClientDirectory /><a className="d-source-link" href="https://iconosrl.com.ar/clientes/" target="_blank" rel="noreferrer">Fuente: listado de clientes de ICONO <Arrow /></a></section>
    <InstitutionalContactCTA />
  </InstitutionalPage>;
}
