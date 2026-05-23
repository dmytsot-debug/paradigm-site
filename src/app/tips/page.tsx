import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { TIPS } from "@/content/tips";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CtaStrip } from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  title: "Tips — Practical home plumbing &amp; gas know-how",
  description:
    "Short, practical guides from Paradigm Services — water heaters, emergencies, what to know before a service call.",
};

export default function TipsPage() {
  return (
    <>
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 bg-gradient-to-b from-brand-blue-100/40 to-background dark:from-brand-blue-700/30">
        <div className="container-prose max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            Tips
          </span>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            Practical know-how, from the truck.
          </h1>
          <p className="mt-5 text-foreground-muted text-lg">
            Short articles on the stuff homeowners ask us about most.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-prose">
          <ScrollReveal
            as="div"
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            selector="[data-tip]"
            staggerChildren={100}
          >
            {TIPS.map((t) => (
              <Link
                key={t.slug}
                href={`/tips/${t.slug}`}
                data-tip
                className="group flex flex-col bg-surface border border-border rounded-xl p-7 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue-300 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-foreground-faint">
                  <span className="font-medium text-brand-orange-600 dark:text-brand-orange uppercase tracking-wider">
                    {t.category}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" /> {t.readTime}
                  </span>
                </div>
                <h2 className="mt-3 font-semibold text-lg leading-snug">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed flex-1">
                  {t.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-700 dark:text-brand-blue-300">
                  Read more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
