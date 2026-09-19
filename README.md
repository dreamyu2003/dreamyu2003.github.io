# Zhengyun Yu — Academic Homepage

基于 `resume_tm.tex` 的静态学术主页，可直接托管在 GitHub Pages，无需构建或安装依赖。

## 本地预览

在本目录运行 `python3 -m http.server 8000`，打开 http://localhost:8000 。也可以直接用浏览器打开 `index.html`。

## 内容维护

- `index.html`：个人介绍、教育、研究、奖项及链接。
- `style.css`：配色、布局、移动端及打印样式。
- `script.js`：当前导航位置和页脚年份；关闭 JavaScript 后正文仍可阅读。
- `favicon.svg`：姓名缩写图标。

页面只采用 TeX 中未注释的履历内容；未公开手机号码，也未上传原始 TeX（其中有被注释掉的个人资料）。无外部字体、跟踪脚本或第三方前端依赖。

后续根据本人提供的信息加入 DiDi Chuxing 研究实习与会议报告，移除竞赛列表，语言部分更新为 Mandarin (Native) 和 English (Fluent)。

## GitHub Pages

用户站点仓库名为 `dreamyu2003.github.io`。将本目录文件放在仓库根目录，在 Settings → Pages 中选择 Deploy from a branch，分支 `main`、目录 `/ (root)`。`.nojekyll` 使站点作为普通静态文件发布。

官方说明：https://docs.github.com/en/pages/quickstart

## 本地文件与线上站点

线上站点由 GitHub 仓库和 GitHub Pages 托管。删除电脑上的本地副本不会影响线上访问；日后可重新克隆仓库继续编辑。
