var mostWordsFound = function(sentences) {
    let count = 0;
    let words;
    sentences.forEach(element => {
        words = element.split(" ");
        console.log(words)
        if(count < words.length) count = words.length;
    });
    console.log(count)
};

let sentences = ["alice and bob love leetcode", "this is great thanks very much", "i think so too"];
mostWordsFound(sentences)