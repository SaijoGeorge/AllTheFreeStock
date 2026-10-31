// A post is live when it isn't marked as a draft.
export function isPublished(data: { draft?: boolean }): boolean {
  return !data.draft;
}
