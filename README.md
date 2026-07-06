# Roshn Kal 

A responsive 7-page website for **Roshn Kal**, a student-led nonprofit organization focused on empowering underprivileged communities and advancing animal welfare in Pakistan.

Built as a 3-day CSS & Bootstrap project, this site combines a custom design system with Bootstrap 5's responsive grid to deliver a clean, accessible, and mobile-friendly experience.

🔗 **Live site:** https://talhaaa7-rgb.github.io/RoshnKal-website/

---

## 📖 About

Roshn Kal ("Bright Tomorrow") works to uplift underprivileged communities and improve animal welfare across Pakistan. This website serves as the organization's digital home — sharing its mission, programs, impact, and ways for people to get involved.

## 🛠️ Tech Stack

- **HTML5** — semantic markup across all pages
- **CSS3** — custom design system (variables, utilities, components)
- **Bootstrap 5** — responsive grid, components, and utilities
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings) & [Inter](https://fonts.google.com/specimen/Inter) (body text)
- **JavaScript** — Bootstrap's bundled JS for navbar, offcanvas menu, and interactive components

## 🎨 Design System

| Element | Value |
|---|---|
| Primary (Navy) | Used for headers, nav, and primary text |
| Accent (Gold) | Used for highlights, buttons, and CTAs |
| Accent (Coral) | Used for secondary highlights and hover states |
| Background (Beige) | Used for section backgrounds |
| Heading Font | Fraunces (serif, expressive) |
| Body Font | Inter (clean, readable sans-serif) |

## 📄 Pages

1. **Home** — Mission overview, hero section, highlights
2. **About** — Organization story, values, and team
3. **Programs** — Community empowerment & animal welfare initiatives
4. **Impact** — Stats, stories, and outcomes
5. **Get Involved** — Volunteering, donations, and partnerships
6. **Gallery** — Photos from events and programs
7. **Contact** — Contact form, location, and social links

## 📁 Project Structure

```
RoshnKal-website/
├── index.html
├── about.html
├── programs.html
├── impact.html
├── get-involved.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
├── docs/
│   ├── AI-Prompt-Log.md
│   ├── Bug-Log.md
│   └── Refactoring-Report.md
└── README.md
```

##  Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/talhaaa7-rgb/RoshnKal-website.git
   ```
2. Navigate into the project folder:
   ```bash
   cd RoshnKal-website
   ```
3. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

### Deployment

This site is deployed via **GitHub Pages** (branch-based deployment from `main`). Any changes pushed to `main` are automatically reflected on the live site within a few minutes.

## 🐞 Known Issues

- Fixed: A mobile hamburger menu bug caused by `backdrop-filter: blur()` on the navbar, which created a CSS containing block and trapped the offcanvas panel. Resolved by moving the offcanvas markup outside the `<nav>` element.

See [`docs/Bug-Log.md`](./docs/Bug-Log.md) for the full history.

## 📋 Project Documentation

- [AI Prompt Log](./docs/AI-Prompt-Log.md) — record of AI-assisted development prompts
- [Bug Log](./docs/Bug-Log.md) — issues encountered and their fixes
- [Refactoring Report](./docs/Refactoring-Report.md) — summary of code refactors and improvements

## 🤝 Contributing

This is a student assignment project, but suggestions and feedback are welcome via issues or pull requests.

## 📜 License

This project is for educational purposes as part of a web development assignment.

---

Made with 💛 for Roshn Kal.