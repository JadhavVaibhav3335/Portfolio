import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import './styles/clean.css';
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.hiring-project, .experience-entry, .toolkit > div').forEach(node => observer.observe(node));
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--read-progress', total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); document.documentElement.style.removeProperty('--read-progress'); };
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="reading-progress" aria-hidden="true" /><Header />
    <main id="main" tabIndex={-1}>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </>;
}
