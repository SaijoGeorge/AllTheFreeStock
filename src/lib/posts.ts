// A post is live once it isn't a draft and its pubDate has passed at build time.
// Future-dated posts stay hidden until a later build (see .github/workflows/scheduled-publish.yml).
export function isPublished(data: { draft?: boolean; pubDate: Date }): boolean {
  return !data.draft && data.pubDate.valueOf() <= Date.now();
}
