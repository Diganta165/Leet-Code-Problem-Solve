const lastElm = (arr) =>{
    if(arr?.length === 0) return -1;
    return arr[arr.length -1];
}
console.log(lastElm([]))
lastElm([1,2,3])



Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1]
  };