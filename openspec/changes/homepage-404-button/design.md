## Context

The homepage (`index.html`) currently has no direct link to the 404 page. The 404 roast feature is the site's core interactive element, but visitors must navigate manually to experience it. This design establishes how to add a discoverable call-to-action button.

## Goals / Non-Goals

**Goals:**

- Enable visitors to navigate from the homepage to the 404 roast page with a single click
- Make the button visually prominent in the hero section
- Use semantic HTML and accessible markup
- Maintain consistency with the site's existing design system

**Non-Goals:**

- Add animation or interactive hover effects
- Create a new button component system (reuse existing styles)
- Change the layout of other homepage elements

## Decisions

**Decision 1: Use semantic anchor (`<a>`) instead of `<button>`**

- An anchor is semantically correct for navigation; a button is for actions that don't navigate
- href="/404" makes the intent clear in the HTML and preserves standard link behavior (bookmarking, opening in new tab, etc.)

**Decision 2: Place button at the bottom of hero section**

- Positions it as a natural next step in the hero content flow
- Gives the hero room to breathe without competing with primary messaging
- Users will see it after reading the main headline/value prop

**Decision 3: Style using existing CSS custom properties**

- Reference `--hap-*` custom properties in `css/style.css` rather than adding new specifics
- Keeps the button consistent with the site's color palette
- Minimizes CSS footprint; no new variables or breakpoints

**Decision 4: Use external CSS file, no inline styles or scripts**

- Per CSP requirement (Content-Security-Policy in netlify.toml forbids inline `<script>`)
- Markup stays in `index.html`, styles in `css/style.css`

## Risks / Trade-offs

**[Risk] Button might distract from other homepage content**
→ Mitigation: Place at the end of hero, use neutral color from existing palette, test visual hierarchy before publishing

**[Risk] Users might not understand the button purpose**
→ Mitigation: Use clear, action-oriented label ("Try the 404 Roast"); add aria-label for screen readers

**[Trade-off] Not opening in new tab**
→ Rationale: User chose same-tab navigation for simpler UX; users can always use Ctrl+Click if they want a new tab
