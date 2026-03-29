# 🚀 Playwright TypeScript E2E Automation Framework

## 📌 Overview
This project demonstrates a scalable end-to-end test automation framework using Playwright with TypeScript. It follows best practices like Page Object Model (POM), reusable utilities, and modular architecture.

---

## 🧪 Test Scenarios Covered
- ✅ Valid Login
- ❌ Invalid Login (Negative Testing)
- 🛒 Add to Cart
- 💳 Checkout Flow
- 🔄 Full End-to-End User Journey

---

## 🏗️ Framework Design
- Pages → Page Object Model (POM)
- Utils → Reusable helpers (login)
- Data → Test data separation
- Tests → Modular and structured test cases

---

## ⚙️ Features
- Headed execution (visible browser)
- Slow motion for debugging/demo
- Sequential execution (single worker)
- Reusable and scalable framework

---

## 🛠️ Tech Stack
- Playwright
- TypeScript
- Node.js

---

## ▶️ How to Run

npm install  
npx playwright test  

---

## 🎬 Demo Execution

npx playwright test tests/e2e-flow.spec.ts  

This runs a full user journey (login → cart → checkout)

---

## 🌐 Application Under Test
https://www.saucedemo.com/

---

## 👨‍💻 Author
Himraj Verma