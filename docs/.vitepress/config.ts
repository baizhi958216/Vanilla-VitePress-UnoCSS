import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { SideBar } from "./sidebar";
import { NavBar } from "./nav";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "zh-CN",
  title: "Vitepress-UnoCSS-Template",
  description: "Vanilla VitePress UnoCSS Template",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/vitepress-logo-mini.svg",
      },
    ],
  ],

  themeConfig: {
    nav: NavBar,
    sidebar: SideBar,
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    logo: "/vitepress-logo-mini.svg",
  },

  vite: {
    plugins: [UnoCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
});
