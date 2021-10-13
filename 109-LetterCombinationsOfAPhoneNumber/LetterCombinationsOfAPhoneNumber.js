// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/
// dfs 문제

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const stringArr = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];

  function loopCheckDigit(arr = [], n = 0) {
    if (!digits) return [];
    if (n === digits.length) return result.push(arr.join(''));

    for (let i of stringArr[digits[n]]) {
      arr.push(i);
      loopCheckDigit(arr, n + 1);
      arr.pop();
    }
  }

  loopCheckDigit();

  return result;
};

console.log(letterCombinations("23"));
