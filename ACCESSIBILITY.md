# Accessibility Statement & Suggestions

JAM SESSIONS is committed to making our website accessible to as many people as possible, including users with disabilities.

Contact for accessibility issues: kenhill4591@gmail.com

Statement
- We aim to conform to WCAG 2.1 Level AA standards where feasible and practical.

Practical suggestions and checklist for the site
- Use semantic HTML (proper headings, lists, landmarks).
- Ensure all images have descriptive alt text; decorative images use empty alt attributes (alt="").
- Provide visible focus styles for keyboard users and ensure full keyboard navigation (tab order, skip links for long pages).
- Ensure color contrast meets WCAG AA (contrast ratio >= 4.5:1 for normal text).
- Ensure forms have associated labels and clear error messaging.
- Use ARIA roles and properties only when necessary; prefer native HTML controls.
- Provide captions and transcripts for audio and video content; ensure multimedia controls are keyboard accessible.
- Avoid time-limited interactions or provide controls to extend timeouts.
- Test with screen readers (NVDA, VoiceOver) and browser accessibility tools (axe, Lighthouse).

Testing & monitoring
- Run automated checks (axe-core, Lighthouse) as part of CI and fix high-severity issues.
- Perform manual keyboard and screen reader testing on representative pages.

Continuous improvement
- Add an accessibility issue template and invite users to report issues: include contact email and an accessibility issue label.

Helpful resources
- Web Content Accessibility Guidelines (WCAG) 2.1: https://www.w3.org/TR/WCAG21/
- W3C ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/

This document is a practical checklist and not a full accessibility audit. For a formal accessibility evaluation, consider hiring an accessibility specialist.
