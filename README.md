# Ionic Vanilla JS Rating App

A lightweight product-rating web app built with the Ionic Framework and plain JavaScript — no build tools, no frameworks, just a CDN and a script tag.

## What It Does

Users enter a product (or movie) name and a rating from 1–5. The app validates the input, shows an alert on bad data, and appends accepted ratings to a live list. The Ionic UI automatically adapts to iOS and Android styling — toggle device mode in DevTools to see it in action.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| 🎨 UI | [Ionic Framework](https://ionicframework.com/) (Web Components via CDN) |
| ⚡ Logic | Vanilla JavaScript (ES6+) |
| 📄 Markup | Semantic HTML5 |

## Getting Started

No install required. Open `index.html` in any modern browser.

```bash
# or serve locally
npx serve .
```

## Project Structure

```
├── index.html   # Ionic markup + CDN imports
├── app.js       # Validation logic and DOM manipulation
└── README.md
```

## ⚠️ Known Issues

- Ratings are stored in-memory only; a page refresh clears the list.
- No backend — this is a front-end demo.
