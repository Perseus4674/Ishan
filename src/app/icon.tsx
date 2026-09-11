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
          background: "#080d14",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            width: 13,
            height: 13,
            background: "#5ce1c8",
            borderRadius: 3,
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
