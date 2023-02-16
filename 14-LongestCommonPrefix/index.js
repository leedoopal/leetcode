/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let answer = '';
  let current = strs[0][0];
  let index = 0;

  while (!!current) {
    for (let i = 0; i < strs.length; i++) {
      if (current === strs[i][index]) {
        if (i === strs.length - 1) {
          answer += current;
          index++;
          current = strs[i][index];
        }
      } else {
        current = '';
        break;
      }
    }
  }

  return answer;
};

console.log(longestCommonPrefix(["dog","racecar","car"]));
