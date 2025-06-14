/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let currentStr = '';
    let currentNum = 0;
    
    for (const char of s) {
        if (char === '[') {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            const num = stack.pop();
            const prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else {
            currentStr += char;
        }
    }
    
    return currentStr;
};