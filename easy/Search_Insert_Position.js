let searchInsert = function(nums, target){ 
    
    let     index;
    let     i = 0;

    if (target == 0 || target < nums[0])
        return (0);
    if ((index = nums.indexOf(target)) != -1)
        return (index);
    for (i = 0; i < nums.length; i++)
        if (target > nums[i] && target < nums[i + 1])
            return (i + 1);
    return (i);
}

console.log(searchInsert([2, 5], 1));
