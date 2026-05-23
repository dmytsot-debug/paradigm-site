"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Loader2, MapPin } from "lucide-react";
import { SERVICE_AREA } from "@/content/service-area";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const LeafletServiceMap = dynamic(() => import("./LeafletServiceMap"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

function MapSkeleton() {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-100 to-brand-blue-300/40 dark:from-brand-blue-800/60 dark:to-brand-blue-700/40 flex flex-col items-center justify-center gap-3 text-foreground-muted">
      <Loader2 className="size-6 animate-spin" />
      <span className="text-sm">Loading map…</span>
    </div>
  );
}

export function ServiceAreaMap() {
  const [active, setActive] = useState<string | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Defer Leaflet bundle + tile fetches until the section is near the viewport.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-brand-blue-100/30 dark:bg-brand-blue-700/20">
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
          <div className="lg:col-span-7">
            <div
              ref={wrapRef}
              className="relative aspect-[4/3] bg-surface rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              {shouldLoad ? (
                <LeafletServiceMap activeCity={active} />
              ) : (
                <MapSkeleton />
              )}
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
                    className="text-left text-foreground hover:text-brand-orange transition-colors inline-flex items-center gap-2"
                  >
                    <MapPin className="size-3.5 text-brand-orange/70" />
                    {c.name}
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
