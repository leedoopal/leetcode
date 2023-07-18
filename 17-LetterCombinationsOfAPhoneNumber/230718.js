/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits.length) return [];

  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const result = [];

  const dfs = (n, str) => {
    if (n === digits.length) {
      result.push(str);
    } else {
      let letter = obj[digits[n]];
      for (let i = 0; i < letter.length; i++) {
        dfs(n + 1, str + letter[i])
      }
    }
  }

  dfs(0, '')
  return result;
};

console.log(letterCombinations("23"))
console.log(letterCombinations("2"))
