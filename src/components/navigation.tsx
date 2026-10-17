"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export function Brand({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className="brand" aria-label="ICONO SRL — Inicio"><img src={`/images/${light ? "Icono-logo-blanco-1.png" : "Icono-logo.png"}`} alt="ICONO SRL" width={light ? 427 : 134} height={light ? 172 : 67} /></a>;
}

export function Header({ variant }: { variant: "a" | "b" | "c" }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className={`site-header header-${variant}`}>
    <Brand light={variant !== "b"} />
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
    <nav id="site-navigation" aria-label="Navegación principal" className={open ? "main-nav is-open" : "main-nav"}>
      <a onClick={() => setOpen(false)} href="#servicios">Servicios</a>
      <a onClick={() => setOpen(false)} href="#nosotros">Nosotros</a>
      <a onClick={() => setOpen(false)} href="#clientes">Clientes</a>
      <a onClick={() => setOpen(false)} href="#contacto" className="nav-contact">Conversemos <Arrow /></a>
    </nav>
  </header>;
}

export function ProposalNav({ active }: { active: "a" | "b" | "c" }) {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [active]);
  return <nav className="proposal-nav" aria-label="Cambiar propuesta"><Link href="/" className="proposal-back"><span aria-hidden="true">←</span> Propuestas</Link><span className="proposal-divider" aria-hidden="true" />{["a", "b", "c"].map(id => <Link key={id} href={`/propuesta-${id}`} aria-label={`Propuesta ${id.toUpperCase()}`} aria-current={id === active ? "page" : undefined}>{id.toUpperCase()}</Link>)}</nav>;
}
