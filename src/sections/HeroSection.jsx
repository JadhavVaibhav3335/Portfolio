import { resumeUrl } from '../data/site';
import { Download } from 'lucide-react';
import portrait from '../assets/images/profile-img.png';
export default function HeroSection() {
  return <section className="hero wrap" id="home">
        <div className="hero-copy"><p className="eyebrow">VAIBHAV JADHAV · FULL-STACK DEVELOPER</p><h1>Web experiences,<br /><span>built end to end.</span></h1><p className="hero-description">I build practical web applications with thoughtful interfaces and dependable backend logic. Based in Pune, working on freelance projects and open to new opportunities.</p><div className="hero-actions"><a className="button dark" href="#portfolio">Explore projects</a><a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">View resume <Download size={16} /></a></div><div className="hero-summary"><span>React & JavaScript</span><span>Java & PHP</span><span>SQL & REST APIs</span></div></div>
        <figure className="developer-portrait"><img src={portrait} alt="Vaibhav Jadhav" fetchPriority="high" /><figcaption><strong>Vaibhav Jadhav</strong><span>Pune, India · Freelancer</span></figcaption></figure>
      </section>;
}
