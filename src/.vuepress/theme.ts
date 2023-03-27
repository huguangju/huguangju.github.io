import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://huguangju.cn",

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "huguangju/blog",

  docsDir: "src",

  blog: {
    description: "前端开发者",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/huguangju",
      Gitee: "https://example.com",
    },
  },

  navbar,

  sidebar,

  footer: "Copyright © 2022-2023 Carson hu",
  displayFooter: true,

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "huguangju/huguangju.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkyNTY0NzIyNA==",
      category: "General",
      categoryId: "DIC_kwDOAYdYeM4CVHFm"
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      container: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
