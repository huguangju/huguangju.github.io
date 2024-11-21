import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // { text: "Vue", icon: "vue", link: "/vue/" },
  // { text: "React", icon: "react", link: "/react/" },
  // { text: "文档", icon: "read", link: "/doc/" },
  {
    text: "读记",
    icon: "read",
    // link: "/reading/",
    prefix: "/reading/",
    children: [
      {
        text: "读记",
        icon: "read",
        link: "",
        activeMatch: "^/reading/$",
      },
      "react-design-principles/",
      "vue-design-and-achieve/",
      "programming-typescript/",
    ],
  },
  // {
  //   text: "资源",
  //   icon: "expansion",
  //   link: "/nav/",
  // },
  {
    text: "资源",
    icon: "expansion",
    prefix: "/resource/",
    children: [
      "",
      // "nav/",
      "interview/",
    ]
  }
]);
