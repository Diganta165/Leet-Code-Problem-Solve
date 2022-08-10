var maximumWealth = function(accounts) {
    let mostWealthy = 0;
    let count = 0;
    for(let i = 0; i< accounts.length; i++){
        for(let j = 0; j<accounts[i].length; j++ ){
            count += accounts[i][j];
        }
        if(mostWealthy < count) mostWealthy = count;
        count = 0;
    }
    console.log(mostWealthy)
};
maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);