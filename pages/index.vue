<template>
    <ul>
        <li v-for="entry of data" class="pb-8">
            <component :is="getComponent(entry.layout)" v-bind="entry.content" />
        </li>
    </ul>
</template>

<script setup lang="ts">
    const getComponent = (layout: string) => {
        switch (layout) {
            case 'MasterSlave':
                return resolveComponent('MasterSlave');
            case 'Bubbles':
                return resolveComponent('Bubbles');
            case 'Paragraph':
                return resolveComponent('Paragraph');
            case 'Blocks':
                return resolveComponent('Blocks');
            default:
                return 'div';
        }
    }

    const { data } = useNuxtData<{data: FrameNode[]}>('figmaContent');

    const { data: figmaData } = await useLazyFetch<{data: FrameNode[]}>('/api/figma/content', {key: 'figmaContent'});

    data.value = figmaData.data;


</script>