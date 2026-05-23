import { Star, ShieldCheck, Building2, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const REASONS = [
  {
    icon: Star,
    title: "5-Star Customer Service",
    body: "Responsive communication, dependable scheduling, and professional service from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Plumbing and gas services completed safely and to industry standards.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    body: "Homeowners, businesses, strata, and property managers across Metro Vancouver.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    body: "Plumbing problems cannot always wait. Prompt scheduling and fast response when you need service.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            Why Paradigm
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            The kind of trades you tell your neighbors about
          </h2>
        </div>

        <ScrollReveal
          as="div"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          selector="[data-reason]"
          staggerChildren={100}
        >
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                data-reason
                className="relative bg-surface border border-border rounded-xl p-7 hover:border-brand-orange/50 transition-colors"
              >
                <div className="size-12 rounded-lg bg-brand-blue-900 dark:bg-brand-blue-600 text-white inline-flex items-center justify-center">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {r.body}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
