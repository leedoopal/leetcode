/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n - 1 & n) === 0;
};

console.log(isPowerOfTwo(16));
