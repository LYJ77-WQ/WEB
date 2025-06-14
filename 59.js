var generateMatrix = function(n) {
    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1;
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    
    while (top <= bottom && left <= right) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        
        // 从上到下
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        
        if (top > bottom) break;
        // 从右到左
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
        
        if (left > right) break;
        // 从下到上
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }
    
    return matrix;
};