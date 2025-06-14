/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];
    
    // 循环数组处理两遍
    for (let i = 0; i < n * 2; i++) {
        const current = nums[i % n];
        while (stack.length && nums[stack[stack.length - 1]] < current) {
            const index = stack.pop();
            result[index] = current;
        }
        if (i < n) {
            stack.push(i);
        }
    }
    
    return result;
};