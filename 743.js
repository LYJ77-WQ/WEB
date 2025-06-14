/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i + 1] = [];
    }
    times.forEach(([u, v, w]) => {
        graph[u].push([v, w]);
    });

    const distances = Array.from({ length: n + 1 }, () => Infinity);
    distances[k] = 0;

    const visited = new Set();

    function dijkstra(node) {
        while (!visited.has(node)) {
            visited.add(node);
            for (const [neighbor, time] of graph[node]) {
                if (distances[neighbor] > distances[node] + time) {
                    distances[neighbor] = distances[node] + time;
                }
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        dijkstra(i);
    }

    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (distances[i] === Infinity) return -1;
        maxTime = Math.max(maxTime, distances[i]);
    }

    return maxTime;
};