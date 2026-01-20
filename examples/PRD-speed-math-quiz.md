# Speed Math Quiz

> A quick math quiz app demonstrating the free tier workflow

---

## 📝 One-Sentence Description

A 5-question speed math quiz that tests basic arithmetic and shows users their score and time.

---

## 🎯 Core User Action

Answer 5 math questions as quickly as possible and see final score with completion time.

---

## ✨ MVP Features

1. [x] Display one math question at a time (addition, subtraction)
2. [x] Input field for user answer
3. [x] Submit button and "Next" button
4. [x] Track correct answers (score)
5. [x] Show results screen with score and time

---

## 🧩 UI Components Needed

- [x] Header with app title
- [x] Question display (large text)
- [x] Answer input field
- [x] Submit/Next button
- [x] Question counter (Question 1 of 5)
- [x] Results screen with score and time

---

## 💾 Data/State Requirements

- `questions` - Array of 5 math questions with answers
- `currentQuestionIndex` - Current question (0-4)
- `userAnswer` - Current input value
- `score` - Number of correct answers
- `showResults` - Boolean to show/hide results screen
- `startTime` - Timestamp when quiz started
- `endTime` - Timestamp when quiz ended

---

## 🎨 Branding & Style

**Colors:**
- Primary: #3b82f6 (blue)
- Secondary: #10b981 (green for correct)
- Accent: #ef4444 (red for incorrect)
- Background: #f9fafb (light gray)
- Text: #111827 (dark gray)

**Vibe:** Clean, modern, focused on speed and simplicity

---

## 🚫 Out of Scope

- User accounts
- Leaderboards
- Different difficulty levels
- Timer countdown pressure
- Multiplication/division (keeping it simple)

---

## ⏱️ Time Budget

- Planning & PRD: 5 minutes ✓
- Initial component: 10 minutes
- Core functionality: 15 minutes
- Styling: 10 minutes
- Testing: 5 minutes

---

## 📋 Success Criteria

- [x] All 5 questions work
- [x] Score calculation is correct
- [x] Time tracking works
- [x] Results screen shows properly
- [x] No console errors
- [x] Clean, readable design
