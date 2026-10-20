import Link from "next/link";
import type { ReactNode } from "react";
import { InstitutionalHeader } from "./institutional-header";
import { Arrow, ProposalNav } from "./navigation";
import { Footer, Photo } from "./shared";
import "@/app/propuesta-d/design.css";

export function InstitutionalPage({ title, eyebrow, intro, image, children }: { title: string; eyebrow: string; intro: string; image: string; children: ReactNode }) {
  return <div className="design-d d-institutional-page" id="inicio">
    <InstitutionalHeader />
    <main id="contenido" tabIndex={-1}>
      <nav className="d-breadcrumb" aria-label="Ruta de navegación"><Link href="/propuesta-d">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      <section className="d-service-hero" aria-labelledby="page-title"><div className="d-hero-photo"><Photo priority src={image} alt="" /></div><div className="d-hero-panel"><div className="d-hero-heading"><p className="eyebrow">{eyebrow}</p><h1 id="page-title">{title}</h1></div><div className="d-hero-intro"><p>{intro}</p></div></div></section>
      {children}
    </main>
    <Footer /><ProposalNav active="d" />
  </div>;
}

export function InstitutionalContactCTA() {
  return <section className="d-section d-institutional-cta" aria-labelledby="inquiry-title"><div><p className="eyebrow">Trabajemos juntos</p><h2 id="inquiry-title">Cada proyecto empieza<br /><em>con una conversación.</em></h2></div><Link className="d-button" href="/propuesta-d/contacto">Hacé tu consulta <Arrow /></Link></section>;
}
