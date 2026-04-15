# SynthWorks

> A mixed GitHub Pages monorepo for the SynthWorks product site, blog, docs, and tools.

## Live URLs

- Blog: `https://www.sakuraio.com/`
- Product site: `https://www.sakuraio.com/synthworks/`
- Product site (Chinese): `https://www.sakuraio.com/synthworks/zh/`
- Docs: `https://www.sakuraio.com/docs/`
- Tools: `https://www.sakuraio.com/tools/`

## Project Structure

```text
nekoimi.github.io/
├── apps/
│   ├── synthworks/ # Astro product site, published under /synthworks/
│   ├── blog/       # Astro blog, published at /
│   ├── docs/      # VitePress docs, published under /docs/
│   └── tools/     # Vue + Vite tools app, published under /tools/
├── .github/       # CI/CD workflows
├── CNAME
├── package.json
└── pnpm-workspace.yaml
```

## How It Works

This repository builds several static apps into one final `dist/` directory for GitHub Pages:

- `apps/blog` writes the root site to `dist/`
- `apps/synthworks` writes the product site to `dist/synthworks`
- `apps/docs` writes to `dist/docs`
- `apps/tools` writes to `dist/tools`

The blog owns the site root `/`, while the product experience lives under `/synthworks/`.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| Astro | Product site and blog |
| VitePress | Documentation |
| Vue + Vite | Tools UI |
| i18next | Product-site localization |
| Tailwind CSS | Styling |
| pnpm workspace | Monorepo management |
| GitHub Pages | Hosting and deployment |

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run apps locally

```bash
# Blog (root site)
pnpm dev
# or
pnpm dev:blog

# Product site (apps/synthworks)
pnpm dev:synthworks

# Optional alias
pnpm dev:web

# Docs
pnpm dev:docs

# Tools
pnpm dev:tools
```

### Build everything

```bash
pnpm build
```

### Preview individual apps

Run preview commands from each app directory when needed:

```bash
pnpm --filter synthworks preview
pnpm --filter blog preview
pnpm --filter docs preview
pnpm --filter tools preview
```

## Product Site Routing

The SynthWorks product site uses these routes:

```text
/synthworks/             -> English landing page
/synthworks/zh/          -> Chinese landing page
/synthworks/legal/...    -> English legal pages
/synthworks/zh/legal/... -> Chinese legal pages
```

Product-site translations live in:

```text
apps/synthworks/src/i18n/
```

## Deployment

Deployment is automated with GitHub Actions:

1. Push to `main` or `master`
2. Run `pnpm build`
3. Upload the generated `dist/` directory
4. Deploy the artifact to GitHub Pages

The workflow is defined in `.github/workflows/deploy.yml`.

## Contributing

Issues and pull requests are welcome.

## License

MIT
