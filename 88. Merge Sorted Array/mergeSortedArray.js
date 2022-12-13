var merge = function(nums1, m, nums2, n) {
    let i, j = 0, newArr = [];
    while(i < m && j < n){
        if(nums1[i]< nums2[j]){
            newArr.push(nums1[i]);
            i++
        }else{
            newArr.push(nums1[j]);
            j++;
        }

    }
    while(i < m){
        newArr.push(nums1[i]);
        i++;
    }
    while(j < n){
        newArr.push(nums2[j]);
        j++;
    }
    nums1 = newArr;
};

merge([1,23,3], 3, [4, 5], 2);