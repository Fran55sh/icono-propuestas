"use client";

import { useState } from "react";
import clients from "@/lib/clients.json";

function normalize(value: string) { return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("es-AR"); }

export function ClientDirectory() {
  const [query, setQuery] = useState("");
  const visible = clients.filter(client => normalize(client).includes(normalize(query.trim())));
  return <div className="d-client-directory"><div className="d-directory-toolbar"><div><label htmlFor="client-search">Buscar empresa o localidad</label><input type="search" id="client-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ej.: ABB, Neuquén, Siemens…" /></div><p role="status">{visible.length} de {clients.length} entradas</p></div>
    {visible.length ? <ul className="d-directory-grid">{visible.map((client, index) => <li key={client + index}>{client}</li>)}</ul> : <div className="d-directory-empty"><p>No encontramos coincidencias para esa búsqueda.</p><button type="button" onClick={() => setQuery("")}>Limpiar búsqueda</button></div>}
  </div>;
}
