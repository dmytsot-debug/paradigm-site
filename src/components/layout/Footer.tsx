import Link from "next/link";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { SITE } from "@/lib/utils";
import { SERVICE_AREA } from "@/content/service-area";
import { SERVICES } from "@/content/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-blue-900 text-white mt-24">
      <div className="container-prose py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="text-white">
            <Logo variant="mono" className="text-white" />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            {SITE.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-10 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SITE.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Business"
              className="px-3 h-10 inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-sm"
            >
              <MapPin className="size-4" /> Google
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-wider text-white/60 mb-4">
            Services
          </h2>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/80 hover:text-brand-orange transition-colors"
                >
                  {s.title.replace(" Service & Installation", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-wider text-white/60 mb-4">
            Service Area
          </h2>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-white/80">
            {SERVICE_AREA.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-wider text-white/60 mb-4">
            Contact
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors"
              >
                <Phone className="size-4 text-brand-orange" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-2 text-white/90 hover:text-brand-orange transition-colors break-all"
              >
                <Mail className="size-4 text-brand-orange shrink-0" />{" "}
                {SITE.email}
              </a>
            </li>
            <li className="text-white/80 flex items-start gap-2">
              <MapPin className="size-4 text-brand-orange shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </address>
            </li>
            <li className="text-white/70 text-xs pt-2">{SITE.hours}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center px-5 h-11 rounded-md bg-brand-orange-button hover:bg-brand-orange-700 text-white text-sm font-medium transition-colors"
          >
            Request Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>&copy; 2026 Paradigm Services and Installations LTD.</p>
          <p>Licensed &amp; insured · Serving Metro Vancouver</p>
        </div>
      </div>
    </footer>
  );
}
