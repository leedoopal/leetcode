/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 1) return '';

  let answer = '';

  for (let i = 0; i < s.length; i++) {
    // j = 0: left = right 일 때
    // j = 1: left 다음 right가 left = right라면 서로 다른 때까지 확장됨.
    // -> 가장 긴 하위 문자열을 얻음
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = left + j;

      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      if (right - left - 1 > answer.length) {
        answer = s.slice(left + 1, right)
      }
    }
  }

  return answer;
};

console.log(longestPalindrome('babad'));
