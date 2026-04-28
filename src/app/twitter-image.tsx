import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "rgb(250, 247, 242)",
          color: "rgb(17, 17, 17)",
          border: "24px solid rgb(17, 17, 17)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          Nagpur Residential Builder
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 74,
              lineHeight: 1,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Shree Venkateshwara
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
            }}
          >
            Ready-to-move and under-construction 2 BHK and 3 BHK homes for
            families and qualified buyers in Nagpur.
          </div>
        </div>
      </div>
    ),
    size
  );
}
