var searchInsert = function(nums, target) {
    let k = 0;
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === target) {
    //         k++;
    //         return i;
    //     };


    // }
    // if(k === 0)

    let value = nums.indexOf(target);

    if(value != -1) return value;
     for(let i = 0; i < nums.length; i++){
        if(nums[i] > target) {
            // k++;
            return i--;
        };
    }
};

console.log(searchInsert([1,3,5,6], 7))