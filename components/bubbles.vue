<template>
  <div>
    <LayoutTitle :text="title" />
    <ul class="grid grid-flow-row-dense grid-cols-8 gap-1 justify-center text-center p-2">
      <li class="aspect-square overflow-auto rounded-full border border-black flex items-center justify-center p-2" :class="getBubbleSize(entry)" v-for="entry, index of text">
        <p class="p-2 whitespace-pre-line">
          {{ entry }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  title: string, text: string[]
}

function getBubbleSize(text: string) {
  const res = Number((text?.length / 40).toFixed(0));
  if(res === 1) {
    return ['sm:col-span-2', 'sm:row-span-2', 'col-span-3', 'row-span-3'];
  } else if(res === 2) {
    return ['sm:col-span-3', 'sm:row-span-3', 'col-span-4', 'row-span-4'];
  } else if(res === 3) {
    return ['sm:col-span-4', 'sm:row-span-4', 'col-span-5', 'row-span-5'];
  } if(res > 3) {
    return ['sm:col-span-5', 'sm:row-span-5', , 'col-span-6', 'row-span-6'];
  }
}

defineProps<Props>();

</script>