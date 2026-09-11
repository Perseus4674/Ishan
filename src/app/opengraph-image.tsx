import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dustDots = [
  [80, 90], [180, 220], [260, 60], [340, 300], [420, 140],
  [900, 80], [980, 260], [1060, 120], [1120, 320], [860, 380],
  [150, 420], [60, 300], [1000, 480], [1140, 200], [300, 480],
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060b",
          position: "relative",
        }}
      >
        {dustDots.map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#c8cedf",
              opacity: 0.5,
            }}
          />
        ))}

        <div
          style={{
            width: 22,
            height: 22,
            background: "#e4b363",
            borderRadius: 5,
            transform: "rotate(45deg)",
            marginBottom: 36,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#f2f4fb",
            letterSpacing: -1,
          }}
        >
          Ishan Jain
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "#8189a3",
          }}
        >
          Systems that remember
        </div>
      </div>
    ),
    { ...size }
  );
}
