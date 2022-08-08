var buildArray = function(nums) {
    let copyArray = nums;
    let finalArray = [];
    for(let i = 0; i< nums.length; i++){
        finalArray.push(nums[nums[i]]);
    };
    console.log("finalArray",finalArray)
};
buildArray([0,2,1,5,3,4]);