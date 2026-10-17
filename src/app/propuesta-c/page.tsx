import type { Metadata, Viewport } from "next";
import { Header, ProposalNav, Arrow } from "@/components/navigation";
import { Photo, ContactInfo, Footer, ServiceDetails } from "@/components/shared";
import { company, clients, services } from "@/lib/content";
export const metadata: Metadata = { title: "C — Híbrido Contemporáneo" };
export const viewport: Viewport = { themeColor: "#121f2b" };

export default function ProposalC() {
  return <div className="design-c" id="inicio"><Header variant="c" /><main id="contenido">
    <section className="c-hero"><Photo priority src="icono_1.jpg" alt="Intervención técnica en una estación eléctrica, material publicado por ICONO" className="c-hero-photo" /><div className="c-hero-shade" /><div className="c-hero-content"><p className="eyebrow hero-enter">Ingeniería eléctrica y electrónica de potencia</p><div className="c-wordmark hero-enter" translate="no">ICONO<span>SRL</span></div><div className="c-hero-baseline hero-enter"><h1>Experiencia en campo.<br />Ingeniería en acción.</h1><a className="button button-blue" href="#servicios">Conocé lo que hacemos <Arrow /></a></div></div></section>
    <section className="c-intro section-pad"><p className="eyebrow">Conocimiento que se aplica.</p><div><h2>De la planificación<br />a la puesta en marcha.</h2><p>{company.scope}</p></div></section>
    <section className="c-services section-pad" id="servicios"><div className="c-services-heading"><p className="eyebrow">01 / Nuestras capacidades</p><h2>Cada desafío.<br /><span>Una respuesta técnica.</span></h2><p>{company.intro}</p></div><div className="c-service-layout"><figure><Photo src="icono_3.jpg" alt="Instalación de transformación eléctrica y aerogeneradores en el horizonte" /><figcaption>Una mirada integral sobre la energía.</figcaption></figure><div className="c-service-list">{services.map(item => <ServiceDetails key={item.id} item={item} />)}</div></div></section>
    <section className="c-about section-pad" id="nosotros"><div className="c-about-stat"><p className="eyebrow">02 / Trayectoria</p><strong>26<span>+</span></strong><span>Años de experiencia<br />en el mercado eléctrico.</span></div><div className="c-about-copy"><h2>Solidez técnica.<br />Compromiso humano.</h2><p>{company.experience}</p><p>{company.commitment}</p><div className="c-principles">Profesionalidad · Calidad · Eficiencia</div></div></section>
    <section className="c-clients section-pad" id="clientes"><div><p className="eyebrow">03 / Clientes</p><h2>La confianza,<br />en buena compañía.</h2><p>Empresas que forman parte de nuestra trayectoria.</p></div><div><ul className="c-client-list">{clients.map(client => <li key={client}>{client}</li>)}</ul><a className="text-link" href="https://iconosrl.com.ar/clientes/" target="_blank" rel="noreferrer">Ver listado completo de clientes <Arrow /></a></div></section>
    <section className="c-contact section-pad" id="contacto"><p className="eyebrow">04 / Hablemos</p><div className="c-contact-title"><h2>Conectemos<br />tu próximo proyecto.</h2><a className="circle-link" href={`mailto:${company.email}`} aria-label="Escribir a ICONO"><Arrow /></a></div><ContactInfo /></section>
  </main><Footer /><ProposalNav active="c" /></div>;
}

