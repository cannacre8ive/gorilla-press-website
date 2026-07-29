# Testing and Release Checklist

## Automated checks

```bash
npm install
npm run build
```

The production build must exit successfully with no unresolved imports.

## Browser checks

- Verify Home renders at desktop width with no console errors.
- Verify layout and navigation at 320 px width.
- Open and close the mobile menu; test focus trap, Escape, and trigger focus restoration.
- Visit every documented route and confirm direct-load/deep-link behavior.
- Confirm the unknown-route page provides a recovery link.
- Tab through links, buttons, and form controls; confirm visible focus.
- Submit an incomplete quote form and check native/inline validation.
- With no endpoint configured, submit valid data and confirm an error appears without navigation to Thanks.
- With a test endpoint configured, confirm successful POST navigation to Thanks.

## Production checks

- Stable production alias returns unauthenticated HTTP 200.
- `/labels` and another deep route return and render successfully.
- `/social-preview.png` returns unauthenticated HTTP 200 and is 1200 × 630.
- HTML includes canonical, robots, Open Graph, and Twitter Card metadata with absolute HTTPS URLs.
- The production page is not protected and does not emit a `noindex` directive.

## Business sign-off still required

- Counsel-reviewed privacy and production terms.
- Confirmed equipment, material/SKU, turnaround, shipping, and pickup details.
- Approved team biographies and production photography.
- Production quote endpoint and secure file-storage policy.
