<template>
  <Layout />
</template>

<script setup lang="ts">
import { createVNode, render, onMounted } from "vue";

import DefaultTheme from "vitepress/theme";

import SunIcon from "./components/SunIcon.vue";
import MoonIcon from "./components/MoonIcon.vue";

const Layout = DefaultTheme.Layout;

onMounted(() => {
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  if (!prefersDark) {
    document.body.classList.add("light");
  }

  const [navbar] = document.getElementsByClassName("nav-bar");

  const darkVNode = createVNode(MoonIcon);
  const lightVNode = createVNode(SunIcon);

  const modeSwitchEl = document.createElement("button");
  modeSwitchEl.className = "mode-switch";

  modeSwitchEl.onclick = () => {
    document.body.classList.toggle("light");
    renderIconVNode();
  };

  const renderIconVNode = () => {
    const isLight = document.body.classList.contains("light");

    const iconVNode = isLight ? darkVNode : lightVNode;
    render(iconVNode, modeSwitchEl, true);
  };

  renderIconVNode();
  navbar.appendChild(modeSwitchEl);
});
</script>
