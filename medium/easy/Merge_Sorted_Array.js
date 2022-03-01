const   comp = (x, y) => (x - y);
/*
const merge = function(nums1, m, nums2, n) {
    
        nums1.splice(m, (nums1.length - m));
        nums2.splice(n, (nums2.length - n));

        nums1 = nums1.concat(nums2); 
        console.log(nums1);

        nums1 = nums1.sort(comp);
        console.log(nums1);

        return (nums1);
};
*/
const merge = function(nums1, m, nums2, n) {

       const merged = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);

        for (let i = 0 ; i < merged.length ; ++i)
            nums1[i] = merged[i];
};

let     tab1 = [1,2,3,0,0,0];
let     tab2 = [2,5,6];

console.log(merge(tab1, 3, tab2, 3));
console.log(tab1);
