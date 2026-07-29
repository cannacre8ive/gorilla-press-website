# Architecture

## Stack

- React for components and client state.
- React Router for browser-history routing.
- Vite for development and static production builds.
- Plain CSS with documented design tokens.
- Vercel for static hosting and HTTPS production delivery.

## Directory map

```text
.
├── documentation/assets/   # Repository and social preview screenshots
├── public/                 # Publicly served static assets
├── src/
│   ├── components/         # Layout and reusable UI sections
│   ├── data/               # Confirmed site content and production steps
│   ├── pages/              # Route-level views
│   ├── styles/             # Global design system and responsive rules
│   ├── App.jsx             # Route and title definitions
│   └── main.jsx            # React entry point
├── index.html              # Document and social metadata
└── vercel.json             # SPA route rewrite
```

## Routes

`/`, `/labels`, `/cannabis`, `/materials`, `/file-prep`, `/about`, `/quote`, `/contact`, `/privacy`, `/production-terms`, and `/thanks` render client-side pages. Unknown paths render the in-app Not Found state. Vercel rewrites extensionless paths to `index.html`.

## State and data

Content constants live in `src/data/site.js`. Local component state controls the mobile navigation and quote form. There is no database or persistent client state.

## External interface

The quote form sends a JSON `POST` request to the URL configured by `VITE_FORM_ENDPOINT`. The remote service contract must accept the submitted form object and return a successful HTTP status. Secrets must not be embedded in Vite variables because all `VITE_` values are browser-visible.

## Deployment

`npm run build` creates `dist/`. Vercel detects Vite, publishes the static output, and applies the rewrite in `vercel.json` for client-side deep links.
