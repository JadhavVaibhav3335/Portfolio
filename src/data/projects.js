import { Globe, LayoutTemplate } from 'lucide-react';

export const projects = [{
  title: 'Rent Agreement Website',
  category: 'Freelance',
  context: 'Client website · 2025–present',
  contributions: ['Built city-specific service pages and responsive navigation with Eleventy and Nunjucks.', 'Implemented enquiry forms and WhatsApp contact paths.', 'Deployed the site to Render and maintained content and frontend updates.'],
  approach: 'Eleventy generates static HTML for a content-led service website. Nunjucks templates support shared page structure across city pages.',
  scope: 'My contribution covers website development, responsive service pages, enquiry paths, deployment, and frontend maintenance. The focus is helping visitors find service information and make contact.',
  description: 'A rent agreement service platform with city-specific landing pages, lead generation forms, WhatsApp integration, responsive layouts, and an SEO-friendly structure.',
  stack: ['Eleventy', 'HTML', 'CSS', 'JavaScript', 'Nunjucks', 'SEO'],
  url: 'https://rent-agreement-site.onrender.com/',
  icon: Globe,
  label: 'Featured freelance project',
  detail: 'Service discovery → Enquiry → Contact',
  className: 'featured-work'
}, {
  title: 'Personal Portfolio Website',
  category: 'Frontend',
  context: 'Personal project · 2024',
  contributions: ['Built reusable React sections for projects, skills, experience, and contact.', 'Implemented responsive CSS layouts and interface animations with reduced-motion support.', 'Added validated contact fields with React Hook Form and an EmailJS message workflow.'],
  approach: 'React components separate the page sections, while project and skill data live in shared modules. EmailJS handles messages when configured; email and phone links provide direct contact.',
  scope: 'This is a frontend portfolio built with React and CSS. The contact workflow includes validation, sending feedback, and error handling. It does not use a custom backend or database.',
  description: 'A responsive personal website showcasing my skills, projects, experience, and contact workflow, with interface animations.',
  stack: ['React', 'JavaScript', 'CSS', 'EmailJS'],
  url: 'https://portfolio-qv48.vercel.app/',
  icon: LayoutTemplate,
  label: 'Frontend project',
  detail: 'Projects · Skills · Experience · Contact',
  className: ''
}];
