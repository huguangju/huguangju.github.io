import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/engineering/": "structure",
  "/vue/": [
    "",
    {
      text: "响应式",
      prefix: "reactivity/",
      link: "reactivity/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
  ],
  "/reading/": "structure"
  // "/reading/": [
  //   "",
  //   {
  //     text: "React 设计原理",
  //     prefix: "react-design-principles/",
  //     link: "react-design-principles/",
  //     children: "structure",
  //   },
  // ]
});
