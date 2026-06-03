import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "#71717a",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {site.location}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            marginTop: 20,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 44,
            marginTop: 16,
            fontWeight: 400,
          }}
        >
          {site.title}
        </div>
        <div
          style={{
            color: "#d4d4d8",
            fontSize: 30,
            marginTop: 32,
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          {site.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
