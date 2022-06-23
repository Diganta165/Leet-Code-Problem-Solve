var isPalindrome = function(x) {
    if(typeof x === "number"){
        x=x.toString();
    }
    let valueLength = x.length;
    
    for(let i = 0; i< valueLength/2; i++){
        if(x[i] !== x[valueLength-1-i]){
            return false;
        }
    }
    return true;
       
};