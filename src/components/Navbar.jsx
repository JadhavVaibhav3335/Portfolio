import { useState, useEffect } from "react";
import { Menu, X,} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll spy: Activate link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide navbar on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 100) setHidden(true);
      else setHidden(false);

      setLastScroll(currentScroll);

      // Detect active section
      navItems.forEach((item) => {
        const sec = document.getElementById(item.id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-xl bg-black/30 border-b border-white/10
        shadow-lg
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-bold tracking-widest text-white select-none">
          VJ
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative pb-1 transition text-white 
                ${active === item.id ? "text-blue-400" : "hover:text-[#aaa]"}
              `}
            >
              {item.label}

              {/* Active underline animation */}
              {active === item.id && (
                <motion.span
                  layoutId="active-underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 rounded"
                ></motion.span>
              )}
            </button>
          ))}

        
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10 px-6 py-6"
        >
          <div className="flex flex-col gap-6 text-white text-lg">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition ${
                  active === item.id ? "text-blue-400" : "hover:text-gray-300"
                }`}
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
