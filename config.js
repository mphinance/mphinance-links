/* =============================================================================
   mphinance — Link Hub config
   -----------------------------------------------------------------------------
   THIS is the only file you need to edit. Add, remove, or reorder links here.
   You never have to touch index.html or any CSS.

   How to add a link:
     1. Copy one of the { ... } blocks inside a section's "links" list.
     2. Change the title, sub (small grey text), and url.
     3. Pick an "icon" from the list at the bottom of this file.
     4. Save. On GitHub the page updates automatically in ~1 minute.

   Keep the commas exactly where they are. Wrap text in "quotes".
   ============================================================================= */

window.SITE = {

  /* ---- Who you are (top of the page) ---- */
  identity: {
    name:     "mphinance",
    nameEm:   "",
    tagline:  "Trader · Builder · Writer",
    handle:   "@mphinance",
    bio:      "Quant trading tools, market research, and the occasional autopsy of a bad trade. Everything I build and write, in one place.",
    monogram: "mp"
  },

  /* ---- Link sections. Each section has a heading and a list of links.
         Reorder links by moving their { ... } blocks up or down.        ---- */
  sections: [
    {
      heading: "Trading",
      links: [
        {
          title: "TraderMatrix",
          sub:   "tradermatrix.pro · options analytics platform",
          url:   "https://www.tradermatrix.pro/?ref=MPHINANCE",
          icon:  "brain",
          featured: true,
          tag:   "Featured"
        },
        {
          title: "Trading Tools",
          sub:   "tools.mphinance.com · screeners, scanners, the good stuff",
          url:   "https://tools.mphinance.com",
          icon:  "chart"
        },
        {
          title: "TickerTrace",
          sub:   "tickertrace.pro · ETF holdings-change tracker",
          url:   "https://tickertrace.pro",
          icon:  "link"
        }
      ]
    },
    {
      heading: "Writing",
      links: [
        {
          title: "The Substack",
          sub:   "mphinance.substack.com · essays, research, market notes",
          url:   "https://mphinance.substack.com",
          icon:  "mail"
        }
      ]
    },
    {
      heading: "Code",
      links: [
        {
          title: "GitHub",
          sub:   "@mphinance · open-source tools and experiments",
          url:   "https://github.com/mphinance",
          icon:  "code"
        }
      ]
    }
  ],

  /* ---- Small icon buttons at the bottom. Empty = none. ---- */
  socials: [],

  /* ---- Footer + legal ---- */
  footerName: "mphinance",
  disclosure: "Content is for educational purposes only and is not financial advice. Trading involves substantial risk of loss. Some links are affiliate links — mphinance may earn a commission at no extra cost to you."

  /* =============================================================================
     Available "icon" names you can use above:
       brain      – lightbulb/AI (good for TraderMatrix)
       chart      – line chart (good for tools/indicators)
       link       – generic chain link (use for websites)
       mail       – newsletter / email
       code       – GitHub / code
       book       – course / guide / ebook
       cart       – shopping / store
       discord    – Discord logo
       x          – X / Twitter logo
     ============================================================================= */
};
