/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE. This is the only file you need to touch
 *  to personalise the site: photos, audio, poems, captions,
 *  timeline and the secret message.
 * ─────────────────────────────────────────────────────────────
 */

/** Drop your files into /public/images and /public/audio with these names. */
export const assets = {
  jaProfile: "/images/ja-1.jpg",
  jaMemory: "/images/ja-2.jpg",
  ourSong: "/audio/our-song.mp3",
};

export const intro = {
  name: "Ja",
  subtitle: "A little place I made for you.",
  cta: "Enter, Muse \u2661",
};

export const hero = {
  heading: "For My Favorite Person",
  line: "Some people become memories. Somehow, you became my favorite part of them.",
  scrollHint: "Scroll to discover \u2192",
};

export const poetry = {
  heading: "Words I Couldn't Just Say",
  subtitle: "So I turned them into poems instead.",
  tabs: ["Poem \u2661", "Poem II \u2661"],
  /** Paste your real poems here. Line breaks are preserved. */
  poem1: `PASTE POEM 1 HERE

(This is the poem you recently gave her.
Keep the line breaks exactly how you want them —
they will show up exactly like this.)`,
  poem2: `PASTE POEM 2 HERE

(This is the new poem, written just for this page.)`,
};

export const photos = {
  heading: "Just You",
  subtitle: "Two pictures. Somehow, still not enough.",
  caption1: "The face behind my favorite thoughts.",
  caption2: "My Muse.",
  alt1: "A photo of Ja",
  alt2: "A photo of Ja",
};

export const timeline = {
  heading: "Somewhere Along the Way",
  entries: [
    {
      label: "Then",
      title: "When you were just Ja.",
      note: "Just my best friend.",
    },
    {
      label: "Somewhere Along the Way",
      title: "Something changed.",
      note: "I started realizing that you weren't just someone I cared about.",
    },
    {
      label: "The Moment",
      title: "I finally told you.",
      note: "No pretending. No hiding.",
    },
    {
      label: "Now",
      title: "You said yes.",
      note: "Best friends \u2192 Something more \u2192 Us \u2661",
      final: true,
    },
  ],
};

export const music = {
  heading: "One Song For Us",
  subtitle: "Press play. I'll let the music say the rest.",
  playLabel: "Play our song",
  /** Shown under the player — optional. */
  songTitle: "Our song",
};

export const envelope = {
  heading: "For when you miss me...",
  subtitle: "Open when you miss me \u2661",
  message: `If you're reading this because you miss me,
just know you're probably being missed too.`,
};

export const ending = {
  line: "And that's all I wanted you to know.",
  signature: "\u2661 Qemz \u00d7 Ja \u2661",
  closing: `My favorite person.
My Muse.`,
  footer: "Made with love.",
};
