/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let answer = 0;
  let hash = {};
  for (let i = 0, j = 0; j < s.length; ++j) {
    if (hash[s[j]] !== undefined) i = Math.max(i, hash[s[j]] + 1)
    hash[s[j]] = j;
    answer = Math.max(answer, j - i + 1)
  }

  return answer;
};

console.log(lengthOfLongestSubstring('abcabc'));
