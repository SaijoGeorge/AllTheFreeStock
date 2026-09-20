# AllTheFreeStock

Astro rebuild of [allthefreestock.com](https://allthefreestock.com) — a curated
directory of free stock photos, video, audio, icons, fonts and mockups, plus a
blog ("The Journal").

## Stack

- **Astro** (static output) + **Tailwind CSS v4**
- Content collections (`src/content/blog/`) for blog posts, managed via
  [Sitepins](https://sitepins.com) (Git-based CMS — connect it to this repo's
  `main` branch and point it at `src/content/blog`)
- Deployed on **Cloudflare Pages**, source on **GitHub**

## Structure

- `src/data/resources.ts` — directory categories/links shown on the homepage.
  Currently seeded with a representative subset from the design mockup; the
  full ~400-link catalogue from the live site still needs migrating in.
- `src/content/blog/` — blog posts (Markdown). Frontmatter schema in
  `src/content.config.ts` supports `tldr`, `faqs`, `topic`, `pubDate` /
  `updatedDate`, etc.
- `src/components/` — Header, Footer, ResourceCard, CategoryRail,
  CategorySection, PostCard, Toc, Faq, AskAiRow, AuthorBio.
- `src/pages/index.astro` — homepage
- `src/pages/blog/index.astro` — archive ("The Journal")
- `src/pages/blog/[...slug].astro` — post template

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
npm run preview
```

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project connected to the repo.
3. Build command: `npm run build`. Output directory: `dist`.
4. No environment variables required for a static build.

## Known gaps (not yet migrated)

- Full resource catalogue (only a seed subset is in `src/data/resources.ts`).
- Search page (`/search/`) and resource-submission form are linked but not
  built yet.
- Scroll-spy on the article TOC and the mobile bottom-sheet TOC from the
  original design were skipped for v1 (desktop TOC works via anchor links).
