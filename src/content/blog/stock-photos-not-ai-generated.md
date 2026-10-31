---
title: "How to Find Stock Photos That Aren't AI-Generated"
excerpt: "Plenty of stock libraries now mix generated images in with real photography. Here's where to look, which sites ban AI, and a seven-step check that works on any single file."
metaDescription: "Stock libraries are filling with AI images. Use our 7-step check (metadata, Content Credentials, reverse search) and see which photo sites ban AI outright."
topic: "Authenticity"
pubDate: 2026-10-31T09:00:00.000Z
updatedDate: 2026-10-31T09:00:00.000Z
readingTime: "19 min read"
coverImage: "/images/stock-photos-not-ai-generated.png"
draft: false
tldr:
  - "Start at libraries that ban AI uploads: Unsplash, Pexels, Shutterstock, Stocksy and Getty Images all refuse generated submissions at the time of writing (October 2026). Pixabay and Adobe Stock accept AI content but label it."
  - "Your eyes aren't enough. In Microsoft's 2025 study of 12,500+ people, participants picked real from AI images only 62% of the time."
  - "Check metadata first: an IPTC Digital Source Type of trainedAlgorithmicMedia means the file says it was generated, and contentcredentials.org/verify reads C2PA Content Credentials."
  - "Detection tools help but break easily. A 2025 benchmark found several detectors' accuracy on fake images fell close to zero after JPEG compression."
  - "\"Not AI-generated\" and \"not licensed for AI training\" are separate questions. Opt-outs such as Spawning's Do Not Train registry and EU text and data mining reservations cover the second."
  - "For guaranteed provenance, use museum and government archives or commission a local photographer and keep the raw files."
faqs:
  - q: "Is it illegal to use AI-generated stock photos?"
    a: "No. Using a properly licensed AI image is legal in most places, including Australia. The issue is disclosure and fit. Some clients, publishers and contests ban AI imagery in their contracts or rules, and from 2 August 2026 the EU AI Act requires providers of generative AI systems to mark their output as machine-readable AI content ([Baker Botts summary](https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live)). Check the brief before you check the image."
  - q: "Does Unsplash have AI-generated photos?"
    a: "It shouldn't. Unsplash's [submission guidelines](https://help.unsplash.com/en/articles/2534415-unsplash-submission-guidelines) say it does not accept content created by AI generative models, for photos or illustrations. Moderation still misses some generated images before they're removed. For anything sensitive, such as a news story or a testimonial page, run the file through the checklist in this guide and look at the photographer's wider portfolio."
  - q: "Can I filter out AI images on Adobe Stock?"
    a: "Yes. Adobe Stock search has a generative AI filter with three settings: exclude AI, show only AI, or show both. Adobe [announced it in April 2023](https://community.adobe.com/announcements-30/generative-ai-filter-now-available-for-adobe-stock-search-1495373). It relies on contributors ticking the \"Created using generative AI tools\" box, so a mislabelled file can still appear in excluded results. Treat the filter as a first pass and check anything important."
  - q: "If an image has no EXIF data, does that mean it's AI?"
    a: "No. Missing metadata proves very little. Most social platforms and many content management systems strip EXIF and IPTC fields on upload, and an IPTC study found Facebook, Twitter and Flickr removing embedded rights data as far back as 2013 ([ProVideo Coalition report](https://www.provideocoalition.com/iptc-study-shows-some-social-media-networks-remove-rights-information-from-photos/)). Empty metadata means you need another check, usually a reverse image search or the photographer's original upload."
  - q: "Which free AI image detector is the most accurate?"
    a: "None is reliable enough to settle a question on its own. A 2025 benchmark called AIGIBench found that the best of the detectors it tested averaged about 80% accuracy, and that JPEG compression pushed fake-image accuracy close to zero for all of them ([Li et al., 2025](https://arxiv.org/html/2505.12335v1)). Use a detector as one vote alongside metadata and provenance."
  - q: "Are public domain archives free of AI images?"
    a: "Mostly. Collections like the Library of Congress, Smithsonian Open Access and NASA are digitised from physical holdings or the agency's own photography, so generated images are rare. Wikimedia Commons is different. Anyone can upload, and it does host AI-generated files under its own [AI-generated media guideline](https://commons.wikimedia.org/wiki/Commons:AI-generated_media). Read each file's description page and check the uploader before you use it."
  - q: "How do I ask a photographer to prove a photo isn't AI?"
    a: "Ask for the raw file, or a set of frames from the same shoot. Generated images don't come with a run of near-identical camera files sharing the same EXIF camera body and sequential file numbers. Photo contests use this test: Close-Up Photographer of the Year asks for raw files in later judging rounds ([TechRadar, 2024](https://www.techradar.com/cameras/photography/ai-will-be-a-watershed-moment-and-the-great-mega-trend-of-our-generation-photo-contest-experts-tell-us-how-theyre-dealing-with-a-tidal-wave-of-ai-generated-images)). A working photographer can usually send these within a day."
  - q: "Does Content Credentials tell me if a photo was edited with Generative Fill?"
    a: "It can, if the credential survived. Adobe apps record generative edits as actions in the C2PA manifest, and the [Verify tool](https://opensource.contentauthenticity.org/docs/verify) lists them in its process panel. In IPTC terms, an inpainted or outpainted photo should carry compositeWithTrainedAlgorithmicMedia rather than digitalCapture. If the manifest was stripped by a re-save or an upload, Verify shows \"No Content Credential\" and you're back to the other checks."
  - q: "Can I use a photo marked do not train in my marketing?"
    a: "Yes. A do-not-train flag only tells AI developers not to scrape the image for model training. It has no effect on you placing it in a brochure or blog post, which is governed by the normal licence. Read the licence for that, and see our guide to [free stock photo licence types](https://allthefreestock.com/blog/free-stock-photo-licences-explained/) for what each one allows."
