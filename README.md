# TaleRouterDom

React + Vite conversion of the "Tale SEO Agency" HTML template
(https://github.com/gayathirijeyananthan/RouterDom), using `react-router-dom`
for client-side navigation.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

## Project structure

```
src/
  components/
    Navbar.jsx    # Shared header/nav, used on every page, with react-router-dom NavLink
    Footer.jsx    # Shared footer
  pages/
    Home.jsx      # from index.html
    Faq.jsx       # from faq.html
    AboutUs.jsx   # from about.html
    Contact.jsx   # from contact.html
  App.jsx         # <Routes> / <Route> definitions
  main.jsx        # <BrowserRouter> root render
public/
  assets/         # original template CSS, images, webfonts
  vendor/         # bootstrap + jquery (jquery is unused, kept only for bootstrap.min.js)
```

## Routes

| Path       | Page       |
|------------|------------|
| `/`        | Home       |
| `/faq`     | Faq        |
| `/about`   | About Us   |
| `/contact` | Contact    |

## Notes on the conversion

- All 4 HTML pages share the same header/pre-header/footer markup, so that
  markup was pulled into `Navbar` and `Footer` components and rendered once
  in `App.jsx`, around the routed page content.
- Internal links (`index.html`, `about.html`, etc.) were replaced with
  `react-router-dom`'s `<Link>` / `<NavLink>` so navigation no longer causes
  a full page reload.
- The original template referenced `assets/js/custom.js`, `tabs.js`,
  `popup.js`, etc. for the mobile menu, the FAQ accordion, and the "steps"
  tab widget on the home page — those files weren't present in the source
  repo, so that interactivity was re-implemented with React state
  (`useState`) directly in `Navbar.jsx`, `Faq.jsx`, and `Home.jsx`.
- The quote form (FAQ page) and contact form (Contact page) are now
  controlled React forms; submitting shows a simple confirmation message
  instead of posting to a server (there was no backend in the original
  template either).
- Bootstrap and Font Awesome CSS, and all images/webfonts, were copied as-is
  into `public/` and linked from `index.html` so the original visual design
  is preserved.
