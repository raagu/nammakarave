# Namma Karave

A Kannada-first application for **Karnataka Rakshana Vedike, T. A. Narayana Gowda faction**, prepared for `nammakarave.com`. Built with Vite, React, strict TypeScript, and Tailwind CSS. GitHub Actions validates the source and publishes the compiled application to GitHub Pages.

## Run locally

Use **Node.js 24 LTS** (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Create and preview the production application:

```sh
npm run build
npm run preview
```

Open the local URL printed by Vite. The source is an application and needs the development server or a production build; opening `index.html` directly is not supported.

## What is included

- A Kannada-first official-site design with English switching, saved language preference, and fully local fonts and images.
- A live-text Kannada masthead retaining the emblem, organization name, Kuvempu portrait, three slogans, tagline, and registration line. Yellow above red preserves the Kannada flag identity. A restrained navy, white, and warm-gold system carries through the navigation, page layouts, cards, forms, and footer.
- A leadership-led homepage featuring the owner's Narayana Gowdru portrait above the fold on desktop and phones, with founder/state-president identity, vision and mission, four priorities, programme archive, history highlights, campaigns, future-programme announcements, participation links, and practical FAQs.
- Home, Organization, Leadership, History, Programmes, Campaigns & Impact, Wings, District Directory, Media & Press, Contact, and Privacy routes. Membership and Credits are legacy redirects to the home page. Secondary pages are lazy loaded and work with direct hash links.
- T. A. Narayana Gowdru is credited as founder and state president, as approved by the owner. The president's message is drafted in Kannada and English for review; it is visible with a review label in the local development preview and withheld from the public build until approved.
- Five bilingual history chapters and a filterable chronology from 1999 to the November 2026 review, with research and evidence retained in repository documentation rather than visible page citations. Campaign pages distinguish the organization's advocacy from documented public developments.
- Three programme archive entries. Generic reporting photographs are kept in the ignored `review-media/` directory and are never displayed as programme photographs, including in development. Both preview and production use archive covers until verified photographs of the actual programmes are supplied. No photograph is generated or presented as proof of an event date.
- A future-programme calendar backed by an empty, typed collection, as requested. It shows an announcement message until the owner supplies confirmed dates and venues. The campaign-photo archive is ready for the owner's later images.
- Keyboard-operable wing tabs, a geographic map with all 31 clickable district markers synchronized with the shareable dropdown, verified central-office contacts and addresses, media dialogs, opt-in external video, and accessible mobile navigation.
- A validated supporter-card preview with in-memory personal details, Kannada-number support, and local PNG download. This does not issue membership, submit an application, accept payment, or transmit personal information. Phone numbers are excluded from cards.
- TypeScript, ESLint, formatting, unit tests, production transfer budgets, desktop/mobile browser tests, and accessibility checks. GitHub Actions validates and deploys the compiled app to GitHub Pages.

## Publish with GitHub Actions

1. Push this folder to your intended GitHub repository, using `main` as the deployment branch.
2. Open **Settings → Pages → Build and deployment → Source**, then select **GitHub Actions**.
3. The `Validate and publish to GitHub Pages` workflow checks formatting, TypeScript, lint, unit tests, production output, and desktop/mobile browser tests. Only a successful `main` run can deploy. Pull requests are validated without publishing.
4. Read the deployed URL from the workflow's `github-pages` environment.

The app uses relative asset paths and hash routes, so it works at either `https://OWNER.github.io/REPOSITORY/` or a custom domain. A direct link such as `/#/districts?district=mandya` or `/REPOSITORY/#/districts?district=mandya` survives a reload without a server rewrite or custom 404 workaround.

For `nammakarave.com`, configure the custom domain in GitHub Pages, verify domain ownership, configure DNS according to GitHub's documentation, and enable HTTPS. Add `public/CNAME` containing `nammakarave.com` only when you are ready to bind that domain. No domain claim or DNS change has been made by this project.

GitHub Free supports Pages from public repositories. A public repository also makes source and published contact data public. See the [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Checks

```sh
npm run check
npm run build
npx playwright install chromium
npm run test:e2e
```

- `check`: strict type checks, ESLint, Prettier, and Vitest.
- `build`: compiled application plus transfer-size checks.
- `test:e2e`: production-build tests in desktop Chromium and a mobile Chromium viewport, including axe accessibility checks, local downloads, direct routes, keyboard handling, consent, and repository-subpath hosting.
- `npm run format`: apply the shared formatting rules.

Browser tests use the **built** app. Rebuild after source changes before running them. Mobile emulation is not a substitute for testing on physical Android/iOS devices. Real YouTube availability is external; browser tests verify the embed boundary without depending on the broadcaster's service.

## Content editing

| Content                                                                     | File                        |
| --------------------------------------------------------------------------- | --------------------------- |
| Organization, address, phone numbers, social links, action pillars, notices | `src/content/site.ts`       |
| Navigation                                                                  | `src/content/navigation.ts` |
| Wings and their activities                                                  | `src/content/wings.ts`      |
| District choices and aliases                                                | `src/content/districts.ts`  |
| Historical milestones and source links                                      | `src/content/milestones.ts` |
| History chapters, source bibliography, and last review date                 | `src/content/history.ts`    |
| Gallery and approved press releases                                         | `src/content/media.ts`      |
| Photograph attribution and retained cultural assets                         | `src/content/imagery.ts`    |
| All shared Kannada/English UI copy                                          | `src/i18n/messages.ts`      |

The redesigned organization copy, vision and mission, founder profile, draft message, programme archive, campaigns, FAQs, and future-programme collection are in `src/content/official.ts`. `src/styles/foundation.css` owns tokens, typography, common components, and the footer; `src/styles/features.css` owns existing stateful controls and secondary-page layouts; `src/styles/site.css` owns the masthead, navigation, and redesigned organization sections.

### Review content before public publication

- Review `leaderMessage.paragraphs` in Kannada and English. Change `leaderMessage.status` to `approved` only after the president's message is approved.
- Replace a programme's reference photograph with an approved local file under `public/assets/`, update its `image`, `imageAlt`, and `imageCredit`, then set `imageStatus` to `approved`. Preserve its reporting source separately. Do not move permission-pending files into `public/`.
- Add only confirmed events to `upcomingProgrammes`, with a unique ID, bilingual title/venue, and ISO date. The collection is intentionally empty at delivery.
- Add approved images to `campaignPhotographs` with dates, bilingual locations/captions/alt text, and photo credits. No stock scene is substituted for a documented protest.

Append a wing to the data array to update the wing explorer. Membership registration is deferred and has no public entry points. Add a milestone to the array to update the timeline; filtering and chronological ordering are automatic. Use stable IDs because selections appear in shareable URLs.

Store approved PDFs under `public/assets/documents/`, then add title, date, and relative path to `pressReleases`. The provided downloadable introduction is explicitly labeled as website copy, not an official press release. Announcements are editorial messages, not a real-time feed.

## Content requiring the owner's follow-up

- **Contact details:** the headquarters address, four phone numbers, and Instagram handle were supplied by the owner. No email address or Facebook account was supplied; neither is fabricated.
- **District offices:** all 31 districts have explicitly labeled sample coordinators, demonstration addresses, and non-dialable phone placeholders. A separately labeled central-office number is owner-confirmed. Replace samples with verified office records when approved details are available.
- **Membership:** registration and the supporter preview are currently hidden; old membership URLs redirect home. The feature source is retained for future work. It does not submit an application, issue a membership ID, accept payment, or claim registration. A real membership service needs separately designed authentication, consent, retention, authorization, abuse prevention, and operating procedures.
- **Photography:** the homepage uses the owner-supplied 400 × 400 portrait; the leadership profile uses an attributed 472 × 563 archival portrait. A larger approved original can improve large/high-density screens. Programme-reference photo permissions are not asserted; they are excluded from the public build and Git by default.
- **Editorial approval:** the drafted president’s message, detailed biography, official press releases, and genuine campaign/rally photographs require approved material. History research is retained internally; extend it with dated sources and keep its review date current. Cultural gallery photographs are labeled accurately. No membership totals or campaign totals are invented.

## Architecture and operation

Read [Architecture](docs/architecture.md) for state boundaries, data flow, deployment, security choices, operational limits, and rollback. Read [Asset sources](docs/asset-sources.md) for photo/font attribution and content evidence.

There is no backend, database, service worker, analytics service, production secret, or recurring hosting bill introduced by this application. Optional external videos and social/map links use their providers' own policies. Social links open separately and do not embed third-party trackers.

## Current presentation and district data

Membership links and form access are deferred. Editorial source links and the Credits page are removed from the public presentation. Required asset notices remain in the downloadable `public/licenses/NOTICE.txt`, linked in the footer. The pillar dialogs have shared content insets and bilingual responsive typography. See [Map data](docs/map-data.md) for the geographic snapshot, adaptation, and district-contact fallback. Add an approved office record to `districtEntries` in `src/content/districts.ts` only after its address and phone numbers are confirmed.

District contact records are samples until approved addresses and phone numbers are supplied. Set a record’s `status` to `verified` only after replacing all demonstration fields with approved information.
