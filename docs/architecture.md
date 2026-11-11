# Application architecture

## Scope and constraints

The application presents Karnataka Rakshana Vedike (T. A. Narayana Gowda faction) in Kannada and English, provides editorial information, helps visitors locate central contact details, and displays a geographic district directory. Membership registration and the retained supporter-preview feature are currently disabled. The original static-hosting/no-backend constraint remains in force; the application stack was changed at the owner's request to Vite + React + TypeScript + Tailwind CSS.

The selected source root is this project folder, not either NDP source tree. The folder was empty at discovery: there was no existing implementation, test suite, build system, deployment configuration, schema, or feature-flag system to extend.

## Structure and ownership

```text
src/
  app/                  Router, route metadata, page focus, shared shell
  components/           Shared presentational and interaction components
  content/              Typed, bilingual editorial data and identifiers
  features/
    districts/          Shareable district selection and contact display
    organization/       Founder hero, purpose, programme/campaign/history sections
    media/              Filtering, dialog, explicit YouTube loading
    membership/         Validation, transient form state, local PNG export
    timeline/           Chronological, filterable milestones
    wings/              Keyboard-operable tabs and interest links
  i18n/                 Bilingual message catalog, provider, storage boundary
  lib/                  Relative-asset resolution and safe blob downloads
  pages/                Route-level composition, mostly lazy loaded
  styles/               Tailwind theme, design system, responsive components
public/                 Vendored photos, font licenses, favicon
tests/                  Production-build browser and accessibility tests
scripts/                Static generation, SEO and build-budget verification
.github/workflows/      Validation and GitHub Pages deployment
```

React owns rendered state. Editorial collections are typed modules; there is no runtime API or network data cache. Shared components read localization through a narrow context. Feature components own their interactions, avoiding a global store for ephemeral form data.

## Visual system

The official-site design retains the Kannada flag identity in a live-text yellow-and-red masthead, with independent emblem and Kuvempu assets. A navy navigation row connects to the leadership-led navy homepage opening. White editorial sections, muted blue-gray surfaces, warm-gold calls to action, and restrained red accents establish the rest of the site. The founder's owner-supplied portrait appears alongside the first heading on desktop and phones.

The homepage composes organization purpose, vision and mission, four action priorities, a president's-message review, programme archive, history highlights, campaigns, upcoming announcements, participation links, and FAQs. Dedicated pages carry the complete leadership profile, sourced history, programmes, and campaign details. Stateful district, wing, and media controls keep their existing privacy and interaction boundaries. The supporter feature is retained in source but is not loaded by the public app. No slideshow or artificial impact counter remains.

## Data flow and state transitions

| State                         | Owner              | Persistence                          | Transitions                                                                |
| ----------------------------- | ------------------ | ------------------------------------ | -------------------------------------------------------------------------- |
| Language                      | `LanguageProvider` | URL plus one localStorage preference | URL language → language link; legacy hash links use saved preference       |
| Page and shareable selections | React Router       | Clean path and URL query parameters  | Navigation, reload, browser history, district/wing/media selection         |
| Mobile navigation             | Header             | None                                 | Closed → modal open → close/Escape/navigation                              |
| Media permission              | Media viewer       | None                                 | Poster → explicit load → external iframe; reset when dialog unmounts       |
| Supporter preview (dormant)   | Membership feature | Component memory only                | Editing → validation errors or preview → edit; route unmount removes state |
| Card export                   | Membership feature | Download chosen by visitor           | Idle → generating → success/error; retry supported                         |
| Milestone/gallery filter      | Feature component  | None                                 | All → category; data remains immutable                                     |

Validation is implemented once with Zod. It accepts Unicode names, rejects controls/markup, validates Indian mobile numbers and known content IDs, normalizes supported digit sets, and requires preview acknowledgement. The UI maps error codes to the active language. Form values are never interpolated into HTML or executable strings. React renders text; Canvas draws card text directly.

## Routing and rendering decision

`BrowserRouter` uses explicit Kannada paths and `/en/` English paths. The URL controls language, while localStorage retains a preference for old fragment links. Shared localized links preserve path/query/hash and generate language-correct, crawlable anchors. Both languages share existing page components and editorial collections.

The build first compiles the client and a separate Node renderer, then generates all 22 complete page documents, static aliases, a noindex 404, sitemap, and robots file. React's static rendering API resolves lazy routes before the documents are written. The browser hydrates matching documents; selector-query variants and unknown routes mount on the client to avoid mismatching the default snapshot. Physical directory indexes support direct links on GitHub Pages without server rewrites. A build-time year prevents time-dependent footer hydration mismatches.

Search metadata is centralized in `src/content/seo.ts`. Generated head tags and client navigation use that same contract. The 20 eligible documents have distinct HTTPS canonicals, unique descriptions/titles, reciprocal language annotations, social metadata, and approved-fact JSON-LD. Sample district pages are noindex and absent from the sitemap until their contacts are verified. The build rejects incomplete HTML, broken local resources, and metadata inconsistencies. See [Technical SEO](technical-seo.md) for exact policies and deployment checks.

Secondary client routes remain lazy loaded. The server renderer is build-only and excluded from the published artifact. The dormant membership implementation is not loaded by the public router.

## Accessibility and failure handling

- Semantic landmarks, a skip link, one main heading per page, programmatic field labels/errors, active navigation, and live status messages.
- Language updates the root `lang` attribute. Both self-hosted font subsets include variable weights, with system fallbacks.
- The shared native dialog also explicitly cycles Tab/Shift+Tab and restores focus to its trigger. Escape, close buttons, and backdrop dismissal are supported. Body scrolling is restored on unmount.
- Wing tabs implement arrow keys, Home/End, roving tab stops, and linked tab panels.
- Reduced motion disables moving backgrounds/tickers and uses nonanimated scrolling. Announcements can be paused or stopped through hover/focus.
- Missing local images show a labeled visual fallback. Route errors have a reload path; unknown routes offer a home link. Download failures surface a retryable message.
- A source link remains available when an external video cannot play. An iframe presence test cannot guarantee that YouTube will allow playback in every geography/device.

## Security, privacy, and contracts

**Verified from implementation:** there is no authentication or privileged API. Published information is public. No registration endpoint, member database, payment processor, admin portal, or authorization claim is implied.

Personal details remain within the membership component and local download flow. Only the language choice is written to localStorage; neither sessionStorage nor an application cookie is used. Browser-controlled autofill/download storage is outside the application's retention mechanisms.

External videos are opt-in and use the YouTube privacy-enhanced origin. Social/map URLs are links. All external new-tab links isolate the opener. The HTML CSP restricts executable scripts to the same origin, forbids plugins and form submission, and permits only the selected video origin for frames. Inline styles are permitted for browser/React style operations; inline scripts and `eval` are not permitted. GitHub Pages cannot supply custom per-project security response headers; a meta CSP cannot implement `frame-ancestors` or HSTS. Do not claim those protections.

Public content is maintained in trusted source control; adding external data later requires runtime validation and URL allowlisting. No secrets belong in `VITE_*` values: compiled frontend configuration is public.

## Performance and capacity

Static assets are served by GitHub Pages. There is no application server, database connection pool, distributed lock, queue, or mutable shared state to scale. Directory/filter operations are linear in small content arrays; the timeline additionally sorts its filtered copy.

Photos and fonts are served locally. Deferred images use native lazy loading. Build output has hashed module/style/font assets; the HTML entry and stable editorial assets follow Pages caching behavior. There is deliberately no service worker that could hold a stale client release.

Build-time budgets enforce 150 KiB compressed initial JavaScript, 20 KiB compressed initial CSS, 300 KiB for the homepage leadership portrait, and 1 MiB for all bundled editorial images. The image inventory includes JPEG and WebP photography. These are transfer-size checks, not substitutes for real-device performance measurements. Slow or unavailable networks can still prevent initial loading; the application does not promise offline availability.

## Deployment, recovery, and operation

The workflow uses `npm ci`, strict checks, a production build, budget checks, and browser tests before uploading `dist/`. A separate job with Pages/OIDC permissions deploys only a passing main-branch artifact. Action versions are pinned to revisions inspected from the upstream tags. Pull requests never deploy. Only `dist/` is published; source/tests/node_modules are excluded.

