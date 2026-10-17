# Enes Deniz — personal website

A bilingual personal website about software engineering, computer vision and complete applications. Built with Next.js, React, TypeScript and CSS/Tailwind tooling.

## Run locally

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3109
```

Production preview:

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 3109
```

In another terminal, with the production preview running:

```sh
npm run check
```

## Content and routes

English home: `/`. Turkish home: `/tr`.
Both languages include an industrial-vision story, KeepMoney story, camera-to-device capstone story, and a printable résumé.

| Edit | File |
|---|---|
| Homepage text, education, interests and additional projects | `content/home.ts` |
| Case-study narratives | `content/projects.ts` |
| Résumé text | `components/ResumePage.tsx` |
| Page layout | `components/HomePage.tsx`, `components/StoryPage.tsx` |
| Navigation and footer | `components/SiteShell.tsx` |
| Illustrations | `app/components/EngineeringDiagrams.tsx` |
| Colors, spacing, responsive and print styles | `app/globals.css` |
| Metadata and publication switch | `lib/site.ts` |

Add matching English and Turkish entries when editing content. To add a case study, extend `slugs` and both language records in `content/projects.ts`.

The résumé is an HTML page with print styles and a Print / Save as PDF button, not a download of an old CV. Use a browser supporting printing and choose Save as PDF. Existing workspace CV PDFs were not changed or copied into this repository.

## Architecture

Pages are prerendered. Only the language switch and print button require client components. Main content and links are available as HTML. Language switching retains the current page. Root layouts set the correct document language.

There is no application database, account system, chatbot, analytics integration, external font fetch or external API dependency for page content. Dependencies and inherited template components no longer used by this site were removed.

## Before publishing

This local edition has not been deployed. Confirm the domain and hosting target first. See `.env.example`:

- `SITE_URL`: verified production origin, with https and no trailing slash.
- `SITE_PUBLISH=true`: enable indexing metadata and the sitemap at build time.

Without both values, robots and page metadata discourage indexing. This is **not** authentication; anyone able to access the server can read its public content. Bind local previews to 127.0.0.1.

Verify the production build with the final domain, hreflang/canonical links, social preview, redirects and host TLS before launch. Do not add company source, credentials or private images to the public directory.

## Honesty and attribution

Company experience is described at a high level; private source is not redistributed. Conceptual diagrams are labelled and are not represented as application screenshots or measured output. Team and fork attribution is retained in project descriptions. KeepMoney is not presented as a deployed commercial service.

The earlier repository had a leerob/next-mdx-blog origin and a Brittany Chiang-inspired visual edition. The current presentation replaces that layout; this is not a claim of authorship of historical upstream work. Git history retains the previous tracked files. No blanket license is granted to third-party project artifacts.

## Checks

`npm run build` includes TypeScript validation. `npm run check` checks ten content routes, internal links/fragment targets, document languages, headings, static assets, 404 behavior and basic response headers against a local running build. It expects the default non-indexed preview environment.

The GitHub Actions workflow runs the build and HTTP checks; it has only been prepared locally, not executed on GitHub in this work. Automated smoke checks are not a complete accessibility, penetration or browser-compatibility audit.
