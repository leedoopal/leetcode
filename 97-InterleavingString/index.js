var isInterleave = function (s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;

    if (m + n !== s3.length) {
        return false;
    }

    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    // 첫번째 열 초기화
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]
    }

    // 첫번째 행 초기화
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1]
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const target = s3[i + j - 1];
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] === target) || (dp[i][j - 1] && s2[j - 1] === target)
        }
    }

    return dp[m][n]
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));