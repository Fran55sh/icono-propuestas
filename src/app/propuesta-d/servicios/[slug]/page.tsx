import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InstitutionalHeader } from "@/components/institutional-header";
import { Arrow, ProposalNav } from "@/components/navigation";
import { ContactInfo, Footer, Photo } from "@/components/shared";
import { serviceHref, servicePages } from "@/lib/service-pages";
import "../../design.css";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const viewport: Viewport = { themeColor: "#fafbf9" };
export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find(item => item.slug === slug);
  if (!service) notFound();
  return { title: service.title, description: service.intro };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find(item => item.slug === slug);
  if (!service) notFound();
  const related = servicePages.filter(item => item.slug !== slug);

  return <div className="design-d d-service-page" id="inicio">
    <InstitutionalHeader />
    <main id="contenido" tabIndex={-1}>
      <nav className="d-breadcrumb" aria-label="Ruta de navegación"><Link href="/propuesta-d">Inicio</Link><span aria-hidden="true">/</span><Link href="/propuesta-d#servicios">Servicios</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
      <section className="d-service-hero" aria-labelledby="service-title">
        <div className="d-hero-photo"><Photo priority src={service.image} alt="" /></div>
        <div className="d-hero-panel">
          <div className="d-hero-heading"><p className="eyebrow">{service.id} — Servicios de ICONO</p><h1 id="service-title">{service.title}</h1></div>
          <div className="d-hero-intro"><p>{service.intro}</p><Link className="d-button" href="/propuesta-d/contacto">Consultar a nuestro equipo <Arrow /></Link></div>
        </div>
      </section>

      <section className="d-section d-service-body" aria-labelledby="scope-title">
        <aside className="d-service-index"><p className="eyebrow">{service.equipment ? "Instrumentación" : "Alcance del servicio"}</p><h2 id="scope-title">{service.equipment ? "Tecnología para cada ensayo." : "Experiencia aplicada a cada necesidad."}</h2>
          <nav aria-label="Contenido de esta página">{service.equipment ? service.equipment.map((item, index) => <a key={item.name} href={"#equipo-" + (index + 1)}>{String(index + 1).padStart(2, "0")} <span>{item.name}</span></a>) : service.sections.map((section, index) => <a key={section.title} href={"#alcance-" + (index + 1)}>{String(index + 1).padStart(2, "0")} <span>{section.title}</span></a>)}</nav>
        </aside>
        <div className="d-service-content">
          {service.sections.map((section, index) => <article className="d-scope-block" id={"alcance-" + (index + 1)} key={section.title}><span className="eyebrow">{String(index + 1).padStart(2, "0")}</span><h3>{section.title}</h3><ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
          {service.equipment && <><div className="d-equipment-list">{service.equipment.map((item, index) => <article className="d-equipment-card" id={"equipo-" + (index + 1)} key={item.name}>
            <figure><img src={item.image} alt={item.name} width={400} height={300} loading="lazy" /></figure>
            <div><p className="eyebrow">Equipo {String(index + 1).padStart(2, "0")}</p><h3>{item.name}</h3><p>{item.description}</p><ul>{item.specs.map(spec => <li key={spec}>{spec}</li>)}</ul></div>
          </article>)}</div><p className="d-catalog-note"><strong>*</strong> El resto de los productos se va a cargar en producción.</p></>}
          <a className="d-source-link" href={service.source} target="_blank" rel="noreferrer">Fuente: sitio institucional de ICONO <Arrow /></a>
        </div>
      </section>

      <section className="d-section d-related-services" aria-labelledby="related-title"><div className="d-section-heading"><div><p className="eyebrow">Seguí explorando</p><h2 id="related-title">Nuestros otros servicios.</h2></div><Link className="d-link" href="/propuesta-d#servicios">Ver todos los servicios <Arrow /></Link></div><div className="d-related-grid">{related.map(item => <Link key={item.slug} href={serviceHref(item.slug)}><span className="eyebrow">{item.id}</span><h3>{item.title}</h3><Arrow /></Link>)}</div></section>

      <section className="d-contact d-section" id="contacto" aria-labelledby="d-contact-title"><div className="d-contact-heading"><p className="eyebrow">Contacto</p><h2 id="d-contact-title">Conversemos sobre<br /><em>tu próximo proyecto.</em></h2><p>Consultá a nuestro equipo sobre {service.title.toLocaleLowerCase("es-AR")}.</p><Link className="d-link" href="/propuesta-d/contacto">Ir al formulario de contacto <Arrow /></Link></div><ContactInfo /></section>
    </main>
    <Footer /><ProposalNav active="d" />
  </div>;
}
