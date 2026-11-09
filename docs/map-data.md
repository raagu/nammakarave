# Karnataka district directory map

The interactive directory uses locally bundled geographic polygons for all 31
districts, including Vijayanagara. It makes no tile-provider or geocoding requests.

## Provenance

- Data snapshot: 25 September 2026, retrieved 9 November 2026.
- Geographic data: https://github.com/mchittineni/india-village-finder/blob/main/karnataka/web/data/districts.geojson
- Snapshot metadata: https://github.com/mchittineni/india-village-finder/blob/main/karnataka/web/data/boundaries_meta.json
- Upstream compilation: https://github.com/ramSeraph/indian_admin_boundaries
- Origin: Local Government Directory administrative polygons, Government of India.
- Licence supplied with the dataset: Government Open Data License – India.
- Licence: https://github.com/mchittineni/india-village-finder/blob/main/DATA_LICENSE.md

## Adaptation

Coordinates were projected uniformly using a Mercator projection, fitted into a
560 by 800 view box, and simplified at a 0.4-unit tolerance for web display. District
identifiers are matched by LGD code. Labels come from the bilingual directory, so
Ramanagara uses its current Bengaluru South label. Marker positions are interior
representative points computed from each district polygon, not office locations.
The generated presentation data is in `src/content/karnataka-map.ts`.

Map markers and the dropdown share one URL-backed selection. Keyboard selection,
browser history, language changes, and reloads preserve the selected district.

The owner requested sample contact records for all 31 districts pending an approved
contact list. Each has a distinct demonstration address, a sample coordinator
label, and a non-dialable `00000` phone placeholder. The panel explicitly identifies
them as sample details. Only the separate central-office phone link is operational.
To replace a sample, add a `status: 'verified'` office record in `districtEntries`,
with its approved address, contact name, telephone numbers and optional directions.

The statutory geographic-data attribution and adaptation notice are retained in
`public/licenses/NOTICE.txt`, linked as Legal notices in the footer. Editorial
bibliographies are maintained in repository documentation rather than page UI.
