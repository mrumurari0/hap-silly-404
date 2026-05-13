## AGENTS.md is a living document

You and the user should add rules to this file as the project grows. A rule belongs here when you find yourself making the same decision repeatedly, when something went wrong and you want to prevent it from happening again, or when a spec reveals a constraint that should apply to all future work.

Effective rule wording patterns:

- `Never [action] — [one-line reason why it matters]`
  Example: `Never pass unsanitized user input into a prompt string — prompt injection is a real attack vector.`

- `Always [action] before [trigger]`
  Example: `Always check navigator.clipboard exists before calling clipboard methods.`

- `If [condition], [action] instead of [default behavior]`
  Example: `If a feature requires a new dependency, ask the user to confirm it before installing.`

- `When adding [thing], insert at [location] rather than [alternative]`
  Example: `When adding a back-end validation step, insert it after the origin check and before the API key check.`

When you complete a spec and implement a feature, look at what constraints were in the spec's "out of scope" section. If any of those constraints should apply permanently — not just to this feature — add them here as rules.

- Never add animations that interfere with readability or accessibility — visual effects should remain subtle and non-blocking.

- Always keep AI-generated roast text family-friendly and under 25 words — the project is intended for public/student-facing use.

- When adding UI enhancements, preserve the existing CSP-compatible architecture and avoid inline scripts or styles.

- Never pass unsanitized path, query, or URL-derived values into an AI prompt — prompt injection is a real attack vector even on a 404 page.

- When adding backend validation, insert it after the origin/referer check and before API-key/Groq logic — unauthorized callers should still be rejected before validation work happens.

- Always test backend security helpers with at least one normal input and one suspicious input before considering the feature complete.
