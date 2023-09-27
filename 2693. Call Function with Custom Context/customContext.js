Function.prototype.callPolyfill = function(context, ...args) {
    let func = Symbol(); // create unique key
    context[func] = this; // using unique key, add function to context object

    return context[func](...args); // call function, add on any key-value pairs in context object
}