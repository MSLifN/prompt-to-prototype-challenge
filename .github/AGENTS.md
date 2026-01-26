# Coding Agent Instructions — Prompt to Prototype Challenge

> These instructions guide the GitHub Copilot coding agent when working autonomously on issues assigned to it.

## Project Overview

This repository helps users build a prototype in under an hour using AI assistance. There are two prototyping paths:

- **Option A**: Single-file HTML/JS web page (no build step)
- **Option B**: Markdown-first document

## Core Principles

1. **Keep it simple** — Minimal code, minimal dependencies
2. **Accessibility first** — Semantic HTML, ARIA labels, keyboard navigation
3. **One-hour scope** — Every change should be achievable quickly
4. **No frameworks** — Plain HTML/CSS/JS unless explicitly requested

## Folder Structure

```
docs/           # Documentation and guides (HTML pages)
templates/
  option-a/     # HTML/JS template for web prototypes
  option-b/     # Markdown templates for documents
```

## When Working on Issues

### Before Starting
- Read the full issue description and any linked context
- Check if there are scope constraints specified
- Identify which files are in scope for changes

### Code Standards

#### HTML Files
- Use semantic elements: `<header>`, `<main>`, `<nav>`, `<section>`, `<button>`
- Include proper ARIA labels for interactive elements
- Ensure good color contrast (WCAG AA minimum)
- Support keyboard navigation

#### CSS
- Prefer embedded styles in HTML for prototypes
- Use CSS custom properties for theming when appropriate
- Mobile-first responsive design

#### JavaScript
- Keep scripts embedded in HTML for Option A prototypes
- Use vanilla JS — no jQuery, React, or other frameworks
- Add clear comments for complex logic

#### Markdown
- Use clear, hierarchical headings
- Keep paragraphs short and scannable
- Include alt text for any images

### Testing Checklist
Before submitting a PR, verify:
- [ ] Opens directly in browser without errors
- [ ] No console errors
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (test with semantic HTML)
- [ ] Responsive on mobile viewports

## File Restrictions

### Allowed to Modify
- `docs/` — Documentation pages
- `templates/option-a/` — HTML prototypes
- `templates/option-b/` — Markdown documents
- `README.md` — Project documentation

### Do NOT Modify Without Explicit Approval
- `.github/` configuration files
- Any files outside the project scope

## Commit Message Format

Use clear, descriptive commit messages:
```
<type>: <short description>

Examples:
feat: add keyboard navigation to prototype template
fix: improve color contrast on navigation links
docs: update accessibility guidelines
```

## Pull Request Guidelines

- Reference the issue number in the PR description
- Summarize changes in 3-5 bullet points
- Note any accessibility improvements made
- Include before/after screenshots for visual changes

## Common Tasks

### Adding a New Template
1. Create file in appropriate `templates/option-*` folder
2. Include accessibility features from the start
3. Add brief usage instructions in the file header
4. Update README if adding a new template type

### Updating Documentation
1. Maintain consistent styling with existing docs
2. Keep content beginner-friendly
3. Use step-by-step instructions with clear headings
4. Test all links before submitting

## Questions to Ask Yourself

Before submitting any change:
1. Is this the simplest solution?
2. Does it work for someone using a screen reader?
3. Can a beginner understand this code?
4. Would this run in a browser with no build step?
