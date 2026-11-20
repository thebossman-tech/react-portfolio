# Olatunbosun — React Portfolio

A personal frontend portfolio for **Ogundijo Olatunbosun**, built for Task 2 of the **AppRo8 frontend development internship**. It uses Vite, React and React Router, with a cream/forest-green visual system, a persistent dark theme and real project screenshots.

## Submission status

The source and deployment build are prepared. The public GitHub repository named `react-portfolio` and public production deployment still need to be created and verified. A local preview is not a submission URL. No public deployment is claimed by this README.

## Run locally

Requires Node.js **22.12+** (Node 24 is also supported).

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Do not open `index.html` directly: Vite must transform JSX and resolve package imports.

```bash
npm test           # contact validation and safe email-draft encoding
npm run build     # compile production assets into dist/
npm run preview   # inspect the production build locally
```

## Requirements and implementation

| Assignment requirement                                   | Implementation                                                                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Create a React app with Vite or CRA                      | Vite + React, JSX entry point and production build                                                                         |
| Reusable Header, Hero, Projects, Skills, Contact, Footer | Named components under `src/components/`                                                                                   |
| React Router navigation between pages                    | Home `/`, Work `/projects`, About/Skills `/about`, Contact `/contact`                                                      |
| Projects managed with state                              | ProjectsContext stores project objects; immutable bookmark updates, category/search filters and saved-only view            |
| Contact form and basic validation                        | Controlled fields, required name/email/message, field-specific errors, first-invalid-field focus and pure validation tests |
| Dark/light toggle                                        | ThemeContext, CSS variables, system-preference initialization and persistent visitor choice                                |
| Responsive layout                                        | Desktop/tablet/phone grids, mobile menu, accessible focus styles and reduced-motion rules                                  |
| Deploy on Vercel, Netlify or suitable platform           | Production build plus Vercel rewrites, Netlify configuration and static `_redirects`                                       |
| GitHub repo `react-portfolio`                            | Required name retained; public repository creation pending                                                                 |
| Project overview and setup README                        | This file, plus learning and QA guides                                                                                     |

## Routes

| Route           | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| `/`             | Introduction, featured projects, approach and skill groups |
| `/projects`     | Search, filter and save projects                           |
| `/projects/:id` | Project notes, screenshot and source/live links            |
| `/about`        | Background, internship experience, education and skills    |
| `/contact`      | Validated contact form with email-draft handoff            |
| Anything else   | Helpful 404 page with a return link                        |

## How state works

- **ThemeContext:** holds the current theme and exposes `toggleTheme`. Components share it through `useTheme()`.
- **ProjectsContext:** holds project objects and exposes `toggleSaved(id)`. Updating a saved flag creates a new array rather than mutating the old one.
- **Projects:** local state tracks category, query and saved-only controls. Visible projects are derived from those controls and the shared list.
- **Contact:** local state tracks field values, errors, the prepared draft and clipboard feedback.
- **Header:** local state tracks the mobile menu. Route changes and desktop resize close it; Escape returns focus to the menu button.

Theme and saved project IDs are stored only in the visitor's local browser. Malformed/blocked storage falls back safely. Contact form data is not stored in local storage.

## Contact form: important scope

The task asks for **basic validation**, not a backend email service. The form therefore validates input and prepares a `mailto:` draft for the visitor to review/send in their own mail application. It also provides a copyable draft.

It does **not** claim to send, queue or deliver email. No automatic message is sent and no contact data is uploaded to a server by the form. Opening the email link requires a configured email client. If AppRo8 expects server delivery, connect an email/form endpoint as a separate enhancement and test that delivery honestly.

## Content and asset sources

- Velora: fictional SaaS landing page, AppRo8 Task 1.
- Savory Bites: four-page restaurant concept project.
- The first portfolio: earlier HTML/CSS/JavaScript personal portfolio.
- Portrait and project screenshots: retrieved from the owner's public `thebossman-tech/Personal-Portfolio` repository on 29 October 2026.
- Personal name, email, location and LinkedIn destination: confirmed from the user's supplied details and existing portfolio.
- Icons: Lucide React (ISC license).

No paid-client history, customer testimonials, expertise scores or commercial performance results are invented. Screenshots represent the projects when captured and may differ from their latest live versions. The earlier portfolio links to its verified source because a live destination was not confirmed.

## File map

- `src/main.jsx` — mounts React and wraps the router/providers.
- `src/App.jsx` — shared layout, route definitions, titles and route-change focus reset.
- `src/components/` — reusable UI building blocks.
- `src/pages/` — page compositions and project detail/404 routes.
- `src/context/` — theme and project state shared across pages.
- `src/data/` — editable profile, skills and project facts.
- `src/lib/contact.js` — validation and email-link generation without side effects.
- `src/styles.css` — tokens, component styles and responsive rules.
- `public/images/` — locally hosted portrait/project screenshots.
- `tests/contact.test.js` — meaningful validation/encoding unit tests.
- `LEARNING.md` — staged learning tasks and code explanations.
- `QA.md` — checks actually performed and remaining verification.

## Deploy on Netlify

**Git-based deployment:** create the public GitHub repository `react-portfolio`, upload this source folder's contents to its root (exclude `node_modules` and `dist`), then import the repository in Netlify. Build command: `npm run build`. Publish directory: `dist`. The included `netlify.toml` and `_redirects` support React Router refreshes.

**Manual deployment:** run `npm ci` and `npm run build`, then upload the contents of `dist` to Netlify's manual deploy interface. The separate deploy ZIP contains those built files. Do not upload the unbuilt `src` folder to a static manual deploy.

## Deploy on Vercel

Import `react-portfolio` from GitHub and choose Vite. Build command: `npm run build`. Output: `dist`. The included `vercel.json` routes page refreshes back to the React application.

Official references:

- [Vite guide](https://vite.dev/guide/)
- [React Router declarative routing](https://reactrouter.com/start/declarative/routing)
- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)

## Before submission

1. Confirm the final deadline and any AppRo8-specific naming/branding requirements.
2. Check the personal details, project descriptions and portrait choice.
3. Create a **public** repository named **react-portfolio** and upload the source contents.
4. Deploy publicly and test direct visits/refreshes on `/projects`, `/about`, `/contact` and a project-detail URL.
5. Check on a real phone and test the form with a configured email application.
6. Put the repository link in **Submission URL** and the deployed website in **Live / Demo URL**.
7. Add the real repository and demo links to this README after verification.

## Verified Repository
https://github.com/thebossman-tech/react-portfolio

## Live URL
https://react-portfolio-nine-phi-37.vercel.app/

## Author

Ogundijo Olatunbosun · [GitHub](https://github.com/thebossman-tech)
