// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const isBlogPost = (url) => /^\/blog\/.+/.test(new URL(url).pathname);

// https://astro.build/config
export default defineConfig({
  site: 'https://allthefreestock.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Split into sitemap-blog-0.xml (articles) and sitemap-pages-0.xml (everything else),
      // both listed in sitemap-index.xml. Anything not matched by a chunk lands in the
      // plugin's built-in "pages" chunk, so only the blog chunk needs defining.
      chunks: {
        blog: (item) => (isBlogPost(item.url) ? item : undefined),
      },
    }),
  ]
});