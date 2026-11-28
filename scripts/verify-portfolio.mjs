import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const { projects } = await server.ssrLoadModule('/src/data/projects.js');
  const { resumeUrl, emailAddress } = await server.ssrLoadModule('/src/data/site.js');
  const html = renderToString(createElement(App));
  for (const project of projects) {
    assert.ok(html.includes(project.title), `Missing project: ${project.title}`);
    assert.ok(html.includes(project.url), `Missing live project link: ${project.title}`);
    for (const contribution of project.contributions) assert.ok(html.includes(contribution.replaceAll('&', '&amp;')), `Missing contribution: ${contribution}`);
  }
  assert.ok(html.includes(`mailto:${emailAddress}`), 'Direct email fallback must remain available');
  await access(`public${resumeUrl}`);
  const combined = html;
  for (const match of combined.matchAll(/href="#([^"]+)"/g)) assert.ok(combined.includes(`id="${match[1]}"`), `Broken section link: ${match[1]}`);
  assert.match(html, /class="reading-progress" aria-hidden="true"/, 'Decorative scroll progress must not interrupt screen readers');
  assert.ok(html.includes('Vaibhav Jadhav, full-stack developer'), 'Portrait requires a meaningful description');
  assert.ok(!html.includes('study-selector'), 'The clean design must not load the old theme selector');
  assert.match(html, /<summary>Scope &amp; implementation details<\/summary>/, 'Secondary project details remain keyboard-operable');
  console.log('PASS: real project content, résumé, direct email, section anchors, scroll-progress semantics, portrait description, and project disclosures.');
} finally {
  await server.close();
}
