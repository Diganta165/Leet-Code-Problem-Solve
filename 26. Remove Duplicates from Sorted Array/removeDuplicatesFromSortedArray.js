var removeDuplicates = function(nums) {
    let visited = new Set();
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(visited.has(nums[i]) === false){
            nums[k] = nums[i]
            k++;
            visited.add(nums[i]);
        }
    }
    return k;
}; 