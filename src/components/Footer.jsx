import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialItems = [
  {
    href: "https://github.com/jadhavvaibhav3335",
    label: "GitHub",
    icon: <Github size={16} />,
  },
  {
    href: "https://www.linkedin.com/in/jadhavvaibhav",
    label: "LinkedIn",
    icon: <Linkedin size={16} />,
  },
  {
    href: "https://www.instagram.com/vaibhav_jadhav_08?igsh=Y3dreDlpYzJrNnox",
    label: "Instagram",
    icon: <Instagram size={16} />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-shell glass-card footer-card">
        <div className="footer-main">
          <div className="footer-top">
            <div>
              <p className="footer-brand">VJ</p>
              <p className="footer-tagline">
                Full-stack developer building practical and polished web products.
              </p>
            </div>

            <a
              href="mailto:vaibhavjadhav5416@gmail.com"
              className="btn-ghost footer-mail"
              aria-label="Send email"
            >
              <Mail size={16} /> vaibhavjadhav5416@gmail.com
            </a>
          </div>

          <div className="footer-nav">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="footer-pill">
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              Copyright {year} Vaibhav Jadhav. All rights reserved.
            </p>
            <div className="footer-socials">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
