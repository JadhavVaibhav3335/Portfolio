import { Globe, LayoutTemplate } from 'lucide-react';

export const projects = [{
  title: 'Rent Agreement Website',
  category: 'Freelance',
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
  description: 'A responsive personal website showcasing my skills, projects, experience, and contact workflow, with interface animations.',
  stack: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
  url: 'https://portfolio-qv48.vercel.app/',
  icon: LayoutTemplate,
  label: 'Frontend project',
  detail: 'Projects · Skills · Experience · Contact',
  className: ''
}];
