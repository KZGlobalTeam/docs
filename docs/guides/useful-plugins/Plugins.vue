<template>
  <div
    v-for="plugin in plugins"
    :key="plugin.name"
    class="plugin-container"
  >
    <a
      :href="plugin.download"
      class="plugin-name"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ plugin.name }}  <OutboundLink />
    </a>

    by <span class="plugin-author">{{ plugin.author }}</span>

    <span
      v-for="tag in plugin.tags"
      :key="tag"
      class="badge"
    >
      {{ tag }}
    </span>

    <div class="plugin-description">
      {{ plugin.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { data } from "./plugins.data";

import OutboundLink from "../../../.vitepress/theme/components/OutboundLink.vue";

const props = defineProps<{ category: string }>();

const plugins = computed(() => {
  const plugins = data[props.category] ?? [];
  return plugins.sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<style scoped>
.plugin-container {
  padding-bottom: 32px;
}

.plugin-name {
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 6px;
}

.plugin-author {
  color: var(--c-brand);
  padding-right: 8px;
}

.plugin-description {
  padding-top: 8px;
}

.badge {
  display: inline-block;
  background-color: var(--c-brand-light);

  font-size: 0.75rem;
  font-weight: bolder;
  font-family: var(--font-family-mono);

  border-radius: 10em;

  margin: 0.75rem 0.75rem 0 0;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;

  text-align: center;
  text-transform: uppercase;
}
</style>
