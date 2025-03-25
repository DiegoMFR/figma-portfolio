<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp()

// Add route specialization for fixed solution
// https://github.com/helltraitor/nuxt-anchorscroll?tab=readme-ov-file#extendable
nuxtApp.$anchorScroll!.matched.push(({ path, hash }) => {
  if (hash) {
    // All anchor element on this route is mangled
    const targetSelector = `#fixed-${hash.slice(1)}`
    const targetElement = document.querySelector(targetSelector)
    if (targetElement) {
      return {
        toAnchor: {
          target: targetElement as HTMLElement,
          scrollOptions: toValue(useNuxtApp().$anchorScroll?.defaults?.toAnchor) ?? {},
        },
      }
    }
  }
})
</script>