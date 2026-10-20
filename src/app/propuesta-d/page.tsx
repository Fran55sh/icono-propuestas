import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Arrow, ProposalNav } from "@/components/navigation";
import { InstitutionalHeader } from "@/components/institutional-header";
import { ContactInfo, Footer, Photo } from "@/components/shared";
import { clients, company } from "@/lib/content";
import { ServiceCard } from "@/components/service-card";
import { serviceCards } from "@/lib/service-pages";
import "./design.css";

export const metadata: Metadata = { title: "Ingeniería eléctrica", description: company.intro };
export const viewport: Viewport = { themeColor: "#fafbf9" };

export default function ProposalD() {
  return <div className="design-d" id="inicio">
    <InstitutionalHeader />
    <main id="contenido" tabIndex={-1}>
      <section className="d-hero" aria-labelledby="d-title">
        <div className="d-hero-photo"><Photo priority src="icono_1.jpg" alt="Técnicos realizando tareas en altura en una estación eléctrica, fotografía del sitio de ICONO" /><span className="d-photo-label" aria-hidden="true">ICONO SRL <span>Ingeniería de campo</span></span></div>
        <div className="d-hero-panel">
          <div className="d-hero-heading"><p className="eyebrow">Ingeniería eléctrica y electrónica de potencia</p><h1 id="d-title">La experiencia como base.<br /><em>La precisión como método.</em></h1></div>
          <div className="d-hero-intro"><p>{company.intro}</p><a className="d-button" href="#servicios">Conocé nuestros servicios <Arrow /></a></div>
        </div>
      </section>

      <section className="d-services d-section" id="servicios" aria-labelledby="d-services-title">
        <div className="d-section-heading"><div><p className="eyebrow">01 — Servicios</p><h2 id="d-services-title">Una mirada integral<br />sobre cada instalación.</h2></div><p>{company.scope}</p></div>
        <div className="d-services-grid">{serviceCards.map(item => <ServiceCard key={item.id} item={item} />)}</div>
      </section>

      <section className="d-about" id="nosotros" aria-labelledby="d-about-title">
        <figure className="d-about-image"><Photo src="icono_2.jpg" alt="Vehículo identificado con la marca ICONO junto a instalaciones eléctricas industriales" /><figcaption>Ingeniería de campo <span>ICONO SRL</span></figcaption></figure>
        <div className="d-about-copy"><p className="eyebrow">02 — Nosotros</p><h2 id="d-about-title">El valor de saber.<br /><em>La responsabilidad de hacer.</em></h2><p>{company.experience}</p><p>{company.commitment}</p><ul className="d-principles"><li>Profesionalidad</li><li>Calidad</li><li>Eficiencia</li></ul><Link className="d-link" href="/propuesta-d/nosotros">Conocé nuestra empresa <Arrow /></Link></div>
      </section>

      <section className="d-clients d-section" id="clientes" aria-labelledby="d-clients-title">
        <div className="d-section-heading"><div><p className="eyebrow">03 — Clientes</p><h2 id="d-clients-title">La confianza se construye<br /><em>con trabajo.</em></h2></div><p>Empresas que forman parte de nuestra trayectoria.</p></div>
        <ul className="d-client-list">{clients.map(client => <li key={client}>{client}</li>)}</ul>
        <Link className="d-link" href="/propuesta-d/clientes">Ver listado completo de clientes <Arrow /></Link>
      </section>

      <section className="d-contact d-section" id="contacto" aria-labelledby="d-contact-title">
        <div className="d-contact-heading"><p className="eyebrow">04 — Contacto</p><h2 id="d-contact-title">Tu próximo proyecto<br /><em>empieza con una conversación.</em></h2><p>Contactá a nuestro equipo para conversar sobre las necesidades de tu instalación.</p><Link className="d-link" href="/propuesta-d/contacto">Ir al formulario de contacto <Arrow /></Link></div><ContactInfo />
      </section>
    </main>
    <Footer /><ProposalNav active="d" />
  </div>;
}
