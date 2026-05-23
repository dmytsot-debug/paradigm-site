import type { Metadata } from "next";
import { Phone, Mail, Instagram, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SERVICE_AREA } from "@/content/service-area";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — Request an estimate",
  description:
    "Request an estimate from Paradigm Services. Call 778-938-5311 or send us a message. 24/7 emergency service across Metro Vancouver.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-10 lg:pt-24 lg:pb-12 bg-gradient-to-b from-brand-blue-100/40 to-background dark:from-brand-blue-700/30">
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
            className="lg:col-span-5 space-y-5"
            selector="[data-info]"
            staggerChildren={100}
          >
            <div data-info className="bg-surface border border-border rounded-xl p-6">
              <h2 className="font-semibold text-lg">Direct line</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-foreground hover:text-brand-orange transition-colors"
                  >
                    <span className="size-10 rounded-lg bg-brand-orange/15 inline-flex items-center justify-center text-brand-orange">
                      <Phone className="size-5" />
                    </span>
                    <span>
                      <span className="block font-medium">{SITE.phone}</span>
                      <span className="block text-xs text-foreground-faint">
                        24/7 emergency line
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.emailHref}
                    className="flex items-center gap-3 text-foreground hover:text-brand-orange transition-colors"
                  >
                    <span className="size-10 rounded-lg bg-brand-orange/15 inline-flex items-center justify-center text-brand-orange">
                      <Mail className="size-5" />
                    </span>
                    <span className="break-all">
                      <span className="block font-medium">{SITE.email}</span>
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
                    className="flex items-center gap-3 text-foreground hover:text-brand-orange transition-colors"
                  >
                    <span className="size-10 rounded-lg bg-brand-orange/15 inline-flex items-center justify-center text-brand-orange">
                      <Instagram className="size-5" />
                    </span>
                    <span>
                      <span className="block font-medium">
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

            <div data-info className="bg-surface border border-border rounded-xl p-6">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Clock className="size-5 text-brand-orange" /> Hours
              </h2>
              <p className="mt-3 text-foreground-muted text-sm">
                Mon–Sun · 24/7 Emergency Service
              </p>
              <p className="mt-1 text-foreground-faint text-xs">
                Scheduled work typically 8am–6pm. Same-day &amp; after-hours
                available for urgent issues.
              </p>
            </div>

            <div data-info className="bg-surface border border-border rounded-xl p-6">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="size-5 text-brand-orange" /> Address
              </h2>
              <address className="mt-3 not-italic text-sm text-foreground leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </address>
            </div>

            <div data-info className="bg-surface border border-border rounded-xl p-6">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="size-5 text-brand-orange" /> Service area
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-foreground-muted">
                {SERVICE_AREA.map((c) => (
                  <li key={c.name}>{c.name}</li>
                ))}
              </ul>
            </div>

            <div data-info className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <iframe
                title="Paradigm Services location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
                )}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
