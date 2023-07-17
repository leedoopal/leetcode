/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split(' ').map(item => item.trim()).filter(item => item !== '').reverse().join(' ')
};

console.log(reverseWords("  hello world  "));
