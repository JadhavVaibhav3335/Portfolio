import { skillGroups } from '../data/skills';
const context = ['Applied in internship and website projects; AngularJS at a basic level.', 'Backend and database skills. Featured projects focus on frontend and static website delivery.', 'Version control, collaboration, and API testing tools.', 'Learning in progress.'];
export default function SkillsSection() {
return <section className="expertise wrap" id="services" aria-labelledby="skills-title"><div className="section-heading"><div><p className="eyebrow">TECHNICAL SKILLS</p><h2 id="skills-title">My development toolkit.</h2></div><p>Project experience in React and web delivery.<br />Building deeper backend knowledge.</p></div><dl className="toolkit">{skillGroups.map(([title, skills], index) => <div key={title}><dt>{title}</dt><dd>{skills}</dd><dd className="skill-context">{context[index]}</dd></div>)}</dl></section>;
}
