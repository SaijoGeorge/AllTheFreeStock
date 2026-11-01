## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Blog post rules (src/content/blog)

- **Cover image alt text is required.** Any post with `coverImage` must also have `coverImageAlt`: one plain sentence (roughly 80 to 160 characters) that names the post the cover is for and describes what's in the image, including any key on-image text. The build fails without it (see the schema refine in `src/content.config.ts`). In Sitepins the field is "Cover image alt text".
- Cover images live in `public/images/<slug>.png` at 1672x941.
- `excerpt` is both the post-card summary and the page's meta description: 140 to 155 characters, written for click-through. There is no separate meta description field.
- Every external link in the body or FAQs must also appear in `sources`.
- Every post keeps the full set of fields used in `.sitepins/schema/blog.json` (use `sources: []` if a post has no external links), so Sitepins' schema matches.
- Unpublished posts use `draft: true`. Set `draft: false` and update `pubDate` when publishing.
