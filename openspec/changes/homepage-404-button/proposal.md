## Why

The homepage currently has no direct way to experience the 404 roast feature. Adding a prominent call-to-action button lets visitors discover and try the 404 page without needing to navigate manually, increasing engagement with the core feature.

## What Changes

- Add a "Try the 404 Roast" button in the hero section of `index.html`
- Button navigates to the 404 page in the same tab
- Style button consistently with the site's existing design system

## Capabilities

### New Capabilities

- `404-roast-cta`: A call-to-action button on the homepage that links to the 404 page, making the roast experience easily discoverable for visitors

### Modified Capabilities

- (none)

## Impact

- `index.html` — add button markup in hero section
- `css/style.css` — add button styling (or reuse existing button styles if available)
- No serverless function changes; no new dependencies
