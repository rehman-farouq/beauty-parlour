# Anabia's Beauty Parlour

A modern, elegant single-page website for **Anabia's Beauty Parlour** — built with the latest Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Hero Section** — bridal portrait, salon intro, and call-to-action buttons
- **Services Preview** — signature services grid with images and quick links
- **Full Services Page** (`/services`) — detailed breakdown of every service including "We Offer", "Perfect For", and descriptions
- **Why Choose Us** — trust-building highlights section
- **Boutique / Product Categories** — cosmetics, jewelry, dresses, and beauty products showcase
- **Visit Us** — contact cards, embedded Google Map, and directions/call-to-book buttons
- **Responsive Navbar & Footer** — consistent site-wide navigation with smooth section scrolling
- **Smooth Animations** — powered by Framer Motion throughout

---

## 🛠️ Tech Stack

| Technology            | Purpose                   |
|------------------------|---------------------------|
| Next.js (App Router)   | React framework           |
| TypeScript             | Type safety                |
| Tailwind CSS           | Styling                    |
| Framer Motion          | Animations & transitions  |
| Lucide React           | Icon library                |

---

## 📁 Project Structure

anabias-beauty-parlour/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & theme
│   └── services/
│       └── page.tsx        # Full services detail page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ProductCategories.tsx
│   ├── WhyChooseUs.tsx
│   ├── VisitUs.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       └── services/       # Service images (.webp / .png)
├── tailwind.config.ts
├── tsconfig.json
└── package.json

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended package manager)

### Installation

pnpm install

### Run the development server

pnpm run dev

Open http://localhost:3000 in your browser to view the site.

### Build for production

pnpm run build
pnpm run start

---

## 🎨 Theming

The site uses a custom **wine & gold luxury theme** defined in `tailwind.config.ts` and `globals.css`:

- `wine-*` — deep maroon/burgundy backgrounds
- `gold-*` — gold accent colors for highlights, buttons, and icons
- `blush-*` — soft pink accents for taglines
- `ivory` — light text color
- `font-display` / `font-script` — custom display and script fonts

Keep new components consistent with these theme classes (`bg-wine-radial`, `gilt-card`, `text-gradient-gold`, etc.) instead of introducing new custom colors.

---

## 🖼️ Adding Images

Service and product images should be placed in:

public/images/services/

Referenced in components using paths like:

<img src="/images/services/bridal-makeup.webp" alt="Bridal Makeup" />

If an image is missing, `onError` handlers gracefully hide the broken image instead of showing a broken icon.

---

## 🔗 Navigation Notes

Since the site has both the home page (`/`) and a separate services page (`/services`), all section links use **home-relative anchors** (e.g. `/#services`, `/#visit`) so navigation works correctly from any page.

---

## 📄 License

This project is privately developed for Anabia's Beauty Parlour. All rights reserved.