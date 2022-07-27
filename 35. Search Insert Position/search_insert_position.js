var searchInsert = function(nums, target) {
    let value = nums.indexOf(target);

    if(value != -1) return value;
     for(let i = 0; i < nums.length; i++){
        if(nums[i] > target) {
            return i--;
        };
    }
    if(nums.indexOf(target)=== -1) return nums.length;
};

console.log(searchInsert([1,3,5,6], 5))