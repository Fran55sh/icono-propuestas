import { company } from "./content";

export type ContactValues = { name: string; email: string; organization: string; phone: string; service: string; message: string };

export function createContactDraft(values: ContactValues) {
  const subject = "Consulta web — " + values.service;
  const body = ["Nombre: " + values.name.trim(), "Correo: " + values.email.trim(), "Empresa: " + (values.organization.trim() || "No indicada"), "Teléfono: " + (values.phone.trim() || "No indicado"), "Interés: " + values.service, "", values.message.trim()].join("\r\n");
  return "mailto:" + company.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}
