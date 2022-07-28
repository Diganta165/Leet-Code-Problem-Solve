var plusOne = function(digits) {
    let concatedElements = "";
    let finalArray = [];
    digits.forEach(element => {
        concatedElements+=element;
    });
    // concatedElements = parseInt(concatedElements);
    // console.log(!Number.isSafeInteger(concatedElements));
    // if(Number.isSafeInteger(concatedElements)){
    //     concatedElements = Number(concatedElements);
    // }

    concatedElements = BigInt(concatedElements);

    // console.log("count",concatedElements);
    // concatedElements = BigInt(concatedElements);
    console.log("Hi2",concatedElements);
    // concatedElements = parseInt(concatedElements);
    concatedElements = Number(concatedElements);
    
    
    // concatedElements += BigInt(1);
    concatedElements += 1;
    console.log(concatedElements);

    concatedElements += "";
    console.log(concatedElements);

    concatedElements = concatedElements.split("");
    console.log(concatedElements);

    for(let i = 0; i<concatedElements.length; i++){
        finalArray[i]= parseInt(concatedElements[i]);
    };
    console.log(finalArray);
    return finalArray;
};

// plusOne([1,2,3])
// plusOne([4,3,2,1])
// plusOne([9])
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])