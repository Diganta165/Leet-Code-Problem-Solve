var longestCommonPrefix = function(strs) {
    if(!strs) return "";
    let item = "";
   for(let i = 0; i< strs[0].length; i++){
    const char = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== char) return item;
        };
        item+= char;

   };
   return item;
};

longestCommonPrefix(["atmbc", "atmavbc","atmanc"]);