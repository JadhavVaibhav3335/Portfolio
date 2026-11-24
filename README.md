# Vaibhav Jadhav — Portfolio

A responsive full-stack developer portfolio built with React 19, Vite 7, plain CSS, and Lucide icons. The contact form uses React Hook Form and EmailJS.

## Development

```sh
npm ci
npm run dev
```

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

- `src/App.jsx`: navigation, introduction, services, and social links.
- `src/pages/SelectedWork.jsx`: project details and filters.
- `src/pages/AboutSection.jsx`: biography, experience, and skills.
- `src/pages/ContactPanel.jsx`: contact information and form.
- `src/App.css`: design tokens, component styles, and responsive layouts.
- `src/index.css`: shared base styles.
- `src/assets/Images/profile-img.png`: portrait.
- `public/Vaibhav_jadhav_resume.pdf`: resume.

Build output and dependencies are ignored by Git. Deploy `dist/` to your static hosting provider after building.
