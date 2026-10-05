# sidekick-web-automation

Playwright automation test suite for the [sidekick-web](https://github.com/pandytconsulting/sidekick-web) app.

## Setup

```bash
npm install
npx playwright install   # download browsers (first time only)
```

## Running tests

By default tests target the local Vite dev server at `http://localhost:5173`.
Start the sidekick-web app first, then run:

```bash
npm test             # run all tests (headless)
npm run test:headed  # run with a visible browser
npm run test:ui      # interactive UI mode
npm run report       # open the last HTML report
```

To run against a deployed environment, set `BASE_URL`:

```bash
BASE_URL=https://your-deployed-url npm test
```

## Structure

- `tests/` — test specs (`*.spec.js`)
- `playwright.config.js` — configuration (base URL, browsers, reporters)
