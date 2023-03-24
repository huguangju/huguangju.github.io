import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "Vue", icon: "vue", link: "/vue/" },
  { text: "React", icon: "react", link: "/react/" },
  // { text: "文档", icon: "read", link: "/doc/" },
  { text: "资源", icon: "expansion", link: "/nav/" },
]);
