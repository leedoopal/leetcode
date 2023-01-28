/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  // n = 10000
  // n - 1 = 01111
  // n - 1 & n = 00000
  return (n - 1 & n) === 0;
};

console.log(isPowerOfTwo(16));
