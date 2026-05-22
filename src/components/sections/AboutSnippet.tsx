import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function AboutSnippet() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <ScrollReveal as="div" className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-100 to-brand-blue-300 dark:from-brand-blue-700 dark:to-brand-blue-900 relative">
            <PortraitPlaceholder />
            <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-wider text-foreground-muted">
              Portrait placeholder · jon-portrait.jpg
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          className="lg:col-span-7"
          selector="[data-stagger]"
          staggerChildren={120}
        >
          <span
            data-stagger
            className="text-xs uppercase tracking-widest text-brand-orange font-semibold"
          >
            About Paradigm
          </span>
          <h2
            data-stagger
            className="mt-3 font-display text-3xl lg:text-5xl font-bold tracking-tight text-balance"
          >
            Your Home, Our Priority.
          </h2>

          <p
            data-stagger
            className="mt-6 text-foreground-muted text-lg leading-relaxed"
          >
            At Paradigm Services, excellence meets reliability in plumbing, gas
            fitting, and electrical solutions. Jon, our dedicated business
            owner and highly skilled technician, brings years of experience and
            a commitment to top-tier service, ensuring every project is
            completed to the highest standards.
          </p>

          <p
            data-stagger
            className="mt-4 text-foreground-muted text-lg leading-relaxed"
          >
            We specialize in a wide range of services, from emergency repairs
            available 24/7 to comprehensive home renovations that transform
            your space. Whether you need routine maintenance or a major
            upgrade, we are here to deliver exceptional results with
            professionalism and care.
          </p>

          <div data-stagger className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-blue-700 dark:text-brand-blue-300 font-semibold hover:gap-3 transition-all"
            >
              More about us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center text-brand-blue-700/40 dark:text-white/30">
      <User className="size-40" strokeWidth={0.5} />
    </div>
  );
}
