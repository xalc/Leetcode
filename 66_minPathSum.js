/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length; // column
    const n = grid[0].length; // row

    const dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        dp[i][1] = dp[i - 1][1] + grid[i - 1][0];

    }
    for (let j = 1; j <= n; j++) {
        dp[1][j] = dp[1][j - 1] + grid[0][j - 1]
    }
    for (let i = 2; i <= m; i++) {
        for (let j = 2; j <= n; j++) {
            dp[i][j] = grid[i - 1][j - 1] + Math.min(dp[i - 1][j], dp[i][j - 1])
            // console.log(dp[i][j])
        }
        console.log('\n')
    }
    return dp[m][n]
};
let grid = [[1, 2], [3, 4], [5, 6]];
grid = [[1, 2], [1, 1]]
console.log(minPathSum(grid))