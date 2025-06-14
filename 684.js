/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }

    let redundantEdge = null;
    for (const [u, v] of edges) {
        if (find(u) === find(v)) {
            redundantEdge = [u, v];
        } else {
            union(u, v);
        }
    }

    return redundantEdge;
};