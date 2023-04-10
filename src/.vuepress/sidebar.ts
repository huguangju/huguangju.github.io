import { sidebar } from "vuepress-theme-hope";
import { arraySidebar } from "vuepress-theme-hope";

export default sidebar({
  "/engineering/": "structure",

  "/reading/": arraySidebar([
    "",
    "react-design-principles/",
    "vue-design-and-achieve/",
    "programming-typescript/",
  ]),
  "/reading/react-design-principles/": "structure",
  "/reading/vue-design-and-achieve/": "structure",
  "/reading/programming-typescript/": "structure",

  "/resource/": arraySidebar([
    "",
    "interview/",
    // "nav/",
  ]),
  "/resource/interview/": "structure",
});
