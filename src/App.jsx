import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import './styles/portfolio.css';
export default function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </>;
}
