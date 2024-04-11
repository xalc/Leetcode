var uniquePaths = function (m, n) {

    let dp = new Array(m + 1).fill(new Array(n + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        dp[1][i] = 1;
    }
    for (let j = 1; j <= m; j++) {
        dp[j][1] = 1;
    }
    for (let i = 2; i <= m; i++) {
        for (let j = 2; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }

    }
    return dp[m][n];

};
console.log(uniquePaths(3, 7));