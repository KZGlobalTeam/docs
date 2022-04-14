<template>
  <Layout>
    <template #navbar-search>
      <ClientOnly>
        <div class="mode-switch" @click="toggleMode">
          {{ modeSwitchIcon }}
        </div>
      </ClientOnly>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import DefaultTheme from "vitepress/theme";

const Layout = DefaultTheme.Layout;

const toggleMode = () => {
  document.body.classList.toggle("light");
};

const modeSwitchIcon = computed(() => {
  const isLight = document.body.classList.contains("light");
  return isLight ? "🌙" : "🌞";
});

onMounted(() => {
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  if (!prefersDark) {
    document.body.classList.add("light");
  }
});
</script>

<style scoped>
.mode-switch {
  cursor: pointer;
  padding-top: 4px;
  padding-left: 16px;
}
</style>
