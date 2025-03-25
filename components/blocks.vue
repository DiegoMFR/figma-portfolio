<template>
  <div>
    <LayoutTitle :text="title" />
    <ul class="flex flex-wrap">
      <li class="p-1 px-2 m-1 border border-black" v-for="entry of text">{{ entry }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  title: string, text: string[]
}

defineProps<Props>();

</script>