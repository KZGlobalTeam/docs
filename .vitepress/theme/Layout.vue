<template>
  <Layout>
    <template #navbar-search>
      <div
        ref="modeEl"
        class="mode-switch"
        @click="toggleMode"
      />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import DefaultTheme from "vitepress/theme";

const modeEl = ref();
const Layout = DefaultTheme.Layout;

const setIcon = () => {
  const isLight = document.body.classList.contains("light");
  modeEl.value.textContent = isLight ? "🌙" : "🌞";
};

const toggleMode = () => {
  document.body.classList.toggle("light");
  setIcon();
};

onMounted(() => {
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  if (!prefersDark) {
    document.body.classList.add("light");
  }

  setIcon();
});
</script>

<style scoped>
.mode-switch {
  cursor: pointer;
  padding-top: 4px;
  padding-left: 16px;
}
</style>
