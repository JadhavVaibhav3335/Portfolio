import { motion } from "framer-motion";
import { BadgeCheck, Code, Laptop, Palette, Smartphone, Workflow } from "lucide-react";

const services = [
  {
    icon: <Laptop size={22} />,
    title: "Frontend Development",
    desc: "Responsive UI development with HTML, CSS, JavaScript, Bootstrap and ReactJS.",
  },
  {
    icon: <Code size={22} />,
    title: "Full-Stack Applications",
    desc: "Complete web application development from frontend screens to backend logic and database integration.",
  },
  {
    icon: <Palette size={22} />,
    title: "Dashboard & Portal UI",
    desc: "Clean management panels and business tools such as employee tracking and admin workflows.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Responsive Websites",
    desc: "Mobile-first web experiences with stable layouts and consistent behavior across devices.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Database Integration",
    desc: "SQL, MySQL and PostgreSQL based data models with CRUD operations and reliable query handling.",
  },
  {
    icon: <Workflow size={22} />,
    title: "API & Tools",
    desc: "REST API integration and testing using Postman, plus version control workflows with Git and GitHub.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 services-section">
      <div className="section-shell">
        <span className="section-label">Services</span>
        <h2 className="section-title">Services based on my project experience</h2>
        <p className="section-subtitle">
          I focus on practical software delivery with clean implementation, usability and
          maintainable code for real-world use cases.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-card service-card"
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
