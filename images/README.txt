Ondrela — images folder
=======================

Drop your five image files into this folder using these exact filenames.
The page references these and nothing else.

File                     Used where                            Rendered box      Suggested source size
-----------------------  ------------------------------------  ----------------  ---------------------
ondrela-hero.webp        Opening panel (LCP image)             1120 x 840 (4:3)  2240 x 1680
ondrela-tracker.webp     "Ondrela and the phone in your pocket"  1120 x 840 (4:3)  2240 x 1680
ondrela-benefits.webp    "Nine places to keep an Ondrela card"   1120 x 840 (4:3)  2240 x 1680
ondrela-wallet.webp      "Why Ondrela is a card and not a fob"   1120 x 840 (4:3)  2240 x 1680
favicon.png              Browser tab + app icon                any                512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match 4:3 exactly: nothing is stretched or
   cropped, and the layout will not shift while images load (cumulative
   layout shift stays at zero). Matching the ratio only makes the frame sit
   more tightly around the artwork.

2. Each of the four images appears exactly once, in its own panel with a
   caption underneath. There is no separate photo gallery — four images
   placed across four sections reads better than the same four repeated in
   a grid lower down.

3. The captions are written to match what each file is expected to show:
   - hero: the card, or the exploded view of its layers
   - tracker: the card's position inside a phone's tracker app
   - benefits: the card beside the everyday items it is meant to go in
   - wallet: the card sitting in a wallet slot next to ordinary bank cards
   If a file shows something different, swap the FILES around rather than
   editing the HTML, or tell me and I will rewrite the caption.

4. ondrela-hero.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high", so it is the one file worth compressing
   hardest — aim for under 80 KB. The other three are lazy-loaded and matter
   far less to the speed score.

5. This page is LIGHT (ivory #fcfbf9) and every image frame sits on white,
   so files with white, transparent or pale backgrounds will blend in
   cleanly. Dark-background images will read as solid blocks against the
   paper — if yours are cut out on black, tell me and I will tint the frames
   to suit.

6. Keep the .webp extension. These filenames appear in index.html,
   sitemap.xml and the Open Graph / Twitter meta tags, so renaming one means
   editing three files.

7. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

8. Export WebP at quality 78-82. Beyond that the file grows without a
   visible gain at these rendered sizes.
