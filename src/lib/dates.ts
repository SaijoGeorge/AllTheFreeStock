// Format post dates in Melbourne time so the page shows the same calendar day
// regardless of the build server's timezone (Cloudflare builds run in UTC).
const formatter = new Intl.DateTimeFormat('en-AU', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'Australia/Melbourne',
});

export const formatPostDate = (date: Date): string => formatter.format(date);
