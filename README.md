# 🚀 SynthWorks

> A modern AI automation platform built for creators and developers.

**SynthWorks** is a unified platform for AI-powered tools and workflow automation — designed to simplify complex tasks like video processing, speech synthesis, OCR, and more.

---

## 🌌 Live Demo

* **Main Site**: https://www.sakuraio.com
* **Docs**: https://www.sakuraio.com/docs
* **Tools**: https://www.sakuraio.com/tools

---

## ✨ Features

* 🎭 **AI Face Swap**
  High-quality face swapping for video and images.

* 🔊 **Text-to-Speech (TTS)**
  Natural and expressive voice generation.

* 📄 **OCR Processing**
  Batch document recognition and data extraction.

* 🎬 **Video Automation**
  Automated editing, trimming, and ad removal.

* ⚙️ **Workflow Automation**
  Combine multiple AI tools into a seamless pipeline.

---

## 🧱 Project Structure

```
sakuraio-web/
├── apps/
│   ├── home/      # Astro main site (marketing page)
│   ├── docs/      # VitePress documentation
│   ├── tools/     # Tool UI (Vue + Vite)
│
├── packages/      # Shared modules (future use)
├── .github/       # CI/CD workflows
├── package.json
├── pnpm-workspace.yaml
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro** | Static site generator |
| **VitePress** | Documentation system |
| **Vue + Vite** | Interactive tools UI |
| **i18next** | Internationalization |
| **Tailwind CSS** | Styling framework |
| **pnpm** | Monorepo management |
| **GitHub Pages** | Hosting & deployment |
| **Cloudflare** | DNS & CDN acceleration |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

---

### 2. Run development servers

```bash
# Main site (Astro)
pnpm dev:home
# or
pnpm dev:web

# Docs
pnpm dev:docs

# Tools
pnpm dev:tools
```

---

### 3. Build all apps

```bash
pnpm build
```

---

### 4. Preview build

```bash
pnpm preview
```

---

## 🌍 Internationalization

SynthWorks supports multi-language structure:

```
/zh/    → Chinese
/en/    → English
```

Text content is managed via JSON files:

```
apps/home/src/locales/
```

---

## ⚙️ Deployment

Deployment is fully automated via GitHub Actions:

1. Push to `main` or `master` branch
2. Build all apps into `/dist`
3. Deploy to GitHub Pages

---

## 📌 Roadmap

- [ ] WrapBox plugin system integration
- [ ] Online AI tool execution (cloud mode)
- [ ] User authentication & dashboard
- [ ] Paid plans / SaaS features
- [ ] API access for developers

---

## 💡 Vision

SynthWorks aims to become a **modular AI automation platform** where:

* Tools are composable
* Workflows are programmable
* AI is accessible to everyone

---

## 🤝 Contributing

Contributions are welcome!

Feel free to open issues or submit pull requests.

---

## 📬 Contact

* **Email**: [your@email.com](mailto:your@email.com)
* **GitHub**: https://github.com/nekoimi

---

## 📄 License

MIT License

---

⭐ If you find this project useful, consider giving it a star!