---
## Why stock libraries need checking now

Generated images have been mixed into stock search results since 2022. Some libraries ban them, some label them, and a few do neither. If you need real photography, for a news story, a testimonial page, a client who has written "no AI" into the brief, or simply because it fits your brand, you can't assume a stock site has done that work for you.

Buyers are asking for this. In Storyblocks' 2026 surveys of more than 1,400 people who license content for work, about half said they had rejected a stock asset because it was AI-generated, and between 74% and 94% wanted AI content labelled ([Digital Camera World, October 2026](https://www.digitalcameraworld.com/tech/artificial-intelligence/two-thirds-of-image-buyers-believe-human-made-is-better-than-ai-generated-but-87-percent-surveyed-still-admit-to-using-ai)). Storyblocks doesn't accept AI-generated uploads, so it has a stake in that result, but the direction is consistent with what we hear from people using our [free stock directory](https://allthefreestock.com/).

The bigger problem is that people overrate their own eye. In the same surveys, about 83% felt confident they could spot AI content. The controlled studies say otherwise:

| Study | Participants | Result |
| - | - | - |
| Microsoft AI for Good, 2025 | 12,500+ | 62% overall accuracy |
| Conjointly, Sept 2025 | 301 US adults | 49% on real photos, 52% on AI |
| Northwestern, CHI 2025 | 50,444 | 74% on real, 76% on AI |

Sources: [Microsoft AI for Good Lab](https://arxiv.org/html/2507.18640v1), [Conjointly](https://conjointly.com/blog/real-vs-ai-images-2025/), [Kamali et al.](https://ar5iv.labs.arxiv.org/html/2502.11989). Conjointly's respondents scored at chance level, and only 9% of them got 70% or more right.

A better method is to stack several weak signals until together they make a strong one.

## How to find images that are not AI-generated

Source from libraries that ban AI uploads, then confirm each image with metadata, provenance and the photographer's history. Your own eye is the least reliable check. For any single file:

1. **Pick a library that bans AI uploads** (table below), or turn on the "exclude AI" filter where one exists.
2. **Scan for visual tells:** hands, text, jewellery, reflections, implausible actions.
3. **Read the metadata.** Look at the IPTC Digital Source Type and camera EXIF.
4. **Check Content Credentials** at contentcredentials.org/verify.
5. **Run a reverse image search** with Google Lens and TinEye to find the earliest copy.
6. **Use a detection tool as one vote,** never the verdict.
7. **Confirm the photographer:** a real portfolio, other frames from the same shoot, or the raw file.

Steps 3, 4 and 7 carry the most weight. If the metadata says digital capture, the credential checks out and the photographer has twenty other frames from that day, you're done.

> **Rule of thumb:** A single clean signal is never proof. Two independent signals that agree, such as camera EXIF plus a portfolio with sibling frames, are usually enough for commercial use.

### Visual tells

Northwestern researchers sorted the errors in AI images into categories after collecting nearly 750,000 judgements ([Kellogg Insight, May 2025](https://insight.kellogg.northwestern.edu/article/are-we-any-good-at-spotting-ai-fakes)). Anatomical errors such as odd proportions were the easiest for people to spot. Functional implausibilities, like a person holding a sandwich the wrong way round, were the hardest. Their finding on time matters too: accuracy on AI images rose from 72% at one second of viewing to 80% at ten seconds, so give each image a proper look.

What to zoom in on:

- **Hands and teeth:** extra or fused fingers, too many teeth, nails that merge into skin.
- **Text and signage:** letters that look right from a distance and dissolve when you zoom in.
- **Objects in use:** cables that go nowhere, cups held by nothing, tools gripped in ways that wouldn't work.
- **Skin and fabric:** a waxy, poreless finish, or patterns that repeat or melt at the edges.
- **Light:** shadows pointing different ways, reflections that don't match the scene.
- **Backgrounds:** people or buildings that turn into smudges the further back they go.

Newer models make fewer of these mistakes, and real photos can have odd artefacts too, especially after heavy retouching. Treat a tell as a reason to dig further.

> **Watch out:** Landscapes are the hardest category. In Microsoft's study, participants did best on photos of people and worst on natural and urban scenery. If you're buying scenic stock, lean on metadata and provenance.

### Metadata: EXIF and IPTC

Metadata is the fastest objective check. Open the file in Photoshop or Lightroom (File Info), in Windows file properties, in macOS Preview's inspector, or with the free command-line tool ExifTool.

EXIF tells you about capture: camera make and model, lens, exposure settings, date taken. A full set of believable camera data is a good sign. IPTC carries descriptive and rights data, and it includes a field built for this question: **Digital Source Type**. Google announced in May 2023 that it would use this IPTC field to signal AI-generated images and make sure its own AI images carry it ([IPTC](https://iptc.org/news/google-announces-use-of-iptc-metadata-for-generative-ai-images/)).

The values worth knowing, from the [IPTC controlled vocabulary](https://cv.iptc.org/newscodes/digitalsourcetype/):

| IPTC value | Plain meaning | Verdict |
| - | - | - |
| digitalCapture | Captured from real life with a camera | Good sign |
| algorithmicallyEnhanced | Sharpening, noise reduction, no new content | Fine |
| compositeWithTrainedAlgorithmicMedia | Real photo edited with generative AI (inpainting, outpainting) | Partly AI |
| compositeSynthetic | Composite with at least one AI-generated element | Partly AI |
| trainedAlgorithmicMedia | Created with generative AI | AI image |

In ExifTool, the field shows up as `Digital Source Type`. Search the raw output for "trainedAlgorithmicMedia" and you'll catch both full and partial AI files in one go.

> **Common mistake:** Reading empty metadata as proof of AI. Social platforms and many website builders strip EXIF and IPTC on upload. An IPTC test found Facebook, Twitter and Flickr removing embedded rights data back in 2013 ([ProVideo Coalition](https://www.provideocoalition.com/iptc-study-shows-some-social-media-networks-remove-rights-information-from-photos/)). Blank fields just mean you move on to the next check.

### Content Credentials (C2PA)

Content Credentials are a signed record of how a file was made and edited, built on the open C2PA standard. Upload a file or paste a public image URL into [contentcredentials.org/verify](https://contentcredentials.org/verify) and, according to the [tool's documentation](https://opensource.contentauthenticity.org/docs/verify), it shows the signer, the app used, any AI generation or editing actions, camera capture details if present, and any do-not-train notice the creator attached. If there's no manifest, you'll see "No Content Credential".

Google said in September 2024 that its "About this image" panel in Google Images, Lens and Circle to Search would surface C2PA data showing whether AI tools created or edited an image ([Google](https://blog.google/technology/ai/google-gen-ai-content-transparency-c2pa/)). Regulation is pushing the same way. Since 2 August 2026, the EU AI Act's Article 50 requires providers of generative AI systems to mark synthetic output in a machine-readable way, with a grace period to 2 December 2026 for systems already on the market ([Baker Botts](https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live)).

That makes a positive credential strong evidence. A missing one is weak evidence, because older files, most stock libraries' downloads and any re-saved image won't have one.

### Reverse image search

Reverse search answers a different question: where did this image first appear? Run it through [Google Lens](https://lens.google/) and [TinEye](https://tineye.com/). TinEye lets you sort by oldest, which is the useful view.

What you're looking for:

- **An earlier upload on a photographer's own site, Flickr or 500px** with a full series around it. That's strong evidence of a real shoot.
- **Matches only on AI art communities or prompt-sharing sites.** That's a red flag.
- **A copy dated well before 2022.** Photorealistic text-to-image tools went mainstream in 2022, so an older dated copy is strong evidence of a real photo. GAN-made faces are the exception: they've circulated since around 2019.
- **No matches at all.** Common for fresh stock. It's neutral.

### AI detection tools

Detectors such as Hive, AI or Not, Sightengine and Illuminarty return a probability score. They're useful for triage, but a score alone won't hold up if a client questions an image.

The research is blunt about why. A 2025 benchmark, AIGIBench, tested well-known detectors under real-world conditions. The best averaged about 80% accuracy, and under JPEG compression and added noise, accuracy on fake images fell close to zero for all of them while real photos still passed ([Li et al., 2025](https://arxiv.org/html/2505.12335v1)). Bellingcat's earlier test of AI or Not found the same pattern on a smaller scale: it caught all 100 uncompressed Midjourney images, then missed 7 of 10 once they were compressed, and it flagged 6 of 20 real photo competition entries as AI ([Bellingcat, 2023](https://www.bellingcat.com/resources/2023/09/11/testing-ai-or-not-how-well-does-an-ai-image-detector-do-its-job)).

Since stock downloads are almost always compressed JPEGs, they hit detectors at their weakest.

> **Worth knowing:** False positives hurt real photographers. Heavily edited, high-dynamic-range and award-style images get flagged as AI more often than plain snapshots. Never accuse a contributor on a detector score alone.

### Confirm the photographer

This is the strongest check and the one most people skip. Click through to the contributor's profile and ask:

- Do they have a real portfolio with a consistent style, gear and locations over several years?
- Are there sibling frames from the same shoot, where the same person appears in slightly different poses?
- Do they link to a personal site, an Instagram with behind-the-scenes posts, or a client list?
- Does the EXIF camera body match across their uploads?

Generated portfolios tend to look oddly uniform: many unrelated subjects, the same glossy finish, no repeat sessions. For high-stakes use, email the photographer and ask for the raw file, which a generator can't produce.

## Which stock sites ban or label AI

Most of the big free sites ban AI uploads, and the paid agencies are split. Here's where things stood when we checked each policy page in October 2026.

| Library | AI uploads | How it handles them |
| - | - | - |
| Unsplash | Not accepted | Banned for photos and illustrations |
| Pexels | Not accepted | "No generative AI content" in upload rules |
| Pixabay | Accepted | Must be labelled with an AI toggle at upload |
| Shutterstock | Not accepted from contributors | Says it can't verify AI model sources |
| Getty Images | Not accepted | Creative and Editorial libraries are AI-free |
| Stocksy | Not accepted | Also bans Generative Fill edits and AI props |
| Adobe Stock | Accepted | Labelled; buyers can filter AI out |

Sources: [Unsplash](https://help.unsplash.com/en/articles/2534415-unsplash-submission-guidelines), [Pexels](https://help.pexels.com/hc/en-us/articles/360042795073-What-are-the-requirements-for-uploading-photos), [Pixabay FAQ](https://pixabay.com/service/faq/), [Shutterstock](https://submit.shutterstock.com/help/en/articles/10594622-content-policy-updates-ai-generated-content), [Getty Images](https://www.gettyimages.com/company/ai-free-imagery-policy), [Stocksy](https://support.stocksy.com/hc/en-us/articles/8631710866708), [Adobe Stock](https://helpx.adobe.com/stock/contributor/help/generative-ai-content.html).

A few details matter more than the headline:

- **Getty Images** has refused AI-generated submissions since September 2022 ([Hyperallergic](https://hyperallergic.com/763563/citing-copyright-concerns-getty-images-bans-ai-generated-content/)). Its current policy, updated September 2026, allows limited retouching but no AI-added subjects or objects, and bans AI editing in editorial except light retouching in staged portraits. Output from Getty's own AI generator is labelled and kept out of both libraries. The policy page doesn't mention iStock, so check iStock separately.
- **Shutterstock** says it can't verify which model made most AI content, so it can't make sure every artist is paid. That's why contributor AI uploads are banned, even though Shutterstock offers AI generation tools of its own.
- **Adobe Stock** asks contributors to tick "Created using generative AI tools" whenever generative tools added a new main subject. Background extensions and object removal generally don't need the label. The search filter has offered "exclude generative AI" since April 2023, but it's only as good as contributor honesty.
- **Pixabay** welcomes AI content if it's original and labelled, and says it's working on detection systems. If you need human photography only, Pixabay needs a closer look than Unsplash or Pexels.

Bans depend on moderation, and some generated images slip through on every platform before they're removed, which is why the checklist still matters.

Before a big download session, reread the library's upload rules. These policies have changed several times since 2022, and a dated screenshot of the page belongs in your asset notes alongside the licence.

## Contests and client contracts

Photo contests became the test case for AI rules after April 2023, when Boris Eldagsen won the creative open category of the Sony World Photography Awards with "Pseudomnesia: The Electrician", then refused the prize and revealed the image was AI-generated ([Silicon Republic](https://siliconrepublic.com/machines/boris-eldagsen-ai-photo-sony-photography-awards-refused)). The organisers said he'd told them the work was a "co-creation" with AI, and removed him from the competition ([Amateur Photographer](https://amateurphotographer.com/latest/photo-news/swpa-2023-winner-refuses-award-revealing-photo-to-be-ai-generated/)).

Many contests now ask for evidence on top of a signed declaration. TechRadar's 2024 round-up found Close-Up Photographer of the Year banning generative AI entirely and asking for raw files in later rounds, and the British Photography Awards extending unedited source-file checks to all shortlisted imagery "due to AI" ([TechRadar](https://www.techradar.com/cameras/photography/ai-will-be-a-watershed-moment-and-the-great-mega-trend-of-our-generation-photo-contest-experts-tell-us-how-theyre-dealing-with-a-tidal-wave-of-ai-generated-images)).

Clients are borrowing the same approach. If you're writing or signing a brief, a workable AI clause covers four things:

1. **Definition.** Say whether "no AI" means no generated images, or also no generative edits such as Generative Fill.
2. **Warranty.** The supplier confirms deliverables match the definition.
3. **Evidence.** Raw files, Content Credentials, or the stock licence and source URL for each asset.
4. **Remedy.** Replacement at the supplier's cost if a file turns out to be generated.

Agencies supplying clients should keep the evidence trail even when the contract doesn't ask for it. The habit costs two minutes per asset.

## Not AI-generated vs not licensed for AI training

Buyers often mix these up. "Not AI-generated" describes how the image was made. "Not licensed for AI training" describes what machines may do with it later.

A photo can be 100% human-made and still end up in a training dataset. Opting out is the creator's call, and the tools are:

- **Do Not Train registries.** Spawning's registry collected opt-outs for 80 million artworks ahead of Stable Diffusion 3's training, about 3% of the LAION dataset, with ArtStation and Shutterstock feeding opt-outs in through partnerships ([The Decoder, March 2023](https://the-decoder.com/artists-remove-80-million-images-from-stable-diffusion-3-training-data/)).
- **EU text and data mining reservations.** Article 4 of the EU Copyright in the Digital Single Market Directive lets anyone mine online content unless the rightsholder reserves those rights in a machine-readable way, and the EU AI Act requires general-purpose AI providers to respect those reservations ([Reed Smith](https://www.reedsmith.com/articles/entertainment-media-guide-to-ai-three-years-on/text-data-mining-in-the-eu/)). A December 2025 Hamburg appeal ruling suggested an opt-out written in ordinary prose may not count, so a signal software can parse, such as the [TDMRep protocol](https://www.w3.org/community/reports/tdmrep/CG-FINAL-tdmrep-20220216/) or robots.txt rules is the safer choice.
- **Content Credentials.** A C2PA manifest can carry a do-not-train assertion, which the Verify tool displays.
- **Licence terms.** Some licences forbid using the images to train models. Check the licence itself; it's the only place this is binding.

For a buyer, the practical point is this: a do-not-train flag doesn't stop you using the image in your work, and it tells you nothing about whether the image is real. You still need the checks above. If you publish your own photography, the same tools let you keep it out of training sets. For more on licence wording, see our guide to [free stock photo licences and legal risk](https://allthefreestock.com/blog/free-stock-photo-licences-explained/).

> **Worth knowing:** AI answer engines are starting to read provenance signals too. As a [Melbourne AI SEO consultant](https://saijogeorge.com), Saijo George sees original, well-attributed imagery with intact metadata as part of what makes a page worth citing. Stripping your own image metadata to save a few kilobytes throws that away.

## Archives with built-in provenance

For guaranteed human photography at no cost, go to institutional archives. Their images come from physical collections or the institution's own photographers, with catalogue records saying who made them and when. Generated images are rare because nothing gets in without curation.

| Archive | What you get | Watch out for |
| - | - | - |
| Library of Congress | Free to Use and Reuse sets, historic photos | Rights vary by collection; read each record |
| Smithsonian Open Access | CC0 images, 2.8 million at launch in 2020 | Only items marked CC0 are unrestricted |
| NASA | Space, science, aviation imagery | No endorsement implied; logos protected |
| Wellcome Collection | Medical and social history | Licences vary: CC BY, CC BY-NC or public domain |
| State Library Victoria | Australian historic photos | Credit the collection; Indigenous content needs permission |
| Trove (National Library of Australia) | Aggregated Australian collections | Rights set by each contributing institution |
| Wikimedia Commons | Huge mixed collection | Hosts some AI images; check each file |

Notes on the trickier ones:

- **Library of Congress** groups rights-clear images into themed [Free to Use and Reuse sets](https://www.loc.gov/free-to-use/), a quick way to browse without reading every rights statement.
- **Smithsonian** released [2.8 million CC0 images](https://www.si.edu/newsdesk/releases/smithsonian-releases-28-million-free-images-broader-public-use) in February 2020 and has added more since.
- **NASA** content is generally not subject to US copyright, but its [media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) forbid implying NASA endorses a product, protect the insignia, and warn that identifiable people may have publicity rights.
- **State Library Victoria** no longer requires a permission application for out-of-copyright items, but asks for a credit line naming the collection, and items with Indigenous content always need prior permission ([SLV guide](https://guides.slv.vic.gov.au/pictures/copiesandpermission)).
- **Wellcome Collection** asks for a credit on every image and marks each one's licence; some are non-commercial only ([Wellcome](https://docs.wellcomecollection.org/collections-information/lQ0fMyP8xr8hWWJiQkfl/enquiries/images-and-copyright/copyright-images)).
- **Wikimedia Commons** has a dedicated [AI-generated media guideline](https://commons.wikimedia.org/wiki/Commons:AI-generated_media), which tells you those files exist there. Read the file description and the uploader's history, and prefer files from institutional uploads such as museum partnerships.

For documentary and news imagery, paid sources such as AP Images, Reuters Pictures, AAP in Australia and the editorial side of Getty Images have the strictest provenance of all, with named staff photographers and caption metadata. They're editorial-only for most uses, so they won't suit ads or packaging. NGOs and documentary projects sometimes license their work for campaigns. Ask directly and expect credit requirements.

## Paying photographers fairly

When you pay for stock, the platform you choose decides how much of your money reaches the photographer. Royalty splits are rarely shown on the buying side, so check the contributor pages.

Stocksy, an artist-owned co-op that bans AI content, pays contributors 50% of standard licence revenue and 75% of extended licences ([Stocksy support](https://support.stocksy.com/hc/en-us/articles/360052102752)). If supporting working photographers matters to you, a higher price per image on a co-op often sends more money to the person who took it than a cheap subscription does.

Other ways to put that into practice:

- **Credit photographers even when the licence doesn't require it.** On Unsplash and Pexels, credit is optional and still worth doing. It drives work to them.
- **Buy direct.** Many photographers sell licences from their own sites at rates comparable to premium stock.
- **Look for underrepresented creators deliberately.** Several stock collections and co-ops highlight photographers from communities stock photography has historically left out, and they usually show better range than generic libraries.
- **Pay for extended rights when you need them.** Using a standard licence beyond its terms takes money from the photographer as well as creating legal risk.

## Cheaper ways to get original photos

If stock doesn't fit, original photography costs less than most people expect, and it's the only route that guarantees you own the provenance trail outright.

**Book a local photographer for a half day.** Emerging photographers, photography students and portfolio-builders often quote well below established studios. Get two or three quotes, agree usage rights in writing, and ask for raw files or a contact sheet as part of the deliverable.

**Set up a repeat arrangement.** A quarterly half-day with the same photographer builds a consistent library and usually earns a better rate than one-off bookings. Plan each session around a shot list: team, workspace, product in use, process details, seasonal scenes.

**Rent the studio and gear.** Hourly studio hire and camera rental houses exist in most Australian capital cities. A borrowed backdrop and two rented lights cover most product work.

**Shoot it yourself.** A recent phone in good daylight handles product, workspace and behind-the-scenes images well. Shoot near a window, wipe the lens, shoot more frames than you think you need, and keep the originals. Google's Pixel 10 adds Content Credentials to every JPEG it captures ([Security Affairs, September 2025](https://securityaffairs.com/182068/security/google-pixel-10-adds-c2pa-to-camera-and-photos-to-spot-ai-generated-or-edited-images.html)), which gives you provenance from the first frame.

Whichever route you take, keep the raw files in a dated folder. They are your proof if anyone ever questions an image.

## Auditing your brand image library

If your site or brand folder has years of stock in it, some of it may be generated, especially anything bought after 2023 from libraries that accept AI. An audit doesn't need special software.

1. **Export a list** of every image on the site and in the shared brand folder, with filenames and source if known.
2. **Batch-check metadata** with ExifTool and flag any file containing trainedAlgorithmicMedia, compositeWithTrainedAlgorithmicMedia or compositeSynthetic.
3. **Check sources.** Anything from Pixabay, Adobe Stock or an unknown origin goes into a closer-look pile.
4. **Prioritise by risk.** Testimonials, team pages, case studies and anything presented as real customers, staff or events come first. A generated image on a "meet the team" page is a trust problem even if it's legal.
5. **Replace or disclose.** Swap in original photography where authenticity matters. Where an AI image is fine but undisclosed, add a caption or alt text note.
6. **Fix the intake.** Add "source URL, licence, and AI status" to your asset notes going forward.

> **Rule of thumb:** If an image implies "this happened" or "this is us", it needs to be real. If it's clearly decorative, AI may be fine, as long as you're honest about it.

If you tell customers your images are real, be specific. "All product photos shot in our Brunswick studio" is credible. "100% authentic" with no detail isn't. Some brands now publish a short imagery policy in the site footer, and keeping Content Credentials intact on your own photos lets anyone check the claim.

The libraries that ban AI are a good starting point, and our [directory of free stock sites](https://allthefreestock.com/) notes which ones do. For anything that has to stand up to questions, the checklist above and a photographer you can email will do more than any filter.
