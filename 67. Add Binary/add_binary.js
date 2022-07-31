var addBinary = function(a, b) {
    let num1 = parseInt(a, 2);
    let num2 = parseInt(b, 2);
    console.log("num1", num1);
    console.log("num2", num2);
    console.log(parseInt(num1+num2, 10)) 
    console.log((num1+num2).toString(2)) 
    return ((num1+num2).toString(2));
};

addBinary("1010", "1011");


// ****************************
var addBinary = function(a, b) {
    let sum = "";
    let carry = 0;
    while (a || b || carry) {
        let add = +a.slice(-1) + +b.slice(-1) + carry;
        if (add > 1) {
            sum = (add % 2) + sum;
            carry = 1;
        } else {
            sum = add + sum;
            carry = 0;
        }
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }
    return sum;
};