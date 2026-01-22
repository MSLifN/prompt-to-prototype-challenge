# Vibe Coding with GitHub Copilot Free Tier

**A beginner-friendly guide to building prototypes fast with AI assistance**

> ✅ **Free Tier Compatible**: This entire guide is designed for GitHub Copilot's **free tier**. You only need access to Code Completions, Copilot Chat, and Inline Chat—no paid features required!

---

## What is Vibe Coding?

Vibe coding is a new way of building software where you describe what you want in plain English, and AI helps you write the code. Instead of memorizing syntax or struggling with documentation, you have a conversation with GitHub Copilot to bring your ideas to life.

**Perfect for:** Non-programmers, beginners, and anyone who wants to build a prototype quickly without getting stuck in technical details.

---

## What You Need

1. **VS Code** - Download from [code.visualstudio.com](https://code.visualstudio.com)
2. **GitHub Copilot Extension** - Free tier available with any GitHub account
3. **Node.js** - Download from [nodejs.org](https://nodejs.org) (for running web apps)
4. **A clear idea** - Know what you want to build (even just 2-3 sentences)

---

## Setup (5 minutes)

### Step 1: Install VS Code
- Download and install from [code.visualstudio.com](https://code.visualstudio.com)
- Open VS Code

### Step 2: Install GitHub Copilot
1. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search for "GitHub Copilot"
3. Click "Install"
4. Sign in with your GitHub account when prompted

### Step 3: Verify It's Working
- Look for the Copilot icon in the bottom right status bar
- If you see it, you're ready to go!

---

## The Three Tools You'll Use

### 🗨️ **Copilot Chat** (Your AI Partner)
- **What it does:** Answers questions, generates code, explains things
- **How to open:** Click the chat icon in the left sidebar or press `Ctrl+Alt+I`
- **Use it for:** Getting starter code, asking how to do something, planning your app

### ⚡ **Code Completions** (Auto-suggestions)
- **What it does:** Suggests code as you type (appears in gray text)
- **How to use:** Just start typing, press `Tab` to accept the suggestion
- **Use it for:** Writing HTML, CSS, JavaScript - anything!

### ✏️ **Inline Chat** (Quick Edits)
- **What it does:** Modifies specific code you select
- **How to open:** Select code, press `Ctrl+I` (Windows) or `Cmd+I` (Mac)
- **Use it for:** "Make this responsive", "Add a button here", "Fix this error"

---

## Your First Vibe Coding Session

### Example: Building a Simple Landing Page

#### **Step 1: Start a Project**
1. Create a new folder on your computer (e.g., `my-landing-page`)
2. In VS Code: **File > Open Folder** and select your folder
3. Create a new file: `index.html`

#### **Step 2: Use Copilot Chat**
1. Open Copilot Chat (chat icon in sidebar)
2. Type this prompt:
   ```
   Create a simple landing page HTML structure with:
   - A hero section with headline and description
   - A features section with 3 cards
   - A call-to-action button
   - Basic CSS styling included
   ```
3. Copilot will generate complete HTML code
4. Copy and paste it into your `index.html` file

#### **Step 3: Preview Your Page**
1. Right-click on `index.html` in the file explorer
2. Select "Open with Live Server" (or just open the file in your browser)
3. You'll see your landing page!

#### **Step 4: Make Changes with Inline Chat**
1. Select the headline text in your HTML
2. Press `Ctrl+I` to open inline chat
3. Type: "Make this headline bigger and change the color to blue"
4. Press Enter, review the change, click "Accept"

#### **Step 5: Add Features with Chat**
Back in Copilot Chat, type:
```
Add a contact form below the call-to-action button with fields for name, email, and message
```
Copy the generated code and paste it into your HTML.

#### **Step 6: Use Completions**
1. In your HTML, start typing: `<style>`
2. Press Enter and start typing `body {`
3. Watch Copilot suggest CSS properties - press `Tab` to accept them
4. Keep typing and accepting suggestions to style your page

---

## The Vibe Coding Workflow

```
1. DESCRIBE what you want → Use Chat
2. GET starter code → Copy/paste into your file
3. TEST it → Open in browser
4. TWEAK specific parts → Use Inline Chat (Ctrl+I)
5. ADD more features → Back to Chat
6. ITERATE → Repeat steps 3-5 until it's done
```

---

## Tips for Success

### ✅ **Be Specific in Your Prompts**
- ❌ "Create a website"
- ✅ "Create a landing page for a pet adoption service with a hero image, list of available pets, and contact form"

### ✅ **Start Simple, Add Later**
- Build the basic structure first
- Add features one at a time
- Test after each addition

### ✅ **Give Context**
If you have notes or requirements:
1. Create a file like `idea.md` with your description
2. Drag that file into Copilot Chat before asking questions
3. Say "Based on this idea, create..."

### ✅ **Don't Worry About Understanding Everything**
- You don't need to understand every line of code
- Ask Copilot to explain anything: "What does this code do?"
- Focus on making it work, learn as you go

### ✅ **Use the Right Tool for the Job**
- **Big questions or new features?** → Chat
- **Small tweaks to existing code?** → Inline Chat (Ctrl+I)
- **Writing line by line?** → Let completions help you

### ✅ **Iterate Freely**
- Try things, see what works
- If you don't like something, just ask Copilot to change it
- Use `Ctrl+Z` to undo if needed

---

## Common Beginner Prompts

### Starting a Project
```
Create a basic React app structure for [describe your idea]
```

### Getting Unstuck
```
I'm trying to [what you want to do] but getting this error: [paste error]
```

### Adding Features
```
Add a [specific feature] to this component that [describe behavior]
```

### Styling
```
Make this [element] look like [description or reference]
```

### Understanding Code
```
Explain what this code does in simple terms
```

---

## A Complete Example: Building a Quiz App

### 1️⃣ **Chat Prompt**
```
I want to build a simple quiz app in React. It should:
- Show one question at a time with 4 multiple choice options
- Track the score
- Show results at the end
- Have 5 questions about general knowledge

Give me the basic App.jsx component to get started.
```

### 2️⃣ **Accept the Code**
- Copy the generated code into your `App.jsx` file
- Run `npm run dev` to see it

### 3️⃣ **Inline Edit (Ctrl+I)**
Select the question text and prompt:
```
Make the question text larger and centered
```

### 4️⃣ **Chat: Add Feature**
```
Now add a progress bar that shows which question number I'm on
```

### 5️⃣ **Inline Edit: Style the Buttons**
Select the button code, press Ctrl+I:
```
Make these buttons colorful and add hover effects
```

### 6️⃣ **Test and Iterate**
- Click through your quiz
- See something you want to change? Use inline chat!
- Want to add more? Ask in chat!

---

## Troubleshooting

### "Copilot isn't suggesting anything"
- Make sure the Copilot icon in the status bar is active (not crossed out)
- Try typing a comment describing what you want: `// create a function that adds two numbers`
- Press Enter and wait - Copilot will suggest the code

### "The code doesn't work"
- Copy the error message
- Paste it in Copilot Chat with: "I got this error, how do I fix it?"
- Copilot will explain and suggest a fix

### "I don't understand the code"
- Select any code
- Press Ctrl+I and type: "Explain this in simple terms"
- Or ask in Chat: "What does [specific part] do?"

### "Copilot suggested something wrong"
- Just ignore it and keep typing, or
- Use inline chat to fix it: "This doesn't work, fix the [specific issue]"

---

## What You Can Build (In 30-60 Minutes Each)

✅ **Landing pages** - For a product, service, or event  
✅ **Portfolio sites** - Showcase your work  
✅ **Simple web apps** - Todo lists, calculators, quiz games  
✅ **Interactive prototypes** - Demonstrate an idea  
✅ **Forms and surveys** - Collect information  
✅ **Data displays** - Charts, tables, dashboards  

---

## Key Mindset Shifts

### Traditional Coding
- Memorize syntax
- Read documentation
- Write every line yourself
- Debug for hours

### Vibe Coding
- Describe what you want
- Let AI handle syntax
- Accept and tweak suggestions
- Ask AI to fix errors

**You're not expected to know everything - you're expected to communicate your ideas clearly and iterate with AI assistance.**

---

## Next Steps

1. **Start with the template** in this repo (already set up for you!)
2. **Follow the exercises** in the documentation
3. **Build your idea** using the workflow above
4. **Share your prototype** - it doesn't have to be perfect!

---

## Remember

- **There's no wrong way to use Copilot** - experiment and find what works for you
- **You're learning while building** - every session teaches you more
- **Speed matters more than perfection** - get it working, then make it better
- **AI is your teammate, not a replacement** - you provide the vision, Copilot handles the details

**Now go build something! 🚀**
