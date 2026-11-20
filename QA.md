# Validation record — React Portfolio / 29 October 2026

## Completed

- Production build succeeded with Vite.
- Four Node test cases passed: required/invalid fields, valid trimmed values, message length bounds and encoded email drafts.
- Browser preview loaded the React application and its portrait/project images.
- React Router navigation from Home to Projects and Contact worked; direct refresh on Projects worked in the Vite preview.
- Category filtering reduced the list to one landing page.
- Saving Velora persisted after refresh; saved-only view showed the saved project.
- Search with no matches displayed a resettable empty state.
- Dark mode persisted after refresh.
- Invalid contact submission showed field-specific errors and focused the first invalid field.
- Valid contact submission created a reviewable email draft and explicitly stated that no message had been sent. No email was sent during verification.
- Home and Projects layouts were inspected inside 320px, 390px and 768px browser frames, plus the desktop preview.
- Found and fixed horizontal overflow caused by the offscreen mobile navigation. Rechecked that document width matched the visible viewport at those three frame sizes.
- Mobile menu opened; Escape closed it; selecting Contact closed it after navigation.
- About and Contact also fit their checked phone frames.
- Production build loaded directly on Contact; a project-detail route survived refresh and unknown project IDs displayed the 404 page.

## Scope and remaining checks

These are scoped manual browser checks and pure-function unit tests, not a claim of full WCAG conformance or certification. A full automated accessibility scan, real-phone testing, other-browser testing, slow-network testing and email-client handoff remain to be completed.

Repository creation and public deployment are still pending. Hosting configuration is included, but refreshes/deep links must be checked on the actual deployed host. Existing project links were taken from the verified source portfolio; availability of third-party project hosting may change.

## Review checklist before submission

- [ ] Create the public GitHub repository `react-portfolio`.
- [ ] Verify public Netlify/Vercel deployment and add real URLs to the README.
- [ ] Test every page in light and dark modes at phone, tablet and desktop sizes.
- [ ] Check direct navigation and refresh on `/projects`, `/about`, `/contact` and `/projects/velora`.
- [ ] Check keyboard navigation, menu focus loop, error announcements and reduced motion.
- [ ] Confirm contact details, photo choice and project descriptions.
- [ ] Review the code and complete the exercises in `LEARNING.md`.
- [ ] Submit repository and live/demo URLs in the correct fields.
