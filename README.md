# Prompt to Prototype Vibe Coding Challenge

The SkillUp Artificial Intelligence (AI) **Prompt to Prototype** is a fast-paced AI-powered creation challenge.  
In one hour, you'll take an idea from a concept to a working **prototype** using Microsoft Copilot and GitHub Copilot.

You'll go through **six key stages**:

1. Ideation — get or refine your idea
2. Research — validate and explore your concept
3. Product Requirements Document (PRD) — define your product requirements
4. Branding — give your product a look, feel, and personality
5. Prototype — build your Minimum Viable Product (MVP)
6. Submit — package your work for sharing

Visit [https://aka.ms/skillupai/ptpchallenge](https://aka.ms/skillupai/ptpchallenge) to learn more about the Challenge and get started.

## 🌍 Language / Sprog

| Language | Documentation |
|----------|---------------|
| 🇬🇧 English | [docs/](./docs/) |
| 🇩🇰 Dansk | [docs/da/](./docs/da/) |

## 🛤️ Choose Your Prototyping Path

At Step 6 (Prototyping), you'll choose one of two paths. **Both work with GitHub Copilot Free tier** and are designed for accessibility.

### Option A: Code a Web Page

**Best for:** Building your own idea into a working prototype

| Feature | Description |
|---------|-------------|
| Format | Single-file HTML/JS solution |
| Build step | None required |
| Terminal | Not required |
| Works with | GitHub Free, Copilot in VS Code, screen readers & zoom |
| Great for | Pairing, co-creation sessions |

**What you'll do:** Use the artifacts you created in earlier steps (PRD, branding) and integrate them into a working HTML page using GitHub Copilot's chat and inline edit features.

### Option B: Create a Document

**Best for:** Writing-focused creation with AI as co-author

| Feature | Description |
|---------|-------------|
| Format | Markdown-first artifact |
| Focus | Language, structure, clarity, accessibility |
| Works with | GitHub Free, Copilot in VS Code |
| Great for | Dyslexia, fatigue, cognitive overload, "I don't feel like coding today" |

**What you'll do:** Use premade use cases to explore document-based prototyping with Copilot as your co-author, focusing on clear communication and structure.

### ✅ Both Options

- Feel like building something
- Demonstrate AI-assisted creation
- Work with GitHub Copilot Free tier
- Do **not** require Enterprise-only Copilot agents

## Copilot Compatibility

This challenge is designed for **GitHub Copilot Free Tier** users. All core features work with:
- **Copilot Chat** - Your AI pair programmer
- **Inline Chat** - Quick edits with Ctrl+I / Cmd+I  
- **Code Completions** - Auto-suggestions as you type

## Getting Started

1. Visit the [Prompt to Prototype Challenge Guide](https://aka.ms/skillupai/ptpchallenge)
2. Work through Steps 1-5 to develop your idea, research, PRD, and branding
3. At Step 6, choose Option A or Option B based on your preferences
4. Follow the instructions in your chosen path's repository

## Structure

```
.
├── docs/                           # Challenge documentation (GitHub Pages)
│   ├── index.html                  # Introduction and path chooser
│   ├── idea-generation.html        # Step 1
│   ├── research.html               # Step 2
│   ├── branding.html               # Step 3
│   ├── product-requirements.html   # Step 4
│   ├── prototype.html              # Step 5
│   ├── code-prototyping.html       # Step 6 (path chooser)
│   ├── learnings-resources.html    # Step 7
│   ├── vibe-coding-guide.html      # Comprehensive Vibe Coding Guide
│   ├── option-b/                   # Accessibility templates (English)
│   └── da/                         # Danish translations
│       ├── index.html              # Introduktion
│       ├── idea-generation.html    # Trin 1: Idégenerering
│       ├── research.html           # Trin 2: Research
│       ├── branding.html           # Trin 3: Branding
│       ├── product-requirements.html # Trin 4: Produktkrav
│       ├── prototype.html          # Trin 5: Prototype
│       ├── code-prototyping.html   # Trin 6: Prototyping
│       ├── learnings-resources.html # Læring og Ressourcer
│       ├── step-7-optional.html    # Valgfrit: Lokal AI
│       ├── vibe-coding-guide.html  # Vibe Coding Guide
│       └── option-b/               # Tilgængelighedsløsninger (Danish)
├── templates/
│   ├── option-a/                   # Code a Web Page starter files
│   │   ├── index.html              # Single-file HTML template
│   │   ├── README.md               # Getting started instructions
│   │   └── README.da.md            # Danish instructions
│   └── option-b/                   # Create a Document templates
│       ├── README.md               # Getting started instructions
│       ├── product-pitch.md        # Product pitch template
│       ├── user-guide.md           # User guide template
│       ├── blog-post.md            # Blog post template
│       ├── faq.md                  # FAQ template
│       └── presentation.md         # Presentation outline template
├── .github/
│   └── copilot-instructions.md     # Workspace instructions for Copilot
└── README.md
```

## Tips

- **Use Copilot Chat** for generating content and asking questions
- **Use Inline Chat (`Ctrl+I`)** for quick edits to selected code or text
- **Let completions help** - just start typing and press `Tab` to accept suggestions
- Keep it **lean** - aim for a single, clear outcome
- Focus on demonstrating AI-assisted creation, not perfection

## License

MIT
