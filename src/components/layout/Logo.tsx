import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "mono";
}) {
  const blue = variant === "mono" ? "currentColor" : "var(--brand-blue-600)";
  const blueDark = variant === "mono" ? "currentColor" : "var(--brand-blue-900)";
  const orange = variant === "mono" ? "currentColor" : "var(--brand-orange)";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="size-9"
        aria-hidden="true"
        fill="none"
      >
        <defs>
          <linearGradient id="pg-blue" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor={blueDark} />
            <stop offset="100%" stopColor={blue} />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#pg-blue)" />
        <path
          d="M11 28V12h7.2c3.2 0 5.4 2 5.4 5s-2.2 5-5.4 5H15v6h-4Zm4-9.5h3c1.2 0 2.1-.7 2.1-2s-.9-2-2.1-2h-3v4Z"
          fill="#fff"
        />
        <circle cx="29" cy="13" r="3" fill={orange} />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-semibold text-[15px] tracking-tight">
          Paradigm Services
        </span>
        <span className="text-[11px] text-foreground-faint tracking-wide uppercase">
          Plumbing · Gas · Drains
        </span>
      </span>
    </span>
  );
}
