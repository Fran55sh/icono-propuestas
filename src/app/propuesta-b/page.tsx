import type { Metadata, Viewport } from "next";
import { Header, ProposalNav, Arrow } from "@/components/navigation";
import { Photo, ContactInfo, Footer, ServiceDetails } from "@/components/shared";
import { company, clients, services } from "@/lib/content";
export const metadata: Metadata = { title: "B — Corporativo Moderno" };
export const viewport: Viewport = { themeColor: "#fafbf9" };

export default function ProposalB() {
  return <div className="design-b" id="inicio"><Header variant="b" /><main id="contenido">
    <section className="b-hero"><div className="b-hero-intro"><div className="b-brand-title hero-enter" translate="no">ICONO<span>SRL</span></div><div className="b-hero-heading hero-enter"><p className="eyebrow">Ingeniería eléctrica y electrónica de potencia</p><h1>La experiencia como base.<br /><em>La precisión como método.</em></h1></div></div><div className="b-hero-image"><Photo priority src="icono_1.jpg" alt="Técnicos realizando tareas en altura en una estación eléctrica, fotografía del sitio de ICONO" /></div><div className="b-hero-caption"><p>{company.intro}</p><a className="b-link" href="#servicios">Conocé nuestros servicios <Arrow /></a></div></section>
    <section className="b-services section-pad" id="servicios"><div className="b-section-head"><p className="eyebrow">01 — Servicios</p><h2>Una mirada integral<br />sobre cada instalación.</h2><p>{company.scope}</p></div><div className="b-services-table">{services.map(item => <ServiceDetails key={item.id} item={item} />)}</div></section>
    <section className="b-about section-pad" id="nosotros"><div className="b-about-copy"><p className="eyebrow">02 — Nosotros</p><h2>El valor de saber.<br /><em>La responsabilidad de hacer.</em></h2><p>{company.experience}</p><p>{company.commitment}</p></div><figure className="b-about-image"><Photo src="icono_2.jpg" alt="Vehículo identificado con la marca ICONO junto a instalaciones eléctricas industriales" /><figcaption><span>Ingeniería de campo</span><span>ICONO SRL</span></figcaption></figure><div className="b-principles"><span>Profesionalidad</span><span>Calidad</span><span>Eficiencia</span></div></section>
    <section className="b-clients section-pad" id="clientes"><div className="b-section-head"><p className="eyebrow">03 — Clientes</p><h2>La confianza se construye<br /><em>con trabajo.</em></h2><p>Empresas que forman parte de nuestra trayectoria.</p></div><ul className="b-client-list">{clients.map((client, i) => <li key={client}><span className="client-index">0{i + 1}</span>{client}</li>)}</ul><a className="b-link" href="https://iconosrl.com.ar/clientes/" target="_blank" rel="noreferrer">Ver listado completo de clientes <Arrow /></a></section>
    <section className="b-contact section-pad" id="contacto"><div className="b-contact-heading"><p className="eyebrow">04 — Contacto</p><h2>Tu próximo proyecto<br /><em>empieza con una conversación.</em></h2><p>Contactá a nuestro equipo para conversar sobre las necesidades de tu instalación.</p></div><ContactInfo /></section>
  </main><Footer /><ProposalNav active="b" /></div>;
}
