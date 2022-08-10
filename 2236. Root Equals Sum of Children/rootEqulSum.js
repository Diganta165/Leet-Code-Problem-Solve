// var checkTree = function(root) {
//     let count = 0;
//     for(let i = 1; i< root.length; i++){
//         count += root[i];
//     }
//     if(count !== root[0]) return false;
//     return true;
// };

// console.log(checkTree([10,4,6]));

var checkTree = function(root) {
    if(root.val === (root.right.val + root.left.val)) return true
    
    return false;
};