// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const SITE = 'https://allthefreestock.com';
const BLOG_DIR = './src/content/blog';

const isBlogPost = (url) => /^\/blog\/.+/.test(new URL(url).pathname);

// Map each blog slug to its cover image (absolute URL) from the post frontmatter,
// so the blog sitemap can carry <image:image> entries for featured images.
const coverImages = new Map(
  readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .flatMap((f) => {
      const match = readFileSync(`${BLOG_DIR}/${f}`, 'utf8').match(/^coverImage:\s*["']?(.+?)["']?\s*$/m);
      return match ? [[f.replace(/\.mdx?$/, ''), new URL(match[1], SITE).href]] : [];
    })
);

// https://astro.build/config
export default defineConfig({
  site: SITE,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Add the featured image to each blog post entry
      serialize(item) {
        const slug = new URL(item.url).pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];
        const img = slug && coverImages.get(slug);
        return img ? { ...item, img: [{ url: img }] } : item;
      },
      // Split into sitemap-blog-0.xml (articles) and sitemap-pages-0.xml (everything else),
      // both listed in sitemap-index.xml. Anything not matched by a chunk lands in the
      // plugin's built-in "pages" chunk, so only the blog chunk needs defining.
      chunks: {
        blog: (item) => (isBlogPost(item.url) ? item : undefined),
      },
    }),
  ]
});
