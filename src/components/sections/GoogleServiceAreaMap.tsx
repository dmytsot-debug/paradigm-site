"use client";

import { useEffect, useState } from "react";
import { ServiceAreaFallback } from "./ServiceAreaMap";

/** If the embed hasn't fired onLoad within this window, assume it's stuck
 *  (bad key, network block, Google outage) and fall back rather than show
 *  an indefinite spinner. */
const LOAD_TIMEOUT_MS = 12000;

export function GoogleServiceAreaMap({
  apiKey,
  center,
}: {
  apiKey: string;
  center: { centerLat: number; centerLng: number; zoom: number };
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  useEffect(() => {
    if (status !== "loading") return;
    const timer = window.setTimeout(() => setStatus("error"), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [status]);

  if (status === "error") {
    return <ServiceAreaFallback />;
  }

  const src = `https://www.google.com/maps/embed/v1/view?key=${encodeURIComponent(
    apiKey,
  )}&center=${center.centerLat},${center.centerLng}&zoom=${center.zoom}&maptype=roadmap`;

  return (
    <>
      {status === "loading" && (
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue-100 to-brand-blue-300/40 dark:from-brand-blue-800/60 dark:to-brand-blue-700/40 flex flex-col items-center justify-center gap-3 text-foreground-muted"
          aria-hidden={false}
        >
          <span className="size-6 rounded-full border-2 border-current border-t-transparent animate-spin" />
          <span className="text-sm">Loading map…</span>
        </div>
      )}
      <iframe
        title="Map of Paradigm Services' Metro Vancouver service area"
        src={src}
        className={
          status === "loaded"
            ? "absolute inset-0 w-full h-full border-0"
            : "sr-only"
        }
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </>
  );
}
