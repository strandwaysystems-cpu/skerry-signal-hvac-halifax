# Skerry Signal HVAC Halifax

This repository contains the **Hostinger-ready Vite version** of the Skerry Signal HVAC Halifax lead generation website. It is designed as the first Skerry Signal proof-of-concept asset for homeowner lead capture and contractor outreach in Halifax, Nova Scotia.

## Site Purpose

The page captures Halifax-area homeowner requests for furnace repair, AC service, heat pump work, duct cleaning, new HVAC installation, and emergency HVAC help. It is owned by Skerry Signal, a Strandway Ventures lead generation property, and is intended to route qualified homeowner requests to an assigned local HVAC contractor.

## Framework and Hostinger Compatibility

Hostinger rejected the first plain-static repository because it did not detect a supported framework. This version uses **Vite**, one of Hostinger's supported JavaScript framework/build options, while preserving the same static landing page behavior.

| Path | Purpose |
|---|---|
| `index.html` | Vite entry HTML with metadata and `#app` mount point. |
| `src/main.js` | Injects the landing page markup and activates smooth scrolling. |
| `src/styles.css` | Site styling migrated from the original inline CSS. |
| `public/privacy.html` | Privacy policy copied into the Vite public output. |
| `public/terms.html` | Terms of Service copied into the Vite public output. |
| `public/robots.txt` | Basic crawler instructions copied into the Vite public output. |
| `public/sitemap.xml` | Initial sitemap copied into the Vite public output. |
| `package.json` | Vite dependency and build scripts. |
| `vite.config.js` | Minimal Vite build configuration using `dist` output. |

## Form Endpoint Note

The lead form in `src/main.js` posts directly to the shared Skerry Signal lead endpoint:

```html
<form class="lead-form" action="https://leads.skerrysignal.ca/lead" method="POST">
```

If the endpoint changes, update only the `action` attribute in `src/main.js` and keep the hidden fields intact so the lead source remains identifiable.

## Hostinger Deployment Instructions

Use these settings when connecting the public GitHub repository in Hostinger.

| Setting | Value |
|---|---|
| Repository | `strandwaysystems-cpu/skerry-signal-hvac-halifax` |
| Branch | `main` after the Vite conversion is merged or pushed to main |
| Framework | `Vite` |
| Install command | `npm install` |
| Build command | `npm run build` |
| Output / publish directory | `dist` |
| Root directory | repository root |

After deployment, point the selected domain or test subdomain to Hostinger as instructed by Hostinger. Submit a test form request only after the lead endpoint at `https://leads.skerrysignal.ca/lead` is confirmed live.

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Compliance Notes

The launch page includes CASL consent language below the submit button and a PIPEDA-oriented privacy note explaining that the user's information is kept private and shared only with the assigned contractor. The Privacy Policy and Terms of Service pages are placeholder launch documents and should be reviewed before paid traffic or scaled outreach.
