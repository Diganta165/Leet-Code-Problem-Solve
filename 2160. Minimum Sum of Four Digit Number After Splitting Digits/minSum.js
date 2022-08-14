var minimumSum = function(num) {
    num = num.toString()
    // console.log(num)
    let splitArr = num.split("");
    // console.log(splitArr)
    let pairArr = [];
    let testValue = null;
    
    for(let i = 0; i < splitArr.length; i++){
        for(let j = i+1; j < splitArr.length; j++){
            testValue = splitArr[i] + splitArr[j];
            pairArr.push(testValue);
        }
    }
    console.log(pairArr)
    let smallestValue = parseInt(pairArr[0])+ parseInt(pairArr[1]);
    for(let i = 0; i < pairArr.length; i++){
        for(let j = 1; j < pairArr.length; j++){
            if(smallestValue > (parseInt(pairArr[i]) + parseInt(pairArr[j]))){
                smallestValue = parseInt(pairArr[i]) + parseInt(pairArr[j]);
            }
        }
    }
    console.log(smallestValue)


        
};
// minimumSum([1, 2, 3]).forEach(function(pair){
//     console.log(pair);
// });

minimumSum(1234);
minimumSum(2932);
minimumSum(4009);