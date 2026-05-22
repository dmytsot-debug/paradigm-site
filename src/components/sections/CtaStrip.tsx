import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

export function CtaStrip() {
  return (
    <section className="relative bg-brand-blue-900 text-white overflow-hidden">
      {/* Decorative ripples */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 size-[420px] rounded-full border border-brand-orange/30 ripple"
        aria-hidden
      />
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 size-[320px] rounded-full border border-brand-orange/20 ripple ripple-delay-1"
        aria-hidden
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 size-[500px] rounded-full border border-brand-orange/20 ripple ripple-delay-2"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900 via-brand-blue-900/85 to-transparent pointer-events-none" />

      <div className="container-prose relative py-16 lg:py-24 grid lg:grid-cols-12 items-center gap-8">
        <div className="lg:col-span-8">
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight text-balance">
            Need a plumber today?
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-xl">
            Call {SITE.phone} or request an estimate — we&apos;ll get back to
            you fast.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          <Button href={SITE.phoneHref} size="lg" variant="primary">
            <Phone className="size-4" />
            {SITE.phone}
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="outline"
            className="bg-transparent border-white/40 text-white hover:bg-white/10"
          >
            Request Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
