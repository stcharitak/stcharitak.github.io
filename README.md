# stcharitak.github.io

This site now uses a simple template build flow so shared HTML is not duplicated across pages.

## Edit flow
- Shared HTML shell: `src/layout.html`
- Shared head/scripts partials: `src/partials/`
- Shared header/footer renderer: `js/layout.js`
- Page-specific content: `src/pages/*.content.html`

## Build pages
Run:

```bash
scripts/build-pages.sh
```

This regenerates:
- `index.html`
- `resume.html`
- `contact.html`

## Watch mode
Run:

```bash
scripts/watch-pages.sh
```

This will rebuild automatically when you save files under `src/` or `js/layout.js`.
