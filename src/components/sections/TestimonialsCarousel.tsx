"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials";
import { SITE } from "@/lib/utils";
import { easing, prefersReducedMotion } from "@/lib/anime/presets";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  // Set items-per-page based on screen
  useEffect(() => {
    const sync = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerPage(3);
      else if (window.matchMedia("(min-width: 640px)").matches) setPerPage(2);
      else setPerPage(1);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const totalPages = Math.max(1, Math.ceil(TESTIMONIALS.length / perPage));

  // Clamp page when totalPages shrinks (e.g. resize from mobile→desktop).
  useEffect(() => {
    setPage((p) => (p >= totalPages ? 0 : p));
  }, [totalPages]);

  // Auto-advance
  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setPage((p) => (p + 1) % totalPages);
    }, 7000);
    return () => clearInterval(id);
  }, [totalPages]);

  // Animate slide.
  // The track has width = totalPages * 100% of its parent, so 100% of the
  // track = totalPages * viewport-width. To advance ONE page (one viewport)
  // we translate by -(100 / totalPages)% of the track, NOT -100%.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const offsetPct = totalPages > 0 ? -(page * 100) / totalPages : 0;
    if (prefersReducedMotion()) {
      track.style.transform = `translateX(${offsetPct}%)`;
      return;
    }
    animate(track, {
      translateX: `${offsetPct}%`,
      duration: 800,
      ease: easing.outQuart,
    });
  }, [page, totalPages]);

  return (
    <section className="py-16 lg:py-24 bg-background-subtle/60 border-y border-border">
      <div className="container-prose">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
              Reviews
            </span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight">
              What our neighbors say
            </h2>
          </div>
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-blue-700 dark:text-brand-blue-300 hover:underline underline-offset-4"
          >
            Read all reviews on Google →
          </a>
        </div>

        <ScrollReveal as="div" className="mt-10 relative overflow-hidden">
          <div
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <div
              ref={trackRef}
              className="flex"
              style={{ width: `${totalPages * 100}%` }}
            >
              {Array.from({ length: totalPages }).map((_, pi) => (
                <div
                  key={pi}
                  className="grid gap-5 px-1"
                  style={{
                    width: `${100 / totalPages}%`,
                    gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
                  }}
                >
                  {TESTIMONIALS.slice(
                    pi * perPage,
                    pi * perPage + perPage,
                  ).map((t) => (
                    <article
                      key={t.name}
                      className="relative bg-surface border border-border rounded-xl p-6 lg:p-7 flex flex-col"
                    >
                      <Quote className="absolute top-5 right-5 size-8 text-brand-blue-100 dark:text-brand-blue-700" />
                      <div className="flex gap-0.5 text-brand-orange">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-current"
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-foreground leading-relaxed flex-1">
                        “{t.quote}”
                      </p>
                      <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                        <span className="font-semibold text-sm">{t.name}</span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-foreground-faint">
                          <GoogleG /> Google review
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-7 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === page
                    ? "bg-brand-orange w-8"
                    : "bg-border-strong w-2 hover:bg-foreground-faint",
                )}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="size-3" aria-hidden>
      <path
        d="M21.35 11.1H12v2.8h5.35a4.6 4.6 0 0 1-2 3v2.4h3.2c1.85-1.7 2.9-4.2 2.9-7.1 0-.7-.05-1.4-.1-2.1Z"
        fill="#4285F4"
      />
      <path
        d="M12 21.5c2.7 0 5-1 6.55-2.6l-3.2-2.4c-.85.6-2 1-3.35 1-2.6 0-4.8-1.75-5.55-4.1H3.05v2.4A9.5 9.5 0 0 0 12 21.5Z"
        fill="#34A853"
      />
      <path
        d="M6.45 13.4a5.7 5.7 0 0 1 0-3.6V7.4H3.05a9.5 9.5 0 0 0 0 8.6l3.4-2.6Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.5c1.45 0 2.75.5 3.8 1.5l2.85-2.85C16.95 2.6 14.7 1.5 12 1.5a9.5 9.5 0 0 0-8.95 5.9l3.4 2.4C7.2 7.25 9.4 5.5 12 5.5Z"
        fill="#EA4335"
      />
    </svg>
  );
}
