import { defineConfig } from "vitepress";
import type { DefaultTheme, HeadConfig } from "vitepress";

const isProduction = process.env.NODE_ENV === "production";

const head: HeadConfig[] = [];

const nav: DefaultTheme.NavItem[] = [
  { text: "Discord", link: "https://discord.gg/csgokz" },
  { text: "Forums", link: "https://forum.gokz.org" },
];

const sidebar: DefaultTheme.SideBarItem[] = [
  {
    text: "Installation guides",
    link: "/#installation-guides",
    children: [
      { text: "Install GOKZ", link: "/guides/install-gokz" },
      { text: "Install KZTimer", link: "/guides/install-kztimer" },
    ],
  },
  {
    text: "Global whitelisting guides",
    link: "/#global-whitelisting-guides",
    children: [
      { text: "GOKZ Global whitelisting", link: "/guides/global-gokz" },
      { text: "KZTimer Global whitelisting", link: "/guides/global-kztimer" },
    ],
  },
];

export default defineConfig({
  title: "CSGO KZ Docs",
  description: "CSGO kreedz Documentation",

  base: "/",
  srcDir: "docs",

  head: head,
  lastUpdated: isProduction,

  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    repo: "KZGlobalTeam/docs",
    docsDir: "docs",

    editLinks: true,
    prevLinks: false,
    nextLinks: false,

    lastUpdated: isProduction,
  },
});
