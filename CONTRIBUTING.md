# Contributing

## Local setup

1. Install a current Node.js release.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` only when testing a real quote endpoint.
4. Run `npm run dev`.

## Standards

- Keep business claims tied to confirmed source material.
- Do not commit secrets, real customer submissions, or uploaded artwork.
- Preserve keyboard navigation, focus behavior, semantic headings, and 320 px usability.
- Reuse design tokens and existing components before introducing one-off styles.
- Use `feature/<description>` or `bugfix/<description>` branch names.

## Pull requests

- Keep changes focused and explain user impact.
- Update `CHANGELOG.md` and the README Recent Updates section for material changes.
- Refresh screenshots after visible changes.
- Run the build and the relevant checklist in `TESTING.md` before review.
- Require review for content claims, legal copy, endpoint changes, and deployment configuration.
