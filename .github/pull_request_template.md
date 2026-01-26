
# 🤖 Copilot‑Generated PR Review Checklist

## 🔗 Issue Reference
- Closes #<!-- issue number -->
- [ ] PR scope matches the issue scope (no scope creep)

---

## 🔍 Problem Understanding
- [ ] PR clearly addresses the original issue
- [ ] Interpretation of requirements is correct
- [ ] Changes are minimal and focused

---

## ♿ Accessibility & Usability
- [ ] Works with keyboard navigation
- [ ] Screen reader friendly (proper headings, ARIA labels)
- [ ] Instructions are clear and beginner-friendly
- [ ] N/A (explain why)

---

## 📐 Design & Architecture
- [ ] Follows existing project patterns and conventions
- [ ] No unnecessary abstractions or new patterns
- [ ] No silent API or behavior changes
- [ ] Works for GitHub Free users (no Enterprise features)

---

## 🔐 Security & Safety
- [ ] No credentials, secrets, or sensitive data added
- [ ] Input validation handled correctly
- [ ] Auth / permission logic unchanged unless explicitly required

---

## 🧪 Tests & Validation
- [ ] Manual testing completed
- [ ] Automated tests added/updated when appropriate
- [ ] Edge cases considered
- [ ] Renders correctly in GitHub Pages (if docs change)

---

## 📄 Documentation
- [ ] English docs updated if behavior changed
- [ ] Danish docs updated if behavior changed
- [ ] Code comments are accurate and not misleading

---

## 🧹 Code Quality
- [ ] Diff size is reasonable for the task
- [ ] No dead code or unused logic
- [ ] Naming is clear and consistent

---

## 🚩 Common Copilot Red Flags
If any apply, request changes:

- [ ] Very large PR for a small issue
- [ ] Introduces new patterns without justification
- [ ] Overconfident comments ("always", "never", "safe")
- [ ] Tests that don't actually fail without the change
- [ ] Assumes Enterprise features not available to users

---

## ✅ Final Assessment
- [ ] **Safe to merge**
- [ ] **Needs changes** (describe below)
- [ ] **Should not be handled by Copilot next time** (explain why)

**Reviewer notes:**
> ...
