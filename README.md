# Bengal Garden Nursery

An Astro static landing page based on the supplied West Bengal nursery specification. Green and terracotta art direction, photographic plant collections, entrance animations, responsive navigation, reduced-motion support, plant-care guidance, PIN-code enquiries, and a custom 404 page.

## Status

Published as a **business-content preview** at https://goutamsrkr.github.io/west-bengal-nursery/ . GitHub Actions run 37189752595 successfully built and deployed the Astro site. Live Safari checks verified the hero and collection images, section navigation, responsive menu, and PIN enquiry fallback. Contact details and approved business content remain pending. Core Web Vitals and a full accessibility audit have not been measured.

## Run

Use Node 22.12 or later and npm:

```sh
npm install
npm run dev
npm run build
npm run preview
```

Commit the generated package-lock.json after the first successful installation, and switch the workflow install step to `npm ci` for repeatable subsequent builds.

## GitHub Pages

Target repository: `goutamsrkr/west-bengal-nursery`.
Expected URL after successful deployment: `https://goutamsrkr.github.io/west-bengal-nursery/`.

1. Create that public repository and push this project to `main`.
2. In Settings → Pages, choose **GitHub Actions** as the source.
3. Run the included `Deploy Astro to GitHub Pages` workflow.
4. Verify the build, deployment and live page before sharing.

Configuration follows https://docs.astro.build/en/guides/deploy/github/ . Update `site` and `base` in `astro.config.mjs` if the repository or account changes.

## Business launch

Edit `src/data/business.ts` with approved name, WhatsApp international digits, telephone, address, hours and map URL. Supply approved delivery terms and policies. Keep `preview: true` until approval; this adds a noindex directive and preview notice. All WhatsApp URLs are generated from one value. No fake phone number, customer review, stock status, service district, history, or business statistics are used.

Original nursery photographs and approved testimonials were not supplied; no nursery story, review or gallery is presented as genuine proof. The six collections use explicitly labelled inspiration photography. The single hibiscus spotlight is illustrative; replace or expand with 3–6 owner-approved seasonal choices before business launch. No Bengali translation is published without review.

The PIN form performs local validation and, when configured, opens a WhatsApp draft. It does not store or send data to a server. With no verified number, it explains that contact is pending. No analytics, customer database or payment capability is included.

## Photography credits

Images are served from Unsplash. License: https://unsplash.com/license

- Annie Spratt — https://unsplash.com/photos/green-plants-and-trees-in-greenhouse-aJjzi6xlz24
- Vadim Kaipov — https://unsplash.com/photos/8ZELrodSvTc
- Robert Thiemann — https://unsplash.com/photos/TTaxId0Im2s
- Artur Aldyrkhanov — https://unsplash.com/photos/photo-of-lemon-trees-dYYmeKBM6RU
- id23 — https://unsplash.com/photos/plants-on-balcony-Hvt0KN7lmek
- Katarzyna Korobczuk — https://unsplash.com/photos/green-plants-on-brown-clay-pots-hNu496tDqm0

Source mappings and the hero/first-row collection rendering were verified. Fonts are served from Google Fonts. General care guidance references https://www.rhs.org.uk/plants/types/houseplants/houseplant-101 and https://www.rhs.org.uk/plants/hibiscus/growing-guide .

## Release checks

- Successful Astro production build and Pages deployment.
- Inspect widths 375, 768, 1024 and 1440px; check 200% text enlargement.
- Verify images, menu keyboard operation, anchor focus and reduced motion.
- Test PIN validation, actual WhatsApp destination, phone and directions links.
- Check colour contrast and production performance. Core Web Vitals are targets, not measured claims.
- Replace preview content with approved business information before enabling search indexing.
- Roll back by reverting the release commit and running the Pages workflow again.
