var runningSum = function(nums) {
    let count = 0;
    let resArray = [];
    for(let i = 0; i< nums.length; i++){
        count += nums[i];
        resArray.push(count);
    }
    console.log(resArray)
};

runningSum([1,2,3,4]);