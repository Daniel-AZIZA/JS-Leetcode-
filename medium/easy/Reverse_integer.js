//const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

function reversedNum(num) {
    
     let tmp = parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
    if (tmp < -2147483648 || tmp > 2147483647)
        return (0);
    else
        return (tmp);
}

console.log(reversedNum(1534236469))
console.log(reversedNum(1534))
