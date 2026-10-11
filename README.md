# Weiqi Gai · Academic Resume

面向博士申请的双语学术主页，使用 Astro 生成纯静态页面，可部署到 GitHub Pages。
网站地址：**https://gaiwqqq.github.io/resume/**

源码仓库：**https://github.com/Gaiwqqq/resume**

这是独立的 GitHub Pages 项目。

## 发布到 GitHub Pages

1. 在 GitHub 创建一个空的公开仓库，推荐命名 `resume`。也可以使用 `<用户名>.github.io`，用于个人主页根路径。
2. **仅将本目录的内容**提交到该仓库根目录，确保 `.github/workflows/deploy.yml`、`package.json`、`src/` 和 `public/` 都位于正确位置。不要上传上层 `CV` 目录。
3. 默认分支设为 `main`。打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 推送代码；若首次推送发生在 Pages 配置之前，在 **Actions → Deploy academic resume to GitHub Pages → Run workflow** 手动运行。
5. 构建和部署通过后，在 **Settings → Pages** 查看实际网址：`https://<用户名>.github.io/resume/` 或 `https://<用户名>.github.io/`。

工作流从 `actions/configure-pages` 自动获取域名及仓库路径，图片、视频、PDF、样式与 canonical 均适配该路径，无需在代码里填写用户名。不要将本目录套在仓库的额外子文件夹中。

在本目录执行以下命令可初始化并提交（把远程地址中的占位符替换为实际值）：

```bash
git init -b main
git add .
git commit -m "Add academic resume for GitHub Pages"
git remote add origin https://github.com/Gaiwqqq/resume.git
git push -u origin main
```

## 本地运行

需要 Node.js 22 与 npm。

```bash
npm ci
npm run dev
```

生产构建及预览：

```bash
npm run build
npm run preview
```

模拟 GitHub 项目页面（访问预览地址的 `/resume/` 路径）：

```bash
SITE_URL=https://example.github.io BASE_PATH=/resume/ npm run build
SITE_URL=https://example.github.io BASE_PATH=/resume/ npm run preview
```

`example.github.io` 仅用于本地验证，工作流使用真实的 Pages 地址。未设置 `SITE_URL` 的本地构建不输出占位 canonical。

## 内容维护

- `src/data/content.ts`：教育、论文、项目、荣誉、技能的中英双语内容。论文 `status` 控制已接收／手稿分组，`contribution` 标注个人作者贡献。
- `src/pages/index.astro`：个人简介、研究演示和交互。首次访问默认英文，语言选择保存在浏览器本地。
- `src/styles/academic.css`：新版学术排版；`global.css` 保留媒体播放器、基础布局与打印规则。
- `public/cv/Weiqi_Gai_CV_EN.pdf` 与 `Weiqi_Gai_CV_ZH.pdf`：复制自现有英文、中文简历 PDF。更新简历后手动替换对应文件；当前 PDF 中的网站地址仍是原网站地址，待 GitHub 地址确定后可在 LaTeX 源文件中更新并重新导出。
- `public/media/`：从原站复制的优化后媒体，约 38 MB。不依赖服务器或转码步骤，且保留 LeRobot 四个指定视频及 2×2 同步播放。

网页研究事实与状态沿用现有简历资料，未自行宣称新增录用或科研成果。已接收论文与在审、准备中的手稿明确分开；不展示影响因子与国内评级标签。正文、论文标题、作者贡献和个人承担的工作优先于视频展示。

## 校验

`npm run build` 依次运行 Astro 类型检查、静态构建和站内链接检查，检查所有页面本地资源、锚点及 base 路径。`dist/` 是可发布产物，无服务端代码、Docker 或 SSH 依赖。

参考：[Astro GitHub Pages 部署指南](https://docs.astro.build/en/guides/deploy/github/)、[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 本次验证（2026-10-11）

- Astro 类型检查：0 错误、0 警告；根路径与 `/resume/` 子路径构建及本地资源检查通过。
- 375、768、1024、1440 像素下的中英双语布局无横向溢出；语言记忆、无 JavaScript 内容显示、中英文 PDF 链接及视频弹窗开关通过检查。
- 10 个 MP4 均通过 FFmpeg 完整解码检查。当前测试环境的 Chromium 不支持 H.264，因此未验证实际同步播放；已验证不支持播放时的提示与四个下载入口。请在支持 H.264 的浏览器中复核播放、拖动与重播。
- 原站 40 个源码与资源文件的 SHA-256 校验值保持一致；未操作原站服务器。

本仓库使用 GitHub Actions 发布；推送到 `main` 后自动构建并更新网站。可在仓库 Actions 页面查看每次部署的状态。
