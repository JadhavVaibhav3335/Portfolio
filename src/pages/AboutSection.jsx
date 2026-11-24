import { Download } from 'lucide-react';

const skillGroups = [
  ['Frontend', 'HTML, CSS, Bootstrap, JavaScript, ReactJS, AngularJS (basic)'],
  ['Backend & data', 'PHP, Java, Python, SQL, MySQL, PostgreSQL, REST APIs'],
  ['Tools', 'Git, GitHub, Postman'],
  ['Currently learning', 'Spring, Spring Boot, Hibernate'],
];

export default function AboutSection() {
  return <section className="about-section" id="about"><div className="wrap about-grid"><div><p className="eyebrow">ABOUT & EXPERIENCE</p><h2>Practical software.<br/>Thoughtful implementation.</h2><p className="about-intro">I’m a full-stack developer and freelancer based in Pune, Maharashtra. I build end-to-end web applications, with a focus on usable interfaces and clean, maintainable implementation.</p><a className="text-link" href="/Vaibhav_jadhav_resume.pdf" target="_blank" rel="noreferrer">Read my resume <Download size={16}/></a></div><div className="about-copy"><h3>Professional development work</h3><p>Contributed to feature development, debugging, API integration, and delivery support in real-world development workflows.</p><p className="experience-tools">JavaScript · ReactJS · SQL · Git · Postman</p><dl className="skill-directory">{skillGroups.map(([label,skills]) => <div key={label}><dt>{label}</dt><dd>{skills}</dd></div>)}</dl></div></div></section>;
}
