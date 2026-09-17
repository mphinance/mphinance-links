# mphinance — Link Hub

A custom link-in-bio page for **@mphinance** — replaces the old mphinance.com
personal site with something lighter, faster, and fully owned.

- Single static `index.html` — no build step, no dependencies, no tracking.
- On-brand aesthetic: slate + cyan "terminal" palette, live ticker tape,
  glowing monogram avatar, hover sparklines.
- Built-in **QR code** (`assets/qr.png`) linking back to this page — scan, save, share.
- Hosted free on **GitHub Pages**, custom domain `mphinance.com`.

## Edit your links

**You only ever edit `config.js`.** Never touch `index.html` or the CSS.

Open `config.js` and you'll see your name, bio, link sections, and socials laid
out in plain English. To add a link, copy one of the `{ ... }` blocks, change
the `title`, `sub`, and `url`, pick an `icon` from the list at the bottom of the
file, and save. Reorder by moving blocks up or down. That's the whole job.

## Deploy

Any push to `main` auto-publishes via GitHub Pages. This repo is set up for
the custom domain `mphinance.com` (see `CNAME`) — point your DNS at GitHub
Pages and it goes live there instead of the default `mphinance.github.io/mphinance-links/` URL.

**DNS records needed at your registrar** (see `CNAME` for the apex domain):

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `mphinance.github.io` |

Until DNS is repointed, the old `mphinance.com` (the `apex-mphinance` container
on the coolify box) keeps serving live traffic — this repo doesn't touch that.

## Regenerate the QR code

If the live URL ever changes, regenerate `assets/qr.png`:

```bash
pip install qrcode pillow
python -c "import qrcode; qrcode.make('https://mphinance.com/').save('assets/qr.png')"
```

---
Built for the community. Educational content only — not financial advice.
