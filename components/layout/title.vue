<template>
  <h1 class="text-2xl font-bold mb-4" :id="'fixed-' + getId">
      <NuxtLink
      :href="`#${getId}`"
      mb-a mt-a
      text-xl
      @click="scrollToAnchor('fixed-' + getId)"
    >
      {{ text }}
    </NuxtLink>
    </h1>
</template>
<script setup lang="ts">
interface Props {
  text: string
}

const props = defineProps<Props>();

const getId = computed(() => props.text?.trim().replace(/\s+/g, '-').toLowerCase());

const { scrollToAnchor } = useAnchorScroll({
  toAnchor: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  }
  // And default for scrollToTop
})
</script>