# ⭐ Ionic Vanilla JS Rating App

A lightweight product/movie rating web app built with **Ionic Framework** and **vanilla JavaScript** — no Angular, React, or build tools required. Enter a product name and a rating (1–5), and the app adds it to a live list with input validation and native-style UI.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 🎨 UI Framework | [Ionic Framework](https://ionicframework.com/) (CDN, Web Components) |
| 📝 Logic | Vanilla JavaScript (ES6+) |
| 🌐 Markup | HTML5 |
| 📦 Bundler | None — zero build step |

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/stabgan/Ionic-VanillaJS-Rating-App.git
   cd Ionic-VanillaJS-Rating-App
   ```

2. **Open `index.html`** in any modern browser — that's it.  
   Or serve it locally with any static server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node (npx)
   npx serve .
   ```

3. **Try the responsive UI** — open DevTools, toggle the device toolbar, and switch between iOS / Android to see Ionic's adaptive styling in action.

## 📸 Features

- Add a product or movie name with a 1–5 star rating
- Input validation (empty fields, out-of-range ratings) with Ionic alert dialogs
- Responsive grid layout — looks great on mobile and desktop
- Platform-adaptive UI (iOS ↔ Material Design) via Ionic Web Components

## ⚠️ Known Issues

- **`ion-alert-controller` deprecation** — The app uses the legacy `<ion-alert-controller>` element, which is deprecated in newer Ionic versions. Modern Ionic uses `alertController.create()` imported from `@ionic/core`.
- **No persistent storage** — Ratings are stored in-memory only; refreshing the page clears the list.
- **No delete/edit** — Once a rating is added, it cannot be removed or modified.
- **Numeric input edge cases** — Decimal values (e.g. `3.7`) and leading-zero strings are not explicitly handled.

## 📄 License

This project is open source. See the repository for license details.
