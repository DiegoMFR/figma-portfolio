<template>
  <div>
    <div class="flex flex-row gap-8 mb-2 whitespace-pre-line">
      <div class="w-1/3">
        <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
        {{ text[1] }}
      </div>
      <div class="w-2/3">
       {{ text[0] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  text: string[];
  title: string;
}

defineProps<Props>();

</script>