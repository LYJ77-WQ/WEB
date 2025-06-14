/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const colors = new Array(graph.length).fill(-1);

    function dfs(node, color) {
        colors[node] = color;
        for (let neighbor of graph[node]) {
            if (colors[neighbor] === color) return false;
            if (colors[neighbor] === -1 && !dfs(neighbor, 1 - color)) return false;
        }
        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === -1 && !dfs(i, 0)) return false;
    }
    return true;
};