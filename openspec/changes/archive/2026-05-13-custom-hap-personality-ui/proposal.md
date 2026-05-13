## Why

HAP's personality is fixed, but allowing visitors to choose their preferred interaction style would make the site more engaging and personalized. Users should be able to select which version of HAP they interact with — enabling playful experimentation and increasing time spent on the site.

## What Changes

- Add a personality profile selector UI on the homepage
- Store the selected personality preference in `localStorage` so it persists across visits
- Create at least three distinct personality profiles (e.g., "Friendly HAP", "Sarcastic HAP", "Technical HAP")
- Display the currently selected personality with a clear label

## Capabilities

### New Capabilities

- `personality-selector-ui`: A UI control on the homepage that allows users to select and switch between different HAP personality profiles, with persistence to localStorage

### Modified Capabilities

- (none)

## Impact

- `index.html` — add personality selector markup
- `css/style.css` — add selector styling
- `js/` — may need a new module for personality profile management (or extend existing JS)
- No serverless function changes required for MVP; personality persistence happens in the browser
