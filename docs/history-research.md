# Karave history: research and implementation notes

Reviewed on 8 November 2026. Public-facing Kannada and English copy is in `src/content/history.ts` and `src/content/milestones.ts`.

The source implementation showed the same `AboutPreview` component on Home and About, with its journey link always targeting `/about`. On About, activating it therefore stayed on the same route. The dedicated `/history` route resolves that loop while keeping the organization overview at `/about`. The existing timeline is now part of the history page, with organization milestones selected initially and state/language context available separately.

The narrative follows the T. A. Narayana Gowda-led Vedike. The 1999 starting year is supported by the 31 October 2013 Oneindia Kannada interview with Gowda; no precise founding day or sole-founder claim is asserted. ThePrint’s 6 November 2026 interview-based report supplies the late-1990s employment background. The Indian Express’s 7 December 2022 retrospective documents early visibility in Belagavi, later border protests, and the emergence of separate groups using the KRV name. Those retrospective accounts are not treated as original incorporation records.

Contemporary reports document the 2007 Cauvery protests, withdrawal of the proposed April 2008 Hogenakkal bandh, October 2012 mobilization, July 2016 Mahadayi protests, July 2017 Metro language protests, and the 2023 Nandini, Cauvery, and signboard campaigns. The timeline includes reported property damage and police action where relevant, using attributed reporting without asserting criminal convictions or undisclosed case outcomes. It does not claim a Nandini–Amul merger occurred.

The 2024 Kannada nameboard amendment is sourced to the Karnataka Gazette text appended to the principal Act in PRS Legislative Research’s PDF. It is Act 7 of 2024, published on 26 February 2024, amending section 17(6). The timeline labels this a state-policy development. It does not credit a single organization with enacting it or provide compliance advice.

The 19 February 2025 New Indian Express report supports the KAS translation protest. The Indian Express’s 2 September 2026 report supports the Indian Languages Forum announcement. PTI’s 3 November 2026 report, carried by The Week, supports the ongoing employment-information campaign. The proposed 30 November finish and submission of a report remain announced plans as of the review date. No future completion, recruitment quota taking effect, or resulting employment totals are asserted.

Each source’s publisher, publication date, title, and direct URL appear in `historySources` and on the public page. State unification, renaming, and classical-language recognition retain their earlier government references as background context. Publicly reported membership and branch totals are excluded because they have not been independently established.

Validation covers Home/About journey links, route reloads, both languages, chronological filtering, sources dated no later than the review date, browser accessibility, and repository-subpath hosting.
