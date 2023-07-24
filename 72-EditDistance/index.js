/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // word1의 마지막 문자와 word2의 마지막 문자가 같은 경우
      // 추가 연산이 필요하지 않으므로 dp[i][j] = dp[i - 1][j - 1]
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 삽입, 삭제, 교체 중 하나를 선택해야함
        // word 1 = abd
        // word 2 = acd
        // 삽입: acbd, acd 이런식으로 b앞에 추가되기 때문에 dp[i][j-1]
        // 삭제: ad, acd 이런식으로 인덱스가 삭제되기 때문에 dp[i-1][j]

        // dp[i-1][j]: word1의 마지막 문자를 삭제
        // dp[i][j-1]: word1에 word2의 마지막 문자를 삽입
        // dp[i-1][j-1]: word1의 마지막 문자를 word2의 마지막 문자로 교체
        // 연산을 진행했기 때문에 +1을 해줘야함
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
};

console.log(minDistance('horse', 'ros'));