GitHub's deployment status and the attached browser failure report provide deployment diagnostics. No remote analytics or error-reporting service is configured. Manual release checks should include the public URL, both language versions of a direct route, sitemap/robots, a genuine 404, language switching, central contact links, one media dialog, and selection through the district map and dropdown. No unconfigured monitoring or operational alert is claimed.

If checks fail, no new artifact deploys and the current release remains. If deployment fails, inspect the workflow and Pages environment. To roll back, revert the source change to the prior known-good commit on main and let the same validated pipeline redeploy. Historical workflow reruns depend on GitHub artifact retention; rebuilding a known source revision avoids relying on expired artifacts.

Network retries, duplicate events, and clock skew cannot create duplicate membership records because no submission or persistent member record exists. Concurrent editor changes are resolved through Git/source review. External platform failures do not block static contact information. Introducing real membership submission is a new system boundary and requires an explicit design for idempotency, authenticated administration, privacy, retries, retention, backup, and incident response.

## Evidence and remaining approval

The build tools currently require a scoped npm override from affected `minimatch` versions to `11.0.5`, addressing [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). The override is confined to affected version ranges. Remove it when ESLint and typescript-eslint adopt patched versions within their own dependency ranges; re-run lint, tests, and the build when changing it.

Implementation behavior is verified through the source and automated checks documented in the project. Content/source references are recorded separately in `asset-sources.md`. The office address, four phone numbers, and Instagram account are owner-provided data, not independently audited operating contacts. Missing email, local district data, official releases, and a higher-resolution approved portrait remain editorial inputs. No real GitHub deployment, DNS binding, physical-device test, or production availability observation is claimed by a local build.

## Organization redesign boundaries

The public site contains eleven content routes in each language, plus legacy membership/credits redirects and Kannada-prefix aliases. `LeadershipPage`, `ProgrammesPage`, and `CampaignsPage` are lazy-loaded alongside the existing secondary routes. Reusable organization sections are under `src/features/organization/`; Home composes the founder hero, purpose, priorities, president's message, programmes, history, campaign summaries, upcoming announcements, participation links, and FAQs. Founder identity is owner-approved; facts and attributed outcomes retain their sources.

`src/content/official.ts` provides typed bilingual content and editorial state. A president's message marked `draft` is shown with a review label only when `import.meta.env.DEV` is true. The production build shows an approved-message notice until its status changes. Programme images use `imageStatus`: `reference-only` images may be displayed locally for review, while public display requires `approved`. Approved image paths must point to publishable local assets. `review-media/` is outside `public/`, ignored by Git, and checked to be absent from the built artifact. Reference photographs introduce no external requests during normal browsing.

The future-programme collection is empty until dates and venues are owner-confirmed. This is an editorial calendar, not a booking, payment, or registration service. Protest-photo records await owner-supplied material. The app does not fabricate attendance, membership, employment, or policy-impact totals.

Style ownership is split into `foundation.css` (tokens, self-hosted typography, base and shared components), `features.css` (stateful controls and retained secondary-page layouts), and `site.css` (masthead, navigation, and organization sections). All compose through `app.css`, retaining Tailwind utilities. Layout changes do not change the form's privacy boundary, video-consent boundary, or persisted-language behavior.

## Deferred membership and public presentation

All membership entry points are removed; old URLs redirect home and the membership route is not loaded. The retained membership implementation is dormant and not a registration service. Editorial citations remain in content metadata and repository research, while public pages omit bibliography and source UI. Required legal attribution is served as a separate asset notice.

The district route bundles simplified geographic polygons for all 31 districts. The map buttons and dropdown call the same selection handler, and the URL remains the source of selection state. No geocoding or tile service is contacted. Approved `District.office` records override the explicitly labeled central-office fallback. See `map-data.md` for geographic provenance and adaptation.

Programme-reference images are never displayed in development or production. Only photographs verified to depict the actual programme may be marked approved. Missing photographs use clear archive covers.

All 31 districts currently use explicitly labeled sample coordinator details, distinct demonstration addresses, and non-dialable phone placeholders. The confirmed central-office phone remains separately labeled. Replace samples with verified `District.office` records once approved details are available.
