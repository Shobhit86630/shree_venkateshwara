import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
            "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(240, 240, 240) 100%)",
          color: "rgb(17, 17, 17)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgb(157, 33, 35)",
          }}
        >
          Nagpur Real Estate Insights
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.04,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {post?.title ?? "Article"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.35,
              color: "rgb(82, 82, 82)",
            }}
          >
            {post?.description ?? "Local market analysis and homebuyer guidance."}
          </div>
        </div>
      </div>
    ),
    size
  );
}
