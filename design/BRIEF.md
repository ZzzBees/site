# zZz Bees — design brief for Claude Design

One page. Honey and honeybees from Culpeper, Virginia. The page exists so people
can learn who we are and how to reach us. Nothing else.

The design comes back as exported HTML/CSS and is rewritten by hand into lean
semantic HTML and one CSS file, so treat the export as a visual spec, not the
final code. Design the phone layout first.

## Hard constraints

1. **At most two photos** from the four in `photos/`. Say which two you used.
2. **No JavaScript.** No carousel, lightbox, menu toggle, or animation that needs a script.
3. **Mobile-first.** Design the phone layout first, then widen it.
4. **Light theme only.** No dark mode.
5. **At most one web font.** Ideally a system font stack. Any web font will be
   self-hosted as a single subsetted woff2, so favor one with a small file.
6. **Fast.** Target: under 300 KB transferred on first view, Lighthouse mobile
   performance 100. Large blurred hero backgrounds and decorative images work
   against this.
7. **The name is written "zZz Bees"** everywhere in text. Not "Zzz Bees", not "ZZZ Bees".
8. **Logo colors are fixed.** Everything else is open. The current site's amber
   header and cards were a first attempt and carry no brand weight.

## Brand assets (`logo/`)

- `zzzbees.png` (824x498) is the real logo: black calligraphic Zs, "bees" in
  yellow script, a small gray "LLC", and a yellow bee with a looping flight
  path. It has a solid white background, not transparency.
- `zzzbees.svg` is a black-only trace of the same mark with no yellow. Do not
  treat it as the color reference.
- Logo colors, sampled from the PNG:
  - Yellow: `#FFF040`
  - Black: `#000000`
  - Background white: `#FFFFFF`

## Photos (`photos/`, all downsized to 1600px on the long side)

- `BeeFrame.jpg` (portrait) — a frame held up against green grass, completely
  covered in bees. The current hero background. Strongest single image.
- `BeeInspection.jpg` (portrait) — an adult and a small child in white bee
  suits inspecting two open hives; the near hive box is hand-painted with
  cartoon bees and "zZz Bees". Warm, personal, tells the family story.
- `AboutBees.jpg` (portrait) — same pair, same painted hive, child reaching
  toward the frames. Near duplicate of BeeInspection; pick one or the other.
- `Honey.jpg` (landscape) — a dozen bottles of honey in front of a blue tile
  backsplash. The labels show a street address and phone number that are NOT
  on this page, so if you use it, crop or place it so the label text is not
  legible.

## Copy

Use this text as written. Line breaks between paragraphs are intentional.

### Hero

**zZz Bees**

Raw honey and honeybees from Culpeper, Virginia.

### Our story

zZz Bees started in the spring of 2023 with two nucleus colonies from
Shenandoah Bee Supply and a first season spent learning how to get them ready
for winter. Both colonies made it through, and 2024 taught us about swarm
management, mostly the hard way.

In 2025 we doubled to eleven colonies going into winter. It was also our first
try at rearing our own queens, which failed, so we bought queens and made
splits instead and learned a lot doing it. All eleven came through the winter.
Today we run around 25 hives, plus five or six young nucs headed by queens we
raised ourselves, and we're working to bring them through this winter.

Our aim is simple: care for our bees as well as we can, produce raw, unfiltered
honey, and put what we earn back into the apiary.

### Honey and bees

Find our honey at Graves Mountain Farm Market in Syria, Virginia.

We're raising nucs for our first spring sales in 2027. Email us if you'd like
to hear when they're ready.

### Contact

zzzbeesva@gmail.com

Culpeper, Virginia

### Footer

© 2026 zZz Bees LLC

## What to hand back

Export the finished page as HTML and CSS and drop the files into
`design/export/` in this repo, then say which two photos you used and which
font, if any. Everything after that is handled here.
