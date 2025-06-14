/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0]; // Add boundaries
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const j = stack.pop();
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, heights[j] * width);
        }
        stack.push(i);
    }
    
    return maxArea;
};