const longestCommonPrefix = function(strs) {
    
    let i = 0

    for(i = 0; i < strs[0].length; i++)
    {
        for (let j = 1; j < strs.length; j++)
        {
            if (!strs[j][i] && strs[0][i])
                return (strs[j])
            if (strs[j][i].indexOf(strs[0][i]) == -1)
                return (strs[0].substr(0, i))
        }
    }
    return (strs[0].substr(0, i))
};


console.log(longestCommonPrefix(["ab","a"]))
