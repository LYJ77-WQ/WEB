
var MedianFinder = function() {
    this.sortArr = [];
};

MedianFinder.prototype.addNum = function(num) {
    this.sortArr.push(num);
    this.sortArr.sort((a, b) => a - b);
};

MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.sortArr.length / 2);
    if (this.sortArr.length % 2 !== 0) {
        return this.sortArr[mid];
    } else {
        return (this.sortArr[mid - 1] + this.sortArr[mid]) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */