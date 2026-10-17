import type { Metadata, Viewport } from "next";
import { Header, ProposalNav, Arrow } from "@/components/navigation";
import { Photo, ContactInfo, Footer, ServiceDetails } from "@/components/shared";
import { company, clients, services } from "@/lib/content";
export const metadata: Metadata = { title: "A — Industrial Premium" };
export const viewport: Viewport = { themeColor: "#0b1724" };

export default function ProposalA() {
  return <div className="design-a" id="inicio"><Header variant="a" /><main id="contenido">
    <section className="a-hero">
      <Photo priority src="icono_3.jpg" alt="Vista panorámica de una estación transformadora y aerogeneradores, publicada por ICONO" className="a-hero-photo" />
      <div className="a-hero-shade" />
      <div className="a-hero-content"><p className="eyebrow hero-enter">Ingeniería eléctrica y electrónica de potencia</p><div className="a-wordmark hero-enter" translate="no">ICONO<span>SRL</span></div><h1 className="hero-enter">La precisión que<br />sostiene la energía.</h1><a className="button button-light hero-enter" href="#servicios">Explorá nuestras capacidades <Arrow /></a></div>
      <div className="a-hero-bottom"><span>Ingeniería de campo. Experiencia aplicada.</span><a href="#servicios" aria-label="Ir a servicios">Descubrí ICONO <span aria-hidden="true">↓</span></a></div>
    </section>
    <section className="a-services section-pad" id="servicios"><div className="a-services-left"><p className="eyebrow">01 / Capacidades</p><h2>Conocimiento técnico.<br /><span>Respuestas concretas.</span></h2><p className="section-description">{company.intro}</p><figure><Photo src="icono_1.jpg" alt="Personal trabajando en altura sobre equipamiento de una estación eléctrica" /><figcaption>Ingeniería en el lugar donde hace falta.</figcaption></figure></div><div className="a-service-list">{services.map(item => <ServiceDetails key={item.id} item={item} />)}</div></section>
    <section className="a-about section-pad" id="nosotros"><div><p className="eyebrow">02 / Nuestra trayectoria</p><h2>El respaldo está<br />en la experiencia.</h2></div><div className="a-about-story"><div className="a-years"><strong>26<span>+</span></strong><span>Años de experiencia<br />en el mercado eléctrico</span></div><p>{company.experience}</p><p>{company.scope}</p></div><div className="a-commitment"><span className="eyebrow">Una forma de hacer</span><p>{company.commitment}</p><span className="a-signature">Profesionalidad. Calidad. Eficiencia.</span></div></section>
    <section className="a-clients section-pad" id="clientes"><div className="section-heading"><p className="eyebrow">03 / Clientes</p><h2>Experiencia que conecta industrias.</h2></div><p className="section-description">Empresas que forman parte de nuestra trayectoria.</p><ul className="a-client-list">{clients.map(client => <li key={client}>{client}</li>)}</ul><a className="text-link" href="https://iconosrl.com.ar/clientes/" target="_blank" rel="noreferrer">Conocé el listado completo de clientes <Arrow /></a></section>
    <section className="a-contact section-pad" id="contacto"><p className="eyebrow">04 / Contacto</p><div className="a-contact-title"><h2>Hablemos de tu<br />próximo proyecto.</h2><a className="circle-link" href={`mailto:${company.email}`} aria-label="Escribir a ICONO"><Arrow /></a></div><ContactInfo /></section>
  </main><Footer /><ProposalNav active="a" /></div>;
}
