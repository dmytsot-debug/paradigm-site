"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, stagger } from "animejs";
import { easing, duration, prefersReducedMotion } from "@/lib/anime/presets";
import { cn } from "@/lib/utils";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  /** Children selector to stagger. If omitted, animates the wrapper itself. */
  selector?: string;
  threshold?: number;
  once?: boolean;
};

export function ScrollReveal({
  as = "div",
  children,
  className,
  delay = 0,
  staggerChildren = 80,
  selector,
  threshold = 0.2,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = prefersReducedMotion();

    const targets: HTMLElement[] = selector
      ? Array.from(el.querySelectorAll<HTMLElement>(selector))
      : [el];

    targets.forEach((t) => t.classList.add("reveal-initial"));

    const reveal = () => {
      if (reduced) {
        targets.forEach((t) => {
          t.style.opacity = "1";
          t.style.transform = "none";
          t.classList.remove("reveal-initial");
        });
        return;
      }
      animate(targets, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: duration.base,
        delay: selector ? stagger(staggerChildren, { start: delay }) : delay,
        ease: easing.outQuart,
        onComplete: () => {
          targets.forEach((t) => {
            t.style.willChange = "auto";
            t.classList.remove("reveal-initial");
          });
        },
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            if (once) io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, staggerChildren, selector, threshold, once]);

  const Comp = as as React.ElementType;
  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}
