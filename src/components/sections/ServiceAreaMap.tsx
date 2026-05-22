"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { SERVICE_AREA } from "@/content/service-area";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { easing, prefersReducedMotion } from "@/lib/anime/presets";

export function ServiceAreaMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const markers = root.querySelectorAll<SVGCircleElement>("[data-marker]");
    const anim = animate(markers, {
      scale: [1, 1.6, 1],
      opacity: [0.85, 0.35, 0.85],
      duration: 1200,
      ease: easing.inOutQuad,
      loop: true,
      delay: stagger(200),
    });
    return () => {
      anim.pause();
    };
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-brand-blue-100/30 dark:bg-brand-blue-700/20">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
            Service Area
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Across Metro Vancouver and beyond
          </h2>
          <p className="mt-4 text-foreground-muted">
            From Vancouver to Maple Ridge, North Shore to Surrey, and up to
            Squamish and Whistler.
          </p>
        </div>

        <ScrollReveal as="div" className="mt-12 grid lg:grid-cols-12 gap-10">
          <div ref={wrapRef} className="lg:col-span-7">
            <div className="aspect-[4/3] bg-surface rounded-2xl border border-border shadow-sm overflow-hidden relative">
              <svg
                viewBox="0 0 800 600"
                className="absolute inset-0 w-full h-full"
                aria-label="Schematic map of Lower Mainland service area"
              >
                <defs>
                  <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-blue-100)" />
                    <stop offset="100%" stopColor="var(--brand-blue-300)" />
                  </linearGradient>
                  <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f3f1ec" />
                    <stop offset="100%" stopColor="#e5e3dc" />
                  </linearGradient>
                </defs>
                <rect width="800" height="600" fill="url(#water)" />
                {/* Simplified land masses */}
                <path
                  d="M0,200 Q150,150 300,200 L350,300 Q450,250 600,310 L800,280 L800,600 L0,600 Z"
                  fill="url(#land)"
                  opacity="0.9"
                />
                <path
                  d="M100,180 Q250,140 400,200 L500,250 Q600,220 760,250 L760,310 Q620,290 500,310 L400,280 Q250,290 100,250 Z"
                  fill="url(#land)"
                  opacity="0.95"
                />
                {/* Inlet line */}
                <path
                  d="M120,230 Q260,250 380,270 Q500,280 700,275"
                  stroke="var(--brand-blue-400)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                {/* Markers */}
                {SERVICE_AREA.map((c) => {
                  const isActive = active === c.name;
                  return (
                    <g key={c.name}>
                      <circle
                        data-marker
                        data-city={c.name}
                        cx={c.x * 800}
                        cy={c.y * 600 + 80}
                        r="6"
                        fill="var(--brand-orange)"
                        style={{ transformOrigin: `${c.x * 800}px ${c.y * 600 + 80}px` }}
                      />
                      <circle
                        cx={c.x * 800}
                        cy={c.y * 600 + 80}
                        r="3"
                        fill="var(--brand-orange-600)"
                      />
                      {isActive && (
                        <g>
                          <rect
                            x={c.x * 800 - 50}
                            y={c.y * 600 + 56}
                            width="100"
                            height="20"
                            rx="4"
                            fill="var(--brand-blue-900)"
                          />
                          <text
                            x={c.x * 800}
                            y={c.y * 600 + 70}
                            textAnchor="middle"
                            fontFamily="system-ui, sans-serif"
                            fontSize="11"
                            fontWeight="600"
                            fill="#fff"
                          >
                            {c.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-semibold text-lg mb-4">14 cities we serve</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[15px]">
              {SERVICE_AREA.map((c) => (
                <li key={c.name}>
                  <button
                    onMouseEnter={() => setActive(c.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(c.name)}
                    onBlur={() => setActive(null)}
                    className="text-left text-foreground hover:text-brand-orange transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-brand-orange/70" />
                      {c.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground-muted">
              Don&apos;t see your city? Give us a call — we may still be able
              to help.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
