import { expertise } from '../data/expertise';
export default function SkillsSection() {
  return <section className="expertise wrap" id="services"><div className="section-heading"><div><p className="eyebrow">SKILLS & SERVICES</p><h2>From interface to database.</h2></div><p>The tools and workflows<br />behind my development work.</p></div><div className="capability-grid">{expertise.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>;
}
