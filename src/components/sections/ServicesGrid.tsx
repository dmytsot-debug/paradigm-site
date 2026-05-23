import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_GRID } from "@/content/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-background-subtle/60 border-y border-border"
    >
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold tracking-tight">
            Services for homes, businesses &amp; strata
          </h2>
          <p className="mt-4 text-foreground-muted text-lg">
            Five core service lines, delivered by licensed tradespeople across
            Metro Vancouver.
          </p>
        </div>

        <ScrollReveal
          as="div"
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          selector="[data-card]"
          staggerChildren={100}
        >
          {SERVICES_GRID.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                data-card
                className="group relative bg-surface rounded-xl border border-border p-7 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue-300 transition-all duration-300"
              >
                <div className="absolute top-0 left-7 right-7 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="size-12 rounded-lg bg-brand-blue-100 dark:bg-brand-blue-700/40 inline-flex items-center justify-center text-brand-blue-700 dark:text-brand-blue-300 group-hover:bg-brand-orange/15 group-hover:text-brand-orange transition-colors">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-5 font-semibold text-lg leading-tight">
                  {s.title}
                </h3>
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
  );
}
