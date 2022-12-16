var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    if(nums2?.length === 0) return;

    // nums1?.forEach((elem1, index1) => {
    //     nums2?.forEach((elem2, index2) =>{
    //         // (elem2 > elem1)?  elem1.splice(index1, 0, elem2) : elem1.splice(index1-1, elem2);
    //         if(elem2 > elem1){
    //             nums1.splice(index1, 0, elem2);
    //         }else{
    //             nums1.splice(index1-1, elem2);
    //         } 
    //     });
    // });

    for(let i = 0; i < m+n; i++){
        for(let j = 0; j<n; j++ ){
            // if(nums1[i] > nums2[j]){
            //     nums1.splice(i, 0, nums2[j]);
            // }else{
            //     nums1.push(nums2[j])
            // }
            console.log("nums1[i]", nums1[i])
            console.log("nums2[j]", nums2[j])
            if(nums1[i] >nums2[j]){
                nums1.splice(i, 0 , nums2[j]);
                console.log("nums11", nums1)
            }
        }
    }

    console.log(nums1)
};

merge([2,3, 23], 3, [1, 5], 2);