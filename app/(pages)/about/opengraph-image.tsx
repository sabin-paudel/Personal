import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function AboutOpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #070707 0%, #050505 100%)",
        color: "#fff",
        fontFamily: 'Inter, "SF Pro Display", "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 18%, rgba(91, 124, 255, 0.22), transparent 28%), radial-gradient(circle at 82% 16%, rgba(255, 107, 44, 0.16), transparent 24%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 35%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 64,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 24 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.72)",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Aatreya
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.72)",
              fontSize: 18,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            About
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.58)",
            }}
          >
            Sabin Paudel
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 86,
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            About Sabin
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Frontend developer background, experience, and technical skills.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
