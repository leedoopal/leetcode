// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/822/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
  let start = a;
  let sum;

  while (b !== 0) {
    start = a ^ b;
    sum = (a & b) << 1;
    a = start;
    b = sum;
  }

  return a;
};

console.log(getSum(2, 3));
