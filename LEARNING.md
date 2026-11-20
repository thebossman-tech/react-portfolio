# Learn this portfolio one step at a time

The first version is a reference you can run and study. You do not need to understand every file at once. Complete one stage, make the small change yourself, and explain the result before moving on.

## Stage 1 — Run the app and understand the entry point

1. Extract the source ZIP and open `react-portfolio` in VS Code.
2. Open the terminal in that folder.
3. Run `npm ci`, then `npm run dev`.
4. Open the local address printed in the terminal.
5. Read `index.html` and then `src/main.jsx`.

Unlike Task 1, the HTML contains a mostly empty `root` element. React renders the interface into that element. Vite transforms JSX and bundles imports; this is why double-clicking `index.html` is not the correct way to run this project.

**Exercise:** find your introduction in `Hero.jsx`. Change one sentence, save and watch Vite update the browser. Restore it if you prefer the original.

**Explain:** what is the difference between the root HTML file and a React component?

## Stage 2 — Components, JSX and props

Read `Hero.jsx`, `SectionHeading.jsx` and `ProjectCard.jsx`.

A component is a JavaScript function returning JSX. JSX resembles HTML, but uses `className` instead of `class` and allows JavaScript expressions inside braces.

`ProjectCard({ project })` receives a project object through a **prop**. The same component can render Velora, Savory Bites or another project without copying the entire card markup.

`Home.jsx` composes components into a page. This separation is the main difference from putting every section in one large file.

**Exercise:** change the reusable `SectionHeading` spacing in CSS. Observe how every page using it changes consistently.

**Explain:** when should you pass data as a prop instead of hard-coding it inside the component?

## Stage 3 — Render a collection and manage state

Read `src/data/projects.js`, `Projects.jsx` and `ProjectsContext.jsx`.

`map()` turns the project array into cards. Each card needs a stable `key` so React can track it.

`useState` remembers data between renders. `setProjects(current => ...)` receives the latest array and returns a new array. The spread expression `{ ...project, saved: !project.saved }` copies a project with its saved flag changed.

The category, search text and saved-only checkbox are also state. The filtered result is **derived** from existing state instead of being stored in a second array that might fall out of sync.

**Exercise:** search for `CSS`, choose Landing pages, save Velora and select Saved only. Explain which action changes which piece of state.

**Explain:** why do we use `map()` to return a new array instead of modifying `project.saved` directly?

## Stage 4 — Share state with Context

Read `ThemeContext.jsx` and return to `main.jsx`.

Context makes a value available to descendants of a provider. `useTheme()` reads the shared theme. `useProjects()` reads shared projects. State remains available when a page unmounts during navigation because the providers wrap the routes.

`useEffect` synchronizes state with browser features such as local storage. It is not needed for calculating the filtered project list.

The initial theme is set before React renders to reduce a bright flash. CSS variables perform the visual theme change.

**Exercise:** switch themes and refresh. Save a project, visit About, then return to Work. Observe what persists and what resets.

**Explain:** what is the difference between state in memory and state saved in local storage?

## Stage 5 — Routes are real pages, not section anchors

Read `App.jsx`, `Header.jsx` and `ProjectDetail.jsx`.

`BrowserRouter` listens to the browser's address. `Routes` chooses a matching `Route`. `Link` and `NavLink` navigate without a full document reload.

`/projects/:id` is a dynamic route. `useParams()` reads the ID, then the detail page finds the matching project. Unknown IDs display a helpful 404.

A production host must serve `index.html` when a visitor refreshes `/projects` or opens it directly. This is the purpose of `vercel.json`, `netlify.toml` and `public/_redirects`.

**Exercise:** open `/projects/velora` directly, refresh, then try `/projects/not-a-project`.

**Explain:** how is navigating to `/about` different from scrolling to `#about` in Task 1?

## Stage 6 — Controlled forms and honest validation

Read `Contact.jsx`, `src/lib/contact.js` and its unit tests.

An input is **controlled** when its value comes from state and `onChange` updates that state. Validation returns an object of field errors. Validating in a pure function makes it testable without a browser.

`event.preventDefault()` stops the browser's normal form submission. Valid input produces a draft. It does not send email. `encodeURIComponent` keeps special characters in subject/body text from breaking the mail link.

**Exercise:** submit empty fields; enter an invalid email; enter a short message; finally create a valid draft. Do not send a test message unless you intend to.

**Explain:** what would need to change to deliver email through a backend service?

## Stage 7 — Responsive CSS and accessibility

Read the numbered sections in `styles.css`.

The content rail is capped at 1180px with 40px gutters on larger screens and 20px on smaller screens. The header uses its own wider rail. Grids reduce columns as the viewport narrows. The mobile menu starts below 801px.

Closed navigation uses `display: none` on mobile. Translating it offscreen without removing it from layout caused horizontal overflow during testing, so the menu uses an explicit hidden/displayed state instead.

Keyboard users get focus outlines, a skip link, menu focus looping and Escape-to-close. Route changes reset focus to the main region. Form errors are associated with the fields. Reduced-motion preferences disable entrance animations.

**Exercise:** use the entire page with Tab, Shift+Tab and Enter. Try the menu and Escape. Check 320px, 390px, 768px and desktop widths.

**Explain:** why is a menu that only works with a mouse incomplete?

## Stage 8 — Build, publish and present

Run `npm test` and `npm run build`. Inspect `dist`: filenames under `assets` are bundled production files. They are generated, so do not hand-edit them.

Create the public `react-portfolio` repository. Deploy on Netlify or Vercel using the README. Open the actual demo and repository while signed out.

For your walkthrough, demonstrate routing, themes, project filtering/saving and form validation. Then explain one component, one state update and one accessibility decision in your own words.

## Our first lesson

Start with Stage 1 and Stage 2. Make a small edit to `Hero.jsx`, run the app and identify exactly where `<Hero />` is used. Keep the rest as a working reference while we study each concept together.
