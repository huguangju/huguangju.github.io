import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "前端技术博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
