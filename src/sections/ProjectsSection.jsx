import { projects } from '../data/projects';
import { useState } from 'react';
import { Code2 } from 'lucide-react';
const categories = ['All projects', ...new Set(projects.map(project => project.category))];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All projects');
  const visible = projects.filter(p => filter === 'All projects' || p.category === filter);
  return <section className="work wrap" id="portfolio"><div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>Built for real use.</h2></div><p>Explore the work, the functionality,<br />and the tools behind it.</p></div><div className="filters" aria-label="Filter projects">{categories.map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><p className="sr-only" role="status">{visible.length} projects shown.</p><div className="project-list">{visible.map(({
        icon: Icon,
        ...p
      }) => <article className={`project-entry ${p.className}`} key={p.title}><div className="project-identity"><span className="eyebrow">{p.label}</span><Icon strokeWidth={1} aria-hidden="true" /><p>{p.detail}</p></div><div className="project-body"><span className="project-category">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p><ul className="technology-list" aria-label={`${p.title} technologies`}>{p.stack.map(s => <li key={s}>{s}</li>)}</ul><div className="project-actions"><a className="button dark" href={p.url} target="_blank" rel="noreferrer">Visit live website</a><a className="text-link" href="https://github.com/JadhavVaibhav3335" target="_blank" rel="noreferrer"><Code2 size={17} />GitHub profile</a></div></div></article>)}</div></section>;
}
