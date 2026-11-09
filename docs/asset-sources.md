# Asset sources and editorial evidence

Assets were selected on 8 November 2026. Preserve attribution when replacing or redistributing them. Required attribution is retained in the downloadable `public/licenses/NOTICE.txt`; editorial citations are not displayed on website pages. The original three JPEG assets are retained as downloaded. The additional landscape photographs are resized and encoded as WebP; CSS applies display crops. No creator endorsement is implied.

| Local asset                                                | Source and author                                                                                                                                                           | License                                                         |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `public/assets/images/ta-narayana-gowda-kannada-shawl.jpg` | [T. A. Narayana Gowda (2025)](<https://commons.wikimedia.org/wiki/File:T.A._Narayana_Gowda_(2025).jpg>), Vishwavani TV, via Wikimedia Commons; 472 × 563                    | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)       |
| `public/assets/images/vidhana-soudha.jpg`                  | [Vidhana Soudha, panoramic view](<https://commons.wikimedia.org/wiki/File:Vidhana_Soudha_(Bengaluru)_-_Panoramic_view.jpg>), iMahesh; downloaded 1280px Wikimedia thumbnail | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `public/assets/images/mysuru-palace.jpg`                   | [Mysore Palace Front View Morning](https://commons.wikimedia.org/wiki/File:Mysore_Palace_Front_View_Morning.jpg), Rohanbharadwaj; downloaded 960px Wikimedia thumbnail      | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

The authentic leadership portrait satisfies the subject/shawl requirement and the requested asset path. Its resolution is limited; an approved higher-resolution original is preferred for final publication. The former schematic graphic has been replaced by geographic district polygons; see `map-data.md`.

## Live masthead rebuilt on 9 November 2026

The masthead uses live HTML Kannada text, a Kannada flag palette with a yellow upper field and a red lower band, a red organization name, dark upper slogans, and white text on the lower band, and two separate local images. The three slogans, organization name, tagline, and registration line are selectable text, never a banner image. Spacing and responsive typography are controlled in `src/styles/app.css`. Kannada branding remains in Kannada when application controls change language. The portrait has a translated alternative description; the decorative emblem shares the home link’s organization name. Fixed image dimensions and independent fallbacks preserve layout if downloads fail.

| Local asset                                    | Internet source                                                                                                                                                                               | Processing / rights                                                                                                                                                                                                                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/assets/branding/karave-emblem.webp`    | [Standalone KRV emblem](https://karnatakarakshanavedike.in/wp-content/uploads/2026/01/KRV-LOGO.png), published on the [organization artwork source site](https://karnatakarakshanavedike.in/) | Native 433 × 410 transparent PNG encoded as WebP without enlargement. Organization artwork; no open reuse license is asserted. No personal-name text is included.                                                                                                             |
| `public/assets/branding/kuvempu-portrait.webp` | [Kuvempu](https://commons.wikimedia.org/wiki/File:Kuvempu.jpg), unknown photographer, Wikimedia Commons; source original 927 × 1200                                                           | Resized to 480 × 621 WebP; CSS applies a circular display crop with a cream border. The Commons file page labels it [public domain in India](https://commons.wikimedia.org/wiki/File:Kuvempu.jpg#Licensing); it is not labeled Creative Commons or universally public domain. |

The two masthead images together have a 96 KiB build budget. Images are served locally without third-party requests. The same transparent emblem appears in the footer; `public/assets/karave-favicon.png` is its 64px derivative. Only the common emblem artwork was obtained from the source site, which identifies a different faction. Its leadership, contact information, and faction copy are not used. The requested text and registration number 43/2000 come from the owner’s references, not an independent verification of legal status.

The owner’s 1578 × 260 screenshot is retained only as a design reference at `docs/reference/karave-header-original.png`; it is no longer served as a banner. The earlier generated emblem at `public/assets/images/karave-logo.webp`, the supplied Narayana Gowda photograph at `public/assets/images/narayana-gowdru-header.jpeg` (400 × 400), and the earlier [Konkani Vishwakosh portrait of Kuvempu](https://commons.wikimedia.org/wiki/File:Kuvempu-konkani_vishwakosh.jpg) at `public/assets/images/kuvempu-portrait.jpg` (215 × 280, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)) are retained as previous assets. The current header does not use them. No portrait or lettering was generated for this revision.

The video is [Vishwavani TV's archived interview](https://www.youtube.com/watch?v=CsfBsxnA3Uo), identified by the source linked on the portrait's Commons page and confirmed through YouTube's oEmbed metadata. It is labeled as external media coverage, not an official Karave video. Its ongoing availability is controlled by the broadcaster/YouTube.

Inter (Rasmus Andersson) and Noto Sans Kannada (The Noto Project) are bundled from the Fontsource packages under SIL Open Font License 1.1. Their original license text is included in `public/licenses/FONTS.txt`. Fonts do not call Google or another font service at runtime.

## Landscape photography added in the layout refinement

The layout draws inspiration from [Karnataka Tourism](https://karnatakatourism.org/en/): a full-width scenic opening, bright editorial surfaces, spacious image cards, and a clear resource hierarchy. Its code, videos, copy, and image assets were not copied.

| Local asset                                    | Source and author                                                                                            | Processing / license                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `public/assets/images/kaveri-falls.webp`       | [Shivanasamudra](https://commons.wikimedia.org/wiki/File:Shivanasamudra.jpg), Bharat Galagali                | 1440px WebP; [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `public/assets/images/hampi-heritage.webp`     | [Stone Chariot, Hampi](https://commons.wikimedia.org/wiki/File:Stone_Chariot,_Hampi.jpg), Snivas1008         | 1280px WebP; [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `public/assets/images/mysuru-illuminated.webp` | [Mysore Palace in night](https://commons.wikimedia.org/wiki/File:Mysore_Palace_in_night.jpg), Dattatreya N R | 1600px WebP; [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

These photos illustrate Karnataka's landscapes and cultural identity, not Karave events. The hero has manual scene controls, with no automatic slideshow or background-video download. The default image has its own size budget; remaining photography is lazy loaded where appropriate.

## Content provenance

- **Owner supplied:** organization/faction identity, requested mission/pillars, requested UI structure, motto, office address, four phone numbers, and Instagram handle. The owner-provided contact information is in `src/content/site.ts`.
- **Verified from primary web documentation:** [Bengaluru South's district history](https://bengalurusouth.nic.in/en/history/) identifies the former Ramanagara district and the 23 May 2025 renaming. [Bengaluru Rural's administration website](https://bangalorerural.nic.in/en/) still uses the Rural designation. The directory preserves recognizable former names/aliases and does not assert local-office coverage.
- **Historical reference:** the [Karnataka Legislative Council history](https://kla.kar.nic.in/council/legislatureold.htm) and [Legislative Assembly history](https://kla.kar.nic.in/assembly/legislature.htm) are the reference points for the 1956 unification and 1973 state renaming. [PIB's classical-language release](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2061660) discusses Kannada's 2008 classical-language status.
- **Secondary historical reference, subject to editorial review:** [the organization overview](https://en.wikipedia.org/wiki/Karnataka_Rakshana_Vedike) identifies 1999 as the formation year. No detailed organizational achievements, historical membership claims, or campaign totals are reproduced.
- **Leadership social account:** the president's [X profile](https://x.com/narayanagowdru) was identified through search metadata. The Instagram link was supplied directly by the owner. No Facebook profile is invented.
- **Not used:** contact information found on similarly named organizations' websites. Those results included other factions and were deliberately excluded.

All gallery landmark photos are labeled as cultural context. Official press releases remain an empty editable collection until approved documents are supplied. Announcement copy is generic site information; it does not claim to be a live official news feed.

## Official-site redesign and local review references — 9 November 2026

The owner confirmed **T. A. Narayana Gowdru** for founder credit, requested a drafted bilingual president's message for review, and requested an empty future-event calendar until dates and venues are confirmed. The site does not add unconfirmed founders, office holders, campaign totals, membership counts, or event dates. The owner's 400 × 400 portrait is the homepage leadership image. The header remains live Kannada text with independent emblem and Kuvempu assets; no supplied banner is used as header text.

The following reporting photographs are local design references. Their publishing pages identify the subject/context; no face recognition is used to establish identity. They are **not openly licensed assets**. Publisher permission has not been verified. Files live in the ignored `review-media/` directory, are retained only for internal review and never displayed by the programme archive, and are absent from `dist/`. `imageStatus: 'reference-only'` prevents them from being used by the production presentation. Both development and production use programme archive covers until verified photographs of the actual programmes are supplied. An archive image is not evidence of the date or location of the depicted scene.

| Local review reference             | Reporting context / publisher                                                                                                                                                                                              | Rights status                         |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `review-media/education-2024.webp` | [KPSC re-examination response, 2 September 2024](https://kannada.oneindia.com/news/karnataka/karave-president-narayana-gowda-has-welcomed-the-kpsc-re-examination-373419.html), Oneindia Kannada                           | Local review only; permission pending |
| `review-media/awareness-2025.webp` | [Language and livelihood advocacy, 14 January 2025](https://kannada.oneindia.com/news/karnataka/kannada-activist-ta-narayana-gowda-calls-for-major-movement-against-injustice-to-kannadigas-395075.html), Oneindia Kannada | Local review only; permission pending |
| `review-media/railway-2026.webp`   | [Railway representations, March 2026](https://kannada.oneindia.com/news/karnataka/karnataka-rakshana-vedike-sets-april-15-deadline-railways-ta-narayana-gowda-warns-statewide-train-sh-447591.html), Oneindia Kannada      | Local review only; permission pending |

References were resized without enlargement to 960 × 540 WebP. The 2024 and 2026 reporting pages reuse related archival imagery; neither is labeled a photograph of a confirmed programme on a specific date. Replace these references with the organization's approved event photographs for public release.

The founder profile is also grounded in the [2013 Oneindia interview](https://kannada.oneindia.com/news/karnataka/karnataka-rakshana-vedike-ta-narayana-gowda-interview-078853.html), which identifies 1999 and Narayana Gowda's founding involvement. Campaign accounts retain the existing history bibliography, including the Karnataka Gazette and PTI reporting. The draft president's message is original proposed copy, not an attributed historical quote.

## Public presentation refinement

Source links, editorial bibliography, image-credit captions, and the Credits page are removed from the public page presentation at the owner’s request. Required asset attribution is preserved in `public/licenses/NOTICE.txt`. Unrelated or repeated reference-reporting photographs are not rendered in either local preview or production. The geographic directory data and its transformation are recorded in `map-data.md`; the required data attribution is also in the asset notice.

## Homepage portrait with transparent background

The homepage uses `public/assets/leadership/narayana-gowdru.png`, a 400 × 400 RGBA
PNG derived from the owner's supplied photograph. The original JPEG remains at
`public/assets/images/narayana-gowdru-header.jpeg`. The black backdrop was removed
using the built-in image editor; the output was resized to the existing 400-pixel
presentation size while retaining its alpha channel. The image remains local to
the website. The figure and caption are transparent, and the founder's role, name,
and leadership link use the theme's yellow against the homepage background.

Edit prompt:

> Use case: background-extraction. Edit target: the supplied original 400x400 photograph of T. A. Narayana Gowda. Asset: transparent PNG cutout for the official Karnataka Rakshana Vedike homepage. Remove ONLY the solid black background and replace it with true alpha transparency. Preserve the original person's exact facial identity, expression, skin texture, eyes, moustache, red tilak, red-and-yellow turban, red-and-yellow scarf, white shirt, pose, and all existing subject pixels as faithfully as possible. Do not redraw, beautify, restyle, relight, or invent any part of the person. Keep the original square composition, full turban tip and both shoulders, and original bottom crop. Make the outline clean with natural anti-aliased edges and no black fringe. Preserve dark facial and clothing details; remove only the exterior black background. Output a genuine RGBA PNG with a transparent background, without a painted checkerboard, backdrop, shadow, border, text, or additional objects.

The hero PNG has its own existing 300 KiB build budget. Supporting archival and
cultural images retain their separate 1 MiB budget; no size limit was increased.
