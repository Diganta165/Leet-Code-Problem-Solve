var addBinary = function(a, b) {
    let num1 = parseInt(a, 2);
    let num2 = parseInt(b, 2);
    console.log("num1", num1);
    console.log("num2", num2);
    console.log(parseInt(num1+num2, 10)) 
    console.log((num1+num2).toString(2)) 
    return ((num1+num2).toString(2));
};

addBinary("1010", "1011")