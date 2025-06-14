var calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!isNaN(char) && char !== ' ') {
            num = num * 10 + parseInt(char);
        } else if (char === '+' || char === '-') {
            result += sign * num;
            num = 0;
            sign = char === '+' ? 1 : -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    return result + sign * num;
};