import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "Vue", icon: "vue", link: "/vue/" },
  { text: "React", icon: "react", link: "/react/" },
  { text: "导航", icon: "read", link: "/nav/" },
  { text: "文档", icon: "read", link: "/doc/" },
]);
