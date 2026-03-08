import { motion } from "framer-motion";
import profileImg from "../assets/Images/profile-img.jpg";
import { ArrowDownRight, Download, Github, Instagram, Linkedin } from "lucide-react";
import { useMemo } from "react";
import useTypewriter from "../hooks/useTypewriter";
import "../styles/hero.css";

export default function HeroSection() {
  const roles = useMemo(
    () => [
      "FULL-STACK WEB DEVELOPER",
      "FREELANCER",
      "PRODUCT-FOCUSED DEVELOPER",
      "WEB APPLICATION BUILDER",
    ],
    []
  );
  const text = useTypewriter(roles, 95, 1500);

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-orb orb-left" />
      <div className="hero-orb orb-right" />

      <div className="section-shell hero-grid">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.75 }}
          className="hero-copy"
        >
          <span className="section-label hero-label">Open For Work</span>
          <h1 className="hero-title">
            Hi, I am <span className="hero-name">Vaibhav Jadhav</span>
          </h1>
          <p className="hero-typewriter">
            {text}
            <span className="hero-cursor" />
          </p>
          <p className="hero-subtext">
            I work on freelance projects and build practical web applications for
            real business needs.
          </p>
          <div className="hero-meta">
            <span>Based in Pune, India</span>
            <span> Freelancer</span>
          </div>

          <div className="hero-cta">
            <a href="#portfolio" className="btn-primary">
              View Projects <ArrowDownRight size={18} />
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Resume <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/jadhavvaibhav3335"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jadhavvaibhav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/vaibhav_jadhav_08?igsh=Y3dreDlpYzJrNnox"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.8 }}
          className="hero-image-panel glass-card ambient"
        >
          <div className="hero-image-ring" />
          <img src={profileImg} alt="Vaibhav Jadhav" className="hero-image" />
          <div className="hero-stats">
            <div className="glass-card stat-card">
              <p>Freelance Projects</p>
              <span>Flexible collaboration</span>
            </div>
            <div className="glass-card stat-card">
              <p>Quality Standard</p>
              <span>Clean code + practical execution</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
