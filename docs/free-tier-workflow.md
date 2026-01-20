# Free Tier Workflow Guide

**Build Your MVP with GitHub Copilot Free Tier**

This guide is specifically designed for participants using **GitHub Copilot Free Tier**. You'll learn how to build a working prototype using only the core features available to you.

---

## What's Available in Free Tier?

✅ **You Have Access To:**
- **Code Completions** - Gray text suggestions as you type (press `Tab` to accept)
- **Copilot Chat** - Ask questions and get code snippets (Ctrl+Shift+I or click chat icon)
- **Inline Chat** - Edit code in context (Ctrl+I or Cmd+I)

❌ **Not Available (Paid Features):**
- Agent mode and custom agents (@agent, @idea-generator, etc.)
- Slash commands (/install, /build, /start, etc.)
- Copilot Edits (multi-file editing mode)

**Good news:** These three free features are powerful enough to build a complete MVP in under an hour!

---

## The Free Tier Development Workflow

### Phase 1: Setup & Planning (5-10 minutes)

#### 1. Clone the Starter Repo
```bash
git clone https://github.com/MSLifN/prompt-to-prototype-challenge
cd prompt-to-prototype-challenge
npm install
npm run dev
```

#### 2. Create Your PRD (Product Requirements Document)

**Why?** Having a clear plan helps you prompt Copilot more effectively.

**How:** Create a file called `PRD.md` in your project root with this template:

```markdown
# [Your Project Name]

## One-Sentence Description
[What does your MVP do? Who is it for?]

## Core User Action
[What is the ONE main thing users will do? e.g., "Answer 5 quiz questions and see their score"]

## MVP Features (Choose 3-5 Max)
1. [Feature 1 - keep it simple]
2. [Feature 2]
3. [Feature 3]

## UI Components Needed
- [ ] [Component 1 - e.g., Header with title]
- [ ] [Component 2 - e.g., Quiz question display]
- [ ] [Component 3 - e.g., Results screen]

## Data/State Requirements
- [What information needs to be stored? e.g., "Array of 5 questions", "Current score", "Current question index"]

## Out of Scope (For Later)
- [List features you WON'T build in the MVP]
```

**Pro Tip:** Use **Copilot Chat** to help you create your PRD:

```
Prompt: "I want to build a [your idea]. Help me create a simple PRD 
with: one-sentence description, one core user action, 3 MVP features, 
UI components needed, and data requirements. Keep it focused for a 
1-hour build."
```

### Phase 2: Build Your MVP (30-40 minutes)

#### Step 1: Start with the UI Structure (10 min)

**Use Copilot Chat** to generate your initial component structure:

**Example Prompt:**
```
Based on my PRD, create a React component for [your app name] with:
- A main container
- [List your UI components from PRD]
- Basic styling inline (clean, modern look)
- State variables for [your data requirements]

Keep it in a single App.jsx file for now.
```

**How to use it:**
1. Open Copilot Chat (Ctrl+Shift+I)
2. Drag your `PRD.md` file into the chat
3. Send the prompt above
4. Copy the generated code into `src/App.jsx`

#### Step 2: Wire Up Interactivity (10-15 min)

**Use Inline Chat** to add functionality to specific parts:

1. **Select a button or form** in your code
2. **Press Ctrl+I** (Windows) or Cmd+I (Mac)
3. **Type what you want:**
   - "Make this button advance to the next question"
   - "Add form validation to check if email is valid"
   - "Add a click handler that updates the score"

**Example Inline Chat prompts:**
- "Add onClick handler that increments the score and moves to next question"
- "Add onChange handler to track user input in state"
- "Add validation that shows error message if field is empty"

#### Step 3: Test and Iterate (5 min)

1. Open `http://localhost:5173` in your browser
2. Try every button, form field, and interaction
3. Check the browser console for errors (F12)
4. Fix issues using **Copilot Chat**:

```
Prompt: "I'm getting this error: [paste error message]. 
How do I fix it in my [specific component/function]?"
```

#### Step 4: Add Polish (5-10 min)

**Use Chat and Inline Chat together:**

**For styling:**
```
Chat Prompt: "Update the styles in my App component to use these colors:
- Primary: #[your brand color]
- Background: #[background color]
- Text: #[text color]
Make it look modern and clean."
```

**For UX improvements:**
- Select a button → Inline Chat: "Add hover effect"
- Select a loading area → Inline Chat: "Add a loading spinner"
- Select a form → Inline Chat: "Add success message after submit"

### Phase 3: Finalize (10-15 minutes)

#### Step 1: Final Testing
- [ ] Click through every interaction
- [ ] Test on mobile (resize browser window)
- [ ] Check console for errors/warnings
- [ ] Verify all MVP features work

#### Step 2: Deploy (Optional but Recommended)

