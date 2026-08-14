# Yogesh Dhakane — Portfolio (Angular 19)

Personal portfolio website rebuilt in **Angular 19** (standalone components, plain CSS —
no Tailwind, no UI kit) from an original React/Tailwind export.

## Folder structure

```
src/
├── app/
│   ├── services/
│   │   └── auth.service.ts        # HttpClient-based auth service
│   ├── shared/
│   │   ├── icon/                  # inline-SVG icon component (no icon lib dependency)
│   │   └── reveal/                # scroll-reveal attribute directive
│   ├── template/                  # one folder per section, each with .ts/.html/.css
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── education/
│   │   ├── contact/
│   │   ├── footer/
│   │   └── animated-bg/
│   ├── app.component.ts/html/css
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   ├── img/                       # profile photo etc.
│   ├── logo/                      # favicon / brand marks
│   └── font/                      # local font files, if any
├── dynamic_variable/
│   └── app_info.ts                # ApiUrl, AppUrl, DomainName, App_Name, VERSION, Footer_name
├── index.html
├── main.ts
└── styles.css                     # global styles + CSS custom properties
```

## Getting started

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build    # production build -> dist/yogesh-portfolio
```

## Notes

- Every section is a standalone Angular component with its **own** `.ts`, `.html`
  and `.css` file (no inline templates/styles).
- All visuals (typewriter effect, scroll-reveal, animated counters, skill bars)
  are implemented with plain Angular/TypeScript — no external animation library.
- Update contact details, links and copy in each component's `.ts` file, and
  point `ApiUrl` / `AppUrl` in `src/dynamic_variable/app_info.ts` at your own backend.
