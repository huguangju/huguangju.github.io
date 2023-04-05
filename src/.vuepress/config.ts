import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  title: "Carson's blog",
  description: "Frontend blog",

  lang: "zh-CN",
  theme,

  plugins: [
    // https://plugin-search-pro.vuejs.press/zh/config.html
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 指定热键
      hotKeys: [{ key: 'k', meta: true }],
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
