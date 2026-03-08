import { motion } from "framer-motion";
import { ArrowUpRight, BookOpenText, Rocket, Sparkles } from "lucide-react";
import aboutImg from "../assets/Images/About-img.webp";
import "../styles/about.css";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative flex justify-center about-img-wrapper glass-card"
        >
          <img src={aboutImg} alt="Developer portrait" className="about-img" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">Full-stack developer building practical web products</h2>

          <p className="section-subtitle">
            I build end-to-end web applications with strong frontend usability and backend
            logic, and I focus on clean, maintainable implementation that is easy to scale.
          </p>

          <div className="about-points">
            <article className="glass-card about-point">
              <Rocket size={18} />
              <p>Built responsive full-stack web applications from scratch with clean architecture.</p>
            </article>
            <article className="glass-card about-point">
              <Sparkles size={18} />
              <p>Comfortable across frontend and backend workflows with clean UI focus.</p>
            </article>
            <article className="glass-card about-point">
              <BookOpenText size={18} />
              <p>Actively learning Java ecosystem tools like Spring, Spring Boot and Hibernate.</p>
            </article>
          </div>

          <div className="about-skills">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "JavaScript",
              "ReactJS",
              "AngularJS (Basic)",
              "PHP",
              "MySQL",
              "PostgreSQL",
              "Java",
              "Python",
              "Spring Boot",
              "REST APIs",
              "GitHub",
            ].map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            View Resume <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
