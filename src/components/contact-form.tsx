"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./navigation";
import { createContactDraft } from "@/lib/contact-draft";

export function ContactForm() {
  const [draft, setDraft] = useState<string | null>(null);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) || "");
    const name = event.currentTarget.elements.namedItem("name") as HTMLInputElement;
    const message = event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement;
    name.setCustomValidity(field("name").trim().length >= 2 ? "" : "Ingresá tu nombre.");
    message.setCustomValidity(field("message").trim().length >= 10 ? "" : "Contanos tu consulta en al menos 10 caracteres.");
    if (!event.currentTarget.reportValidity()) return;
    setDraft(createContactDraft({ name: field("name"), email: field("email"), organization: field("organization"), phone: field("phone"), service: field("service"), message: field("message") }));
  }

  return <form className="d-contact-form" action="mailto:info@iconosrl.com.ar" method="post" encType="text/plain" onSubmit={prepare} onChange={event => { setDraft(null); const field: EventTarget = event.target; if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) field.setCustomValidity(""); }}>
    <p className="d-form-intro">Completá los datos y prepará tu consulta. Después podrás revisarla y enviarla desde tu aplicación de correo.</p>
    <p className="d-required-note">Los campos con * son obligatorios.</p>
    <div className="d-form-grid"><div className="d-form-field"><label htmlFor="contact-name">Nombre y apellido *</label><input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} /></div><div className="d-form-field"><label htmlFor="contact-email">Correo electrónico *</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={160} /></div><div className="d-form-field"><label htmlFor="contact-organization">Empresa</label><input id="contact-organization" name="organization" autoComplete="organization" maxLength={160} /></div><div className="d-form-field"><label htmlFor="contact-phone">Teléfono</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} /></div></div>
    <div className="d-form-field"><label htmlFor="contact-service">Servicio de interés</label><select id="contact-service" name="service" defaultValue="Consulta general"><option>Consulta general</option><option>Ensayos y mediciones</option><option>Estudios eléctricos</option><option>Cursos de capacitación</option><option>Otros servicios</option><option>Equipamiento</option></select></div>
    <div className="d-form-field"><label htmlFor="contact-message">Tu consulta *</label><textarea id="contact-message" name="message" rows={6} required minLength={10} maxLength={2000} placeholder="Contanos qué necesita tu proyecto." /></div>
    <button className="d-button d-form-submit" type="submit">Preparar correo <Arrow /></button>
    {draft && <div className="d-draft-ready"><p role="status">Tu consulta está preparada. Abrí tu correo para revisarla y enviarla a info@iconosrl.com.ar.</p><a className="d-link" href={draft}>Abrir en mi correo <Arrow /></a></div>}
    <noscript><p>Para usar el formulario necesitás JavaScript. También podés escribirnos directamente a <a href="mailto:info@iconosrl.com.ar">info@iconosrl.com.ar</a>.</p></noscript>
  </form>;
}
