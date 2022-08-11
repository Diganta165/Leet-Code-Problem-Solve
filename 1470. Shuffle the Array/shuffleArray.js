var shuffle = function(nums, n) {
    let arr1 = [];
    let arr2 = [];
    let arr3= [];

    for(let i = 0; i < nums.length; i++){

        if(i >= n){
            arr2.push(nums[i]);
        }else if(i <= (nums.length-n)){
            arr1.push(nums[i]);
        };
        
    }
    console.log("arr1",arr1)
        console.log("arr2",arr2)
    for(let i = 0; i< nums.length-n; i++){
        arr3.push(arr1[i])
        arr3.push(arr2[i])
    }
    console.log(arr3)
};

shuffle([2,5,1,3,4,7], 3)