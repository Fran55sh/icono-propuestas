import { company, services } from "@/lib/content";
import { Arrow } from "./navigation";

export function ServiceDetails({ item }: { item: typeof services[number] }) {
  return <details className="service-details"><summary><span className="service-number">{item.id}</span><span className="service-summary"><span className="service-title">{item.title}</span><span className="service-short">{item.short}</span></span><span className="details-plus" aria-hidden="true">+</span></summary><div className="service-expanded"><p>{item.detail}</p><a href={item.url} target="_blank" rel="noreferrer">Ver alcance técnico en el sitio de ICONO <Arrow /></a></div></details>;
}

export function ContactInfo() {
  return <div className="contact-info"><div><span className="eyebrow">Escribinos</span><a className="email-link" href={`mailto:${company.email}`}>{company.email} <Arrow /></a><a href={company.phoneHref}>{company.phone}</a></div><div><span className="eyebrow">Encontranos</span><address>{company.address}<br />{company.city}</address><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Villarino+53+Bahia+Blanca+Argentina" target="_blank" rel="noreferrer">Ver ubicación <Arrow /></a></div></div>;
}

export function Footer() {
  return <footer className="site-footer"><span translate="no">ICONO SRL</span><p>Ingeniería eléctrica y electrónica de potencia.</p><div><a href="https://www.linkedin.com/company/icono-srl/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a></div></footer>;
}

export function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return <img src={`/images/${src}`} alt={alt} width={1366} height={438} className={`photo ${className}`} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />;
}
