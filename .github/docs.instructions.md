# Copilot Translation Instructions: English to Danish (da-DK)

## Purpose
Copilot must assist in translating this repository's user-facing content, documentation, UI strings, and comments from English to Danish (da-DK), ensuring code behavior and formatting remain intact.

---

## Project-Specific Terminology

Keep these terms in English (brand names / technical terms):
| Term | Keep as | Notes |
|------|---------|-------|
| Copilot | Copilot | Microsoft brand name |
| GitHub | GitHub | Brand name |
| VS Code | VS Code | Brand name |
| Prototype | Prototype | Common in Danish tech |
| MVP | MVP | Abbreviation |
| Prompt | Prompt | Technical term |
| Option A / Option B | Option A / Option B | Keep for consistency |

Translate these terms:
| English | Danish |
|---------|--------|
| Step | Trin |
| Next | Næste |
| Previous | Forrige |
| On this page | På denne side |
| Copy | Kopiér |
| Accessibility | Tilgængelighed |
| Screen reader | Skærmlæser |
| Keyboard navigation | Tastaturnavigation |
| High contrast | Høj kontrast |
| Text to speech | Tekst-til-tale |
| Idea Generation | Idégenerering |
| Research | Research |
| Product Requirements | Produktkrav |
| Branding | Branding |
| Learnings & Resources | Læring & Ressourcer |

---

## File Structure

Danish translations go in `docs/da/` subfolder:
```
docs/
├── index.html              (English)
├── da/
│   ├── index.html          (Danish - lang="da")
│   └── option-b/
│       └── *.html
```

---

## Translation Rules

### 1. What to Translate
- All user-facing text (UI labels, prompts, messages, error messages)
- Documentation (README, guides, Markdown content, inline docs)
- Code comments and docstrings
- **Sample Copilot prompts** - translate to natural Danish

### 2. What **NOT** to Translate or Change
- **Identifiers** (variable names, function names, class names, API names)
- **Keys** (JSON keys, dictionary/hash keys, parameter names)
- **CLI flags**, **enum values**, **internal codes**
- **Placeholders:** `{name}`, `{0}`, `%s`, `{user_name}`, etc. — These must be preserved exactly
- **Code logic**: Structural logic (loops, conditionals, return types) must remain unchanged
- **URLs and file paths**

### 3. Formatting and Structure
- All **Markdown**, **HTML**, and **code blocks** must retain their original structure and syntax
- Bullet points, numbered lists, and headings should be formatted identically to the source
- Ensure translation does **not** break formatting, rendering, or parsing
- Update internal links: `href="index.html"` → `href="index.html"` (relative links stay same)
- Update parent links: `href="../branding.html"` → `href="../branding.html"` (adjust for da/ folder)

### 4. Danish Locale Conventions
- Use **Danish date/time formats** (e.g., `7. januar 2026`, `kl. 14.30`)
- Punctuation, capitalization, and units should follow standard Danish conventions
- Decimal separator is `,` (comma); thousands separator is `.` (dot)
- Use Danish quotation marks where appropriate: „…" or »…« depending on context

### 5. Style and Tone
- Maintain a **friendly, encouraging tone** suitable for workshop participants
- Use **informal address** (du-form) to keep it approachable
- Avoid overly formal language - this is a creative workshop
- Keep instructions clear and actionable

### 6. HTML Attributes
- Set `<html lang="da">` on all Danish pages
- Keep all `id` and `class` attributes unchanged
- Keep `aria-label` attribute names but translate the text content

---

## Examples

### UI String
English: `"Enter your username:"`  
Danish: `"Indtast dit brugernavn:"`

### Navigation
English: `<span class="nav-label">Next</span>`  
Danish: `<span class="nav-label">Næste</span>`

### Sample Prompt (translate naturally)
English:
```
I want to build a simple web app that helps users track their daily water intake.
Help me create an HTML page with a counter and buttons to add glasses of water.
```
Danish:
```
Jeg vil bygge en simpel webapp, der hjælper brugere med at tracke deres daglige vandindtag.
Hjælp mig med at oprette en HTML-side med en tæller og knapper til at tilføje glas vand.
```

### Code Comments (translate comments only)
```javascript
// Fetch data from API
const url = `https://api.example.com/users/${userId}`;
```
Danish:
```javascript
// Hent data fra API
const url = `https://api.example.com/users/${userId}`;
```

---

## Checklist Before Committing Translations

- [ ] All user-facing text and documentation are translated
- [ ] `<html lang="da">` is set on all Danish pages
- [ ] No code identifiers, keys, or logic changed
- [ ] Formatting and markup are unmodified
- [ ] All placeholders are preserved and not translated
- [ ] Danish locale conventions applied (dates, punctuation, etc.)
- [ ] Tone is friendly and encouraging (du-form)
- [ ] Internal links work correctly from `docs/da/` folder
- [ ] Sample prompts are translated to natural Danish

---

For clarifications, consult the project's documentation or maintainers.
