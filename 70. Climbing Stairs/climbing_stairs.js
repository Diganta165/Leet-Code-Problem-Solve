var climbStairs = function(n) {
    if(n==1) return 1;      // If n == 1, then there is only way to climb the stair...
    if(n==2) return 2;      //If n == 2, then there is only way to climb the stair...
    // Create an array to store the answer...
    let ans = [n];
    for(let i=1;i<=n;i++) {
        if(i==1) {
            ans[0]=1;
        }
        if(i==2) {
            ans[1]=2;
        }
        // There are two options when we reach ith step:
        // 1.we came from (i-1)th step
        // 2.we came from (i-2)th step
        if(i>2) {
            ans[i-1] = ans[i-2] + ans[i-3];
        }
    }
    return ans[n-1];    // Return the answer...
};