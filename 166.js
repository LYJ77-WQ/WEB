var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";
    
    let result = [];
    if ((numerator < 0) ^ (denominator < 0)) {
        result.push("-");
    }
    
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);
    
    result.push(Math.floor(num / den).toString());
    let remainder = num % den;
    if (remainder === 0) {
        return result.join("");
    }
    
    result.push(".");
    let remainderMap = new Map();
    
    while (remainder !== 0) {
        if (remainderMap.has(remainder)) {
            result.splice(remainderMap.get(remainder), 0, "(");
            result.push(")");
            break;
        }
        
        remainderMap.set(remainder, result.length);
        remainder *= 10;
        result.push(Math.floor(remainder / den).toString());
        remainder %= den;
    }
    
    return result.join("");
};