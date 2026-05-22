export const easing = {
  outQuart: "out(4)",
  inOutQuad: "inOut(2)",
  outQuint: "out(5)",
  spring: "spring(1, 80, 10, 0)",
} as const;

export const duration = {
  fast: 400,
  base: 800,
  slow: 1200,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
