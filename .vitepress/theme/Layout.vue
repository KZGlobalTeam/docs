<template>
  <Layout>
    <template #page-bottom>
      <div v-if="hasLinks" class="next-and-prev-link">
        <div class="container">
          <div class="prev">
            <a
              v-if="prevLink"
              class="link"
              :href="withBase(prevLink.link)"
            >
              <ArrowLeftIcon class="icon icon-prev" />
              <span class="text">{{ prevLink.text }}</span>
            </a>
          </div>

          <div class="next">
            <a
              v-if="nextLink"
              class="link"
              :href="withBase(nextLink.link)"
            >
              <span class="text">{{ nextLink.text }}</span>
              <ArrowRightIcon class="icon icon-next" />
            </a>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { createVNode, render, computed, onMounted } from "vue";
import { useData, withBase } from "vitepress";

import DefaultTheme from "vitepress/theme";

import SunIcon from "./components/SunIcon.vue";
import MoonIcon from "./components/MoonIcon.vue";

import ArrowLeftIcon from "./components/ArrowLeftIcon.vue";
import ArrowRightIcon from "./components/ArrowRightIcon.vue";

import { getFlatSideBarLinks } from "./utils/sidebar";

const data = useData();
const Layout = DefaultTheme.Layout;

const prevLink = computed(() => getLink("prev"));
const nextLink = computed(() => getLink("next"));

const hasLinks = computed(() => {
  return prevLink.value || nextLink.value;
});

const getLink = (type: "prev" | "next") => {
  const link = data.frontmatter.value?.links?.[type];
  if (!link) {
    return;
  }

  const candicates = getFlatSideBarLinks(data.theme.value.sidebar);
  return candicates.find((c) => c.link === link);
};

onMounted(() => {
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  if (!prefersDark) {
    document.body.classList.add("light");
  }

  const [navbar] = document.getElementsByClassName("nav-bar");

  const modeSwitchEl = document.createElement("button");
  modeSwitchEl.className = "mode-switch";

  modeSwitchEl.onclick = () => {
    document.body.classList.toggle("light");
    renderIconVNode();
  };

  const renderIconVNode = () => {
    const isLight = document.body.classList.contains("light");

    const iconVNode = isLight ? createVNode(MoonIcon) : createVNode(SunIcon);
    render(iconVNode, modeSwitchEl);
  };

  renderIconVNode();
  navbar.appendChild(modeSwitchEl);
});
</script>

<style scoped>
.next-and-prev-link {
  padding-top: 1rem;
}

.container {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--c-divider);
  padding-top: 1rem;
}

.prev,
.next {
  display: flex;
  flex-shrink: 0;
  width: 50%;
}

.prev {
  justify-content: flex-start;
  padding-right: 12px;
}

.next {
  justify-content: flex-end;
  padding-left: 12px;
}

.link {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  font-size: 1rem;
  font-weight: 500;
}

.text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  fill: var(--c-text);
  transform: translateY(1px);
}

.icon-prev {
  margin-right: 8px;
}

.icon-next {
  margin-left: 8px;
}
</style>
