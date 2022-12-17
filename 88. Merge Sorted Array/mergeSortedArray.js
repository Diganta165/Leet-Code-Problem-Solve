var merge = function(nums1, m, nums2, n) {
    if(nums2?.length === 0) return;
    let first = m-1;
    let second = n-1;
    let i = m + n -1;

    while(second >= 0){
        let fVal = nums1[first];
        let sVal = nums2[second];

        if(fVal > sVal){
            nums1[i] = fVal;
            i--;
            first --;
        }else{
            nums1[i] = sVal;
            i--;
            second--;
        }
    }

};