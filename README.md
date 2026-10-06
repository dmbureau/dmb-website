# Digital Marketing Bureau — Cloudflare deployment

Prepared for https://dmbureau.cloud and GitHub dmbureau/dmb-website.

## Before deployment
1. Upload all extracted files to the root of your GitHub repository. Do not upload the ZIP itself.
2. Cloudflare dashboard: Storage & databases → D1 → Create database → name `dmb-leads`.
3. Your supplied database UUID e1416ead-2ac5-4ae7-954f-12376fa07852 is already configured in `wrangler.jsonc`. Confirm it belongs to dmb-leads in your account.
4. Use the D1 Console to run the SQL in `drizzle/0000_sharp_synch.sql` once on this NEW empty database. This creates the enquiry table. Do not rerun it on an existing table.
5. Workers & Pages → Create application → connect GitHub → choose `dmbureau/dmb-website` and branch `main`.
6. Build command: `pnpm run build`. Deploy command: `pnpm run deploy`. Root directory: `/`. Use Node 22 or later. Allow the project package manager to install from pnpm-lock.yaml.
7. After the workers.dev deployment succeeds, test the homepage, services, blog, audit and enquiry form. Verify one test enquiry in the D1 enquiries table.
8. Worker → Settings → Domains & Routes → Add → Custom domain → `dmbureau.cloud`, once the Cloudflare domain zone is active. Add `www.dmbureau.cloud` as needed.

Your supplied D1 database UUID is configured. No credentials are included. Site URLs, canonicals, sitemap and schema now use dmbureau.cloud.

## Optional audit data
Set PAGESPEED_API_KEY and CRUX_API_KEY in the Worker secrets for optional Google performance data. They are not required for the basic HTML page check. Ads library and business listing checks are guided manual reviews; traffic is not automatically accessible.

## Future manual editing
This package currently contains the existing website source. A CMS admin editor has NOT yet been integrated. Services, articles and page content still live in source files. Decap requires collections, a GitHub OAuth backend and matching content-rendering integration before /admin can be used.

## Lead handling
Enquiries are stored in your D1 database. Email notifications and an admin leads dashboard are not included yet. Existing leads on the previous hosting are not migrated by this package.

## Validation
The adapted package was built locally. Your Cloudflare account deployment, database and domain must still be verified. Free hosting is subject to Cloudflare plan limits.
