
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const data = await $fetch(`${config.figmaBaseUrl}/v1/files/8OrW4fsejxTiiFMT7vZZbl`, { headers: { 'X-Figma-Token': config.figmaToken } });

    const targetFramesWithTexts: any[] = [];

    function matchNameLayout(name: string) {
        return name.match(/\$\$(.*?)\$\$/)
    }

    // Recursively traverse the document tree
    function processNode(node: FrameNode) {
        if (node.type === 'INSTANCE' && matchNameLayout(node.name) && node.visible !== false) {
            const frameContent: {title: string, text: string[]} = {
                title: "",
                text: []
            };

            // Inside the matched frame, search for TEXT nodes
            function findTextNodesInFrame(frameNode: FrameNode) {
                if (frameNode.type === 'TEXT' && frameNode.characters) {
                    if(frameNode.name === '$$title$$') {
                        frameContent.title = frameNode.characters;
                    } else {
                        frameContent.text.push(frameNode.characters);
                    }
                }
                if (frameNode.children && frameNode.visible !== false) {
                    frameNode.children.forEach(findTextNodesInFrame);
                }
            }

            findTextNodesInFrame(node);

            targetFramesWithTexts.unshift({
                layout: matchNameLayout(node.name)?.[1],
                content: frameContent
            });
        } else if (node.children) {
            // Drill deeper into non-frame nodes to search for nested frames
            node.children.forEach(processNode);
        }
    }

    processNode(data?.document);

    return targetFramesWithTexts;
});

