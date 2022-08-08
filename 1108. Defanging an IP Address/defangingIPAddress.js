var defangIPaddr = function(address) {
    // return address.replace(".","[.]");
    let resString = "";
    for(let i = 0; i<address.length; i++ ){
        (address[i]=== ".")?
            resString += "[.]":
            resString += address[i];
    }
    console.log(resString)

};
defangIPaddr("1.1.1.1")