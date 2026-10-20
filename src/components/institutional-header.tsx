"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./navigation";

const home = "/propuesta-d";
const serviceLinks = [
  { label: "Ensayos y mediciones", href: home + "/servicios/ensayos-y-mediciones" },
  { label: "Estudios eléctricos", href: home + "/servicios/ingenieria-y-estudios" },
  { label: "Cursos de capacitación", href: home + "/servicios/servicios-de-capacitacion" },
  { label: "Otros servicios", href: home + "/servicios/otros-servicios" },
];

export function InstitutionalHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const submenu = useRef<HTMLDivElement>(null);
  const close = () => { setMobileOpen(false); setServicesOpen(false); };
  const isServicePage = serviceLinks.some(item => pathname === item.href);
  const current = (href: string) => pathname === href ? "page" as const : undefined;

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) {
        setMobileOpen(false); setServicesOpen(false);
      }
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  return <header className="d-header" ref={header} onKeyDown={event => {
    if (event.key !== "Escape") return;
    if (servicesOpen) { event.preventDefault(); setServicesOpen(false); servicesButton.current?.focus(); }
    else if (mobileOpen) { event.preventDefault(); setMobileOpen(false); mobileButton.current?.focus(); }
  }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}>
    <div className="d-header-brand"><Brand href={home} /><span>Ingeniería eléctrica y<br />electrónica de potencia</span></div>
    <button className="d-mobile-toggle" ref={mobileButton} type="button" aria-expanded={mobileOpen} aria-controls="d-main-navigation" onClick={() => { setMobileOpen(!mobileOpen); setServicesOpen(false); }}>
      {mobileOpen ? "Cerrar" : "Menú"}<span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
    </button>
    <nav className={"d-navigation" + (mobileOpen ? " is-open" : "")} id="d-main-navigation" aria-label="Navegación principal">
      <Link className="d-nav-link" href={home} aria-current={current(home)} onClick={close}>Inicio</Link>
      <Link className="d-nav-link" href={home + "/nosotros"} aria-current={current(home + "/nosotros")} onClick={close}>Nosotros</Link>
      <div className="d-services-menu" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
        <button className={"d-nav-link d-services-toggle" + (isServicePage ? " is-current" : "")} ref={servicesButton} type="button" aria-expanded={servicesOpen} aria-controls="d-services-submenu" onClick={() => setServicesOpen(!servicesOpen)} onKeyDown={event => {
          if (event.key === "ArrowDown") { event.preventDefault(); setServicesOpen(true); requestAnimationFrame(() => submenu.current?.querySelector<HTMLAnchorElement>("a")?.focus()); }
        }}>Servicios <span className="d-submenu-chevron" aria-hidden="true">⌄</span></button>
        <div className="d-services-submenu" id="d-services-submenu" ref={submenu} hidden={!servicesOpen}>
          {serviceLinks.map(item => <Link key={item.href} href={item.href} aria-current={current(item.href)} onClick={close}>{item.label}</Link>)}
        </div>
      </div>
      <Link className="d-nav-link" href={home + "/servicios/nuestro-equipamiento"} aria-current={current(home + "/servicios/nuestro-equipamiento")} onClick={close}>Equipamiento</Link>
      <Link className="d-nav-link" href={home + "/clientes"} aria-current={current(home + "/clientes")} onClick={close}>Clientes</Link>
      <Link className="d-nav-link d-nav-contact" href={home + "/contacto"} aria-current={current(home + "/contacto")} onClick={close}>Contacto</Link>
    </nav>
  </header>;
}
