/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    // 统计字符频率
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // 将字符按频率从高到低排序
    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
    
    // 如果最高频率超过一半+1，则无法重构
    const maxFreq = charCount[sortedChars[0]];
    if (maxFreq > Math.floor((s.length + 1) / 2)) {
        return "";
    }
    
    // 初始化结果数组
    const result = new Array(s.length);
    let index = 0;
    
    // 先填充偶数位，再填充奇数位
    for (const char of sortedChars) {
        let count = charCount[char];
        while (count > 0) {
            if (index >= s.length) {
                index = 1; // 切换到奇数位
            }
            result[index] = char;
            index += 2;
            count--;
        }
    }
    
    return result.join('');
};