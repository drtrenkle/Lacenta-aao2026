# LACENTA conference landing page (AAO-HNSF 2026)

Static site: `index.html`, `styles.css`, `app.js`, `config.js`, `assets/`. No build step.

## Edit content
Everything that changes lives in **config.js**: form links, careers link, Geoff's contact, Clashmore details, conference dates, stats.
Empty values stay as placeholders. Flyer numbers are kept exactly as printed until confirmed.

## Preview vs publish
`showFlags: true` shows amber "Add link" / "Verify" chips and a review panel. Set `showFlags: false` before sharing.
With flags off, buttons and blocks that still have no link or content are hidden automatically.

## Publish on GitHub Pages
1. Create a repo, upload these files (keep `assets/` folder).
2. Settings > Pages > Deploy from branch > `main` / root.
3. Share the `https://<user>.github.io/<repo>/` link.
4. Domain later: Pages > Custom domain.
5. iMessage previews: change `og:image` in index.html to the full URL of `assets/og-image.png`.

The page has `noindex` so it is not listed in search engines. Remove that line in index.html if you want it listed.

## Hand-off to the web developer (socalent.com/platform)
This is a static folder. Upload the whole folder (keep `assets/`) to `/platform` on the main site. No build step.
Before going live: set `keepEmptyButtons: false`; update `og:image` in index.html to the full URL of `assets/og-image.png`; remove the `noindex` line if the page should be searchable.
Fallback if the folder can't live under /platform: point a subdomain (e.g. platform.socalent.com) at GitHub Pages with a CNAME.
