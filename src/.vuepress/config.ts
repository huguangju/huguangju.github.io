import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  title: "Carson's blog",
  description: "Frontend blog",

  lang: "zh-CN",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
