const   nums = [9,2,4];
const   target = 6;

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        //console.log(i);
       for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target)
               return ([i, j]);
       }
    }
};


/*
let twoSum = function(nums, target) {
    console.log(nums, target);
    let i = 0;
    while (i < nums.length)
    {
        let j = i + 1;
        while (j < nums.length)
        {
            if (nums[i] + nums[j] == target)
                return ([i, j]);
            j++;
        }
        i++;
    }
};
*/
console.log(twoSum(nums, target));
