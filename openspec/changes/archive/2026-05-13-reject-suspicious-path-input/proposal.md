# Proposal

## Summary

Add backend validation for suspicious path-style input before any future prompt usage in `netlify/functions/insult.mjs`.

## Problem

Future prompt-based features could accidentally allow prompt injection or script-like input into AI prompts.

## Solution

Add validation logic that detects suspicious patterns such as:

- `<script>`
- `ignore previous instructions`
- `javascript:`
- excessive special characters

Invalid input should safely return a fallback response without weakening existing security checks.

## Goals

- Preserve current handler security order
- Add safe validation before prompt usage
- Keep graceful fallback behavior
- Add vitest coverage

## Non-Goals

- No database storage
- No authentication system
- No frontend UI changes
