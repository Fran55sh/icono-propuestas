"use client";

import { useEffect, useState } from "react";
import { Brand } from "./navigation";

const sections = [
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "clientes", label: "Clientes" },
  { id: "contacto", label: "Contacto" },
];

export function InstitutionalHeader() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const header = document.querySelector<HTMLElement>(".d-header");
      const offset = (header?.getBoundingClientRect().height ?? 0) + 60;
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= offset) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = "contacto";
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <header className="d-header">
    <div className="d-header-brand"><Brand /><span>Ingeniería eléctrica y<br />electrónica de potencia</span></div>
    <nav className="d-navigation" aria-label="Navegación principal">
      {sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined}>{section.label}</a>)}
    </nav>
  </header>;
}
