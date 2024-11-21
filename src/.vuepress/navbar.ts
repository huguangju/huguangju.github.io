import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // { text: "Vue", icon: "vue", link: "/vue/" },
  // { text: "React", icon: "react", link: "/react/" },
  // { text: "文档", icon: "read", link: "/doc/" },
  {
    text: "读记",
    icon: "ant-design:read-outlined",
    // link: "/reading/",
    prefix: "/reading/",
    children: [
      {
        text: "读记",
        icon: "ant-design:read-outlined",
        link: "",
        activeMatch: "^/reading/$",
      },
      "react-design-principles/",
      "vue-design-and-achieve/",
      "programming-typescript/",
    ],
  },
  {
    text: "资源",
    icon: "ant-design:deployment-unit-outlined",
    prefix: "/resource/",
    children: [
      "",
      // "nav/",
      "interview/",
    ]
  }
]);
