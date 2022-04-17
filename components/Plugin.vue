<template>
  <div class="plugin">
    <span class="author">{{ authorWithSuffix() }}</span>

    <a
      :href="download"
      class="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ name }} <OutboundLink />
    </a>

    <span v-for="(tag, index) in tags" :key="index">
      <span class="badge">{{ tag }}</span>
    </span>

    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import OutboundLink from "../.vitepress/theme/components/OutboundLink.vue";

interface Props {
  name: string;
  author: string;
  download: string;
  description: string;

  tags?: string[];
}

const props = defineProps<Props>();

const authorWithSuffix = () => {
  const suffix = props.author.endsWith("s") ? "'" : "'s";
  return props.author + suffix;
};
</script>

<style scoped>
.link {
  display: inline-block;
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 6px;
}

.plugin {
  padding-bottom: 32px;
}

.author {
  color: var(--c-brand);
  font-weight: bold;
  margin-right: 6px;
}

.description {
  padding-top: 6px;
}

.badge {
  color: var(--code-inline-bg-color);
  background-color: var(--c-brand-light);

  font-size: 0.80rem;
  font-weight: bolder;
  font-family: var(--font-family-mono);

  border-radius: 10em;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;

  margin-left: 6px;
  text-align: center;
  text-transform: uppercase;
}
</style>
