import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background:
            "linear-gradient(135deg, rgb(16, 16, 16) 0%, rgb(42, 42, 42) 55%, rgb(157, 33, 35) 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Shree Venkateshwara
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Premium 2 BHK and 3 BHK Flats in Nagpur
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Boutique residential projects across Wardha Road, MIHAN, Besa, Manish
            Nagar, and Beltarodi.
          </div>
        </div>
      </div>
    ),
    size
  );
}
