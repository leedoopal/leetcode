/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);

  // 빈 문자열은 어떤 단어로도 분할될 필요가 없으므로 true
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // s의 j부터 i번째까지 부분 문자열 체크
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
// console.log(wordBreak('cars', ["car","ca","rs"]));
