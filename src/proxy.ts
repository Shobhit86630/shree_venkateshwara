import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STRIP_PARAMETERS = new Set([
  "fbclid",
  "gclid",
  "gclsrc",
  "dclid",
  "msclkid",
]);

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  let shouldRedirect = false;

  for (const key of Array.from(url.searchParams.keys())) {
    const normalizedKey = key.toLowerCase();

    if (normalizedKey.startsWith("utm_") || STRIP_PARAMETERS.has(normalizedKey)) {
      url.searchParams.delete(key);
      shouldRedirect = true;
    }
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml|atom.xml|sitemaps|manifest.webmanifest|.*\\.[^/]+$).*)",
  ],
};
