const reducer = (previousValue, currentValue) => previousValue + currentValue;

let maxSubArray = function(nums) {

    let subAray = nums.reduce(reducer);
    let count = 0;

    for(let i = 0; i < nums.length; i++)
    {
        count = 0;
        for (let j = i; j < nums.length; j++)
        {
            count += nums[j];
            if (count > subAray)
                subAray = count;
        }
    }
    return (subAray);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1,2,3,4]));
console.log(maxSubArray([-2,3,0,2,-2,3]));
