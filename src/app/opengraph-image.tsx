import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Paradigm Services — Plumbing, Gas & Drains · Metro Vancouver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b2545 0%, #1e5aa8 60%, #5aa1e8 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 18,
              background: "#fff",
              color: "#0b2545",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>
              Paradigm Services
            </div>
            <div style={{ fontSize: 18, opacity: 0.75 }}>
              Plumbing · Gas · Drains
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Reliable Plumbing, Drain & Gas Services
          </div>
          <div style={{ fontSize: 30, opacity: 0.85 }}>
            Serving Metro Vancouver · 24/7 Emergency Service
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
          }}
        >
          <span style={{ opacity: 0.9 }}>778-938-5311</span>
          <span
            style={{
              padding: "12px 24px",
              background: "#f4801a",
              borderRadius: 12,
              fontWeight: 700,
            }}
          >
            paradigmservices.ca
          </span>
        </div>
      </div>
    ),
    size,
  );
}
