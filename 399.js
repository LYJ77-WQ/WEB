var calcEquation = function(equations, values, queries) {
    const graph = {};
    
    // Build graph
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        
        if (!graph[a]) graph[a] = {};
        if (!graph[b]) graph[b] = {};
        
        graph[a][b] = val;
        graph[b][a] = 1 / val;
    }
    
    const dfs = (start, end, visited) => {
        if (!graph[start]) return -1;
        if (start === end) return 1;
        
        visited.add(start);
        for (const neighbor in graph[start]) {
            if (!visited.has(neighbor)) {
                const res = dfs(neighbor, end, visited);
                if (res !== -1) {
                    return graph[start][neighbor] * res;
                }
            }
        }
        return -1;
    };
    
    return queries.map(([a, b]) => {
        const visited = new Set();
        return dfs(a, b, visited);
    });
};