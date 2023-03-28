import { sidebar } from "vuepress-theme-hope";
import { reading } from "./reading/index";

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

  "/reading/": reading,
  "/reading/react-design-principles/": "structure",
  "/reading/vue-design-and-achieve/": "structure",
});
