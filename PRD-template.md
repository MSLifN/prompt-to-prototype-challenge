# [Your Project Name]

> **Quick PRD Template for 1-Hour MVPs**
> 
> Fill this out to guide your Copilot prompts. Keep it simple and focused!

---

## 📝 One-Sentence Description

[What does your MVP do? Who is it for?]

**Example:** "A speed reading app where users paste text and read words one-at-a-time with adjustable speed."

---

## 🎯 Core User Action

[What is the ONE main thing users will do?]

**Example:** "Paste text, set reading speed, and read words displayed one at a time."

---

## ✨ MVP Features (Choose 3-5 Max)

Keep your scope small! Only include features essential to demonstrate your core value.

1. [ ] [Feature 1]
2. [ ] [Feature 2]
3. [ ] [Feature 3]
4. [ ] [Feature 4]
5. [ ] [Feature 5]

**Example:**
1. [ ] Text input area for pasting content
2. [ ] Speed slider (50-500 words per minute)
3. [ ] Start/Pause/Reset buttons
4. [ ] Single-word display with smooth transitions
5. [ ] Progress indicator showing words remaining

---

## 🧩 UI Components Needed

List the visual components you'll need to build.

- [ ] [Component 1]
- [ ] [Component 2]
- [ ] [Component 3]

**Example:**
- [ ] Header with app title and logo
- [ ] Text input area (textarea)
- [ ] Speed control slider with label
- [ ] Control buttons (Start, Pause, Reset)
- [ ] Word display card (large, centered)
- [ ] Progress bar or counter

---

## 💾 Data/State Requirements

What information needs to be tracked in your app's state?

**Example:**
- `text` - The full text to be read (string)
- `words` - Array of words split from text
- `currentWordIndex` - Which word is being displayed (number)
- `isPlaying` - Whether reading is active (boolean)
- `wordsPerMinute` - Reading speed (number, default 250)

---

## 🎨 Branding & Style

**Colors:**
- Primary: #[hex code]
- Secondary: #[hex code]
- Background: #[hex code]
- Text: #[hex code]

**Vibe/Mood:** [Modern and clean? Playful? Professional?]

---

## 🚫 Out of Scope (For Later)

List features you WON'T build in this MVP but might add later.

**Example:**
- User accounts and saved texts
- Text-to-speech audio
- Reading statistics/analytics
- Multiple reading modes (sentence, paragraph)
- Mobile app version

---

## ⏱️ Time Budget (1 Hour Total)

- **Planning & PRD:** 10 minutes ✓
- **Initial component structure:** 10 minutes
- **Core functionality:** 15 minutes
- **Styling & polish:** 10 minutes
- **Testing & bug fixes:** 10 minutes
- **Deploy:** 5 minutes

---

## 📋 Success Criteria

My MVP is complete when:

- [ ] All MVP features listed above work
- [ ] No errors in browser console
- [ ] Looks decent on desktop and mobile
- [ ] Can be deployed to a live URL
- [ ] README explains what it does and how to run it

---

## 🤖 Using This PRD with Copilot

**Step 1:** Fill out this template with your idea

**Step 2:** Use Copilot Chat
```
Prompt: "Based on this PRD [drag PRD.md here], create a React component 
in App.jsx that implements all the features. Use inline styles and keep 
it in one file."
```

**Step 3:** Use Inline Chat (Ctrl+I)
Select specific code and ask for changes:
- "Add onClick handler for this button"
- "Add validation to this input"
- "Make this responsive for mobile"

**Step 4:** Polish with Chat
```
Prompt: "Update the styles to match my branding colors and make it look 
modern and clean."
```

---

**💡 Pro Tip:** This PRD is your guide. Reference it when prompting Copilot to keep your MVP focused and on track!
