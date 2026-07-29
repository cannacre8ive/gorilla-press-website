# User Flows

## Primary discovery flow

1. Visitor lands on Home.
2. Visitor reviews the core offer, production fit, typical jobs, process, and materials.
3. Visitor opens Labels, Cannabis, Materials, or File Prep for detail.
4. Visitor chooses **Request a quote**.
5. Visitor completes required job and contact fields.
6. The app posts to `VITE_FORM_ENDPOINT`; success navigates to Thanks, while failure remains on the form with an actionable message.

## File-preparation flow

1. Visitor opens File Prep from navigation.
2. Visitor reviews artwork, cut path, bleed, font, image, color, and specialty-layer guidance.
3. Visitor requests a quote or contacts the business for production help.

## Contact flow

1. Visitor opens Contact or uses the footer email link.
2. Visitor sees the public email, Oregon service region, and by-appointment visit policy.
3. Visitor emails directly or proceeds to quote intake.

## Navigation states

- Desktop: persistent primary links and quote action.
- Mobile: menu button opens a full-screen dialog; Escape or a selected link closes it.
- Keyboard: skip link moves directly to main content; focus is visible throughout.
- Unknown route: Not Found page offers a recovery path.
- Quote endpoint missing or rejected: inline error, no false confirmation.
- Successful quote response: Thanks route is marked `noindex,nofollow`.

## Authentication and onboarding

There is no account system or onboarding sequence in this release.
