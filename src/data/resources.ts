// Full catalogue migrated from the live allthefreestock.com nav menu on
// 2026-09-20. Dead links were checked with an
// automated pass (DNS resolution + HTTP status) and removed only where the
// domain no longer resolves or the exact page returned 404 - sites that
// merely block scripted requests (403/429/401/5xx, common for Unsplash,
// Pixabay, Flaticon, etc.) were kept since they are demonstrably still live.
// note/tag are only present for the hand-curated subset (from the design
// mockup); bulk-migrated items only have name/url/subcategory.

export interface ResourceItem {
  name: string;
  url: string;
  note?: string;
  tag?: string;
  subcategory?: string;
  /** Set when a submitted resource isn't fully free — shows a "Paid" pill. */
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
        "subcategory": "Multisite Search"
      },
      {
        "name": "Visual Hunt",
        "url": "https://visualhunt.com/",
        "subcategory": "Multisite Search"
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
        "subcategory": "Multisite Search"
      },
      {
        "name": "Photostack",
        "url": "https://photostack.co/",
        "subcategory": "Multisite Search"
      },
      {
        "name": "Finda.Photo",
        "url": "https://finda.photo/",
        "subcategory": "Multisite Search"
      },
      {
        "name": "LibreStock",
        "url": "https://librestock.com/",
        "subcategory": "Multisite Search"
      },
      {
        "name": "Stock Up",
        "url": "https://www.sitebuilderreport.com/stock-photo-search",
        "subcategory": "Multisite Search"
      },
      {
        "name": "Creative Commons",
        "url": "https://ccsearch.creativecommons.org/",
        "subcategory": "Multisite Search"
      },
      {
        "name": "Sketchvalley",
        "url": "https://sketchvalley.com/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Pixeltrue Animated Scenic Pack",
        "url": "https://www.pixeltrue.com/scenic",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Nice Illustrations",
        "url": "https://niceillustrations.com/free-illustrations/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Pixel True",
        "url": "https://www.pixeltrue.com/free-illustrations",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Free Illustrations",
        "url": "https://freeillustrations.xyz/",
        "subcategory": "Free Illustrations"
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
        "subcategory": "Free Illustrations"
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
        "subcategory": "Free Illustrations"
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
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Manypixels Gallery",
        "url": "https://www.manypixels.co/gallery/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Isometric",
        "url": "https://isometric.online/",
        "subcategory": "Free Illustrations"
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
        "subcategory": "Free Illustrations"
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
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Glaze Stock",
        "url": "https://www.glazestock.com/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Fresh Folk",
        "url": "https://fresh-folk.com/",
        "subcategory": "Free Illustrations"
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
        "subcategory": "Free Illustrations"
      },
      {
        "name": "City Kit",
        "url": "https://www.startupmilk.com/city-kit",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "craftwork.design",
        "url": "https://craftwork.design/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "uistore.design",
        "url": "https://www.uistore.design/categories/illustrations/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "scribbbles.design",
        "url": "https://www.scribbbles.design/",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Delesign Illustrations",
        "url": "https://delesign.com/free-designs/graphics",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "Karthik Srinivas",
        "url": "https://www.karthiksrinivas.in/illustrations",
        "subcategory": "Free Illustrations"
      },
      {
        "name": "TexturesForFree",
        "url": "https://texturesforfree.com/",
        "subcategory": "Free Patterns"
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
        "subcategory": "Free Patterns"
      },
      {
        "name": "Hero Patterns",
        "url": "https://www.heropatterns.com/",
        "subcategory": "Free Patterns",
        "note": "Tileable SVG backgrounds.",
        "tag": "cc by"
      },
      {
        "name": "Low Polygon Art",
        "url": "https://www.lowpolygonart.com/",
        "subcategory": "Free Patterns"
      },
      {
        "name": "Scatter Jar",
        "url": "https://scatterjar.com/",
        "subcategory": "Food Pics"
      },
      {
        "name": "Foodie Factor",
        "url": "https://foodiefactor.com/",
        "subcategory": "Food Pics"
      },
      {
        "name": "FoodShot",
        "url": "https://foodshot.co/",
        "subcategory": "Food Pics"
      },
      {
        "name": "FoodiesFeed",
        "url": "https://foodiesfeed.com/download/",
        "subcategory": "Food Pics"
      },
      {
        "name": "DeathToStockPhoto",
        "url": "https://join.deathtothestockphoto.com/",
        "subcategory": "Email List"
      },
      {
        "name": "Little Visuals",
        "url": "https://littlevisuals.co/",
        "subcategory": "Email List"
      },
      {
        "name": "Travel Coffee Book",
        "url": "https://travelcoffeebook.com/",
        "subcategory": "Email List"
      },
      {
        "name": "Fake Img",
        "url": "https://fakeimg.pl/",
        "subcategory": "Placeholder"
      },
      {
        "name": "Placeholder Pics",
        "url": "https://placeholder.pics/",
        "subcategory": "Placeholder"
      },
      {
        "name": "Unsplash It",
        "url": "https://unsplash.it/",
        "subcategory": "Placeholder"
      },
      {
        "name": "LoremPixel",
        "url": "https://lorempixel.com/",
        "subcategory": "Placeholder"
      },
      {
        "name": "PlaceKitten",
        "url": "https://placekitten.com/",
        "subcategory": "Placeholder"
      },
      {
        "name": "Placemat",
        "url": "https://placem.at/",
        "subcategory": "Placeholder"
      },
      {
        "name": "img larger",
        "url": "https://imglarger.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "icons8 upscaler",
        "url": "https://icons8.com/upscaler",
        "subcategory": "Image Tools"
      },
      {
        "name": "upscalepics",
        "url": "https://upscalepics.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "unscreen",
        "url": "https://www.unscreen.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "Photo Resizer",
        "url": "https://promo.com/tools/image-resizer/",
        "subcategory": "Image Tools"
      },
      {
        "name": "Remove Background",
        "url": "https://www.remove.bg/",
        "subcategory": "Image Tools"
      },
      {
        "name": "ezgif",
        "url": "https://ezgif.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "Kapwing",
        "url": "https://www.kapwing.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "Socialbook Background Remover",
        "url": "https://socialbook.io/remove-background",
        "subcategory": "Image Tools"
      },
      {
        "name": "colorize.cc",
        "url": "https://colorize.cc/",
        "subcategory": "Image Tools"
      },
      {
        "name": "ImageColorizer",
        "url": "https://imagecolorizer.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "bgeraser",
        "url": "https://bgeraser.com/",
        "subcategory": "Image Tools"
      },
      {
        "name": "WordPress Photos",
        "url": "https://wordpress.org/photos/"
      },
      {
        "name": "ALT Photos",
        "url": "https://altphotos.com/"
      },
      {
        "name": "Art Institute of Chicago",
        "url": "https://www.artic.edu/collection",
        "note": "Public-domain artworks in full res.",
        "tag": "public domain"
      },
      {
        "name": "reshot.com",
        "url": "https://www.reshot.com/"
      },
      {
        "name": "stockvault.net",
        "url": "https://www.stockvault.net/"
      },
      {
        "name": "nappy.co",
        "url": "https://www.nappy.co/",
        "note": "Black and brown people, beautifully shot.",
        "tag": "cc0"
      },
      {
        "name": "Focus Fitness",
        "url": "https://www.focusfitness.net/stock-photos/"
      },
      {
        "name": "Burst",
        "url": "https://burst.shopify.com/",
        "note": "Commerce-leaning shots by Shopify.",
        "tag": "site licence"
      },
      {
        "name": "Moni's Photo",
        "url": "https://monisphoto.com/"
      },
      {
        "name": "Pic Melon",
        "url": "http://picmelon.com/"
      },
      {
        "name": "MET Museum Artwork",
        "url": "https://www.metmuseum.org/art/collection/search"
      },
      {
        "name": "Iwaria",
        "url": "https://iwaria.com/"
      },
      {
        "name": "Glyphs",
        "url": "https://glyphs.co/photos"
      },
      {
        "name": "My Stock Photos",
        "url": "http://mystock.photos/"
      },
      {
        "name": "The Pic Pac",
        "url": "https://thepicpac.com/"
      },
      {
        "name": "The British Library",
        "url": "https://www.flickr.com/photos/britishlibrary/"
      },
      {
        "name": "The Library of Congress",
        "url": "https://www.flickr.com/photos/library_of_congress/albums"
      },
      {
        "name": "Unsplash",
        "url": "https://unsplash.com/",
        "note": "Huge, well-curated, own licence.",
        "tag": "site licence"
      },
      {
        "name": "Shutteroo",
        "url": "http://shutteroo.com/"
      },
      {
        "name": "Realistic Shots",
        "url": "http://realisticshots.com/"
      },
      {
        "name": "Skuawk",
        "url": "http://skuawk.com/"
      },
      {
        "name": "Minimography",
        "url": "http://minimography.com/"
      },
      {
        "name": "NegativeSpace",
        "url": "https://negativespace.co/"
      },
      {
        "name": "LibreShot",
        "url": "https://libreshot.com/"
      },
      {
        "name": "StockSnap",
        "url": "https://stocksnap.io/",
        "note": "CC0, added to daily.",
        "tag": "cc0"
      },
      {
        "name": "FancyCrave",
        "url": "http://fancycrave.com/"
      },
      {
        "name": "PhotoStockEditor",
        "url": "https://photostockeditor.com/"
      },
      {
        "name": "BarnImages",
        "url": "https://barnimages.com/"
      },
      {
        "name": "RealisticShots",
        "url": "https://realisticshots.com/"
      },
      {
        "name": "Cupcake",
        "url": "http://cupcake.nilssonlee.se/"
      },
      {
        "name": "reSplashed",
        "url": "http://www.resplashed.com/"
      },
      {
        "name": "Splashbase",
        "url": "http://www.splashbase.co/"
      },
      {
        "name": "Free Nature Stock",
        "url": "http://freenaturestock.com/"
      },
      {
        "name": "GoodFreePhotos",
        "url": "https://www.goodfreephotos.com/"
      },
      {
        "name": "ISO Republic",
        "url": "https://isorepublic.com/"
      },
      {
        "name": "Magdeleine",
        "url": "https://magdeleine.co/license/cc0/"
      },
      {
        "name": "Pond5",
        "url": "https://www.pond5.com/photos/1/*.html"
      },
      {
        "name": "MMT",
        "url": "https://mmtstock.com/"
      },
      {
        "name": "FuriousCamera",
        "url": "https://furiouscamera.com/"
      },
      {
        "name": "ABSFreePic",
        "url": "http://absfreepic.com/"
      },
      {
        "name": "Trunklog",
        "url": "http://trunklog.com/"
      },
      {
        "name": "Jeeshoots",
        "url": "https://jeshoots.com/"
      },
      {
        "name": "Picography",
        "url": "https://picography.co/"
      },
      {
        "name": "Gratisography",
        "url": "https://www.gratisography.com/",
        "note": "Odd, funny, useful.",
        "tag": "site licence"
      },
      {
        "name": "Bara-Art",
        "url": "http://www.bara-art.com/"
      },
      {
        "name": "1MillionFreePictures",
        "url": "https://www.1millionfreepictures.com/"
      },
      {
        "name": "KaboomPics",
        "url": "https://kaboompics.com/"
      },
      {
        "name": "SplitShire",
        "url": "https://splitshire.com/"
      },
      {
        "name": "Life Of Pix",
        "url": "https://www.lifeofpix.com/",
        "note": "High-resolution, editorial feel.",
        "tag": "cc0"
      },
      {
        "name": "Startup Stock Photos",
        "url": "http://startupstockphotos.com/"
      },
      {
        "name": "Stock Image Point",
        "url": "https://www.stock-image-point.com/"
      },
      {
        "name": "morgueFile",
        "url": "https://morguefile.com/"
      },
      {
        "name": "SkitterPhoto",
        "url": "https://skitterphoto.com/"
      },
      {
        "name": "Good Stock Photos",
        "url": "https://goodstock.photos/"
      },
      {
        "name": "Jay Mantri",
        "url": "https://jaymantri.com/"
      },
      {
        "name": "New Old Stock",
        "url": "https://nos.twnsnd.co/"
      },
      {
        "name": "FreeRangeStock",
        "url": "https://freerangestock.com/"
      },
      {
        "name": "PixaBay",
        "url": "https://pixabay.com/"
      },
      {
        "name": "Moveast",
        "url": "http://moveast.me/"
      },
      {
        "name": "Pic Jumbo",
        "url": "https://picjumbo.com/"
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
        "url": "https://mockupmark.com/create/free"
      },
      {
        "name": "Mockup Time",
        "url": "https://mockuptime.com/"
      },
      {
        "name": "themockup.club",
        "url": "https://themockup.club/"
      },
      {
        "name": "threed.io",
        "url": "https://threed.io/",
        "note": "3D device mockups in-browser.",
        "tag": "site licence"
      },
      {
        "name": "MockupsJar",
        "url": "https://mockupsjar.com/"
      },
      {
        "name": "Smartmockups",
        "url": "https://smartmockups.com/",
        "note": "Device and apparel scenes.",
        "tag": "freemium"
      },
      {
        "name": "Mockerie",
        "url": "https://mockerie.io/"
      },
      {
        "name": "Mockup World",
        "url": "https://www.mockupworld.co/",
        "note": "Aggregated PSD mockups.",
        "tag": "mixed"
      },
      {
        "name": "PlaceIt",
        "url": "https://placeit.net/"
      },
      {
        "name": "Magic Mockups",
        "url": "https://magicmockups.com/"
      },
      {
        "name": "Dunnnk",
        "url": "https://dunnnk.com/"
      },
      {
        "name": "immagiPic",
        "url": "https://www.immagipic.com/"
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
        "name": "vyoo",
        "url": "https://www.veed.io/vyoo/"
      },
      {
        "name": "CuteStockFootage",
        "url": "https://www.cutestockfootage.com/"
      },
      {
        "name": "Vidlery",
        "url": "http://vidlery.com/"
      },
      {
        "name": "Little Cloud Cinema",
        "url": "http://www.littlecloudcinema.com/footage.html"
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
        "url": "https://www.pond5.com/stock-video-footage/1/*.html"
      },
      {
        "name": "Videezy",
        "url": "https://www.videezy.com/browse"
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
        "url": "https://www.stockfootageforfree.com/"
      },
      {
        "name": "XStockvideo",
        "url": "http://www.xstockvideo.com/"
      },
      {
        "name": "Beachfront B-Roll",
        "url": "http://www.beachfrontbroll.com/"
      },
      {
        "name": "Vidsplay",
        "url": "https://www.vidsplay.com/"
      },
      {
        "name": "Clipcanvas",
        "url": "https://www.clipcanvas.com/free-footage/"
      },
      {
        "name": "MotionElements",
        "url": "https://www.motionelements.com/free/stock-footage/"
      },
      {
        "name": "Distill",
        "url": "http://www.wedistill.io/"
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
        "url": "https://www.m-operator.com/"
      },
      {
        "name": "Retro Arcade Sounds Pack",
        "url": "https://www.themotionmonkey.co.uk/free-resources/retro-arcade-sounds/"
      },
      {
        "name": "Purple Planet",
        "url": "https://www.purple-planet.com/",
        "note": "Royalty-free beds by mood.",
        "tag": "attribution"
      },
      {
        "name": "MusicForMakers",
        "url": "https://musicformakers.com/"
      },
      {
        "name": "NoCopyrightSounds",
        "url": "https://www.youtube.com/user/NoCopyrightSounds"
      },
      {
        "name": "Octave",
        "url": "https://raisedbeaches.com/octave/"
      },
      {
        "name": "Free Music Archive",
        "url": "https://freemusicarchive.org/",
        "note": "Deep CC-licensed catalogue.",
        "tag": "cc mixed"
      },
      {
        "name": "FreeSound",
        "url": "https://www.freesound.org/",
        "note": "Community sound-effect library.",
        "tag": "cc mixed"
      },
      {
        "name": "Adobe Audition SFX",
        "url": "https://offers.adobe.com/en/na/audition/offers/audition_dlc.html"
      },
      {
        "name": "SoundBible",
        "url": "https://soundbible.com/",
        "note": "Quick single effects.",
        "tag": "mixed"
      },
      {
        "name": "Dev Tones",
        "url": "https://rcptones.com/dev_tones/"
      },
      {
        "name": "Bfxr",
        "url": "https://www.bfxr.net/"
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
        "subcategory": "Gradients"
      },
      {
        "name": "Gradient Hunt",
        "url": "https://gradienthunt.com/",
        "subcategory": "Gradients",
        "note": "Community gradient library.",
        "tag": "free"
      },
      {
        "name": "CSS Gradient",
        "url": "https://cssgradient.io/",
        "subcategory": "Gradients"
      },
      {
        "name": "uiGradients",
        "url": "https://uigradients.com/",
        "subcategory": "Gradients"
      },
      {
        "name": "Gradients.io",
        "url": "https://gradients.io/",
        "subcategory": "Gradients"
      },
      {
        "name": "htmlColors Gradients",
        "url": "https://htmlcolors.com/gradients",
        "subcategory": "Gradients"
      },
      {
        "name": "Colorful Gradients",
        "url": "https://colorfulgradients.tumblr.com/",
        "subcategory": "Gradients"
      },
      {
        "name": "Colors UI",
        "url": "https://colorsui.com/"
      },
      {
        "name": "Color Designer",
        "url": "https://colordesigner.io/"
      },
      {
        "name": "Muzli Colors",
        "url": "https://colors.muz.li/"
      },
      {
        "name": "Culrs",
        "url": "https://culrs.com/"
      },
      {
        "name": "Palettte",
        "url": "https://palettte.app/"
      },
      {
        "name": "ColorBox",
        "url": "https://www.colorbox.io/"
      },
      {
        "name": "Color Leap",
        "url": "https://colorleap.app/home"
      },
      {
        "name": "Color Scale",
        "url": "https://hihayk.github.io/scale/"
      },
      {
        "name": "Trendy Palettes",
        "url": "https://trendypalettes.com/"
      },
      {
        "name": "Picular",
        "url": "https://picular.co/"
      },
      {
        "name": "Google Art Palette",
        "url": "https://artsexperiments.withgoogle.com/artpalette/"
      },
      {
        "name": "Pigment",
        "url": "https://pigment.shapefactory.co/"
      },
      {
        "name": "Colorhunt ❤",
        "url": "https://colorhunt.co/"
      },
      {
        "name": "Colorwise.io",
        "url": "https://colorwise.io/"
      },
      {
        "name": "Coolhue",
        "url": "https://webkul.github.io/coolhue/"
      },
      {
        "name": "htmlColors Palettes",
        "url": "https://htmlcolors.com/palettes"
      },
      {
        "name": "Colormind",
        "url": "https://colormind.io/"
      },
      {
        "name": "Open Color",
        "url": "https://yeun.github.io/open-color/",
        "note": "Accessible UI colour scheme.",
        "tag": "mit"
      },
      {
        "name": "Color Claim",
        "url": "https://www.vanschneider.com/colors/"
      },
      {
        "name": "Hello Color",
        "url": "https://jxnblk.com/hello-color/"
      },
      {
        "name": "Web Colour Data",
        "url": "https://webcolourdata.com/"
      },
      {
        "name": "Color Thief",
        "url": "https://lokeshdhakar.com/projects/color-thief/",
        "note": "Pull palettes out of an image.",
        "tag": "mit"
      },
      {
        "name": "Color Drop",
        "url": "https://colordrop.io/"
      },
      {
        "name": "Color Lisa",
        "url": "https://www.colorlisa.com/"
      },
      {
        "name": "LOL Colors",
        "url": "https://www.lolcolors.com/"
      },
      {
        "name": "ColorFavs",
        "url": "https://www.colorfavs.com/"
      },
      {
        "name": "PLTTS",
        "url": "https://pltts.me/"
      },
      {
        "name": "Swiss Style Color Picker",
        "url": "https://swisscolors.net/"
      },
      {
        "name": "Blend",
        "url": "https://colinkeany.com/blend/"
      },
      {
        "name": "Guideline Colour",
        "url": "https://guidelinecolour.com/"
      },
      {
        "name": "Material UI Colors",
        "url": "https://materialuicolors.co/"
      },
      {
        "name": "Color.Hailpixel",
        "url": "https://color.hailpixel.com/"
      },
      {
        "name": "Colourcode",
        "url": "https://colourco.de/"
      },
      {
        "name": "Palettr",
        "url": "https://palettr.com/"
      },
      {
        "name": "Colour Combo Tester",
        "url": "https://www.colorcombos.com/combotester.html"
      },
      {
        "name": "Cohesive Colors",
        "url": "https://javierbyte.github.io/cohesive-colors/"
      },
      {
        "name": "Bootflat Flat Color",
        "url": "https://bootflat.github.io/color-picker.html"
      },
      {
        "name": "Coolors",
        "url": "https://coolors.co/app",
        "note": "Fast palette generator.",
        "tag": "freemium"
      },
      {
        "name": "0to255",
        "url": "https://www.0to255.com/"
      },
      {
        "name": "Colllor",
        "url": "https://colllor.com/"
      },
      {
        "name": "Coleure",
        "url": "https://www.coleure.com/"
      },
      {
        "name": "Get UI Colors",
        "url": "https://getuicolors.com/"
      },
      {
        "name": "Colorrrs",
        "url": "https://colorrrs.com/"
      },
      {
        "name": "Adobe Color",
        "url": "https://color.adobe.com/create/color-wheel/"
      },
      {
        "name": "Flat UI Colors",
        "url": "https://flatuicolors.com/"
      },
      {
        "name": "Flat UI Color Picker",
        "url": "https://www.flatuicolorpicker.com/all"
      },
      {
        "name": "Pokemon Palette",
        "url": "https://pokepalettes.com/"
      },
      {
        "name": "Material Palette",
        "url": "https://www.materialpalette.com/"
      },
      {
        "name": "Material UI",
        "url": "https://www.materialui.co/colors"
      },
      {
        "name": "Colour Lovers",
        "url": "https://www.colourlovers.com/palettes"
      },
      {
        "name": "Brand Colors",
        "url": "https://brandcolors.net/"
      },
      {
        "name": "Social Colors",
        "url": "https://www.materialui.co/socialcolors"
      },
      {
        "name": "Color-hex",
        "url": "https://www.color-hex.com/"
      },
      {
        "name": "Paletton",
        "url": "https://paletton.com/"
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
        "url": "https://www.papayatemplates.com/"
      },
      {
        "name": "Free HTML5",
        "url": "https://freehtml5.co/"
      },
      {
        "name": "HTML5 UP",
        "url": "https://html5up.net/",
        "note": "Responsive site templates.",
        "tag": "cc by"
      },
      {
        "name": "Templated",
        "url": "https://templated.co/"
      },
      {
        "name": "TemplateStash",
        "url": "https://www.templatestash.com/"
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
        "subcategory": "Font Tools"
      },
      {
        "name": "Font Joy",
        "url": "https://fontjoy.com/",
        "subcategory": "Font Tools"
      },
      {
        "name": "Type Anything",
        "url": "https://typeanything.io/",
        "subcategory": "Font Tools"
      },
      {
        "name": "Wordmark.it",
        "url": "https://www.wordmark.it/",
        "subcategory": "Font Tools"
      },
      {
        "name": "Font Fling",
        "url": "https://fontfling.com/",
        "subcategory": "Font Tools"
      },
      {
        "name": "MyScriptFont",
        "url": "https://www.myscriptfont.com/",
        "subcategory": "Font Tools"
      },
      {
        "name": "Font Combinator",
        "url": "https://font-combinator.com/",
        "subcategory": "Font Tools"
      },
      {
        "name": "Fount",
        "url": "https://fount.artequalswork.com/",
        "subcategory": "Font Tools"
      },
      {
        "name": "Glyphr Studio",
        "url": "https://www.glyphrstudio.com/online/",
        "subcategory": "Font Tools"
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
        "url": "https://www.dafont.com/"
      },
      {
        "name": "FFonts",
        "url": "https://www.ffonts.net/"
      },
      {
        "name": "Font Squirrel",
        "url": "https://www.fontsquirrel.com/"
      },
      {
        "name": "Lost Type",
        "url": "https://losttype.com/browse/"
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
        "url": "https://systemuicons.com/"
      },
      {
        "name": "VISIWIG Icons",
        "url": "http://www.visiwig.com/icons/"
      },
      {
        "name": "css.gg",
        "url": "https://css.gg/"
      },
      {
        "name": "xicons",
        "url": "https://www.xicons.co/"
      },
      {
        "name": "unicons",
        "url": "https://iconscout.com/unicons"
      },
      {
        "name": "ikonate",
        "url": "https://www.ikonate.com/"
      },
      {
        "name": "Jam icons",
        "url": "https://jam-icons.com/"
      },
      {
        "name": "illustrio",
        "url": "https://illustrio.com/"
      },
      {
        "name": "Feather",
        "url": "https://feathericons.com/"
      },
      {
        "name": "Material Design Icons",
        "url": "https://materialdesignicons.com/"
      },
      {
        "name": "Font Awesome",
        "url": "https://fontawesome.com/"
      },
      {
        "name": "The Noun Project",
        "url": "https://thenounproject.com/"
      },
      {
        "name": "IcoFont",
        "url": "https://icofont.com/"
      },
      {
        "name": "Zond Icons",
        "url": "https://www.zondicons.com/"
      },
      {
        "name": "CSS Icons",
        "url": "https://cssicon.space/"
      },
      {
        "name": "Bytesize Icons",
        "url": "https://github.com/danklammer/bytesize-icons"
      },
      {
        "name": "Free Nova Icons",
        "url": "https://www.webalys.com/nova/free-icons.html"
      },
      {
        "name": "Free Icon Shop",
        "url": "https://freeiconshop.com/"
      },
      {
        "name": "Simple Icons",
        "url": "https://simpleicons.org/",
        "note": "Brand marks in SVG.",
        "tag": "cc0"
      },
      {
        "name": "Octicons",
        "url": "https://octicons.github.com/"
      },
      {
        "name": "We Love Icon Font",
        "url": "https://weloveiconfonts.com/"
      },
      {
        "name": "IconStore",
        "url": "https://iconstore.co/"
      },
      {
        "name": "PaymentFont",
        "url": "https://paymentfont.io/"
      },
      {
        "name": "Material icons",
        "url": "https://www.google.com/design/icons/"
      },
      {
        "name": "Aiconica",
        "url": "https://aiconica.net/"
      },
      {
        "name": "SmartIcons",
        "url": "https://smarticons.co/"
      },
      {
        "name": "FlatIcon",
        "url": "https://www.flaticon.com/"
      },
      {
        "name": "IconMonstr",
        "url": "https://iconmonstr.com/"
      },
      {
        "name": "IcoMoon",
        "url": "https://icomoon.io/"
      },
      {
        "name": "Icons8",
        "url": "https://icons8.com/"
      },
      {
        "name": "to[icon]",
        "url": "https://www.toicon.com/"
      },
      {
        "name": "Icony",
        "url": "https://icony.co/index.html"
      },
      {
        "name": "Skycons",
        "url": "https://darkskyapp.github.io/skycons/"
      },
      {
        "name": "GraphBerry",
        "url": "https://www.graphberry.com/category/icons"
      },
      {
        "name": "IonIcons",
        "url": "https://ionicons.com/"
      },
      {
        "name": "Icono",
        "url": "https://saeedalipoor.github.io/icono/"
      },
      {
        "name": "EvilIcons",
        "url": "https://evil-icons.io/"
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
        "url": "https://litmus.com/community/templates"
      },
      {
        "name": "EmailOctopus Templates",
        "url": "https://templates.emailoctopus.com/"
      },
      {
        "name": "tabular Templates",
        "url": "https://tabular.email/templates"
      },
      {
        "name": "Salted",
        "url": "https://github.com/rodriguezcommaj/salted"
      },
      {
        "name": "Simple Email Templates",
        "url": "https://github.com/leemunroe/responsive-html-email-template"
      },
      {
        "name": "MJML",
        "url": "https://mjml.io/"
      },
      {
        "name": "Zurb Email",
        "url": "https://zurb.com/playground/responsive-email-templates"
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
