# 个人站点仓库

这个仓库是我的个人 GitHub Pages 仓库，主要放一些博客内容、工具页面、文档，以及单独的项目产品主页。

## 线上地址

- 博客：`https://www.sakuraio.com/`
- 产品主页：`https://www.sakuraio.com/synthworks/`
- 文档：`https://www.sakuraio.com/docs/`
- 工具：`https://www.sakuraio.com/tools/`

## 项目结构

```text
nekoimi.github.io/
├── apps/
│   ├── blog/         # 博客，发布到站点根路径 /
│   ├── synthworks/   # 项目产品主页，发布到 /synthworks/
│   ├── docs/         # 文档站点，发布到 /docs/
│   └── tools/        # 工具页面，发布到 /tools/
├── .github/          # GitHub Actions 工作流
├── CNAME
├── package.json
└── pnpm-workspace.yaml
```

## 本地开发

安装依赖：

```bash
pnpm install
```

启动各个应用：

```bash
# 博客
pnpm dev
# 或
pnpm dev:blog

# 产品主页
pnpm dev:synthworks

# 文档
pnpm dev:docs

# 工具
pnpm dev:tools
```

## 构建

构建整个站点：

```bash
pnpm build
```

如需单独预览某个应用，可以使用：

```bash
pnpm --filter blog preview
pnpm --filter synthworks preview
pnpm --filter docs preview
pnpm --filter tools preview
```

## 部署

仓库通过 GitHub Actions 自动构建并部署到 GitHub Pages，构建产物统一输出到 `dist/`。

工作流文件：

```text
.github/workflows/deploy.yml
```

## License

MIT
