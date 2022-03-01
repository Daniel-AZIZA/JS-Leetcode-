const lengthOfLongestSubstring = function(s) {
   
    let subString = 0;
    let count = 0;
    let buf = "";
    let index = 0;

    for (let i = 0; i < s.length; i++)
    {
        buf = buf.concat(s[i]);
        if (buf.indexOf(s[i]) != buf.lastIndexOf(s[i]))
        {
            count = 0;
            buf = "";
            i = index++;
        }
        else
        {
            count++;
            if (count > subString)
                subString = count;
        }
    }
    return (subString);
};

console.log(lengthOfLongestSubstring("dvdf"));
//console.log(lengthOfLongestSubstring("osbbdecno"));
console.log(lengthOfLongestSubstring("abcabcbb"));

console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("pwwkew"));
