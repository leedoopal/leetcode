/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  const result = [];
  let i = 1;

  while (i <= n) {
    if (n % i === 0) {
      result.push(i)
    }
    i++
  }

  return result[k - 1] ?? -1;
};

console.log(kthFactor(12, 3));
console.log(kthFactor(7, 2));
console.log(kthFactor(4, 4));
