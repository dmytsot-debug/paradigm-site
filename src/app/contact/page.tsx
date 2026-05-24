import type { Metadata } from "next";
import { Phone, Mail, Instagram, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SERVICE_AREA } from "@/content/service-area";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact: request an estimate",
  description:
    "Request an estimate from Paradigm Services. Call 778-938-5311 or send us a message. 24/7 emergency service across Metro Vancouver.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Paradigm Services" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 bg-gradient-to-b from-brand-blue-100/40 to-background dark:from-brand-blue-700/30">
        <div className="container-prose max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            Contact
          </span>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            Tell us what&apos;s going on.
          </h1>
          <p className="mt-5 text-foreground-muted text-lg">
            We answer fast. For active emergencies, call{" "}
            <a
              href={SITE.phoneHref}
              className="text-brand-blue-700 dark:text-brand-blue-300 underline underline-offset-4 font-medium"
            >
              {SITE.phone}
            </a>{" "}
            directly.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container-prose grid lg:grid-cols-12 gap-10">
          <ScrollReveal as="div" className="lg:col-span-7">
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal
            as="div"
            className="lg:col-span-5"
            selector="[data-info]"
            staggerChildren={100}
          >
            <div className="lg:sticky lg:top-24 divide-y divide-border">
              <div data-info className="pb-8">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground-faint mb-5">
                  Reach us directly
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={SITE.phoneHref}
                      className="group flex items-center gap-3 text-foreground hover:text-brand-orange transition-colors"
                    >
                      <Phone className="size-5 text-brand-orange shrink-0" />
                      <span className="flex-1">
                        <span className="block font-semibold text-base">
                          {SITE.phone}
                        </span>
                        <span className="block text-xs text-foreground-faint">
                          24/7 emergency line
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.emailHref}
                      className="group flex items-center gap-3 text-foreground hover:text-brand-orange transition-colors"
                    >
                      <Mail className="size-5 text-brand-orange shrink-0" />
                      <span className="flex-1 min-w-0">
                        <span className="block font-medium text-sm break-all">
                          {SITE.email}
                        </span>
                        <span className="block text-xs text-foreground-faint">
                          Estimates &amp; general inquiries
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-foreground hover:text-brand-orange transition-colors"
                    >
                      <Instagram className="size-5 text-brand-orange shrink-0" />
                      <span className="flex-1">
                        <span className="block font-medium text-sm">
                          @paradigmservices.ca
                        </span>
                        <span className="block text-xs text-foreground-faint">
                          Recent work &amp; tips
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div data-info className="py-8 grid grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground-faint mb-3 inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-brand-orange" /> Hours
                  </h2>
                  <p className="text-sm text-foreground">
                    Mon–Sun · 24/7
                  </p>
                  <p className="text-xs text-foreground-faint mt-1">
                    Scheduled work 8am–6pm
                  </p>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground-faint mb-3 inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-brand-orange" /> Address
                  </h2>
                  <address className="not-italic text-sm text-foreground leading-snug">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.region}{" "}
                    {SITE.address.postalCode}
                  </address>
                </div>
              </div>

              <div data-info className="pt-8">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground-faint mb-4">
                  Cities we serve
                </h2>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-foreground-muted">
                  {SERVICE_AREA.map((c) => (
                    <li key={c.name}>{c.name}</li>
                  ))}
                </ul>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
