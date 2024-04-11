/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array.from(new Array(m).fill(0), (item) => new Array(n).fill(0));
    let blockIndex = -1;
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            blockIndex = i;
        }
        if (blockIndex < 0 || i < blockIndex) {
            dp[i][0] = 1;
        } else {
            dp[i][0] = 0;
        }


    }
    blockIndex = -1;
    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            blockIndex = i;
        }
        if (blockIndex < 0 || i < blockIndex) {
            dp[0][i] = 1;
        } else {
            dp[0][i] = 0;
        }

    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1]
};
let grid = [[1, 0]];
console.log(uniquePathsWithObstacles(grid))