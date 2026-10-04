import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { person } from "@/data/content";

export const alt = `${person.name}, ${person.title} in ${person.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fraunces, sora, beach] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Fraunces-SemiBold.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/Sora-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/beach.jpg")),
  ]);
  const background = `data:image/jpeg;base64,${beach.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0a2c36",
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={background}
          width={1200}
          height={1600}
          style={{ position: "absolute", top: -420, left: 0, width: 1200, height: 1600 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage:
              "linear-gradient(180deg, rgba(10,44,54,0.85) 0%, rgba(10,44,54,0.55) 45%, rgba(10,44,54,0.05) 75%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "72px 80px",
            width: "100%",
            color: "white",
          }}
        >
          <div style={{ width: 72, height: 6, backgroundColor: "#c9893a", marginBottom: 32 }} />
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: "-0.035em",
            }}
          >
            {person.name}
          </div>
          <div style={{ fontFamily: "Sora", fontSize: 36, marginTop: 28, opacity: 0.92 }}>
            {`${person.title} · ${person.location}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Sora", data: sora, style: "normal", weight: 400 },
      ],
    },
  );
}
