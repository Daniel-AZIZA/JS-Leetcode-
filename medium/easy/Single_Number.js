const singleNumber = function(nums) {
    
    let i = 0;

    for(i = 0; i < nums.length; i++)
    {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
            return (nums[i])
    }
};

console.log(singleNumber([1,1,2]));
