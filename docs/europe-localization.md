# European market pages and languages

Reviewed 9 October 2026. This implements the first discussed set of eleven new countries: Germany, France, Netherlands, Ireland, Spain, Italy, Switzerland, Sweden, Denmark, Norway and Poland. The existing UK page remains available. This is not a claim of coverage for every European country.

## Content and customer experience

Every new country has an English market page. Twelve server-rendered local-language pages cover German, French, Dutch, Spanish, Italian, Swedish, Danish, Norwegian Bokmål and Polish. Switzerland has separate German, French and Italian versions. Ireland uses English; Irish, Swiss Romansh, Norwegian Nynorsk and Spain’s other languages have not been added. The country pages expressly describe remote delivery from India and do not imply local offices or guaranteed multilingual support.

Local pages translate navigation, headings, service explanations, process, FAQs, enquiry guidance and footer. A visible language selector links to the corresponding English and native versions. Contact and other service pages currently remain English, with an explicit notice before leaving the translated page. Choosing a language does not force country/browser-language redirects.

Copy explains SEO, paid ads, website usability and AI-search information in plain language. The page contains useful service and pricing answers rather than a keyword list. Country context covers genuine service areas and language scope without inventing local projects or testimonials.

## Search evidence

`europe-keyword-map.json` records one primary target, six secondary candidates and five competitor service-page references per country. Those secondary candidates are topic guidance, not an instruction to repeat every phrase verbatim. Primary targets appear in localized H1/title metadata; secondary concepts appear naturally in service explanations.

References are a shortlist found in public indexed results. Some sources self-report longevity, projects or awards. Search presence is not proof of monthly organic traffic, and it is not a complete reputation audit. No search volume, ranking position or traffic estimate is fabricated. Reliable full ranking exports require a suitable SEO data source. Generated translations have not undergone an independent native-speaker review.

## Technical implementation

- Stable URLs: `/markets/{country}` for English and `/markets/{country}/{language}` for translated pages.
- Each page has its own HTTPS self-canonical and the same reciprocal alternate map. The global markets selector is the `en` and `x-default` fallback.
- Country English codes use en-DE, en-FR, en-NL, en-IE, en-ES, en-IT, en-CH, en-SE, en-DK, en-NO and en-PL. Actual translations use de-DE, fr-FR, nl-NL, es-ES, it-IT, de-CH, fr-CH, it-CH, sv-SE, da-DK, nb-NO and pl-PL.
- The Worker overrides a route header before rendering; HTML document language follows the actual localized route. Client-provided language headers cannot select a different document language.
- Translated URLs appear in the existing XML sitemap. Invalid country/language pairs return not-found. Existing trailing-slash redirects and Google verification remain intact.
- Localized WebPage structured data uses the actual page language and a country-scoped Service entity. No fabricated local business address or FAQ rich-result guarantee.

## Verification

TypeScript and production build passed. `node scripts/check-market-locales.cjs` renders all twelve localized documents and verifies document language, a single H1, metadata/self references, all thirty reciprocal alternate entries, sitemap inclusion, invalid-pair not-found and trusted route handling. It also verifies existing canonical redirects preserve query strings. Browser visual QA and live custom-domain publication are separate from source and build verification.
