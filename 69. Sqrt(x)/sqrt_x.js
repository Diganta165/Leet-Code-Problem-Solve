var mySqrt = function(x) {
    if(x===0) return 0;
    if(x===1 || x === 2 || x === 3) return 1;
    
     let limit;
    if(x <= 10){
        limit = x;
    }else if(x > 10){limit = x/2}
    for(let i = 1; i<= limit; i++){
        
        if(i * i === x) return i;
        if(i*i > x ){return i-1;}
    }
};

// mySqrt(16);
mySqrt(5);