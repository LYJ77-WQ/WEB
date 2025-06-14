var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // 存储索引
    
    for (let i = 0; i < nums.length; i++) {
        // 移除超出窗口范围的元素索引
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // 移除所有小于当前元素的索引
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // 当窗口形成后开始记录最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};