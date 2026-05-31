import { ImageResponse } from "next/og";

export const alt = "Abhishek Garg — Engineer · ML · Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8F5EF",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "7px",
              backgroundColor: "#27396B",
            }}
          />
          <div style={{ fontSize: "26px", color: "#6E665A", letterSpacing: "3px" }}>
            ABHISHEKGARG.TECH
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "100px",
              fontWeight: 700,
              color: "#1C1A17",
              lineHeight: 1.02,
            }}
          >
            Abhishek Garg
          </div>
          <div
            style={{
              fontSize: "34px",
              color: "#3A342C",
              marginTop: "30px",
              maxWidth: "920px",
              lineHeight: 1.4,
            }}
          >
            Electrical engineer, construction manager, and ML practitioner —
            building models that see infrastructure failures coming.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{ width: "64px", height: "4px", backgroundColor: "#B5683E" }}
          />
          <div style={{ fontSize: "24px", color: "#6E665A" }}>
            L&T Engineer · IIT Madras M.Tech
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
