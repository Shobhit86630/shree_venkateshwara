# Technical SEO Runbook

## Implemented SEO endpoints

- `robots.txt`
- `sitemap.xml`
- `sitemaps/pages.xml`
- `sitemaps/blog.xml`
- `rss.xml`
- `atom.xml`
- `html-sitemap`
- `manifest.webmanifest`

## URL structure

- Homepage: `/`
- Builder brand/about page: `/brand`
- Project portfolio: `/portfolio`
- Service page: `/concierge`
- Contact page: `/contact`
- Lead capture page: `/enquire`
- Blog index: `/blog`
- Blog detail: `/blog/{slug}`
- Legal pages: `/privacy`, `/terms`

## Canonicalization rules

- Force `https`
- Force apex host: `shreevenkateshwara.com`
- Remove trailing slashes from non-root URLs
- Strip tracking parameters via `src/proxy.ts`
- Self-canonicalize all indexable pages
- Canonicalize blog articles to their slug URL

## Duplicate URL handling

- `utm_*`, `gclid`, `fbclid`, `msclkid`, `dclid`, and `gclsrc` are removed with a `308` redirect in `src/proxy.ts`
- Alias redirects live in `next.config.ts`
- Feeds are available to users and crawlers but explicitly marked `noindex`
- API routes are blocked from indexation with `X-Robots-Tag`

## Crawling and indexing controls

- `src/app/robots.ts` allows public HTML routes and disallows `/api/`
- `next.config.ts` adds `X-Robots-Tag` on `/api/:path*`, `/rss.xml`, and `/atom.xml`
- XML sitemaps and robots are cacheable for 24 hours
- Legal and contact pages remain indexable because they support trust and conversion workflows

## Pagination strategy

- There is no paginated archive yet
- When pagination is added, keep each paginated URL indexable if it contains unique listing/article sets
- Use self-referencing canonicals on paginated pages
- Link crawl paths with visible `next` and `previous` links instead of JavaScript-only controls
- Exclude infinite filtered combinations from indexation unless they represent standalone demand pages

## Internal linking strategy

- Global footer links expose major commercial and legal pages
- `html-sitemap` provides a crawlable backup path for all key pages and blog articles
- Blog articles link back to the blog hub and to related articles
- XML sitemap split separates core pages from editorial content for easier QA

## Structured data coverage

- Root layout injects `Organization`, `LocalBusiness`, and `WebSite`
- Home page injects `FAQPage`
- Static section layouts inject `BreadcrumbList`
- Blog hub injects `CollectionPage`
- Blog detail pages inject `BreadcrumbList` and `Article`

## Performance and Core Web Vitals priorities

- Keep LCP assets limited to one hero image per page with `priority`
- Add `sizes` to all `next/image` instances that use `fill`
- Convert large PNGs and JPEGs in `public/` to WebP or AVIF where visually acceptable
- Replace autoplaying decorative videos with poster-first loading if LCP or bandwidth becomes an issue
- Keep CSS and JS bundles lean by avoiding unnecessary client-side state on static routes
- Lazy load below-the-fold images and sliders by default

## Validation checklist

### Google Search Console

- Submit `https://shreevenkateshwara.com/sitemap.xml`
- Inspect `/`, `/portfolio`, `/contact`, `/blog`, and one blog article URL
- Confirm canonical selection matches deployed canonicals
- Check crawl stats after launch and after each structural release

### Sitemap validation

- Open `sitemap.xml`, `sitemaps/pages.xml`, and `sitemaps/blog.xml`
- Confirm `200` status, correct `Content-Type`, and no blocked canonical URLs
- Ensure every XML URL returns the canonical destination without redirect chains

### Crawlability checks

- Crawl the site with Screaming Frog or Sitebulb
- Verify no orphan URLs remain outside XML and HTML sitemaps
- Verify feeds are `noindex` and API routes expose `X-Robots-Tag: noindex, nofollow, noarchive`
- Verify there are no `4xx` internal links and no accidental `noindex` tags on commercial pages

### Indexing verification

- Compare indexed URLs in Search Console against the XML sitemap set
- Confirm `/html-sitemap` is reachable from the footer
- Check that blog articles emit `Article` schema and self-canonical metadata
- Test query-string URLs like `?utm_source=test` and confirm they redirect to the clean canonical URL
