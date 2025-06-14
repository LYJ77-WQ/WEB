/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);

    function dfs(city) {
        visited[city] = true;
        for (let nextCity = 0; nextCity < n; nextCity++) {
            if (isConnected[city][nextCity] === 1 && !visited[nextCity]) {
                dfs(nextCity);
            }
        }
    }

    let circleCount = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            circleCount++;
        }
    }

    return circleCount;
};