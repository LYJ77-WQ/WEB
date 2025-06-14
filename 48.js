var rotate = function(matrix) {
    const n = matrix.length;
    
    // 先转置矩阵
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // 然后翻转每一行
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};