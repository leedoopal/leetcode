/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    const dp = obstacleGrid;
    dp[0][0] = 1;

    // 첫번째 열 초기화
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] === 1 && dp[i][0] === 0 ? 1 : 0
    }

    // 첫번째 행 초기화
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] === 1 && dp[0][j] === 0 ? 1 : 0
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (dp[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            } else {
                dp[i][j] = 0
            }
        }
    }

    return dp[m - 1][n - 1];
};

const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

console.log(uniquePathsWithObstacles(grid));
