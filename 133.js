var cloneGraph = function(node) {
    if (!node) return null;
    
    const visited = new Map();
    
    const dfs = (original) => {
        if (visited.has(original)) {
            return visited.get(original);
        }
        
        const clone = new Node(original.val);
        visited.set(original, clone);
        
        for (const neighbor of original.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        
        return clone;
    };
    
    return dfs(node);
};