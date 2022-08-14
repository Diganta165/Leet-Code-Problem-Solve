var numIdenticalPairs = function(nums) {
    let goodPair = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length-1; j++){
            if(nums[i] === nums[j] && nums[i]< nums[j] ) goodPair++;
        }
    }

    console.log(goodPair)
    console.log(d3.pairs([nums]))
};

numIdenticalPairs([1,2.3,1,1,3])