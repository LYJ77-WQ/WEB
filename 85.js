/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
};

function largestRectangleArea(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0];
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const j = stack.pop();
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, heights[j] * width);
        }
        stack.push(i);
    }
    
    return maxArea;
}