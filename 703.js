var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
};

KthLargest.prototype.add = function(val) {
    let left = 0;
    let right = this.nums.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (this.nums[mid] > val) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    this.nums.splice(left, 0, val);
    return this.nums[this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */