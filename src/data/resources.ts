// Seed data migrated from the design mockup's sample categories.
// TODO: replace with the full ~400-resource catalogue from the live site
// (allthefreestock.com has many more subcategories per section — this is a
// starting subset, not the full migration).

export interface ResourceItem {
  name: string;
  url: string;
  note: string;
  tag: string;
}

export interface ResourceSection {
  id: string;
  title: string;
  blurb: string;
  items: ResourceItem[];
}

export const sections: ResourceSection[] = [
  {
    id: 'photos',
    title: 'Free Stock Photos',
    blurb: 'general-purpose libraries',
    items: [
      { name: 'Unsplash', url: 'https://unsplash.com', note: 'Huge, well-curated, own licence.', tag: 'site licence' },
      { name: 'Pexels', url: 'https://www.pexels.com/', note: 'Photos and video in one place.', tag: 'site licence' },
      { name: 'StockSnap', url: 'https://stocksnap.io/', note: 'CC0, added to daily.', tag: 'cc0' },
      { name: 'Burst', url: 'https://burst.shopify.com/', note: 'Commerce-leaning shots by Shopify.', tag: 'site licence' },
      { name: 'Nappy', url: 'https://www.nappy.co/', note: 'Black and brown people, beautifully shot.', tag: 'cc0' },
      { name: 'Life of Pix', url: 'https://www.lifeofpix.com/', note: 'High-resolution, editorial feel.', tag: 'cc0' },
      { name: 'Gratisography', url: 'https://www.gratisography.com/', note: 'Odd, funny, useful.', tag: 'site licence' },
      { name: 'Art Institute of Chicago', url: 'https://www.artic.edu/collection?is_public_domain=1', note: 'Public-domain artworks in full res.', tag: 'public domain' },
    ],
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    blurb: 'vector packs and scene builders',
    items: [
      { name: 'unDraw', url: 'https://undraw.co/illustrations', note: 'Recolourable SVG scenes.', tag: 'mit' },
      { name: 'Humaaans', url: 'https://www.humaaans.com/', note: 'Mix-and-match people.', tag: 'cc by' },
      { name: 'Open Peeps', url: 'https://www.openpeeps.com/', note: 'Hand-drawn character library.', tag: 'cc0' },
      { name: 'Blush', url: 'https://blush.design/', note: 'Composable illustration packs.', tag: 'mixed' },
      { name: 'DrawKit', url: 'https://www.drawkit.io/free', note: 'Clean flat sets.', tag: 'site licence' },
      { name: 'Illlustrations', url: 'https://illlustrations.co/', note: 'Open-source colour set.', tag: 'mit' },
    ],
  },
  {
    id: 'video',
    title: 'Video Footage',
    blurb: 'clips, drone and b-roll',
    items: [
      { name: 'Coverr', url: 'https://www.coverr.co/', note: 'Loopable hero backgrounds.', tag: 'site licence' },
      { name: 'Mixkit', url: 'https://mixkit.co/free-stock-video/', note: 'Video, music and SFX.', tag: 'site licence' },
      { name: 'Pexels Video', url: 'https://videos.pexels.com/', note: 'Broad, searchable, 4K.', tag: 'site licence' },
      { name: 'Videvo', url: 'https://www.videvo.net/', note: 'Mixed free and attribution clips.', tag: 'mixed' },
      { name: 'Mazwai', url: 'https://mazwai.com/', note: 'Cinematic, curated short clips.', tag: 'cc by' },
      { name: 'Life of Vids', url: 'https://www.lifeofvids.com/', note: 'Small, tasteful collection.', tag: 'site licence' },
    ],
  },
  {
    id: 'audio',
    title: 'Audio & Sound',
    blurb: 'music beds and effects',
    items: [
      { name: 'Free Music Archive', url: 'https://freemusicarchive.org/', note: 'Deep CC-licensed catalogue.', tag: 'cc mixed' },
      { name: 'Freesound', url: 'https://www.freesound.org/', note: 'Community sound-effect library.', tag: 'cc mixed' },
      { name: 'Unminus', url: 'https://www.unminus.com/', note: 'A few great tracks, no credit.', tag: 'site licence' },
      { name: 'Purple Planet', url: 'https://www.purple-planet.com/', note: 'Royalty-free beds by mood.', tag: 'attribution' },
      { name: 'Incompetech', url: 'https://incompetech.com/', note: 'The classic Kevin MacLeod library.', tag: 'cc by' },
      { name: 'SoundBible', url: 'https://soundbible.com/', note: 'Quick single effects.', tag: 'mixed' },
    ],
  },
  {
    id: 'icons',
    title: 'Icons & Type',
    blurb: 'systems, not one-offs',
    items: [
      { name: 'Tabler Icons', url: 'https://tablericons.com/', note: '4,000+ consistent strokes.', tag: 'mit' },
      { name: 'Feather', url: 'https://feather.netlify.com/', note: 'Minimal, evergreen set.', tag: 'mit' },
      { name: 'Simple Icons', url: 'https://simpleicons.org/', note: 'Brand marks in SVG.', tag: 'cc0' },
      { name: 'Google Fonts', url: 'https://fonts.google.com', note: 'The default starting point.', tag: 'ofl' },
      { name: 'Fontshare', url: 'https://www.fontshare.com/', note: 'Quality faces, free for commercial use.', tag: 'site licence' },
      { name: 'The League of Moveable Type', url: 'https://www.theleagueofmoveabletype.com', note: 'Open-source originals.', tag: 'ofl' },
    ],
  },
  {
    id: 'mockups',
    title: 'Mockups & Templates',
    blurb: 'put the asset in context',
    items: [
      { name: 'Smartmockups', url: 'https://smartmockups.com/', note: 'Device and apparel scenes.', tag: 'freemium' },
      { name: 'threed.io', url: 'https://threed.io', note: '3D device mockups in-browser.', tag: 'site licence' },
      { name: 'Mockup World', url: 'https://www.mockupworld.co/', note: 'Aggregated PSD mockups.', tag: 'mixed' },
      { name: 'HTML5 UP', url: 'https://html5up.net/', note: 'Responsive site templates.', tag: 'cc by' },
      { name: 'Start Bootstrap', url: 'https://startbootstrap.com/', note: 'Bootstrap starters.', tag: 'mit' },
      { name: 'Cerberus', url: 'https://tedgoas.github.io/Cerberus/', note: 'Battle-tested email patterns.', tag: 'mit' },
    ],
  },
  {
    id: 'colour',
    title: 'Colour & Patterns',
    blurb: 'palettes, gradients, backgrounds',
    items: [
      { name: 'Coolors', url: 'https://coolors.co/app', note: 'Fast palette generator.', tag: 'freemium' },
      { name: 'Open Color', url: 'https://yeun.github.io/open-color/', note: 'Accessible UI colour scheme.', tag: 'mit' },
      { name: 'Hero Patterns', url: 'https://www.heropatterns.com/', note: 'Tileable SVG backgrounds.', tag: 'cc by' },
      { name: 'SVG Backgrounds', url: 'https://www.svgbackgrounds.com', note: 'Configurable background SVGs.', tag: 'mixed' },
      { name: 'Gradient Hunt', url: 'https://gradienthunt.com', note: 'Community gradient library.', tag: 'free' },
      { name: 'Color Thief', url: 'https://lokeshdhakar.com/projects/color-thief/', note: 'Pull palettes out of an image.', tag: 'mit' },
    ],
  },
];

export const totalCount = sections.reduce((sum, s) => sum + s.items.length, 0);
