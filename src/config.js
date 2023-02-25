export const options = {
    layout: {
        hierarchical: {
            direction: 'UD',
            nodeSpacing: 150,
            sortMethod : 'directed'
        }
    },
    edges: {
        color: "#856eff",
        width: 3
    },
    nodes: {
        shape: "ellipse"
    },
    interaction: {
        dragNodes: false,
        dragView: true,
        zoomView: true
    },
    height: `${window.innerHeight}px`,
    physics: {
        enabled: false
    }
};

