# Free Tier Quick Reference

**🎯 Building with GitHub Copilot Free Tier**

This page gives you a quick overview of the free tier resources available.

---

## 📚 Documentation Map

### For Beginners: Start Here
1. **[README.md](../README.md#-free-tier-quickstart)** - 5-minute quickstart
2. **[PRD-template.md](../PRD-template.md)** - Fill this out first (10 min)
3. **[free-tier-workflow.md](free-tier-workflow.md)** - Complete guide (bookmark this!)
4. **[examples/](../examples/)** - Reference projects to learn from

### For Step 6 Participants
- **[code-prototyping.html](code-prototyping.html#free-tier-workflow-heading)** - Section 6.8 "Free Tier Workflow"
- Look for the 📘 blue callout boxes throughout Step 6

### For Reference
- **[RESEARCH-FINDINGS.md](../RESEARCH-FINDINGS.md)** - Detailed research and rationale
- **[vibe-coding-guide.md](vibe-coding-guide.md)** - Original beginner guide

---

## ⚡ The Three Tools You Have

### 1. 💬 Copilot Chat
**Open:** Ctrl+Shift+I or click chat icon  
**Use for:** Getting new code, asking questions, generating components

**Example Prompts:**
```
"Create a React quiz component with 5 questions and score tracking"
"How do I validate an email in JavaScript?"
"Based on PRD.md, create the main app structure"
```

### 2. ✏️ Inline Chat
**Open:** Select code, press Ctrl+I (Cmd+I on Mac)  
**Use for:** Modifying specific sections, quick edits

**Example Prompts:**
```
"Add onClick handler"
"Make this responsive for mobile"
"Add form validation"
```

### 3. ⚡ Code Completions
**Use:** Start typing, press Tab to accept suggestions  
**Use for:** Line-by-line coding with AI assistance

**Tip:** Write comments first, let Copilot suggest the code

---

## 🚀 30-Minute Workflow

```
┌─────────────────────────────────────────┐
│ 1. PLAN (5 min)                         │
│    Fill out PRD-template.md             │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ 2. GENERATE (5 min)                     │
│    Chat: "Based on PRD, create..."     │
│    Paste into App.jsx                   │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ 3. WIRE UP (10 min)                     │
│    Inline Chat: Add functionality       │
│    Test as you go                       │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ 4. POLISH (5 min)                       │
│    Chat/Inline: Apply styling          │
│    Fix any issues                       │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│ 5. DEPLOY (5 min)                       │
│    npm run build                        │
│    Deploy to Vercel/Netlify             │
└─────────────────────────────────────────┘
```

---

## 💡 Quick Tips

**Prompting:**
- ✅ Be specific: "Create a contact form with name, email, message fields and validation"
- ❌ Too vague: "Make a form"

**Context:**
- Drag your PRD.md into Chat before asking questions
- Reference existing code: "Update the button in App.jsx to..."

**Iterating:**
- Build one feature at a time
- Test frequently (after each feature)
- Use Inline Chat for tweaks (faster than regenerating)

**Styling:**
- Tell Copilot your colors: "Primary #3b82f6, Background #f9fafb"
- Ask for specific styles: "Make this modern and clean"

---

## 📋 Success Checklist

Your MVP is complete when:

- [ ] All features from PRD work
- [ ] No errors in browser console (press F12)
- [ ] Looks good on mobile (resize browser)
- [ ] Deployed to live URL
- [ ] README explains what it does

---

## 🔧 Common Issues

### "Copilot isn't suggesting anything"
- Check Copilot icon in status bar (bottom right)
- Try adding a comment describing what you want
- Make sure you're signed in to GitHub

### "Code has errors"
Copy error message, paste in Chat:
```
"I got this error: [paste error]. How do I fix it?"
```

### "Not sure what to build"
Check the examples:
```
examples/PRD-speed-math-quiz.md
```

---

## 📖 Full Resources

| Document | Purpose | Time |
|----------|---------|------|
| [free-tier-workflow.md](free-tier-workflow.md) | Complete guide with examples | 15 min read |
| [PRD-template.md](../PRD-template.md) | Planning template | 10 min to fill |
| [code-prototyping.html](code-prototyping.html) | Step 6 official guide | 20 min read |
| [examples/](../examples/) | Reference projects | 5 min per example |

---

## 🎓 Learn by Example

**Want to see the workflow in action?**

1. Read: `examples/PRD-speed-math-quiz.md`
2. Follow: The prompts in `free-tier-workflow.md` (quiz walkthrough)
3. Build: Your own version
4. Compare: See what's different

---

## 🆘 Need Help?

1. Check [free-tier-workflow.md troubleshooting section](free-tier-workflow.md#troubleshooting-common-issues)
2. Review the [example projects](../examples/)
3. Ask in Copilot Chat: "How do I [specific question]?"

---

**Remember:** The free tier is powerful enough to build impressive MVPs. Focus on clarity in your prompts and iterate quickly! 🚀