**Quick Deploy with Vercel (5 min):**
1. Build your app: `npm run build`
2. Sign up at [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Get your live URL!

**Alternative:** GitHub Pages, Netlify (see deployment section in docs)

#### Step 3: Document
Update your README with:
- What you built
- How to run it (`npm install`, `npm run dev`)
- Live demo link
- Screenshots (optional)

---

## Free Tier Best Practices

### 🎯 Prompting Tips for Chat

**Be specific and provide context:**
❌ Bad: "Create a form"
✅ Good: "Create a contact form with name, email, and message fields. Add validation and show success message."

**Reference your PRD:**
✅ "Based on my PRD.md, create the quiz component that displays one question at a time"

**Iterate in small steps:**
✅ "Now add a progress bar showing which question the user is on"

### ⚡ Using Inline Chat Effectively

**Select the exact code you want to change, then:**
- "Add error handling"
- "Make this responsive for mobile"
- "Add a loading state"
- "Fix this accessibility issue"

### 📝 Using Code Completions

**Write descriptive comments:**
```javascript
// Function to calculate the final quiz score based on correct answers
```
Press Enter, and Copilot will suggest the implementation. Press Tab to accept.

**Start typing and let Copilot finish:**
```javascript
const handleSubmit = (e) => {
  // Copilot will suggest the rest
```

---

## Common Patterns with Example Prompts

### 1. Quiz/Survey App
**Chat Prompt:**
```
Create a quiz app with:
- Array of 5 questions with multiple choice options
- Display one question at a time
- Track score
- Show results screen at the end
- Next/Previous buttons
Keep all logic in one component using React hooks.
```

### 2. Form with Validation
**Chat Prompt:**
```
Create a multi-step form with:
- Step 1: Name and email with validation
- Step 2: Preferences (checkboxes)
- Step 3: Review and submit
- Progress indicator
- Store data in state
```

### 3. Data Dashboard
**Chat Prompt:**
```
Create a simple dashboard that:
- Shows 4 metric cards (use mock data)
- Has a filter dropdown to change time period
- Updates metrics when filter changes
- Uses modern card-based layout
```

### 4. Interactive Calculator/Tool
**Chat Prompt:**
```
Create a budget calculator with:
- Input fields for income and expenses
- Real-time calculation of remaining budget
- Visual progress bar
- Warning when over budget
```

### 5. Landing Page
**Chat Prompt:**
```
Create a landing page with:
- Hero section with headline and CTA button
- Features section (3 cards)
- Simple contact form
- Footer
Use inline styles and keep it in one component.
```

---

## Troubleshooting Common Issues

### "Copilot isn't suggesting anything"
✅ Check the Copilot icon in VS Code status bar (bottom right)
✅ Make sure you're signed in to GitHub
✅ Try typing a comment describing what you want
✅ Press Enter and wait for suggestions

### "Chat gives me code that doesn't work"
✅ Copy the error message
✅ Ask in Chat: "I got this error: [error]. How do I fix it?"
✅ Make sure you've provided enough context about your project

### "Inline Chat isn't editing what I want"
✅ Select the exact code block you want to modify
✅ Be specific: "Add onClick handler to this button that toggles isOpen state"
✅ If it's wrong, press Escape and try again with clearer instructions

### "My app has bugs"
✅ Check browser console (F12) for error messages
✅ Ask Chat: "Debug this code: [paste the problematic code]. It should [describe expected behavior] but it's [describe actual behavior]"

---

## Time Management Tips

**For a 1-Hour MVP:**
- **10 min:** Planning (PRD)
- **10 min:** UI structure (Chat)
- **15 min:** Core functionality (Inline Chat + Completions)
- **10 min:** Styling and polish
- **10 min:** Testing and bug fixes
- **5 min:** Deploy and document

**Stay focused:**
- Build ONE core user flow first
- Don't add features mid-build
- Polish at the end, not during
- Use mock data instead of real APIs

---

## Success Criteria

Your MVP is complete when:
- ✅ All features from your PRD work
- ✅ No errors in browser console
- ✅ Responsive (looks okay on mobile)
- ✅ Can be deployed to a live URL
- ✅ README documents how to run it

**Stretch goals (if time permits):**
- ✅ Add smooth transitions/animations
- ✅ Add accessibility (ARIA labels, keyboard navigation)
- ✅ Add error states and loading indicators

---

## Example: Building a Quiz App (Full Walkthrough)

### Setup (2 min)
1. Create `PRD.md`:
```markdown
# Trivia Quiz App

## Description
A 5-question trivia quiz that shows users their score at the end.

## Core Action
Answer 5 multiple choice questions and see final score.

## Features
1. Display one question at a time
2. Track correct answers
3. Show results screen
4. Restart quiz button

## Components
- Question display
- Answer buttons (4 options)
- Progress indicator
- Results screen

## State
- questions array
- currentQuestionIndex
- score
- showResults (boolean)
```

### Generate Initial Code (3 min)
**Copilot Chat Prompt:**
```
Create a React quiz app based on my PRD.md. Include:
- 5 trivia questions with 4 answer options each (use mock data)
- Show one question at a time
- Track score
- Show results screen at the end
- Clean, modern styling
Keep everything in App.jsx.
```

Copy the generated code into `src/App.jsx`

### Add Interactivity (5 min)
1. Select the answer button code
2. **Inline Chat:** "Add onClick that checks if answer is correct, updates score, and moves to next question"

### Test (2 min)
- Run `npm run dev`
- Click through the quiz
- Check console for errors

### Polish (3 min)
**Inline Chat on different sections:**
- Select question text: "Make this larger and centered"
- Select buttons: "Add hover effect and make them colorful"
- Select results: "Add congratulations message and percentage score"

### Deploy (5 min)
```bash
npm run build
# Deploy to Vercel/Netlify
```

**Total time: ~20 minutes** (You have time for more features!)

---

## Next Steps

After completing your MVP with free tier:
1. Share your deployed link
2. Get feedback from peers
3. Document what you learned
4. Consider upgrading to paid tier for advanced features (agents, multi-file edits)

**Resources:**
- [Copilot Chat documentation](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [Inline Chat guide](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [React documentation](https://react.dev)
- [Vite documentation](https://vitejs.dev)

---

**Remember:** The free tier is powerful enough to build impressive MVPs. Focus on clarity in your prompts, iterate quickly, and have fun building! 🚀
