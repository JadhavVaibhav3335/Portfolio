# Website UI and UX Design Instructions

Use these instructions whenever you design, build, or redesign a website or frontend in this repository. The goal is to make the site feel intentional and distinctive while keeping it clear, usable, responsive, and suited to its audience.

## Start with the project

Before changing code:

1. Inspect the existing app, framework, routes, components, styles, assets, and repository instructions. Preserve the current stack and working conventions unless the user asks to change them.
2. Understand the website's purpose, audience, main user task, content, brand, and business goal from the brief and existing project. Reuse real project content and assets where possible; do not invent product claims, testimonials, statistics, or capabilities.
3. Choose a visual direction that suits this specific site. Consider minimalist, maximalist, editorial, playful, premium, corporate, brutalist, modern, or a suitable blend. Treat these as choices, not defaults. Do not make every site look like the same generic SaaS landing page.
4. If key information is missing, make sensible low-risk assumptions and state them briefly. Ask only when the missing answer would materially change the design or implementation.

## Choose a layout for the content

Use the simplest layout that supports the content and user journey. Combine patterns only when they have a clear purpose. Available patterns include:

- **Grid or modular grid:** collections, products, projects, dashboards, and repeatable content.
- **Split screen:** a focused pairing such as copy with a product image, form, or preview.
- **Asymmetrical composition:** a deliberate focal point for a landing or product page.
- **Full-screen hero:** a strong brand moment when the image still allows readable text and clear actions.
- **Horizontal scrolling:** optional browsing rows or galleries, with visible controls and an accessible alternative; never make the whole page's primary navigation depend on sideways scrolling.
- **Cards:** scannable collections where each item has a meaningful action; avoid wrapping every section in a card.
- **Magazine or editorial:** news, articles, case studies, and content-rich pages with a clear lead story and readable hierarchy.
- **Gallery:** portfolios and visual collections where imagery is the primary content.
- **Alternating or zig-zag sections:** explain a sequence of features or steps with purposeful text and media placement.
- **F-pattern or single-column reading flow:** long-form text, documentation, and information-dense pages.
- **Interactive or animated elements:** use only when interaction helps demonstrate, explore, or understand the product.

Pick one primary layout and, at most, a few supporting patterns. Explain the choice in a short implementation note when useful. Layout is a tool for information hierarchy, not decoration.

## Set the visual intensity

Match visual richness to the brand and audience:

- **Minimalist:** restrained palette, generous space, clear type scale, few competing elements, and careful alignment. Minimal does not mean empty or underspecified.
- **Maximalist:** expressive color, layered typography, dense compositions, patterns, or richer imagery. Keep navigation, reading order, contrast, and primary actions easy to understand.
- **Balanced:** a clear base with a few expressive moments, often useful for product sites and portfolios.

Use a consistent design system for color, typography, spacing, radii, borders, shadows, and component states. Strong visual variety can still be coherent. Avoid trend-driven effects that do not support the brief.

## Build the experience, not just the screenshot

- Establish hierarchy so the page's purpose and most important action are easy to find.
- Use semantic HTML and accessible names, labels, keyboard interaction, visible focus, sufficient contrast, and reduced-motion support.
- Design for small and large screens. Reflow content intentionally; do not just shrink desktop layouts. Prevent overflow and preserve usable touch targets.
- Give links, buttons, forms, menus, tabs, filters, and other controls meaningful working behavior. Include hover, focus, active, disabled, loading, empty, and error states where relevant.
- Keep motion light, purposeful, and respectful of `prefers-reduced-motion`. Do not add animation just to make the page appear modern.
- Use real or existing image assets when available. Preserve aspect ratio and provide suitable alt text. Do not use broken links, missing images, fake logos, or emoji as a substitute for designed icons.
- Keep content readable: useful headings, concise labels, appropriate line length, and enough spacing between sections.
- Avoid common template look: identical rounded cards everywhere, excessive gradients and glass effects, tiny low-contrast text, decorative pills without meaning, and oversized blank hero areas.

## Implementation approach

- Follow the project's framework, component style, CSS approach, and existing dependencies. Do not add a UI library or new dependency unless it materially helps and fits the project.
- Prefer reusable components and design tokens where they improve consistency, without abstracting a one-off page unnecessarily.
- Keep changes focused on the requested website work. Preserve existing functionality and content unless the user asks to replace it.
- If the user asks for a redesign, make a cohesive page-level improvement across hierarchy, spacing, typography, color, imagery, and responsive behavior; do not limit the change to superficial color tweaks.
- If browser previews or screenshots are available, inspect the rendered result at desktop and mobile widths and refine visible problems. If they are unavailable, inspect the code for responsive and accessibility issues.
- When finished, summarize the chosen direction, important UI changes, and any assumptions. Report verification only if it was actually performed.

## Reusable project brief

When starting a website task, the user can provide:

- **Website/project:**
- **Audience:**
- **Main user goal:**
- **Pages or features:**
- **Preferred style:** minimalist / maximalist / balanced / choose for me
- **Brand colors, fonts, or references:**
- **Required framework or constraints:**
- **Existing assets or content:**

If some fields are blank, infer from the repository and request rather than blocking on a complete brief.
