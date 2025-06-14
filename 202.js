/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n <= 4) {
        return n == 1;
    } else {
        console.log(n)
        let sum = 0;
        String(n).split('').map(item => {
            sum += Number(item) * Number(item);
        })
        return isHappy(sum);
    }
};
