# Copilot Instructions — Prompt to Prototype Challenge

> Purpose: Help users build a prototype in under an hour using AI assistance. Keep scope minimal. Accessibility-first approach.

## Repo Context
- Two prototyping paths: **Option A** (single-file HTML/JS) or **Option B** (Markdown-first document)
- Objective: one clear user action or artifact
- Keep output small, readable, and accessible. Avoid unnecessary complexity.

## Option A: Code a Web Page
- Single HTML file with embedded CSS and JS
- No build step, no terminal required
- Works with screen readers and zoom
- Great for pairing and co-creation

## Option B: Create a Document
- Markdown-first artifact
- Focus on language, structure, clarity
- Copilot acts as co-author
- Great for dyslexia, fatigue, cognitive overload

## Guardrails
- No heavy frameworks unless explicitly requested.
- Minimize dependencies. Plain HTML/CSS/JS is preferred.
- Keep files flat. One file is fine until MVP works.
- Prioritize accessibility (semantic HTML, ARIA labels, good contrast).

## Build Flow (ask the user step-by-step)
1. **Confirm the goal** in one sentence.
2. **Sketch the structure** (for code: HTML layout; for docs: outline).
3. **Build the core content** (main interaction or main sections).
4. **Add one finishing touch** (styling, validation, or polish).
5. **Review** for accessibility and clarity.

## Prompts to Use with Me (copy/paste)
- "Given this idea: <idea>, propose a *one-hour prototype* with 3–5 steps."
- "Generate minimal HTML/CSS/JS to implement this feature. No frameworks."
- "Help me structure this document with clear headings and accessible formatting."
- "Review this for accessibility issues and suggest improvements."
- "Summarize what we built in 3-5 bullets for a README."

## Quality Bar
- Opens directly in browser (for Option A) or renders in Markdown preview (for Option B).
- No errors in browser console.
- Accessible to screen readers and keyboard users.

## Accessibility Focus
- Use semantic HTML elements (header, main, nav, button, etc.)
- Include ARIA labels where appropriate
- Ensure good color contrast
- Support keyboard navigation
