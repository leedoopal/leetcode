/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 1) return '';

  let answer = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = left + 1;

      while (s[left] === s[right]) {
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
