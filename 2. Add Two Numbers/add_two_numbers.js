var addTwoNumbers = function(l1, l2) {
    let newL1 = parseInt([...l1].toString().split(",").reverse().join(""));
    // let newL2 = [...l2].toString();

    let newL2 = parseInt([...l2].toString().split(",").reverse().join(""));

    // newL1 = parseInt(newL1.split(",").reverse().join(""));
    // newL2 = 
    console.log("new".split(""))
    console.log();
    // split("").reverse()

    return (newL1 + newL2).toString().split("").reverse();
};

addTwoNumbers([1,2,3], [4,5,6])

