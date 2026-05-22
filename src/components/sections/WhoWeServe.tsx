import { Home, Building2, Building, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const SEGMENTS = [
  {
    icon: Home,
    title: "Residential",
    body: "Homeowners across Metro Vancouver — from condos to detached homes and acreages.",
  },
  {
    icon: Building2,
    title: "Commercial",
    body: "Restaurants, offices, retail, and industrial spaces — coordinated to your operating hours.",
  },
  {
    icon: Building,
    title: "Strata",
    body: "Multi-unit buildings and stratas — re-pipes, common-line backups, and ongoing service.",
  },
  {
    icon: Briefcase,
    title: "Property Management",
    body: "Predictable response times, clean documentation, and tenant-friendly scheduling.",
  },
];

export function WhoWeServe() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            Who We Serve
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Built for every kind of building
          </h2>
        </div>

        <ScrollReveal
          as="div"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          selector="[data-pill]"
          staggerChildren={80}
        >
          {SEGMENTS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-pill
                className="bg-brand-blue-100/40 dark:bg-brand-blue-700/30 rounded-xl p-6 border border-brand-blue-300/40 dark:border-brand-blue-600/40 hover:-translate-y-0.5 transition-transform"
              >
                <div className="size-11 rounded-lg bg-brand-orange/15 inline-flex items-center justify-center text-brand-orange">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-1.5 text-sm text-foreground-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
