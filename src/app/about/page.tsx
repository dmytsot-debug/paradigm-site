import type { Metadata } from "next";
import { User, ShieldCheck, Wrench, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About — Meet Jon and the Paradigm team",
  description:
    "Paradigm Services is owner-operated by Jon, a licensed tradesperson serving Metro Vancouver. Learn what we stand for and how we work.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Licensed, insured, accountable",
    body: "Every job is done by licensed tradespeople and backed by workmanship warranty. If something isn't right, we make it right.",
  },
  {
    icon: Wrench,
    title: "Diagnose before we sell",
    body: "We figure out the actual problem before recommending a fix. Sometimes the answer is a $50 part, not a $5,000 system.",
  },
  {
    icon: MapPin,
    title: "Local and responsive",
    body: "We're based in Metro Vancouver and answer the phone — including evenings and weekends for emergencies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 bg-gradient-to-b from-brand-blue-100/40 to-background dark:from-brand-blue-700/30">
        <div className="container-prose max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            About
          </span>
          <h1 className="mt-3 font-display text-4xl lg:text-6xl font-bold tracking-tight text-balance">
            Your Home, Our Priority.
          </h1>
          <p className="mt-5 text-foreground-muted text-lg leading-relaxed">
            At Paradigm Services, excellence meets reliability in plumbing, gas
            fitting, and electrical solutions. Jon, our dedicated business
            owner and highly skilled technician, brings years of experience and
            a commitment to top-tier service, ensuring every project is
            completed to the highest standards.
          </p>
          <p className="mt-4 text-foreground-muted text-lg leading-relaxed">
            We specialize in a wide range of services, from emergency repairs
            available 24/7 to comprehensive home renovations that transform
            your space. Whether you need routine maintenance or a major
            upgrade, we are here to deliver exceptional results with
            professionalism and care.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <ScrollReveal as="div" className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-100 to-brand-blue-300 dark:from-brand-blue-700 dark:to-brand-blue-900 flex items-center justify-center">
              <User
                className="size-40 text-brand-blue-700/40 dark:text-white/30"
                strokeWidth={0.5}
              />
            </div>
            <p className="mt-3 text-xs text-foreground-faint">
              Portrait placeholder · swap with jon-portrait.jpg
            </p>
          </ScrollReveal>
          <ScrollReveal
            as="div"
            className="lg:col-span-7"
            selector="[data-stagger]"
          >
            <span
              data-stagger
              className="text-xs uppercase tracking-widest text-brand-orange font-semibold"
            >
              Meet Jon
            </span>
            <h2
              data-stagger
              className="mt-3 font-display text-3xl lg:text-5xl font-bold tracking-tight"
            >
              The person on the other end of the phone.
            </h2>
            <p
              data-stagger
              className="mt-5 text-foreground-muted leading-relaxed text-lg"
            >
              Paradigm is owner-operated. When you call {SITE.phone}, you reach
              Jon or someone on his small team — not a national call center,
              not a dispatcher with no context.
            </p>
            <p
              data-stagger
              className="mt-4 text-foreground-muted leading-relaxed text-lg"
            >
              Jon learned the trade hands-on and runs the business the way he
              wishes contractors had treated him as a homeowner: show up when
              you said you would, explain what you&apos;re doing, charge a fair
              price, and stand behind the work.
            </p>
            <div data-stagger className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Request an estimate
              </Button>
              <Button href={SITE.phoneHref} variant="outline" size="lg">
                Call {SITE.phone}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background-subtle/60 border-y border-border">
        <div className="container-prose">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight max-w-xl">
            What we stand for
          </h2>
          <ScrollReveal
            as="div"
            className="mt-10 grid gap-6 md:grid-cols-3"
            selector="[data-val]"
            staggerChildren={100}
          >
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  data-val
                  className="bg-surface border border-border rounded-xl p-7"
                >
                  <div className="size-11 rounded-lg bg-brand-orange/15 inline-flex items-center justify-center text-brand-orange">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
