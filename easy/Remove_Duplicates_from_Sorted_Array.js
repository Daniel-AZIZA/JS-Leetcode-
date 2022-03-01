/*
let removeDuplicates = function(nums) {

    let     array = new Array;

    for (const i of nums)
    {
        if (array.indexOf(i) == -1)
            array.push(i)
    }
    return (array);
};
*/

let compare = (x, y) => x - y;

let removeDuplicates = function(nums) {
    
    let count = 0;
    
    nums.sort(compare);

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] != nums[i + 1])
        {
            nums[count] = nums[i];
            count++;
        }
    }
    nums.splice(count, nums.length);
    return (nums.length);
};


console.log(removeDuplicates([1,2,1,3,4,5,6,1,2,3,4,5,6]))
console.log(removeDuplicates([1,1,2]))
