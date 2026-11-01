import rss from '@astrojs/rss';
import { existsSync, statSync } from 'node:fs';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { isPublished } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => isPublished(data))).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'The Journal - AllTheFreeStock',
    description: 'Notes on licensing, sourcing and using free stock photos, video, audio and other assets.',
    site: context.site!,
    customData: '<language>en-au</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      link: `/blog/${post.id}/`,
      pubDate: post.data.pubDate,
      author: post.data.author,
      categories: [post.data.topic],
      ...(post.data.coverImage &&
        existsSync(`public${post.data.coverImage}`) && {
          enclosure: {
            url: new URL(encodeURI(post.data.coverImage), context.site).toString(),
            length: statSync(`public${post.data.coverImage}`).size,
            type: post.data.coverImage.endsWith('.webp') ? 'image/webp' : post.data.coverImage.endsWith('.jpg') ? 'image/jpeg' : 'image/png',
          },
        }),
    })),
  });
}
