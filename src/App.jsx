import { useEffect, useRef, useState } from 'react';
import { Download, Github, Linkedin, Instagram, Menu, X } from 'lucide-react';
import portrait from './assets/Images/profile-img.png';
import AboutSection from './pages/AboutSection';
import SelectedWork from './pages/SelectedWork';
import ContactPanel from './pages/ContactPanel';
import './App.css';

const links = [['portfolio', 'Projects'], ['services', 'Skills'], ['about', 'About']];
const expertise = [
  ['Frontend development', 'Responsive websites and interfaces with HTML, CSS, JavaScript, Bootstrap, and React.'],
  ['Full-stack applications', 'Frontend screens connected to backend logic and database functionality.'],
  ['Dashboards & portals', 'Management panels and business interfaces for employee tracking and admin workflows.'],
  ['Responsive websites', 'Mobile-first layouts with consistent behavior across screen sizes.'],
  ['Database integration', 'SQL, MySQL, and PostgreSQL data models, CRUD operations, and queries.'],
  ['APIs & development tools', 'REST API integration, Postman testing, and Git and GitHub workflows.'],
];

export default function App() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = event => {
      if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header">
      <a className="wordmark" href="#home" aria-label="Vaibhav Jadhav, home">vaibhav<span> / dev</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="nav-contact" href="#contact">Get in touch</a>
      <button ref={menuRef} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{[...links,['contact','Contact']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </header>
    <main id="main">
      <section className="hero wrap" id="home">
        <div className="hero-copy"><p className="eyebrow">VAIBHAV JADHAV · FULL-STACK DEVELOPER</p><h1>Web experiences,<br/><span>built end to end.</span></h1><p className="hero-description">I build practical web applications with thoughtful interfaces and dependable backend logic. Based in Pune, working on freelance projects and open to new opportunities.</p><div className="hero-actions"><a className="button dark" href="#portfolio">Explore projects</a><a className="text-link" href="/Vaibhav_jadhav_resume.pdf" target="_blank" rel="noreferrer">View resume <Download size={16}/></a></div><div className="hero-summary"><span>React & JavaScript</span><span>Java & PHP</span><span>SQL & REST APIs</span></div></div>
        <figure className="developer-portrait"><img src={portrait} alt="Vaibhav Jadhav" fetchPriority="high"/><figcaption><strong>Vaibhav Jadhav</strong><span>Pune, India · Freelancer</span></figcaption></figure>
      </section>
      <SelectedWork/>
      <section className="expertise wrap" id="services"><div className="section-heading"><div><p className="eyebrow">SKILLS & SERVICES</p><h2>From interface to database.</h2></div><p>The tools and workflows<br/>behind my development work.</p></div><div className="capability-grid">{expertise.map(([title,description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <AboutSection/>
      <ContactPanel/>
    </main>
    <footer className="wrap footer"><a className="wordmark" href="#home">vaibhav<span> / dev</span></a><span>© {new Date().getFullYear()} Vaibhav Jadhav</span><div><a href="https://github.com/jadhavvaibhav3335" target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a><a href="https://www.linkedin.com/in/jadhavvaibhav" target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn</a><a href="https://www.instagram.com/vaibhav_jadhav_08" target="_blank" rel="noreferrer"><Instagram size={16}/>Instagram</a><a href="#home">Back to top</a></div></footer>
  </>;
}
