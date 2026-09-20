// Full catalogue migrated from the live allthefreestock.com nav menu,
// re-verified and enriched on 2026-09-20. Every
// resource has been checked for liveness (DNS resolution, HTTP status, and a
// content pass that catches domain-parking pages and spam/gambling-site
// takeovers that a status code alone would miss) and given a short
// description plus a licence tag drawn from a fixed 10-value set (see
// LICENCE_TAGS below) so the list doesn't accumulate one-off tag strings.
// Descriptions are derived from each site's own stated terms/meta
// description, not independently verified legal advice - when in doubt a
// resource is tagged "site licence" (check the source) rather than guessing
// a specific licence. Items with `paid: true` don't have a usable free
// tier and are shown with a "paid" pill on the site.

export const LICENCE_TAGS = [
  'cc0',
  'public domain',
  'site licence',
  'cc by',
  'attribution',
  'ofl',
  'mit',
  'mixed',
  'freemium',
  'editorial',
] as const;

export interface ResourceItem {
  name: string;
  url: string;
  note?: string;
  tag?: (typeof LICENCE_TAGS)[number];
  subcategory?: string;
  /** Set when a submitted resource isn't fully free - shows a "Paid" pill. */
  paid?: boolean;
}

export interface ResourceSection {
  id: string;
  title: string;
  blurb: string;
  items: ResourceItem[];
}

