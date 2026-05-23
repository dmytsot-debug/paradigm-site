import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES } from "@/content/services";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { SITE } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: `${service.title} · ${SITE.shortName}`,
      description: service.short,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="pt-10 pb-8 lg:pt-16 lg:pb-12 bg-gradient-to-b from-brand-blue-100/40 to-background dark:from-brand-blue-700/30">
        <div className="container-prose">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="size-14 lg:size-16 rounded-xl bg-brand-orange/15 text-brand-orange inline-flex items-center justify-center shrink-0">
              <Icon className="size-7 lg:size-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
                Service
              </span>
              <h1 className="mt-2 font-display text-4xl lg:text-6xl font-bold tracking-tight text-balance">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-14">
          <ScrollReveal
            as="div"
            className="lg:col-span-7"
            selector="[data-block]"
            staggerChildren={120}
          >
            {service.long.map((p, i) => (
              <p
                key={i}
                data-block
                className="text-foreground-muted leading-relaxed text-lg mb-5"
              >
                {p}
              </p>
            ))}

            <h2
              data-block
              className="mt-10 font-display text-2xl lg:text-3xl font-bold tracking-tight"
            >
              What&apos;s included
            </h2>
            <ul data-block className="mt-5 space-y-3">
              {service.included.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-foreground">{i}</span>
                </li>
              ))}
            </ul>

            <h2
              data-block
              className="mt-12 font-display text-2xl lg:text-3xl font-bold tracking-tight"
            >
              Common scenarios
            </h2>
            <ul data-block className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.scenarios.map((sc) => (
                <li
                  key={sc}
                  className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground"
                >
                  {sc}
                </li>
              ))}
            </ul>

            <h2
              data-block
              className="mt-12 font-display text-2xl lg:text-3xl font-bold tracking-tight"
            >
              Frequently asked
            </h2>
            <div data-block className="mt-5">
              <Accordion items={service.faq} />
            </div>
          </ScrollReveal>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="bg-brand-blue-900 text-white rounded-2xl p-7">
                <h3 className="font-display text-2xl font-bold">
                  Ready to book?
                </h3>
                <p className="mt-2 text-white/80">
                  Call now or request a written estimate online.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Button href={SITE.phoneHref} size="md" variant="primary">
                    Call {SITE.phone}
                  </Button>
                  <Button
                    href="/contact"
                    size="md"
                    variant="outline"
                    className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    Request estimate
                  </Button>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <h4 className="font-semibold mb-3">Other services</h4>
                <ul className="space-y-2.5">
                  {others.map((o) => {
                    const OIcon = o.icon;
                    return (
                      <li key={o.slug}>
                        <Link
                          href={`/services/${o.slug}`}
                          className="group flex items-center gap-3 text-sm text-foreground hover:text-brand-orange transition-colors"
                        >
                          <OIcon className="size-4 text-foreground-faint group-hover:text-brand-orange" />
                          <span className="flex-1">{o.title}</span>
                          <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
