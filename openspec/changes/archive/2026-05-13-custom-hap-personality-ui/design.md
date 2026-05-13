## Context

The homepage currently presents HAP with a single, fixed personality. To increase engagement, we're adding a user-facing control that allows visitors to select from multiple personality profiles. This feature lives entirely on the homepage for now; extending to the 404 page is a future consideration.

## Goals / Non-Goals

**Goals:**

- Enable users to discover and experiment with different HAP personality variants
- Persist personality preference so it survives page navigation within a session
- Keep the feature lightweight and non-intrusive (visual prominence TBD with spec)
- Provide a foundation for future personality-driven features (e.g., personality-specific roasts)

**Non-Goals:**

- Integrate personality selection with the 404 page (future feature)
- Fetch personality profiles from an API (profiles are hardcoded)
- Create a personality customization UI (user-created personalities)
- Track or analyze which personalities are most popular

## Decisions

**Decision 1: Store personality profiles in a JavaScript data structure**

- Profiles are simple and don't need server persistence
- Avoids API calls; faster UX
- Alternative considered: Fetch from a JSON file (adds complexity without benefit for MVP)

**Decision 2: Persist selection to localStorage under key `hap-personality`**

- Enables persistence across navigation within the same session
- No server state required
- Alternative considered: URL query params (visible in history, harder to persist)
- Note: If 404 page integration happens later, we can read the same localStorage key

**Decision 3: Use a dropdown (`<select>`) for the UI control**

- Compact and familiar pattern
- Clear label and selected state
- Alternative considered: Radio buttons (more prominent but take up more space)

**Decision 4: Place selector in the header or footer**

- Header placement signals it's a site-wide preference
- Footer placement is less intrusive but harder to discover
- Will be refined during implementation based on layout

**Decision 5: Hardcode three personality profiles for MVP**

- "Friendly HAP" (warm, encouraging)
- "Sarcastic HAP" (witty, dry humor)
- "Technical HAP" (precise, detail-oriented)
- Future: extend the profiles array when adding new personalities

## Risks / Trade-offs

**[Risk] Users don't notice the personality selector**
→ Mitigation: Add clear label and place in a discoverable location; consider visual design during implementation

**[Risk] localStorage may be disabled in user's browser**
→ Mitigation: Gracefully degrade to default personality; feature remains functional (just not persistent)

**[Risk] Scope creep: personality selection drives requests to customize roasts per personality**
→ Mitigation: Document as MVP in the proposal; future serverless function changes are out of scope

**[Trade-off] Hardcoding profiles vs fetching from API**
→ Rationale: Simpler for MVP; no network latency; easier to test