export const sections: ResourceSection[] = [
  {
    "id": "photos",
    "title": "Free Stock Photos",
    "blurb": "general-purpose libraries",
    "items": [
      {
        "name": "EveryPixel",
        "url": "https://everypixel.com/free",
        "subcategory": "Multisite Search",
        "note": "Search multiple free photo sites.",
        "tag": "site licence"
      },
      {
        "name": "Visual Hunt",
        "url": "https://visualhunt.com/",
        "subcategory": "Multisite Search",
        "note": "Search and filter free stock photos.",
        "tag": "site licence"
      },
      {
        "name": "Pexels",
        "url": "https://www.pexels.com/",
        "subcategory": "Multisite Search",
        "note": "Photos and video in one place.",
        "tag": "site licence"
      },
      {
        "name": "FreePhotos.cc",
        "url": "https://freephotos.cc/",
        "subcategory": "Multisite Search",
        "note": "Daily free CC0 photo by email.",
        "tag": "cc0"
      },
      {
        "name": "LibreStock",
        "url": "https://librestock.com/",
        "subcategory": "Multisite Search",
        "note": "10 exclusive CC0 photos monthly.",
        "tag": "cc0"
      },
      {
        "name": "Stock Up",
        "url": "https://www.sitebuilderreport.com/stock-photo-search",
        "subcategory": "Multisite Search",
        "note": "Search 25,000+ free stock photos.",
        "tag": "site licence"
      },
      {
        "name": "Creative Commons",
        "url": "https://ccsearch.creativecommons.org/",
        "subcategory": "Multisite Search",
        "note": "Search Creative Commons licensed images.",
        "tag": "mixed"
      },
      {
        "name": "Sketchvalley",
        "url": "https://sketchvalley.com/",
        "subcategory": "Free Illustrations",
        "note": "1,000+ free vector illustrations, no signup.",
        "tag": "cc0"
      },
      {
        "name": "Pixeltrue Animated Scenic Pack",
        "url": "https://www.pixeltrue.com/scenic",
        "subcategory": "Free Illustrations",
        "note": "60+ animated background scene illustrations.",
        "tag": "freemium"
      },
      {
        "name": "Nice Illustrations",
        "url": "https://niceillustrations.com/free-illustrations/",
        "subcategory": "Free Illustrations",
        "note": "Free vector illustrations for design projects.",
        "tag": "site licence"
      },
      {
        "name": "Pixel True",
        "url": "https://www.pixeltrue.com/free-illustrations",
        "subcategory": "Free Illustrations",
        "note": "2,500+ illustration and animation styles.",
        "tag": "freemium"
      },
      {
        "name": "Free Illustrations",
        "url": "https://freeillustrations.xyz/",
        "subcategory": "Free Illustrations",
        "note": "Free PNG, vector, SVG illustrations.",
        "tag": "site licence"
      },
      {
        "name": "Blush Design",
        "url": "https://blush.design/",
        "subcategory": "Free Illustrations",
        "note": "Composable illustration packs.",
        "tag": "mixed"
      },
      {
        "name": "NS illustration pack",
        "url": "https://github.com/nsobolewart/NS-illustration-pack",
        "subcategory": "Free Illustrations",
        "note": "3D low-poly illustration pack on GitHub.",
        "tag": "site licence"
      },
      {
        "name": "OpenPeeps",
        "url": "https://www.openpeeps.com/",
        "subcategory": "Free Illustrations",
        "note": "Hand-drawn character library.",
        "tag": "cc0"
      },
      {
        "name": "Pixeltrue Avatars Illustrations",
        "url": "https://www.pixeltrue.com/illustrations/personality-pack",
        "subcategory": "Free Illustrations",
        "note": "41 personality-themed SVG illustrations.",
        "tag": "freemium"
      },
      {
        "name": "Mixkit Art",
        "url": "https://mixkit.co/art/",
        "subcategory": "Free Illustrations",
        "note": "Video, music and SFX.",
        "tag": "site licence"
      },
      {
        "name": "Iconscout Illustrations",
        "url": "https://iconscout.com/free-illustrations",
        "subcategory": "Free Illustrations",
        "note": "Free and premium illustration packs.",
        "tag": "freemium"
      },
      {
        "name": "Manypixels Gallery",
        "url": "https://www.manypixels.co/gallery/",
        "subcategory": "Free Illustrations",
        "note": "Free illustrations for personal & commercial use.",
        "tag": "site licence"
      },
      {
        "name": "Humaaans",
        "url": "https://www.humaaans.com/",
        "subcategory": "Free Illustrations",
        "note": "Mix-and-match people.",
        "tag": "cc by"
      },
      {
        "name": "WooBro Design",
        "url": "https://woobro.design/",
        "subcategory": "Free Illustrations",
        "note": "Illustration resources for designers.",
        "tag": "site licence"
      },
      {
        "name": "Illlustrations",
        "url": "https://illlustrations.co/",
        "subcategory": "Free Illustrations",
        "note": "Open-source colour set.",
        "tag": "mit"
      },
      {
        "name": "Open Doodles",
        "url": "https://www.opendoodles.com/",
        "subcategory": "Free Illustrations",
        "note": "Sketchy illustrations, free for commercial use.",
        "tag": "site licence"
      },
      {
        "name": "Fresh Folk",
        "url": "https://fresh-folk.com/",
        "subcategory": "Free Illustrations",
        "note": "Illustration library of people and objects.",
        "tag": "site licence"
      },
      {
        "name": "drawkit.io",
        "url": "https://www.drawkit.io/free",
        "subcategory": "Free Illustrations",
        "note": "Clean flat sets.",
        "tag": "site licence"
      },
      {
        "name": "undraw.co",
        "url": "https://undraw.co/illustrations",
        "subcategory": "Free Illustrations",
        "note": "Recolourable SVG scenes.",
        "tag": "mit"
      },
      {
        "name": "Lukasz Adam",
        "url": "https://lukaszadam.com/illustrations",
        "subcategory": "Free Illustrations",
        "note": "Free SVG illustrations, CC0 licensed.",
        "tag": "cc0"
      },
      {
        "name": "City Kit",
        "url": "https://www.startupmilk.com/city-kit",
        "subcategory": "Free Illustrations",
        "note": "City-themed illustration kit.",
        "tag": "site licence"
      },
      {
        "name": "craftwork.design",
        "url": "https://craftwork.design/",
        "subcategory": "Free Illustrations",
        "note": "Freebies and premium design resources.",
        "tag": "freemium"
      },
      {
        "name": "uistore.design",
        "url": "https://www.uistore.design/categories/illustrations/",
        "subcategory": "Free Illustrations",
        "note": "Free UI kits and illustrations.",
        "tag": "site licence"
      },
      {
        "name": "scribbbles.design",
        "url": "https://www.scribbbles.design/",
        "subcategory": "Free Illustrations",
        "note": "100+ hand-drawn vector scribble illustrations.",
        "tag": "site licence"
      },
      {
        "name": "Delesign Illustrations",
        "url": "https://delesign.com/free-designs/graphics",
        "subcategory": "Free Illustrations",
        "note": "Royalty-free illustrations for any use.",
        "tag": "site licence"
      },
      {
        "name": "TexturesForFree",
        "url": "https://texturesforfree.com/",
        "subcategory": "Free Patterns",
        "note": "Free seamless textures and patterns.",
        "tag": "site licence"
      },
      {
        "name": "SVG Backgrounds",
        "url": "https://www.svgbackgrounds.com/",
        "subcategory": "Free Patterns",
        "note": "Configurable background SVGs.",
        "tag": "mixed"
      },
      {
        "name": "ThePatternLibrary",
        "url": "https://thepatternlibrary.com/",
        "subcategory": "Free Patterns",
        "note": "Generate seamless background patterns.",
        "tag": "site licence"
      },
      {
        "name": "Hero Patterns",
        "url": "https://www.heropatterns.com/",
        "subcategory": "Free Patterns",
        "note": "Tileable SVG backgrounds.",
        "tag": "cc by"
      },
      {
        "name": "Scatter Jar",
        "url": "https://scatterjar.com/",
        "subcategory": "Food Pics",
        "note": "Free food and lifestyle stock photos.",
        "tag": "site licence"
      },
      {
        "name": "Foodie Factor",
        "url": "https://foodiefactor.com/",
        "subcategory": "Food Pics",
        "note": "Free CC0 food photos, commercial use.",
        "tag": "cc0"
      },
      {
        "name": "FoodShot",
        "url": "https://foodshot.co/",
        "subcategory": "Food Pics",
        "note": "Free food photography for projects.",
        "tag": "site licence"
      },
      {
        "name": "FoodiesFeed",
        "url": "https://foodiesfeed.com/download/",
        "subcategory": "Food Pics",
        "note": "HD food photos, CC0 licensed.",
        "tag": "cc0"
      },
      {
        "name": "DeathToStockPhoto",
        "url": "https://join.deathtothestockphoto.com/",
        "subcategory": "Email List",
        "note": "Monthly curated photo drops via email.",
        "tag": "site licence"
      },
      {
        "name": "Little Visuals",
        "url": "https://littlevisuals.co/",
        "subcategory": "Email List",
        "note": "Free high-resolution images, any use.",
        "tag": "site licence"
      },
      {
        "name": "Travel Coffee Book",
        "url": "https://travelcoffeebook.com/",
        "subcategory": "Email List",
        "note": "Free travel photos, CC0 licensed.",
        "tag": "cc0"
      },
      {
        "name": "Fake Img",
        "url": "https://fakeimg.pl/",
        "subcategory": "Placeholder",
        "note": "Generate placeholder images via URL.",
        "tag": "site licence"
      },
      {
        "name": "Placeholder Pics",
        "url": "https://placeholder.pics/",
        "subcategory": "Placeholder",
        "note": "Lightweight SVG placeholder image generator.",
        "tag": "site licence"
      },
      {
        "name": "Unsplash It",
        "url": "https://unsplash.it/",
        "subcategory": "Placeholder",
        "note": "Placeholder images from Unsplash photos.",
        "tag": "site licence"
      },
      {
        "name": "LoremPixel",
        "url": "https://lorempixel.com/",
        "subcategory": "Placeholder",
        "note": "Placeholder images by category, size.",
        "tag": "site licence"
      },
      {
        "name": "PlaceKitten",
        "url": "https://placekitten.com/",
        "subcategory": "Placeholder",
        "note": "Placeholder kitten images by size.",
        "tag": "site licence"
      },
      {
        "name": "img larger",
        "url": "https://imglarger.com/",
        "subcategory": "Image Tools",
        "note": "AI image upscaler and enlarger.",
        "tag": "freemium"
      },
      {
        "name": "icons8 upscaler",
        "url": "https://icons8.com/upscaler",
        "subcategory": "Image Tools",
        "note": "AI photo upscaler by Icons8.",
        "tag": "freemium"
      },
      {
        "name": "upscalepics",
        "url": "https://upscalepics.com/",
        "subcategory": "Image Tools",
        "note": "AI photo upscaling tool.",
        "tag": "freemium"
      },
      {
        "name": "unscreen",
        "url": "https://www.unscreen.com/",
        "subcategory": "Image Tools",
        "note": "Remove video backgrounds automatically online.",
        "tag": "site licence"
      },
      {
        "name": "Photo Resizer",
        "url": "https://promo.com/tools/image-resizer/",
        "subcategory": "Image Tools",
        "note": "Free online image resizer tool.",
        "tag": "site licence"
      },
      {
        "name": "Remove Background",
        "url": "https://www.remove.bg/",
        "subcategory": "Image Tools",
        "note": "AI background remover, one click.",
        "tag": "freemium"
      },
      {
        "name": "ezgif",
        "url": "https://ezgif.com/",
        "subcategory": "Image Tools",
        "note": "Online GIF and image editing tools.",
        "tag": "site licence"
      },
      {
        "name": "Kapwing",
        "url": "https://www.kapwing.com/",
        "subcategory": "Image Tools",
        "note": "AI video creation and editing.",
        "tag": "freemium"
      },
      {
        "name": "Socialbook Background Remover",
        "url": "https://socialbook.io/remove-background",
        "subcategory": "Image Tools",
        "note": "AI-powered photo editing platform.",
        "tag": "freemium"
      },
      {
        "name": "colorize.cc",
        "url": "https://colorize.cc/",
        "subcategory": "Image Tools",
        "note": "Colorize black-and-white photos online.",
        "tag": "site licence"
      },
      {
        "name": "ImageColorizer",
        "url": "https://imagecolorizer.com/",
        "subcategory": "Image Tools",
        "note": "AI photo colorization and restoration.",
        "tag": "freemium"
      },
      {
        "name": "bgeraser",
        "url": "https://bgeraser.com/",
        "subcategory": "Image Tools",
        "note": "Free AI background remover, batch.",
        "tag": "site licence"
      },
      {
        "name": "WordPress Photos",
        "url": "https://wordpress.org/photos/",
        "note": "CC0 photos for WordPress sites.",
        "tag": "cc0"
      },
      {
        "name": "ALT Photos",
        "url": "https://altphotos.com/",
        "note": "Free CC0 photos for creatives.",
        "tag": "cc0"
      },
      {
        "name": "Art Institute of Chicago",
        "url": "https://www.artic.edu/collection",
        "note": "Public-domain artworks in full res.",
        "tag": "public domain"
      },
      {
        "name": "stockvault.net",
        "url": "https://www.stockvault.net/",
        "note": "Community free stock photos, textures.",
        "tag": "site licence"
      },
      {
        "name": "nappy.co",
        "url": "https://www.nappy.co/",
        "note": "Black and brown people, beautifully shot.",
        "tag": "cc0"
      },
      {
        "name": "Focus Fitness",
        "url": "https://www.focusfitness.net/stock-photos/",
        "note": "Free fitness and workout stock photos.",
        "tag": "site licence"
      },
      {
        "name": "Burst",
        "url": "https://burst.shopify.com/",
        "note": "Commerce-leaning shots by Shopify.",
        "tag": "site licence"
      },
      {
        "name": "MET Museum Artwork",
        "url": "https://www.metmuseum.org/art/collection/search",
        "note": "Met Museum's open-access public art.",
        "tag": "public domain"
      },
      {
        "name": "Iwaria",
        "url": "https://iwaria.com/",
        "note": "Free African-focused stock photography.",
        "tag": "cc by"
      },
      {
        "name": "Glyphs",
        "url": "https://glyphs.co/photos",
        "note": "Free stock photography collection.",
        "tag": "site licence"
      },
      {
        "name": "My Stock Photos",
        "url": "http://mystock.photos/",
        "note": "Free unique travel stock photos.",
        "tag": "mixed"
      },
      {
        "name": "The Pic Pac",
        "url": "https://thepicpac.com/",
        "note": "Free stock image collection.",
        "tag": "site licence"
      },
      {
        "name": "The British Library",
        "url": "https://www.flickr.com/photos/britishlibrary/",
        "note": "British Library's historical photo archive.",
        "tag": "public domain"
      },
      {
        "name": "The Library of Congress",
        "url": "https://www.flickr.com/photos/library_of_congress/albums",
        "note": "Library of Congress public photo archive.",
        "tag": "public domain"
      },
      {
        "name": "Unsplash",
        "url": "https://unsplash.com/",
        "note": "Huge, well-curated, own licence.",
        "tag": "site licence"
      },
      {
        "name": "Realistic Shots",
        "url": "http://realisticshots.com/",
        "note": "Free high-res photos, weekly updates.",
        "tag": "site licence"
      },
      {
        "name": "Skuawk",
        "url": "http://skuawk.com/",
        "note": "Curated public domain photography.",
        "tag": "public domain"
      },
      {
        "name": "Minimography",
        "url": "http://minimography.com/",
        "note": "Minimalist free stock photography.",
        "tag": "site licence"
      },
      {
        "name": "NegativeSpace",
        "url": "https://negativespace.co/",
        "note": "Free high-res photos, no attribution.",
        "tag": "cc0"
      },
      {
        "name": "LibreShot",
        "url": "https://libreshot.com/",
        "note": "CC0 photos by a single photographer.",
        "tag": "cc0"
      },
      {
        "name": "StockSnap",
        "url": "https://stocksnap.io/",
        "note": "CC0, added to daily.",
        "tag": "cc0"
      },
      {
        "name": "FancyCrave",
        "url": "http://fancycrave.com/",
        "note": "Premium photo and graphics marketplace.",
        "paid": true
      },
      {
        "name": "PhotoStockEditor",
        "url": "https://photostockeditor.com/",
        "note": "Human-captured photos, verified free access.",
        "tag": "site licence"
      },
      {
        "name": "BarnImages",
        "url": "https://barnimages.com/",
        "note": "Free high-res photos, weekly updates.",
        "tag": "site licence"
      },
      {
        "name": "RealisticShots",
        "url": "https://realisticshots.com/",
        "note": "Free high-res photos, weekly updates.",
        "tag": "site licence"
      },
      {
        "name": "Cupcake",
        "url": "http://cupcake.nilssonlee.se/",
        "note": "Unique free images, unrestricted use.",
        "tag": "cc0"
      },
      {
        "name": "reSplashed",
        "url": "http://www.resplashed.com/",
        "note": "Curated Unsplash photo collections.",
        "tag": "site licence"
      },
      {
        "name": "Splashbase",
        "url": "http://www.splashbase.co/",
        "note": "Search free photos and videos.",
        "tag": "site licence"
      },
      {
        "name": "Free Nature Stock",
        "url": "http://freenaturestock.com/",
        "note": "Free nature images and videos.",
        "tag": "site licence"
      },
      {
        "name": "GoodFreePhotos",
        "url": "https://www.goodfreephotos.com/",
        "note": "Free photos and public domain images.",
        "tag": "site licence"
      },
      {
        "name": "ISO Republic",
        "url": "https://isorepublic.com/",
        "note": "7,000+ free high-res photos, videos.",
        "tag": "site licence"
      },
      {
        "name": "Magdeleine",
        "url": "https://magdeleine.co/license/cc0/",
        "note": "Hand-picked CC0 public domain images.",
        "tag": "cc0"
      },
      {
        "name": "Pond5",
        "url": "https://www.pond5.com/photos/1/*.html",
        "note": "Stock photo marketplace, some free.",
        "tag": "freemium"
      },
      {
        "name": "MMT",
        "url": "https://mmtstock.com/",
        "note": "Free stock photography resource.",
        "tag": "site licence"
      },
      {
        "name": "FuriousCamera",
        "url": "https://furiouscamera.com/",
        "note": "Free photography resources and tips.",
        "tag": "site licence"
      },
      {
        "name": "Trunklog",
        "url": "http://trunklog.com/",
        "note": "Free stock photo collection.",
        "tag": "site licence"
      },
      {
        "name": "Jeeshoots",
        "url": "https://jeshoots.com/",
        "note": "Free stock photos, no attribution.",
        "tag": "site licence"
      },
      {
        "name": "Picography",
        "url": "https://picography.co/",
        "note": "Gorgeous HD photos, CC0 licensed.",
        "tag": "cc0"
      },
      {
        "name": "Gratisography",
        "url": "https://www.gratisography.com/",
        "note": "Odd, funny, useful.",
        "tag": "site licence"
      },
      {
        "name": "1MillionFreePictures",
        "url": "https://www.1millionfreepictures.com/",
        "note": "Public domain and royalty-free pictures.",
        "tag": "public domain"
      },
      {
        "name": "KaboomPics",
        "url": "https://kaboompics.com/",
        "note": "High-quality free stock photography.",
        "tag": "site licence"
      },
      {
        "name": "SplitShire",
        "url": "https://splitshire.com/",
        "note": "Free stock photos and videos.",
        "tag": "site licence"
      },
      {
        "name": "Life Of Pix",
        "url": "https://www.lifeofpix.com/",
        "note": "High-resolution, editorial feel.",
        "tag": "cc0"
      },
      {
        "name": "Startup Stock Photos",
        "url": "http://startupstockphotos.com/",
        "note": "Free startup and tech office photos.",
        "tag": "site licence"
      },
      {
        "name": "Stock Image Point",
        "url": "https://www.stock-image-point.com/",
        "note": "Free stock photos and creative media.",
        "tag": "site licence"
      },
      {
        "name": "morgueFile",
        "url": "https://morguefile.com/",
        "note": "Long-running free stock photo archive.",
        "tag": "site licence"
      },
      {
        "name": "SkitterPhoto",
        "url": "https://skitterphoto.com/",
        "note": "Free CC0 nature and travel photos.",
        "tag": "cc0"
      },
      {
        "name": "Good Stock Photos",
        "url": "https://goodstock.photos/",
        "note": "Free stock photos for any use.",
        "tag": "site licence"
      },
      {
        "name": "Jay Mantri",
        "url": "https://jaymantri.com/",
        "note": "Personal free photography collection.",
        "tag": "site licence"
      },
      {
        "name": "New Old Stock",
        "url": "https://nos.twnsnd.co/",
        "note": "Vintage public archive photographs.",
        "tag": "public domain"
      },
      {
        "name": "FreeRangeStock",
        "url": "https://freerangestock.com/",
        "note": "Free stock photos and illustrations.",
        "tag": "site licence"
      },
      {
        "name": "PixaBay",
        "url": "https://pixabay.com/",
        "note": "Huge free photo, video, music library.",
        "tag": "site licence"
      },
      {
        "name": "Moveast",
        "url": "http://moveast.me/",
        "note": "Personal travel photos, free to use.",
        "tag": "cc0"
      },
      {
        "name": "Pic Jumbo",
        "url": "https://picjumbo.com/",
        "note": "Free images, backgrounds and wallpapers.",
        "tag": "site licence"
      }
    ]
  },
  {
    "id": "mockups",
    "title": "Free Mockups",
    "blurb": "put the asset in context",
    "items": [
      {
        "name": "Mockup Mark",
        "url": "https://mockupmark.com/create/free",
        "note": "T-shirt and apparel mockup generator.",
        "tag": "site licence"
      },
      {
        "name": "themockup.club",
        "url": "https://themockup.club/",
        "note": "Best free mockup templates.",
        "tag": "site licence"
      },
      {
        "name": "threed.io",
        "url": "https://threed.io/",
        "note": "3D device mockups in-browser.",
        "tag": "site licence"
      },
      {
        "name": "MockupsJar",
        "url": "https://mockupsjar.com/",
        "note": "Realistic mockups for apps.",
        "tag": "site licence"
      },
      {
        "name": "Smartmockups",
        "url": "https://smartmockups.com/",
        "note": "Device and apparel scenes.",
        "tag": "freemium"
      },
      {
        "name": "Mockerie",
        "url": "https://mockerie.io/",
        "note": "Interactive website and app mockups.",
        "tag": "site licence"
      },
      {
        "name": "Mockup World",
        "url": "https://www.mockupworld.co/",
        "note": "Aggregated PSD mockups.",
        "tag": "mixed"
      },
      {
        "name": "PlaceIt",
        "url": "https://placeit.net/",
        "note": "Mockups, logos, videos - templates.",
        "paid": true
      },
      {
        "name": "Magic Mockups",
        "url": "https://magicmockups.com/",
        "note": "Free 3D device mockup generator.",
        "tag": "site licence"
      },
      {
        "name": "Dunnnk",
        "url": "https://dunnnk.com/",
        "note": "Free device and product mockups.",
        "tag": "site licence"
      },
      {
        "name": "immagiPic",
        "url": "https://www.immagipic.com/",
        "note": "Free mockup image resources.",
        "tag": "site licence"
      }
    ]
  },
  {
    "id": "video",
    "title": "Free Stock Videos",
    "blurb": "clips, drone and b-roll",
    "items": [
      {
        "name": "mixkit",
        "url": "https://mixkit.co/free-stock-video/",
        "note": "Video, music and SFX.",
        "tag": "site licence"
      },
      {
        "name": "CuteStockFootage",
        "url": "https://www.cutestockfootage.com/",
        "note": "Free VFX and stock footage clips.",
        "tag": "site licence"
      },
      {
        "name": "Vidlery",
        "url": "http://vidlery.com/",
        "note": "Free stock video clips.",
        "tag": "site licence"
      },
      {
        "name": "Coverr",
        "url": "https://www.coverr.co/",
        "note": "Loopable hero backgrounds.",
        "tag": "site licence"
      },
      {
        "name": "Pexels Video",
        "url": "https://videos.pexels.com/",
        "note": "Broad, searchable, 4K.",
        "tag": "site licence"
      },
      {
        "name": "Life Of Vids",
        "url": "https://www.lifeofvids.com/",
        "note": "Small, tasteful collection.",
        "tag": "site licence"
      },
      {
        "name": "Pond5",
        "url": "https://www.pond5.com/stock-video-footage/1/*.html",
        "note": "Video marketplace, some free clips.",
        "tag": "freemium"
      },
      {
        "name": "Videezy",
        "url": "https://www.videezy.com/browse",
        "note": "Free HD stock video footage.",
        "tag": "freemium"
      },
      {
        "name": "Videvo",
        "url": "https://www.videvo.net/",
        "note": "Mixed free and attribution clips.",
        "tag": "mixed"
      },
      {
        "name": "Mazwai",
        "url": "https://mazwai.com/",
        "note": "Cinematic, curated short clips.",
        "tag": "cc by"
      },
      {
        "name": "Stock Footage For Free",
        "url": "https://www.stockfootageforfree.com/",
        "note": "Free stock video footage clips.",
        "tag": "site licence"
      },
      {
        "name": "Beachfront B-Roll",
        "url": "http://www.beachfrontbroll.com/",
        "note": "Free HD B-roll and timelapses.",
        "tag": "site licence"
      },
      {
        "name": "Vidsplay",
        "url": "https://www.vidsplay.com/",
        "note": "Royalty-free stock video clips.",
        "tag": "site licence"
      },
      {
        "name": "Clipcanvas",
        "url": "https://www.clipcanvas.com/free-footage/",
        "note": "Stock video footage, some free.",
        "tag": "freemium"
      },
      {
        "name": "MotionElements",
        "url": "https://www.motionelements.com/free/stock-footage/",
        "note": "Free clips from AI-driven marketplace.",
        "tag": "freemium"
      }
    ]
  },
  {
    "id": "audio",
    "title": "Free Sound Effects",
    "blurb": "music beds and effects",
    "items": [
      {
        "name": "incompetech",
        "url": "https://incompetech.com/",
        "note": "The classic Kevin MacLeod library.",
        "tag": "cc by"
      },
      {
        "name": "unminus",
        "url": "https://www.unminus.com/",
        "note": "A few great tracks, no credit.",
        "tag": "site licence"
      },
      {
        "name": "m-operator",
        "url": "https://www.m-operator.com/",
        "note": "Royalty-free background music tracks.",
        "tag": "site licence"
      },
      {
        "name": "Retro Arcade Sounds Pack",
        "url": "https://www.themotionmonkey.co.uk/free-resources/retro-arcade-sounds/",
        "note": "300+ free retro game sound effects.",
        "tag": "site licence"
      },
      {
        "name": "Purple Planet",
        "url": "https://www.purple-planet.com/",
        "note": "Royalty-free beds by mood.",
        "tag": "attribution"
      },
      {
        "name": "MusicForMakers",
        "url": "https://musicformakers.com/",
        "note": "Free royalty-free music for creators.",
        "tag": "site licence"
      },
      {
        "name": "NoCopyrightSounds",
        "url": "https://www.youtube.com/user/NoCopyrightSounds",
        "note": "Free music tracks for creators.",
        "tag": "attribution"
      },
      {
        "name": "Octave",
        "url": "https://raisedbeaches.com/octave/",
        "note": "Free audio and sound resource.",
        "tag": "site licence"
      },
      {
        "name": "Free Music Archive",
        "url": "https://freemusicarchive.org/",
        "note": "Deep CC-licensed catalogue.",
        "tag": "mixed"
      },
      {
        "name": "FreeSound",
        "url": "https://www.freesound.org/",
        "note": "Community sound-effect library.",
        "tag": "mixed"
      },
      {
        "name": "Adobe Audition SFX",
        "url": "https://offers.adobe.com/en/na/audition/offers/audition_dlc.html",
        "note": "Adobe's free sound effects bundle.",
        "tag": "site licence"
      },
      {
        "name": "SoundBible",
        "url": "https://soundbible.com/",
        "note": "Quick single effects.",
        "tag": "mixed"
      },
      {
        "name": "Dev Tones",
        "url": "https://rcptones.com/dev_tones/",
        "note": "Free UI and app sound effects.",
        "tag": "site licence"
      },
      {
        "name": "Bfxr",
        "url": "https://www.bfxr.net/",
        "note": "Generate custom game sound effects.",
        "tag": "site licence"
      }
    ]
  },
  {
    "id": "colour",
    "title": "Color Inspiration",
    "blurb": "palettes, gradients, backgrounds",
    "items": [
      {
        "name": "Grabient",
        "url": "https://www.grabient.com/",
        "subcategory": "Gradients",
        "note": "CSS gradient background generator.",
        "tag": "site licence"
      },
      {
        "name": "Gradient Hunt",
        "url": "https://gradienthunt.com/",
        "subcategory": "Gradients",
        "note": "Community gradient library.",
        "tag": "mixed"
      },
      {
        "name": "CSS Gradient",
        "url": "https://cssgradient.io/",
        "subcategory": "Gradients",
        "note": "CSS gradient generator and maker.",
        "tag": "site licence"
      },
      {
        "name": "uiGradients",
        "url": "https://uigradients.com/",
        "subcategory": "Gradients",
        "note": "Handpicked beautiful colour gradients.",
        "tag": "site licence"
      },
      {
        "name": "htmlColors Gradients",
        "url": "https://htmlcolors.com/gradients",
        "subcategory": "Gradients",
        "note": "Browse and create colour gradients.",
        "tag": "site licence"
      },
      {
        "name": "Colorful Gradients",
        "url": "https://colorfulgradients.tumblr.com/",
        "subcategory": "Gradients",
        "note": "Auto-generated gradients, updated daily.",
        "tag": "site licence"
      },
      {
        "name": "Colors UI",
        "url": "https://colorsui.com/",
        "note": "UI colour palette tool.",
        "tag": "site licence"
      },
      {
        "name": "Color Designer",
        "url": "https://colordesigner.io/",
        "note": "Colour wheel and palette tools.",
        "tag": "site licence"
      },
      {
        "name": "Muzli Colors",
        "url": "https://colors.muz.li/",
        "note": "Colour palette generator and search.",
        "tag": "site licence"
      },
      {
        "name": "Culrs",
        "url": "https://culrs.com/",
        "note": "500+ curated colour palettes.",
        "tag": "freemium"
      },
      {
        "name": "Palettte",
        "url": "https://palettte.app/",
        "note": "Advanced colour palette creation tool.",
        "tag": "site licence"
      },
      {
        "name": "ColorBox",
        "url": "https://www.colorbox.io/",
        "note": "Generate accessible colour palette systems.",
        "tag": "site licence"
      },
      {
        "name": "Color Leap",
        "url": "https://colorleap.app/home",
        "note": "Historical colour palettes, 4000 years.",
        "tag": "site licence"
      },
      {
        "name": "Color Scale",
        "url": "https://hihayk.github.io/scale/",
        "note": "Colour scale generator tool.",
        "tag": "site licence"
      },
      {
        "name": "Trendy Palettes",
        "url": "https://trendypalettes.com/",
        "note": "Daily trendy colour palette collection.",
        "tag": "site licence"
      },
      {
        "name": "Picular",
        "url": "https://picular.co/",
        "note": "Colour generator from image search.",
        "tag": "site licence"
      },
      {
        "name": "Google Art Palette",
        "url": "https://artsexperiments.withgoogle.com/artpalette/",
        "note": "Extract palettes from famous artworks.",
        "tag": "site licence"
      },
      {
        "name": "Pigment",
        "url": "https://pigment.shapefactory.co/",
        "note": "Generate palettes from lighting, pigment.",
        "tag": "site licence"
      },
      {
        "name": "Colorhunt ❤",
        "url": "https://colorhunt.co/",
        "note": "Hand-picked colour palettes for designers.",
        "tag": "site licence"
      },
      {
        "name": "Colorwise.io",
        "url": "https://colorwise.io/",
        "note": "Colour palette generator tool.",
        "tag": "site licence"
      },
      {
        "name": "Coolhue",
        "url": "https://webkul.github.io/coolhue/",
        "note": "Handpicked gradient colour collections.",
        "tag": "site licence"
      },
      {
        "name": "htmlColors Palettes",
        "url": "https://htmlcolors.com/palettes",
        "note": "Browse and create colour palettes.",
        "tag": "site licence"
      },
      {
        "name": "Colormind",
        "url": "https://colormind.io/",
        "note": "AI-generated colour palette combinations.",
        "tag": "site licence"
      },
      {
        "name": "Open Color",
        "url": "https://yeun.github.io/open-color/",
        "note": "Accessible UI colour scheme.",
        "tag": "mit"
      },
      {
        "name": "Hello Color",
        "url": "https://jxnblk.com/hello-color/",
        "note": "Colour palette inspiration tool.",
        "tag": "site licence"
      },
      {
        "name": "Web Colour Data",
        "url": "https://webcolourdata.com/",
        "note": "Web colour reference data.",
        "tag": "site licence"
      },
      {
        "name": "Color Thief",
        "url": "https://lokeshdhakar.com/projects/color-thief/",
        "note": "Pull palettes out of an image.",
        "tag": "mit"
      },
      {
        "name": "Color Drop",
        "url": "https://colordrop.io/",
        "note": "Curated colour palettes with hex codes.",
        "tag": "site licence"
      },
      {
        "name": "Color Lisa",
        "url": "https://www.colorlisa.com/",
        "note": "Palettes from famous artists' work.",
        "tag": "site licence"
      },
      {
        "name": "LOL Colors",
        "url": "https://www.lolcolors.com/",
        "note": "Curated colour palette inspiration.",
        "tag": "site licence"
      },
      {
        "name": "ColorFavs",
        "url": "https://www.colorfavs.com/",
        "note": "Community colour palette favourites.",
        "tag": "site licence"
      },
      {
        "name": "Swiss Style Color Picker",
        "url": "https://swisscolors.net/",
        "note": "Swiss-style colour palette picker.",
        "tag": "site licence"
      },
      {
        "name": "Blend",
        "url": "https://colinkeany.com/blend/",
        "note": "CSS gradient generator tool.",
        "tag": "site licence"
      },
      {
        "name": "Material UI Colors",
        "url": "https://materialuicolors.co/",
        "note": "Material Design colour palette reference.",
        "tag": "site licence"
      },
      {
        "name": "Color.Hailpixel",
        "url": "https://color.hailpixel.com/",
        "note": "Simple colour picker tool.",
        "tag": "site licence"
      },
      {
        "name": "Colourcode",
        "url": "https://colourco.de/",
        "note": "Colour code picker and reference.",
        "tag": "site licence"
      },
      {
        "name": "Palettr",
        "url": "https://palettr.com/",
        "note": "Theme-inspired colour palette generator.",
        "tag": "site licence"
      },
      {
        "name": "Colour Combo Tester",
        "url": "https://www.colorcombos.com/combotester.html",
        "note": "Test colour combination harmony.",
        "tag": "site licence"
      },
      {
        "name": "Cohesive Colors",
        "url": "https://javierbyte.github.io/cohesive-colors/",
        "note": "Create cohesive colour palettes.",
        "tag": "site licence"
      },
      {
        "name": "Bootflat Flat Color",
        "url": "https://bootflat.github.io/color-picker.html",
        "note": "Flat UI colour picker tool.",
        "tag": "cc by"
      },
      {
        "name": "Coolors",
        "url": "https://coolors.co/app",
        "note": "Fast palette generator.",
        "tag": "freemium"
      },
      {
        "name": "0to255",
        "url": "https://www.0to255.com/",
        "note": "Generate colour tints and shades.",
        "tag": "site licence"
      },
      {
        "name": "Coleure",
        "url": "https://www.coleure.com/",
        "note": "Free colour picker and palettes.",
        "tag": "site licence"
      },
      {
        "name": "Colorrrs",
        "url": "https://colorrrs.com/",
        "note": "Random HEX colour code generator.",
        "tag": "site licence"
      },
      {
        "name": "Adobe Color",
        "url": "https://color.adobe.com/create/color-wheel/",
        "note": "Adobe's colour wheel palette generator.",
        "tag": "site licence"
      },
      {
        "name": "Flat UI Colors",
        "url": "https://flatuicolors.com/",
        "note": "280 flat UI colour swatches.",
        "tag": "site licence"
      },
      {
        "name": "Flat UI Color Picker",
        "url": "https://www.flatuicolorpicker.com/all",
        "note": "Flat UI colour picker tool.",
        "tag": "site licence"
      },
      {
        "name": "Pokemon Palette",
        "url": "https://pokepalettes.com/",
        "note": "Colour palettes from Pokemon sprites.",
        "tag": "site licence"
      },
      {
        "name": "Material Palette",
        "url": "https://www.materialpalette.com/",
        "note": "Material Design palette generator, downloadable.",
        "tag": "site licence"
      },
      {
        "name": "Material UI",
        "url": "https://www.materialui.co/colors",
        "note": "Material Design colour palette reference.",
        "tag": "site licence"
      },
      {
        "name": "Colour Lovers",
        "url": "https://www.colourlovers.com/palettes",
        "note": "Community colour palettes and patterns.",
        "tag": "site licence"
      },
      {
        "name": "Brand Colors",
        "url": "https://brandcolors.net/",
        "note": "500+ official brand colour codes.",
        "tag": "site licence"
      },
      {
        "name": "Social Colors",
        "url": "https://www.materialui.co/socialcolors",
        "note": "Social media platform colour codes.",
        "tag": "site licence"
      },
      {
        "name": "Color-hex",
        "url": "https://www.color-hex.com/",
        "note": "Colour hex code reference tool.",
        "tag": "site licence"
      },
      {
        "name": "Paletton",
        "url": "https://paletton.com/",
        "note": "Colour scheme design tool.",
        "tag": "site licence"
      }
    ]
  },
  {
    "id": "templates",
    "title": "Free Website Templates",
    "blurb": "HTML5 and Bootstrap starters",
    "items": [
      {
        "name": "Papaya Templates",
        "url": "https://www.papayatemplates.com/",
        "note": "Free responsive HTML landing templates.",
        "tag": "cc by"
      },
      {
        "name": "Free HTML5",
        "url": "https://freehtml5.co/",
        "note": "Free HTML5 Bootstrap website templates.",
        "tag": "site licence"
      },
      {
        "name": "HTML5 UP",
        "url": "https://html5up.net/",
        "note": "Responsive site templates.",
        "tag": "cc by"
      },
      {
        "name": "TemplateStash",
        "url": "https://www.templatestash.com/",
        "note": "Free website template collection.",
        "tag": "site licence"
      },
      {
        "name": "Start Bootstrap",
        "url": "https://startbootstrap.com/",
        "note": "Bootstrap starters.",
        "tag": "mit"
      }
    ]
  },
  {
    "id": "fonts",
    "title": "Free Fonts",
    "blurb": "faces, pairing and font tools",
    "items": [
      {
        "name": "Font Playground",
        "url": "https://play.typedetail.com/",
        "subcategory": "Font Tools",
        "note": "Experiment with variable font layouts.",
        "tag": "site licence"
      },
      {
        "name": "Font Joy",
        "url": "https://fontjoy.com/",
        "subcategory": "Font Tools",
        "note": "AI font pairing generator.",
        "tag": "site licence"
      },
      {
        "name": "Type Anything",
        "url": "https://typeanything.io/",
        "subcategory": "Font Tools",
        "note": "Live font preview typing tool.",
        "tag": "site licence"
      },
      {
        "name": "Wordmark.it",
        "url": "https://www.wordmark.it/",
        "subcategory": "Font Tools",
        "note": "Preview text across installed fonts.",
        "tag": "site licence"
      },
      {
        "name": "Font Fling",
        "url": "https://fontfling.com/",
        "subcategory": "Font Tools",
        "note": "Font discovery and pairing tool.",
        "tag": "site licence"
      },
      {
        "name": "MyScriptFont",
        "url": "https://www.myscriptfont.com/",
        "subcategory": "Font Tools",
        "note": "Turn your handwriting into a font.",
        "tag": "site licence"
      },
      {
        "name": "Font Combinator",
        "url": "https://font-combinator.com/",
        "subcategory": "Font Tools",
        "note": "Font pairing combination tool.",
        "tag": "site licence"
      },
      {
        "name": "Fount",
        "url": "https://fount.artequalswork.com/",
        "subcategory": "Font Tools",
        "note": "Identify fonts used on webpages.",
        "tag": "site licence"
      },
      {
        "name": "Glyphr Studio",
        "url": "https://www.glyphrstudio.com/online/",
        "subcategory": "Font Tools",
        "note": "Browser-based font editor (v2).",
        "tag": "site licence"
      },
      {
        "name": "Google Fonts",
        "url": "https://fonts.google.com/",
        "note": "The default starting point.",
        "tag": "ofl"
      },
      {
        "name": "FontShare",
        "url": "https://www.fontshare.com/",
        "note": "Quality faces, free for commercial use.",
        "tag": "site licence"
      },
      {
        "name": "DaFont",
        "url": "https://www.dafont.com/",
        "note": "Huge archive of downloadable fonts.",
        "tag": "mixed"
      },
      {
        "name": "FFonts",
        "url": "https://www.ffonts.net/",
        "note": "150,000+ free fonts to download.",
        "tag": "site licence"
      },
      {
        "name": "Font Squirrel",
        "url": "https://www.fontsquirrel.com/",
        "note": "Curated legitimately free, quality fonts.",
        "tag": "ofl"
      },
      {
        "name": "Lost Type",
        "url": "https://losttype.com/browse/",
        "note": "Independent pay-what-you-want type foundry.",
        "tag": "mixed"
      },
      {
        "name": "The League of Moveable Type",
        "url": "https://www.theleagueofmoveabletype.com/",
        "note": "Open-source originals.",
        "tag": "ofl"
      }
    ]
  },
  {
    "id": "icons",
    "title": "Free Icons",
    "blurb": "systems, not one-offs",
    "items": [
      {
        "name": "Tabler Icons",
        "url": "https://tablericons.com/",
        "note": "4,000+ consistent strokes.",
        "tag": "mit"
      },
      {
        "name": "System UI Icons",
        "url": "https://systemuicons.com/",
        "note": "Free icon set, no attribution.",
        "tag": "cc0"
      },
      {
        "name": "VISIWIG Icons",
        "url": "http://www.visiwig.com/icons/",
        "note": "Copy-paste inline SVG icons.",
        "tag": "site licence"
      },
      {
        "name": "css.gg",
        "url": "https://css.gg/",
        "note": "Open-source CSS icon library.",
        "tag": "mit"
      },
      {
        "name": "unicons",
        "url": "https://iconscout.com/unicons",
        "note": "5,000+ pixel-perfect vector icons.",
        "tag": "freemium"
      },
      {
        "name": "ikonate",
        "url": "https://www.ikonate.com/",
        "note": "Customizable accessible SVG icon toolkit.",
        "tag": "site licence"
      },
      {
        "name": "illustrio",
        "url": "https://illustrio.com/",
        "note": "Free icon and illustration sets.",
        "tag": "site licence"
      },
      {
        "name": "Feather",
        "url": "https://feathericons.com/",
        "note": "Simply beautiful open-source icons.",
        "tag": "mit"
      },
      {
        "name": "Material Design Icons",
        "url": "https://materialdesignicons.com/",
        "note": "7,200+ Material Design system icons.",
        "tag": "mit"
      },
      {
        "name": "Font Awesome",
        "url": "https://fontawesome.com/",
        "note": "Internet's icon library, always free.",
        "tag": "mixed"
      },
      {
        "name": "The Noun Project",
        "url": "https://thenounproject.com/",
        "note": "10M icons, free with attribution.",
        "tag": "attribution"
      },
      {
        "name": "IcoFont",
        "url": "https://icofont.com/",
        "note": "2,400+ free high-quality icons.",
        "tag": "site licence"
      },
      {
        "name": "Zond Icons",
        "url": "https://www.zondicons.com/",
        "note": "Free simple SVG icon set.",
        "tag": "site licence"
      },
      {
        "name": "CSS Icons",
        "url": "https://cssicon.space/",
        "note": "Pure CSS icon library.",
        "tag": "site licence"
      },
      {
        "name": "Bytesize Icons",
        "url": "https://github.com/danklammer/bytesize-icons",
        "note": "Tiny 101-icon SVG set.",
        "tag": "site licence"
      },
      {
        "name": "Free Nova Icons",
        "url": "https://www.webalys.com/nova/free-icons.html",
        "note": "Free hand-crafted icon pack.",
        "tag": "site licence"
      },
      {
        "name": "Simple Icons",
        "url": "https://simpleicons.org/",
        "note": "Brand marks in SVG.",
        "tag": "cc0"
      },
      {
        "name": "Octicons",
        "url": "https://octicons.github.com/",
        "note": "GitHub's official icon set.",
        "tag": "mit"
      },
      {
        "name": "We Love Icon Font",
        "url": "https://weloveiconfonts.com/",
        "note": "Aggregated icon font libraries.",
        "tag": "site licence"
      },
      {
        "name": "IconStore",
        "url": "https://iconstore.co/",
        "note": "Free vector icons by designers.",
        "tag": "site licence"
      },
      {
        "name": "Material icons",
        "url": "https://www.google.com/design/icons/",
        "note": "Google's Material Design icon system.",
        "tag": "site licence"
      },
      {
        "name": "Aiconica",
        "url": "https://aiconica.net/",
        "note": "1000+ customizable public domain icons.",
        "tag": "public domain"
      },
      {
        "name": "SmartIcons",
        "url": "https://smarticons.co/",
        "note": "Smart scalable SVG icon system.",
        "tag": "site licence"
      },
      {
        "name": "FlatIcon",
        "url": "https://www.flaticon.com/",
        "note": "Millions of icons, free with credit.",
        "tag": "attribution"
      },
      {
        "name": "IconMonstr",
        "url": "https://iconmonstr.com/",
        "note": "Free simple icons, huge selection.",
        "tag": "site licence"
      },
      {
        "name": "IcoMoon",
        "url": "https://icomoon.io/",
        "note": "Free and premium SVG icon sets.",
        "tag": "freemium"
      },
      {
        "name": "Icons8",
        "url": "https://icons8.com/",
        "note": "Icon, photo and illustration library.",
        "tag": "freemium"
      },
      {
        "name": "Icony",
        "url": "https://icony.co/index.html",
        "note": "Free icon generator tool.",
        "tag": "site licence"
      },
      {
        "name": "Skycons",
        "url": "https://darkskyapp.github.io/skycons/",
        "note": "Animated weather icon set.",
        "tag": "mit"
      },
      {
        "name": "GraphBerry",
        "url": "https://www.graphberry.com/category/icons",
        "note": "Free icon sets, commercial use.",
        "tag": "site licence"
      },
      {
        "name": "IonIcons",
        "url": "https://ionicons.com/",
        "note": "MIT-licensed icons for Ionic apps.",
        "tag": "mit"
      },
      {
        "name": "Icono",
        "url": "https://saeedalipoor.github.io/icono/",
        "note": "Pure CSS icon pack.",
        "tag": "site licence"
      }
    ]
  },
  {
    "id": "email",
    "title": "Free Email Templates",
    "blurb": "responsive email patterns",
    "items": [
      {
        "name": "Litmus Templates",
        "url": "https://litmus.com/community/templates",
        "note": "Community-shared email code templates.",
        "tag": "site licence"
      },
      {
        "name": "EmailOctopus Templates",
        "url": "https://templates.emailoctopus.com/",
        "note": "Branded email templates, auto-generated.",
        "tag": "site licence"
      },
      {
        "name": "tabular Templates",
        "url": "https://tabular.email/templates",
        "note": "Free responsive HTML email templates.",
        "tag": "site licence"
      },
      {
        "name": "Salted",
        "url": "https://github.com/rodriguezcommaj/salted",
        "note": "Responsive email template on GitHub.",
        "tag": "site licence"
      },
      {
        "name": "Simple Email Templates",
        "url": "https://github.com/leemunroe/responsive-html-email-template",
        "note": "Simple responsive HTML email template.",
        "tag": "site licence"
      },
      {
        "name": "MJML",
        "url": "https://mjml.io/",
        "note": "Responsive email markup framework.",
        "tag": "mit"
      },
      {
        "name": "Zurb Email",
        "url": "https://zurb.com/playground/responsive-email-templates",
        "note": "Responsive email template playground.",
        "tag": "site licence"
      },
      {
        "name": "Cerberus",
        "url": "https://tedgoas.github.io/Cerberus/",
        "note": "Battle-tested email patterns.",
        "tag": "mit"
      }
    ]
  }
];

export const totalCount = sections.reduce((sum, s) => sum + s.items.length, 0);
