import Link from "next/link";
import { Arrow } from "./navigation";
import { serviceCards, serviceHref } from "@/lib/service-pages";

export function ServiceCard({ item }: { item: typeof serviceCards[number] }) {
  return <Link href={serviceHref(item.slug)} className="service-details d-service-card">
    <span className="service-number">{item.id}</span>
    <div className="service-summary"><h3 className="service-title">{item.title}</h3><p className="service-short">{item.short}</p></div>
    <span className="d-card-action">Conocer más <Arrow /></span>
  </Link>;
}
