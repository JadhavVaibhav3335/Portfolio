import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import "../styles/portfolio.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Frontend",
    summary:
      "Designed and developed a responsive personal portfolio website to showcase skills, projects, experience, and contact workflow with modern UI animations.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    code: "https://github.com/JadhavVaibhav3335",
    demo: "https://portfolio-qv48.vercel.app/",
    accent: "accent-amber",
  },
  {
    title: "Rent Agreement Website",
    category: "Freelance",
    summary:
      "Developed a professional rent agreement service platform featuring city-specific landing pages, lead generation forms, WhatsApp integration, responsive design, and SEO-friendly architecture for improved customer acquisition.",
    stack: [
      "Eleventy",
      "HTML",
      "CSS",
      "JavaScript",
      "Nunjucks",
      "SEO",
    ],
    code: "https://github.com/JadhavVaibhav3335",
    demo: "https://rent-agreement-site.onrender.com/",
    accent: "accent-purple",
  },
  {
    title: "Professional Development Work",
    category: "Professional",
    summary:
      "Contributed to practical feature development, debugging, API integration, and delivery support in real-world development workflows.",
    stack: ["JavaScript", "ReactJS", "SQL", "Git", "Postman"],
    code: "https://github.com/JadhavVaibhav3335",
    accent: "accent-teal",
  },
];


export default function PortfolioSection() {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="portfolio" className="py-24">
      <div className="section-shell">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Selected projects from my development journey</h2>
        <p className="section-subtitle">
          These are core projects from my resume. I can share detailed repositories and
          walkthroughs during interview discussions.
        </p>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`project-filter ${
                activeCategory === category ? "project-filter-active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                className="glass-card project-card"
              >
                <div className={`project-media ${project.accent}`}>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-content">
                  <p>{project.summary}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span className="pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  )}

  <a
    href={project.code}
    target="_blank"
    rel="noopener noreferrer"
  >
    Code <Github size={16} />
  </a>
</div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
