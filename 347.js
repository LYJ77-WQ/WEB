/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
    return sorted.slice(0, k).map(Number);
};