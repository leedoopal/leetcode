// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/794/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const result = [];

  if (n < 1) return result;

  loopBackTracking(result, '', n, n);
  return result;
};

const loopBackTracking = function(result, text, start, end) {
  if (start || end) {
    if (end > start) loopBackTracking(result, text + ')', start, end - 1);
    if (start) loopBackTracking(result, text + '(', start - 1, end);
  } else {
    result.push(text);
  }
}

console.log(generateParenthesis(3))
