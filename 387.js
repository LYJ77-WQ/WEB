var firstUniqChar = function(s) {
    const charCount = {};
    
    // 统计每个字符出现的次数
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // 找到第一个出现次数为1的字符
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};