// Minimal inline markdown for frontmatter strings (FAQ answers, TL;DR points).
// Supports [text](url), **bold** and *italic*. Everything else is HTML-escaped.

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function inlineMarkdown(src: string): string {
  return escapeHtml(src)
    .replace(LINK, (_m, text: string, url: string) => {
      if (!/^(https?:\/\/|\/|#|mailto:)/i.test(url)) return text;
      const external = /^https?:\/\//i.test(url) && !/^https?:\/\/(www\.)?allthefreestock\.com/i.test(url);
      const rel = external ? ' rel="noopener"' : '';
      return `<a href="${url}"${rel}>${text}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
}

// Plain text for structured data: keeps link text, drops markdown syntax.
export function stripInlineMarkdown(src: string): string {
  return src.replace(LINK, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1');
}
