import type { Metadata, Viewport } from "next";
import { InstitutionalPage } from "@/components/institutional-page";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/shared";

export const metadata: Metadata = { title: "Contacto", description: "Contactá al equipo de ICONO SRL y contanos qué necesita tu próximo proyecto." };
export const viewport: Viewport = { themeColor: "#fafbf9" };

export default function ContactPage() {
  return <InstitutionalPage title="Contacto" eyebrow="Conversemos" intro="Cada proyecto tiene sus propios desafíos. Contanos qué necesitás y prepará una consulta para nuestro equipo." image="icono_4.jpg">
    <section className="d-section d-contact-page-content" id="contacto" aria-labelledby="contact-form-title"><div><p className="eyebrow">Tu próximo proyecto</p><h2 id="contact-form-title">¿En qué podemos ayudarte?</h2><ContactForm /></div><aside className="d-contact-direct" aria-labelledby="direct-title"><p className="eyebrow">Contacto directo</p><h2 id="direct-title">Estamos cerca.</h2><ContactInfo /></aside></section>
  </InstitutionalPage>;
}
