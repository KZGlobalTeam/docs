<template>
  <Layout />
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import DefaultTheme from "vitepress/theme";

const Layout = DefaultTheme.Layout;

onMounted(() => {
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  if (!prefersDark) {
    document.body.classList.add("light");
  }

  const [navbar] = document.getElementsByClassName("nav-links");

  const toggleMode = (el: MouseEvent) => {
    document.body.classList.toggle("light");

    const element = el.target as HTMLElement;
    element.textContent = getModeSwitchIcon();
  };

  const getModeSwitchIcon = () => {
    const isLight = document.body.classList.contains("light");
    return isLight ? "🌙" : "🌞";
  };

  const modeSwitchEl = document.createElement("div");
  modeSwitchEl.onclick = toggleMode;
  modeSwitchEl.textContent = getModeSwitchIcon();
  modeSwitchEl.style.cursor = "pointer";
  modeSwitchEl.style.paddingLeft = "16px";

  navbar.appendChild(modeSwitchEl);
});
</script>
