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

   Optional: add  note: "text",  next to a section's heading to show a small
   blurb under it.

   Keep the commas exactly where they are. Wrap text in "quotes".
   ============================================================================= */

window.SITE = {

  /* ---- Who you are (top of the page) ---- */
  identity: {
    name:     "Momentum",
    nameEm:   "Phinance",
    tagline:  "The Phund",
    handle:   "@mphinance",
    bio:      "The stock market is a device for transferring money from the impatient to the patient. I build the tools that keep me on the right side of that trade, and write about the times I wasn't.",
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
          sub:   "tradermatrix.pro · the platform I actually trade with",
          url:   "https://www.tradermatrix.pro/?utm_source=mphinance&utm_medium=links",
          icon:  "brain",
          featured: true,
          tag:   "Real money"
        },
        {
          title: "Vero",
          sub:   "vero.tradermatrix.pro · free candlestick trainer. Up or down? No account, no ads.",
          url:   "https://vero.tradermatrix.pro",
          icon:  "book",
          tag:   "Free"
        },
        {
          title: "Trading Tools",
          sub:   "tools.mphinance.com · free screeners, built between trades",
          url:   "https://tools.mphinance.com",
          icon:  "chart"
        },
        {
          title: "TickerTrace",
          sub:   "tickertrace.pro · ETF flows, before the fund tells you",
          url:   "https://tickertrace.pro",
          icon:  "link"
        }
      ]
    },
    {
      heading: "Watch & Listen",
      links: [
        {
          title: "TraderMatrix Live on YouTube",
          sub:   "@TraderMatrixHQ · live sessions and market breakdowns",
          url:   "https://www.youtube.com/@TraderMatrixHQ",
          icon:  "youtube"
        },
        {
          title: "TraderMatrix Live Podcast",
          sub:   "Spotify · the live shows, for your commute",
          url:   "https://open.spotify.com/show/033UCE53GPOXnlyCCSEYNC",
          icon:  "podcast"
        },
        {
          title: "TraderMatrix on X",
          sub:   "@TraderMatrixHQ · updates between the bells",
          url:   "https://x.com/TraderMatrixHQ",
          icon:  "x"
        }
      ]
    },
    {
      heading: "Affiliates",
      note: "Want to support the work? Sign up through these links. It costs you nothing and I get a small kickback.",
      links: [
        {
          title: "Nous Research Portal",
          sub:   "portal.nousresearch.com · the models I run my agents on",
          url:   "https://portal.nousresearch.com/r/mphinance",
          icon:  "brain"
        },
        {
          title: "Webull",
          sub:   "webull.com · the broker behind my trades",
          url:   "https://www.webull.com/s/3KhusgAaGotiu2HckV",
          icon:  "chart"
        },
        {
          title: "tastytrade",
          sub:   "tastytrade.com · options-first broker",
          url:   "https://open.tastytrade.com/signup/?referralCode=XTENHXKC5B",
          icon:  "chart"
        },
        {
          title: "TradingView",
          sub:   "tradingview.com · the charts I live in",
          url:   "https://www.tradingview.com/?aff_id=159450",
          icon:  "chart"
        }
      ]
    },
    {
      heading: "Writing",
      links: [
        {
          title: "The Substack",
          sub:   "mphinance.substack.com · the wins, the losses, and the damn autopsies",
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
          sub:   "@mphinance · vibe-coded with my AI copilot, warts and all",
          url:   "https://github.com/mphinance",
          icon:  "code"
        }
      ]
    }
  ],

  /* ---- Small icon buttons at the bottom. Empty = none. ---- */
  socials: [],

  /* ---- Footer + legal ---- */
  footerName: "Momentum Phinance",
  disclosure: "Educational only, not financial advice. Trading involves real risk of loss, ask my P&L. Some links are affiliate links: using them costs you nothing and buys me a coffee."

  /* =============================================================================
     Available "icon" names you can use above:
       brain      : lightbulb/AI (good for TraderMatrix)
       chart      : line chart (good for tools/indicators)
       link       : generic chain link (use for websites)
       mail       : newsletter / email
       code       : GitHub / code
       book       : course / guide / ebook
       cart       : shopping / store
       discord    : Discord logo
       x          : X / Twitter logo
       youtube    : YouTube logo
       podcast    : microphone (Spotify / podcasts)
     ============================================================================= */
};
