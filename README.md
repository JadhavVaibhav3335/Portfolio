# Vaibhav Jadhav — Portfolio

A responsive full-stack developer portfolio built with React 19, Vite 7, plain CSS, and Lucide icons. The contact form uses React Hook Form and EmailJS.

## Development

```sh
npm ci
npm run dev
```

## Current visual direction

The portfolio uses a simple, light visual direction with ink-blue accents, a compact portrait, and a clear reading order: introduction, projects, experience, skills, and contact. Contributions and technical decisions are visible, with secondary scope details in native expandable sections.

`src/styles/clean.css` is the active page stylesheet. A requestAnimationFrame-throttled scroll handler updates the reading-progress indicator. IntersectionObserver triggers short entrance animations when project, experience, and skill entries enter the viewport. Content is visible without animation, and reduced-motion preferences disable transitions, reveals, and smooth scrolling.

Unused 3D scenes, theme studies, old stylesheets, and their dependencies have been removed. Browser visual and touch testing remain outstanding because no browser was connected in the development session.

Run `node scripts/verify-portfolio.mjs` to verify server-rendered project contributions, résumé availability, direct email, internal anchors, scroll-progress semantics, portrait description, and project disclosures. This check does not replace visual browser tests.

## Contact configuration

Copy `.env.example` to `.env` and supply your EmailJS service ID, template ID, and public key. Without these settings, visitors can still use the email and phone links. Never commit `.env`.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template receives `name`, `email`, `message`, `form_name`, `form_email`, and `title`.

## Commands

- `npm run dev`: start the development server.
- `npm run build`: create production assets in `dist/`.
- `npm run preview`: preview the production build.
- `npm run lint`: check source code with ESLint.

## Content locations

- `src/App.jsx`: page composition.
- `src/components/layout/`: shared header, navigation, and footer.
- `src/sections/`: hero, projects, skills, about, and contact sections.
- `src/data/site.js`: shared resume URL and email address.
- `src/data/projects.js`: project descriptions, technologies, and links.
- `src/data/skills.js`: skill groups and learning topics.
- `src/styles/clean.css`: active design tokens, component styles, and responsive layouts.
- `src/styles/base.css`: shared base styles.
- `src/assets/images/profile-img.png`: portrait.
- `public/Vaibhav_jadhav_resume.pdf`: resume.
- `public/Resume.pdf`: compatibility copy for existing bookmarks; update both PDFs when replacing the resume.

Build output and dependencies are ignored by Git. Deploy `dist/` to your static hosting provider after building.

## Audit update

The page prioritizes the full-time job search, client contribution, and résumé-backed experience. The rent agreement case study remains the lead project until a real deployed full-stack application is supplied. The portfolio is a compact supporting entry; there are no project filters or general GitHub links presented as project source code.

Still needed to complete the audit: a deployed app demonstrating UI → API → database, its exact public source URL and personal contribution, and actual project screenshots. No full-stack project, screenshots, performance results, or repository URLs have been invented. Experience titles and dates follow the existing résumé; LinkedIn has not been modified.
