
Claude finished the response
Claude responded: I'll customize this artifact:
I'll customize this artifact:


website.html
Interactive artifact 
Transform any artifact into something uniquely yours by customizing its core elements.

Change the topic - Adapt the content for a different subject
Update the style - Refresh the visuals or overall design
Make it personal - Tailor specifically for your needs
Share your vision - I'll bring it to life
Where would you like to begin?

You said: give the entire code of all sort of file types for this project individually
give the entire code of all sort of file types for this project individually

10:04 PM
Claude responded: Here are all the files for your project:
Here are all the files for your project:


index.html
Code 

styles.css
Code 

script.js
Code 

README.md
Code 
Here's a summary of every file in the project:

4 files, zero dependencies, zero build tools.

File	Purpose
index.html	Full page structure — navbar, hero, about, courses, why us, testimonials, contact, footer
styles.css	All styling — CSS variables, layout, animations, responsive breakpoints
script.js	Hamburger menu, smooth scroll, scroll-reveal, form validation + WhatsApp deep-link
README.md	Setup guide, deployment instructions, customisation cheatsheet
Folder structure to use:

sai-maths-home-tuitions/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── tutor.jpg   ← add your photo here
Notable upgrade in script.js: the contact form now opens WhatsApp with a pre-filled message (name, phone, class, area) directly to +91 91607 13726 — much more practical than a static button.

To go live, just drag the folder onto netlify.com/drop — free and instant.






Claude is AI and can make mistakes. Please double-check responses.
# Sai Maths Home Tuitions — Website

A clean, responsive, SEO-optimised static website for **Sai Maths Home Tuitions**, Hyderabad.

---

## 📁 Project Structure

```
sai-maths-home-tuitions/
├── index.html        ← Main HTML page
├── styles.css        ← All styling (CSS variables, layout, responsive)
├── script.js         ← Interactivity (nav, scroll-reveal, form → WhatsApp)
├── README.md         ← This file
└── assets/
    └── tutor.jpg     ← Photo of Mr. Arun Sir (add your own image here)
```

---

## 🚀 Getting Started

### Option A — Open locally
Just double-click `index.html` in any browser. No server needed.

### Option B — Local dev server (recommended)
```bash
# Using Node.js (npx)
npx serve .

# Using Python
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🖼️ Adding the Tutor Photo

1. Place your photo inside the `assets/` folder.
2. Name it `tutor.jpg` (or update the `src` in `index.html`).
3. Recommended size: **600 × 700 px**, portrait orientation.

---

## ✏️ Quick Customisation Guide

| What to change | Where |
|---|---|
| Phone number | `index.html` → contact section + `script.js` → `waNumber` |
| Email address | `index.html` → contact section |
| Tutor photo | `assets/tutor.jpg` |
| Brand colours | `styles.css` → `:root` CSS variables |
| Stats (200+ students etc.) | `index.html` → `.hero-stats` |
| Testimonials | `index.html` → `#testimonials` section |
| Exam chips (GMAT, GRE…) | `index.html` → `.exam-chips` |
| WhatsApp number | `script.js` → `waNumber` variable |

---

## 📦 Dependencies

None. This is a **pure HTML/CSS/JS** site — no frameworks, no build tools.

Google Fonts (`Playfair Display` + `DM Sans`) are loaded via CDN and require an internet connection to display correctly.

---

## 🌐 Deployment

### GitHub Pages (free)
1. Push the project to a GitHub repository.
2. Go to **Settings → Pages** → set source to `main` branch / `root`.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Netlify (free, recommended)
1. Drag and drop the project folder onto [netlify.com/drop](https://app.netlify.com/drop).
2. Done — live in seconds with a shareable URL.

### Custom Domain
After deploying on Netlify or GitHub Pages, add your custom domain (e.g. `saimathstuitions.com`) in the platform's domain settings.

---

## 📄 SEO Notes

- Meta title, description, and Open Graph tags are pre-filled in `<head>`.
- All images should have descriptive `alt` text (already done for the tutor photo).
- For best results, submit the live URL to [Google Search Console](https://search.google.com/search-console/).

---

## 📞 Contact Details on Site

| Field | Value |
|---|---|
| Phone / WhatsApp | +91 91607 13726 |
| Email | profarun.6@gmail.com |
| Location | Hyderabad, India |

---

*Built with ❤️ for Mr. Arun Sir & Sai Maths Home Tuitions.*
