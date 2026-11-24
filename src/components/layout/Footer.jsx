import { Github, Linkedin, Instagram } from 'lucide-react';
export default function Footer() {
  return <footer className="wrap footer"><a className="wordmark" href="#home">vaibhav<span> / dev</span></a><span>© {new Date().getFullYear()} Vaibhav Jadhav</span><div><a href="https://github.com/jadhavvaibhav3335" target="_blank" rel="noreferrer"><Github size={16} />GitHub</a><a href="https://www.linkedin.com/in/jadhavvaibhav" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a><a href="https://www.instagram.com/vaibhav_jadhav_08" target="_blank" rel="noreferrer"><Instagram size={16} />Instagram</a><a href="#home">Back to top</a></div></footer>;
}
