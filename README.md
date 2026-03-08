# Vaibhav Portfolio

Professional React + Vite portfolio with:
- modern section-based layout
- animated hero + project cards
- EmailJS contact form
- responsive design for mobile and desktop

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- React Hook Form
- EmailJS

## Quick Start
```bash
npm install
cp .env.example .env
npm run dev
```

## Environment Variables
Set these in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Scripts
- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run lint` - lint project

## Customize Your Portfolio
1. Update personal copy in `src/pages/HeroSection.jsx` and `src/pages/AboutSection.jsx`.
2. Replace project data in `src/pages/PortfolioSection.jsx` with real links.
3. Keep only your strongest 3-5 projects with measurable outcomes.
4. Update contact details in `src/pages/ContactSection.jsx`.
5. Replace images in `src/assets/Images`.

## Strong Portfolio Checklist
- Clear role headline in first screen (what you do + value).
- Real project links with problem, solution and impact.
- Skills shown through projects, not just a long icon list.
- Fast load time, responsive layout, accessible contrast.
- Clear CTA: `Hire me`, `View resume`, `Contact`.
