import type { Metadata, Viewport } from "next";
import { InstitutionalPage, InstitutionalContactCTA } from "@/components/institutional-page";
import { aboutIntro, aboutSections, institutionalSource, managementPrinciples } from "@/lib/institutional-content";
import { Arrow } from "@/components/navigation";

export const metadata: Metadata = { title: "Nosotros", description: aboutIntro };
export const viewport: Viewport = { themeColor: "#fafbf9" };

export default function AboutPage() {
  return <InstitutionalPage title="Nosotros" eyebrow="Somos ICONO" intro={aboutIntro} image="icono_2.jpg">
    <section className="d-section d-company-story" aria-labelledby="company-title"><div className="d-company-intro"><p className="eyebrow">Nuestra manera de trabajar</p><h2 id="company-title">El valor de saber.<br /><em>La responsabilidad de hacer.</em></h2><div className="d-experience"><strong>26<span>+</span></strong><p>Años de experiencia<br />en el mercado eléctrico.</p></div><ul className="d-principles"><li>Profesionalidad</li><li>Calidad</li><li>Eficiencia</li></ul></div><div className="d-company-statements">{aboutSections.map((section, index) => <article key={section.title}><p className="eyebrow">0{index + 1}</p><h3>{section.title}</h3><p>{section.text}</p></article>)}</div></section>
    <section className="d-section d-management" aria-labelledby="management-title"><div className="d-section-heading"><div><p className="eyebrow">Compromiso en cada proyecto</p><h2 id="management-title">Principios de gestión.</h2></div></div><ol>{managementPrinciples.map((principle, index) => <li key={principle}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{principle}</p></li>)}</ol><a className="d-source-link" href={institutionalSource} target="_blank" rel="noreferrer">Fuente: sitio institucional de ICONO <Arrow /></a></section>
    <InstitutionalContactCTA />
  </InstitutionalPage>;
}
