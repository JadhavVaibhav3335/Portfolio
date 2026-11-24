import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
const links = [['portfolio', 'Projects'], ['services', 'Skills'], ['about', 'About']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <header className="header">
      <a className="wordmark" href="#home" aria-label="Vaibhav Jadhav, home">vaibhav<span> / dev</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="nav-contact" href="#contact">Get in touch</a>
      <button ref={menuRef} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{[...links, ['contact', 'Contact']].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </header>;
}
