var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.forEach(element =>{
        element = element.toLowerCase();
        if(element === "++x"){
            ++x;
        }else if(element === "x++"){
            x++;
        }else if(element === "x--"){
            x--;
        }else if(element === "--x"){--x;};
    });
    console.log(x);
};

finalValueAfterOperations(["++X", "++X", "X++"]);