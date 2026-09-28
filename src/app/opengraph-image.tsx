import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Arcane Encode";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [sans, mono] = await Promise.all([
    readFile(
      join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf",
      ),
    ),
    readFile(
      join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.ttf",
      ),
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8c8c8c",
          }}
        >
          [ 000 ] Independent software studio
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Geist",
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          <span>We build our </span>
          <span>
            <span style={{ color: "#b0accf" }}>own</span>
            <span> worlds,</span>
          </span>
          <span>one commit at a time.</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 1,
              background: "#2e2e2e",
            }}
          />
          <div
            style={{
              fontFamily: "Geist",
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            arcane encode
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, style: "normal", weight: 500 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
