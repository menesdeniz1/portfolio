# Personal website — visual prototype

Historical note: superseded by the completed bilingual local edition on 22 September 2026. Follow README.md for current routes, files, commands and publication boundaries. The notes below describe the earlier two-page prototype, not the current feature set.

22 September 2026. Local review only; no deployment or push performed.

## Preview

With dependencies installed: `npm run build`, then `npm run start -- --hostname 127.0.0.1 --port 3108`.
The existing inherited config can consult PostgreSQL when POSTGRES_URL is set. Leave that variable unset for this prototype. It is not needed by either page.

- `/`: editorial homepage, selected work, industrial overview, additional projects and contact.
- `/work/keepmoney`: engineering case study.

## Editing

- `app/page.tsx`: homepage copy and layout.
- `app/content.ts`: additional project list.
- `app/work/keepmoney/page.tsx`: project narrative.
- `app/components/EngineeringDiagrams.tsx`: original illustrative diagrams; not product screenshots.
- `app/globals.css`: colors, spacing, typography and responsive styles.
- `app/layout.tsx`: navigation, metadata and footer.

Next.js was retained to isolate the visual/content experiment from a framework migration. No new runtime dependency was added. Analytics and Google font calls were removed from the active layout. Old unused components and MDX helpers remain for a later deliberate cleanup; they do not define this prototype's design.

## Deliberate prototype limits

- English only for this visual pass. Turkish draft content exists in the workspace planning document.
- No CV download link until a current, approved PDF is selected. No broken placeholder link.
- No private company media, current-employer/availability claims or invented business metrics.
- No live product demos. All diagrams are explicitly conceptual.
- Metadata is noindex for the prototype; revise metadata, sitemap, canonical domain and indexing policy before publication. Noindex is not access control.
- This is not the finished bilingual website or a completed accessibility/security audit.

## Validation

- Production build and TypeScript compilation passed.
- Browser inspection of homepage and KeepMoney detail at desktop and narrow mobile viewport (375 CSS-pixel content width).
- Both pages had no horizontal document overflow at that mobile width and no missing fragment targets in their own page.
- Homepage-to-case-study navigation worked.
- A missing word space caused by a hidden mobile line break was found and corrected.
- No project runtime benchmarks or retailer integrations were tested as part of this website work.

Next: review visual direction, then bilingual content structure, selected CV, genuine shareable project media, remaining detail pages and full pre-publication QA. Only proceed to hosting/DNS after identifying the actual deployment target.
