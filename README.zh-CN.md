# 🚀 SynthWorks

> 为创作者和开发者打造的现代化 AI 自动化平台。

**SynthWorks** 是一个统一的 AI 工具和工作流自动化平台 — 旨在简化视频处理、语音合成、OCR 等复杂任务。

---

## 🌌 在线演示

* **主站**: https://www.sakuraio.com
* **文档**: https://www.sakura.io.com/docs
* **工具**: https://www.sakura.io.com/tools

---

## ✨ 功能特性

* 🎭 **AI 人脸替换**
  视频和图像的高质量人脸替换。

* 🔊 **文本转语音 (TTS)**
  自然且富有表现力的语音生成。

* 📄 **OCR 处理**
  批量文档识别和数据提取。

* 🎬 **视频自动化**
  自动编辑、裁剪和广告移除。

* ⚙️ **工作流自动化**
  将多个 AI 工具组合成无缝流水线。

---

## 🧱 项目结构

```
sakuraio-web/
├── apps/
│   ├── home/      # Astro 主站 (营销页面)
│   ├── docs/      # VitePress 文档系统
│   ├── tools/     # 工具 UI (Vue + Vite)
│
├── packages/      # 共享模块 (未来使用)
├── .github/       # CI/CD 工作流
├── package.json
├── pnpm-workspace.yaml
```

`

---

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| **Astro** | 静态站点生成器 |
| **VitePress** | 文档系统 |
| **Vue + Vite** | 交互式工具 UI |
| **i18next** | 国际化支持 |
| **Tailwind CSS** | 样式框架 |
| **pnpm** | Monorepo 管理 |
| **GitHub Pages** | 托管与部署 |
| **Cloudflare** | DNS 与 CDN 加速 |

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

---

### 2. 启动开发服务器

```bash
# 主站 (Astro)
pnpm dev:home
# 或
pnpm dev:web

# 文档
pnpm dev:docs

# 工具
pnpm dev:tools
```

---

### 3. 构建所有应用

```bash
pnpm build
```

---

### 4. 预览构建结果

```bash
pnpm preview
```

---

## 🌍 国际化

SynthWorks 支持多语言结构：

```
/zh/    → 中文
/en/    → 英文
```

文本内容通过 JSON 文件管理：

```
apps/home/src/locales/
```

---

## ⚙️ 部署

通过 GitHub Actions 自动部署：

1. 推送到 `main` 或 `master` 分支
2. 构建所有应用到 `/dist`
3. 部署到 GitHub Pages

---

## 📌 路线图

- [ ] WrapBox 插件系统集成
- [ ] 在线 AI 工具执行 (云端模式)
- [ ] 用户认证与仪表板
- [ ] 付费计划 / SaaS 功能
- [ ] 开发者 API 访问

---

## 💡 愿景

SynthWorks 致力于成为一个**模块化 AI 自动化平台**，其中：

* 工具可组合
* 工作流可编程
* AI 触手可及

---

## 🤝 贡献

欢迎贡献代码！

欢迎提出问题或提交拉取请求。

---

## 📬 联系方式

* **邮箱**: [your@email.com](mailto:your@email.com)
* **GitHub**: https://github.com/nekoimi

---

## 📄 许可证

MIT License

---

⭐ 如果觉得这个项目有用，不妨给个星星！
