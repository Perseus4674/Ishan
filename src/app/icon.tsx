import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060b",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            width: 13,
            height: 13,
            background: "#e4b363",
            borderRadius: 3,
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
