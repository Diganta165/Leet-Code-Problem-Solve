let arr = [1, 2, 3, 3, 5, 6];
let newArr = [];

arr.forEach(element => !newArr.includes(element) && newArr.push(element));

 console.log(newArr)