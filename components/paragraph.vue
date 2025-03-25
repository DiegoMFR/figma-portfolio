<template>
  <div>
    <LayoutTitle :text="title" />
    <p v-for="entry of text">
      {{ entry }}
    </p>
  </div>
</template>
<script lang="ts" setup>

interface Props {
  title: string, text: string[]
}

defineProps<Props>();

</script>