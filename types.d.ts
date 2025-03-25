type FrameNode = {
    id: string;
    name: string;
    type: string;
    visible?: boolean;
    componentId?: string;
    characters?: string; // Only exists for TEXT nodes
    children?: FigmaNode[];
};