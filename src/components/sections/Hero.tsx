"use client";

import { Phone, Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ParallaxLayer } from "@/components/animations/ParallaxLayer";
import { SITE } from "@/lib/utils";

const TAGS = [
  "Water Heaters",
  "Leak Repairs",
  "Drain Cleaning",
  "Gas Fitting",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-16 pb-24 lg:pb-32">
      {/* Back layer: gradient + pipe SVG */}
      <ParallaxLayer
        speed={0.2}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-100 via-background to-background dark:from-brand-blue-800 dark:via-brand-blue-900 dark:to-background" />
        <svg
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
          aria-hidden
        >
          <defs>
            <linearGradient id="pipe-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand-blue-600)" />
              <stop offset="100%" stopColor="var(--brand-blue-400)" />
            </linearGradient>
          </defs>
          <path
            d="M-50,400 Q200,300 400,420 T900,300"
            stroke="url(#pipe-grad)"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M-50,500 Q300,440 500,520 T900,450"
            stroke="url(#pipe-grad)"
            strokeWidth="30"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
          <circle
            cx="650"
            cy="120"
            r="200"
            fill="var(--brand-orange)"
            opacity="0.08"
          />
        </svg>
      </ParallaxLayer>

      <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Headline column */}
        <div className="lg:col-span-7 relative">
          <div className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-brand-orange/10 text-brand-orange-600 dark:text-brand-orange text-xs font-semibold tracking-wide uppercase">
            <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
            24/7 Emergency Service
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] font-bold tracking-tight text-balance">
            Reliable{" "}
            <span className="bg-gradient-to-r from-brand-blue-700 via-brand-blue-600 to-brand-blue-400 bg-clip-text text-transparent">
              Plumbing, Drain &amp; Gas
            </span>{" "}
            Services
          </h1>

          <p className="mt-5 text-lg lg:text-xl text-foreground-muted max-w-xl">
            Serving Metro Vancouver. 24/7 Emergency Service.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" variant="primary">
              <Calendar className="size-4" />
              Request Estimate
            </Button>
            <Button href={SITE.phoneHref} size="lg" variant="secondary">
              <Phone className="size-4" />
              Call {SITE.phone}
            </Button>
          </div>

          {/* Tagline strip */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground-muted">
            {TAGS.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-orange" />
                {t}
                {i < TAGS.length - 1 && (
                  <span className="hidden sm:inline text-foreground-faint">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Trust row */}
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="size-4 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>
              <span className="text-sm text-foreground-muted">
                5.0 on Google
              </span>
            </div>
            <div className="text-sm text-foreground-muted inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              Coquitlam · Vancouver · Surrey · Burnaby · 14 cities
            </div>
          </div>
        </div>

        {/* Visual column */}
        <div className="lg:col-span-5 relative h-[420px] lg:h-[520px]">
          {/* Mid layer: truck "photo" */}
          <ParallaxLayer
            speed={0.5}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 shadow-2xl">
                <TruckPlaceholder />
              </div>
            </div>
          </ParallaxLayer>

          {/* Front layer: floating UI card */}
          <ParallaxLayer
            speed={1}
            className="absolute bottom-6 -left-2 lg:-left-10 w-[280px] lg:w-[320px]"
          >
            <div className="bg-surface border border-border rounded-xl shadow-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-brand-orange/15 inline-flex items-center justify-center">
                  <Phone className="size-5 text-brand-orange" />
                </div>
                <div className="leading-tight">
                  <p className="text-xs text-foreground-faint uppercase tracking-wider">
                    Call or book online
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="font-semibold text-foreground text-base"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={SITE.phoneHref}
                  className="text-center text-sm font-medium px-3 py-2 rounded-md bg-brand-blue-900 text-white hover:bg-brand-blue-800 dark:bg-brand-blue-600 transition-colors"
                >
                  Call now
                </a>
                <a
                  href="/contact"
                  className="text-center text-sm font-medium px-3 py-2 rounded-md bg-brand-orange-button text-white hover:bg-brand-orange-700 transition-colors"
                >
                  Book online
                </a>
              </div>
              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-foreground-faint">
                <span>Avg. response under 2 hrs</span>
                <span className="inline-flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available now
                </span>
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
}

function TruckPlaceholder() {
  return (
    <div className="w-full h-full relative">
      <svg
        viewBox="0 0 320 400"
        className="absolute inset-0 w-full h-full"
        aria-label="Branded service truck illustration (placeholder for production photo)"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e5aa8" />
            <stop offset="100%" stopColor="#0b2545" />
          </linearGradient>
        </defs>
        <rect width="320" height="400" fill="url(#sky)" />
        {/* Sun glow */}
        <circle cx="240" cy="80" r="60" fill="#f4801a" opacity="0.4" />
        <circle cx="240" cy="80" r="30" fill="#f4801a" opacity="0.7" />
        {/* Ground */}
        <rect y="300" width="320" height="100" fill="#0b2545" />
        {/* Road stripes */}
        <rect x="0" y="340" width="40" height="6" fill="#fff" opacity="0.4" />
        <rect x="80" y="340" width="40" height="6" fill="#fff" opacity="0.4" />
        <rect x="160" y="340" width="40" height="6" fill="#fff" opacity="0.4" />
        <rect x="240" y="340" width="40" height="6" fill="#fff" opacity="0.4" />
        {/* Truck body */}
        <rect x="40" y="200" width="220" height="100" rx="8" fill="#fff" />
        <rect x="50" y="170" width="80" height="40" rx="6" fill="#e5e3dc" />
        {/* Truck branding */}
        <rect x="60" y="220" width="180" height="50" rx="4" fill="#1e5aa8" />
        <text
          x="150"
          y="244"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#fff"
        >
          PARADIGM
        </text>
        <text
          x="150"
          y="262"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="9"
          fill="#5aa1e8"
        >
          PLUMBING · GAS · DRAINS
        </text>
        {/* Orange stripe */}
        <rect x="40" y="195" width="220" height="6" fill="#f4801a" />
        {/* Wheels */}
        <circle cx="75" cy="305" r="18" fill="#1a1f2b" />
        <circle cx="75" cy="305" r="9" fill="#6b7484" />
        <circle cx="225" cy="305" r="18" fill="#1a1f2b" />
        <circle cx="225" cy="305" r="9" fill="#6b7484" />
        {/* Reflection on body */}
        <rect x="40" y="200" width="220" height="20" fill="#fff" opacity="0.3" />
      </svg>
      <div className="absolute bottom-3 left-3 right-3 text-[10px] text-white/70 uppercase tracking-wider">
        Placeholder · swap with branded truck photo
      </div>
    </div>
  );
}
