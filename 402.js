/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    
    for (const digit of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    // Remove remaining k digits from the end
    while (k-- > 0) {
        stack.pop();
    }
    
    // Remove leading zeros
    let result = stack.join('').replace(/^0+/, '');
    
    return result === '' ? '0' : result;
};