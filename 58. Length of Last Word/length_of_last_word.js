var lengthOfLastWord = function(s) {
    let words = s.split(" ");
    words = words.filter(element => element.length > 0)
    console.log(words)
    console.log(words[words.length - 1])
    console.log(words[words.length - 1].length)
    return words[words.length - 1].length;
};

lengthOfLastWord("    Hello    World ");