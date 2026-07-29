# Design System

## Direction

The interface uses a restrained production-shop aesthetic: dark ink surfaces, warm paper text, olive utility accents, and a narrow process-color registration strip.

## Color tokens

| Token | Value | Use |
|---|---:|---|
| Background | `#0a0a0a` | Page canvas |
| Surface | `#141414` | Cards and panels |
| Elevated | `#1c1c1b` | Inputs and emphasis bands |
| Primary text | `#f0ebdd` | Headlines and body foreground |
| Secondary text | `#c0baad` | Supporting copy |
| Muted text | `#8e8a80` | Metadata |
| Olive | `#a4b06a` | Links, focus, actions |
| Orange | `#d36f3a` | Warnings |
| Error | `#c86b5d` | Validation errors |

## Typography

- Display: Playfair Display, Georgia fallback.
- Body: DM Sans, Arial fallback.
- Labels and technical metadata: DM Mono, monospace fallback.
- Headings use compact line heights; body copy targets a maximum readable measure of 66 characters.

## Layout and spacing

- Content width: 1180 px maximum.
- Desktop page gutter: 24 px; compact viewport gutter: 18 px.
- Primary sections: 88 px vertical spacing, reduced to 64 px below 620 px.
- Breakpoints: 900 px for condensed navigation/grids and 620 px for single-column layouts.

## Components and behavior

- Buttons and cards remain square-cornered to preserve the production-document character.
- Focus-visible controls use a 2 px olive outline with a 3 px offset.
- The mobile menu traps focus, closes with Escape, and restores focus to its trigger.
- Motion is limited to native scrolling and simple state changes; meaning does not depend on animation.

## References

No Figma source is currently attached. The checked-in React/CSS implementation is the source of truth.
