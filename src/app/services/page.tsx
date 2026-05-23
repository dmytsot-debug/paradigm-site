import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/content/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CtaStrip } from "@/components/sections/CtaStrip";
import {
  JsonLd,
  breadcrumbSchema,
  servicesItemListSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services — Plumbing, Gas, Drains, Water Heaters, Electrical",
  description:
    "Paradigm Services offers plumbing, gas fitting, drain cleaning, water heater service, emergency response, and electrical work across Metro Vancouver.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          servicesItemListSchema(SERVICES),
        ]}
      />
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 bg-gradient-to-b from-brand-blue-100/40 to-background dark:from-brand-blue-700/30">
        <div className="container-prose max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            Services
          </span>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            One call covers the whole trade.
          </h1>
          <p className="mt-5 text-foreground-muted text-lg">
            Plumbing, gas fitting, drains, water heaters, electrical, and
            24/7 emergency response — all under one roof.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-prose">
          <ScrollReveal
            as="div"
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            selector="[data-card]"
            staggerChildren={100}
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  data-card
                  className="group bg-surface border border-border rounded-xl p-7 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue-300 transition-all duration-300 relative"
                >
                  <div className="absolute top-0 left-7 right-7 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="size-12 rounded-lg bg-brand-blue-100 dark:bg-brand-blue-700/40 inline-flex items-center justify-center text-brand-blue-700 dark:text-brand-blue-300">
                    <Icon className="size-6" />
                  </div>
                  <h2 className="mt-5 font-semibold text-lg">{s.title}</h2>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {s.short}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-700 dark:text-brand-blue-300">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
