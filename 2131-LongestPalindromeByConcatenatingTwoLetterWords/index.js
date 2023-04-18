/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = function (words) {
  const set = {};
  let count = 0;
  let odd = 0;

  for (let word of words) {
    set[word] = (set[word] || 0) + 1;
  }

  for (let word of words) {
    const reverse = word[1] + word[0];

    if (word === reverse) {
      if (set[word] % 2 !== 0) {
        odd = 1;
      }

      count += Math.floor(set[word] / 2) * 4;
    } else if (set[reverse]) {
      count += Math.min(set[word], set[reverse]) * 4
      set[reverse] = 0;
    }
    set[word] = 0;
  }

  return count + odd * 2;
};

console.log(longestPalindrome(["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc"]));
// console.log(longestPalindrome(["da", "aa", "bb"]));
