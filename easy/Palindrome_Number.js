const isPalindrome = function (x) {
    if (x < 0)
        return (false);
    const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)    
    return (reversedNum(x) == x ? true : false);
}

console.log(isPalindrome(-121))
