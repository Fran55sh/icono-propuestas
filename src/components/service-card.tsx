import Link from "next/link";
import { Arrow } from "./navigation";
import { serviceCards, serviceHref } from "@/lib/service-pages";

export function ServiceCard({ item }: { item: typeof serviceCards[number] }) {
  return <Link href={serviceHref(item.slug)} className="service-details d-service-card">
    <span className="service-number">{item.id}</span>
    <span className="service-summary"><span className="service-title">{item.title}</span><span className="service-short">{item.short}</span></span>
    <span className="d-card-action">Conocer más <Arrow /></span>
  </Link>;
}
