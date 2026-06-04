# Skerry Signal HVAC Halifax

This repository contains a static single-page lead generation website for HVAC services in Halifax, Nova Scotia. The site is designed as the first Skerry Signal proof-of-concept asset for homeowner lead capture and contractor outreach.

## Site Purpose

The page captures Halifax-area homeowner requests for furnace repair, AC service, heat pump work, duct cleaning, new HVAC installation, and emergency HVAC help. It is owned by Skerry Signal, a Strandway Ventures lead generation property, and is intended to route qualified homeowner requests to an assigned local HVAC contractor.

## Files

| File | Purpose |
|---|---|
| `index.html` | Main landing page and lead capture form. |
| `privacy.html` | Placeholder privacy policy for PIPEDA-oriented launch compliance. |
| `terms.html` | Placeholder terms page clarifying Skerry Signal's referral role. |
| `robots.txt` | Basic crawler instructions. |
| `sitemap.xml` | Initial sitemap using the target domain placeholder. |

## Form Endpoint Note

The lead form in `index.html` posts directly to the shared Cloudflare Worker endpoint:

```html
<form class="lead-form" action="https://leads.skerrysignal.ca/lead" method="POST">
```

This endpoint is a placeholder until the Skerry Signal Cloudflare Worker is confirmed live. If the endpoint changes, update only the `action` attribute in `index.html` and keep the hidden fields intact so the lead source remains identifiable.

## Hostinger Deployment Instructions

This repository is intentionally public and root-level because the current test is to connect Hostinger directly to a public GitHub repository.

1. In Hostinger, create or select the website that will serve the HVAC Halifax property.
2. Choose the GitHub deployment option and connect this public repository: `strandwaysystems-cpu/skerry-signal-hvac-halifax`.
3. Use the repository root as the publish directory. There is no build command because this is plain static HTML/CSS/JS.
4. After deployment, point the selected domain or test subdomain to Hostinger as instructed by Hostinger.
5. Submit a test form request only after the Cloudflare Worker endpoint at `https://leads.skerrysignal.ca/lead` is confirmed live.

## Compliance Notes

The launch page includes CASL consent language below the submit button and a PIPEDA-oriented privacy note explaining that the user's information is kept private and shared only with the assigned contractor. The Privacy Policy and Terms of Service pages are placeholder launch documents and should be reviewed before paid traffic or scaled outreach.

## Build Standard

Static HTML/CSS/JS only. No WordPress, no framework, and no package installation required.
