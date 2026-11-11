# Technical SEO and release verification

## Rendering and indexing policy

The public build emits complete HTML for all eleven pages in Kannada and English. Kannada uses `/`, `/history/`, and the other root-level paths; English uses `/en/`, `/en/history/`, and the corresponding paths. These URLs work directly and after reload on GitHub Pages without a rewrite service. React hydrates the matching document for interactive features. Query parameters select optional district, wing, and media views; those variants mount on the client and retain the base page's canonical URL.

Every document includes a language attribute, a unique title and description, an absolute HTTPS canonical, social preview metadata, and a robots directive. Twenty eligible URLs have reciprocal Kannada/English/x-default language annotations and appear in `/sitemap.xml`. `/robots.txt` allows public crawlers and advertises that sitemap. Neither file is an access-control or bot-protection mechanism.

Both district pages remain `noindex,follow` and are excluded from the sitemap, language annotations, and structured data while their office records are demonstrations. The visible directory is unchanged. Replace sample records with approved office details and review this policy in `src/content/seo.ts` before making the directory indexable. Missing pages and retired/alias URLs are also excluded from indexing.

Structured data describes the organization, its owner-approved founder, the website, and the current page. Only the approved headquarters, contact, and identity fields are included. No unconfirmed event, local office, rating, membership total, or campaign outcome is invented. This markup helps machines interpret the site; it does not promise a rich result or a particular ranking.

## Compatibility and failures

Old `/#/history` links migrate to the equivalent clean URL in the visitor's chosen language. Query selectors are preserved, and the obsolete `layout` selector is removed. The redirect helper accepts only this site's paths. `/kn/` aliases and the retired membership/credits routes have static, noindex redirect documents. Unknown paths use `404.html`; GitHub Pages retains its HTTP 404 response status. There is no catch-all redirect that disguises missing pages as successful home pages.

The build-time React renderer waits for asynchronous routes and keeps completed Suspense boundaries inline. No inline executable completion scripts or loading shells are published. Rendering errors, incomplete pages, invalid metadata, or broken local links fail the build. The intermediate `.ssg/` renderer is ignored by Git and never uploaded. Only `dist/` is published.

Language is determined by the URL so Google and visitors see the same content. A saved preference is used for old fragment links; it never silently changes the language of an explicit clean URL. Language controls are real links and remain usable without JavaScript.

## Configuration

The defaults target `https://nammakarave.com` with `SITE_BASE_PATH=/`. Optional local overrides are documented in `.env.example`. These are public build settings, not secrets. The Actions build sets the production origin explicitly. An optional public `GOOGLE_SITE_VERIFICATION` repository **Actions variable** can inject an HTML verification tag for a URL-prefix Search Console property. DNS verification of a Domain property needs no app variable or tag.

Google-generated HTML verification files belong in `public/` so Vite copies them to the website root. Keep their contents unchanged after verification; the SEO build check verifies that each such file survives publication. The supplied `googled9ea38f79538b35c.html` payload is retained there.

For a repository-path deployment, set both build and preview to `SITE_URL=https://OWNER.github.io` and `SITE_BASE_PATH=/REPOSITORY/`. Remove the custom-domain `public/CNAME` only when intentionally switching hosting domains. Base paths are validated; generated canonicals, assets, links, redirects, sitemap entries, and the router share the same configured base. Merely moving a build made for `/` under a directory is not supported.

## Google Search Console

1. Sign into [Search Console](https://search.google.com/search-console/) using the Google account that should own the property. It may differ from the GitHub account.
2. Add the **Domain** property `nammakarave.com`. Follow Google's DNS TXT verification instructions at the domain's DNS provider, verify, and keep that record. Domain verification covers protocol and subdomain variants. See [Google's ownership verification guidance](https://support.google.com/webmasters/answer/9008080).
3. After the SEO build has deployed, confirm that `https://nammakarave.com/sitemap.xml` responds successfully. Submit that full URL under **Sitemaps**. A sitemap aids discovery; [submission does not guarantee indexing](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
4. Use URL Inspection on the Kannada and English home, history, leadership, and contact URLs. Run the live test, confirm crawling is allowed and content renders, and request indexing for the key pages. The live test cannot guarantee Google will index a page or select its declared canonical.
5. Review Page indexing and Performance reports after Google has had time to crawl. Check selected canonicals and language versions, and investigate exclusions or regressions. Expect district and redirect pages to remain excluded by design.

Ownership verification, sitemap submission, actual indexing, Google-selected canonicals, field Core Web Vitals, and rankings require the deployed site and Search Console evidence. A local build cannot verify them. No rank, traffic volume, or indexing deadline is promised.

## Checks and release

Run `npm run check`, `npm run build`, and `npm run test:e2e`. The build automatically runs `check:seo` and the existing transfer budgets. Browser checks cover all 22 canonical documents without JavaScript, normal hydration, URL-driven language, metadata updates, old links, query selections, sitemap eligibility, true 404 responses, accessibility, and existing interactions on desktop and mobile Chromium. These tests verify implementation contracts, not Google's indexing decision.

GitHub Actions runs the same full browser suite using the Google Chrome already installed on GitHub-hosted Ubuntu runners, selected with `PLAYWRIGHT_CHANNEL=chrome`. A short preflight reports the available browser version. This avoids operating-system package downloads during the release; missing Chrome or any failed browser check still prevents publication. Local tests keep Playwright’s bundled Chromium by default, and the installed Chrome channel can also be selected locally with the same environment variable.

Before deploying, check `/`, `/en/`, `/history/`, `/en/history/`, `/robots.txt`, `/sitemap.xml`, a district URL, and a missing URL. Confirm HTTP and www variants redirect to the HTTPS apex and that source HTML contains the page's content and canonical. Inspect structured data with Google's [Rich Results Test](https://search.google.com/test/rich-results) or the [Schema.org validator](https://validator.schema.org/) as appropriate; generic page/organization markup is not a promise of a rich result.

The existing Actions pipeline publishes only a passing main-branch build. Roll back by reverting the change and letting the same pipeline rebuild and deploy. No DNS change, backend, database, new hosted service, analytics tracker, or visitor-facing redesign is needed for these improvements. Future anti-abuse protection belongs at the hosting/CDN or API boundary; blocking legitimate Googlebot would undermine indexing.
