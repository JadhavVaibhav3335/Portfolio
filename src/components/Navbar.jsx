import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const lastScrollRef = useRef(0);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "portfolio", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScrollRef.current && currentScroll > 110);
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3 }}
      className="site-header"
    >
      <div className="section-shell site-header-inner">
        <div className="site-brand">VJ</div>

        <nav className="site-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`site-nav-link ${active === item.id ? "is-active" : ""}`}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="active-underline"
                  className="site-nav-underline"
                />
              )}
            </button>
          ))}
        </nav>

        <button
          className="site-menu-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="site-mobile-nav"
        >
          <div className="site-mobile-nav-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`site-mobile-link ${active === item.id ? "is-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
