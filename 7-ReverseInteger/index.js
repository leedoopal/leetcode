/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const isNegative = x < 0;
  const num = Math.abs(x);
  const answer = num.toString().split('').reverse().join('');

  if (answer > 2**31) return 0;

  return isNegative ? -Number(answer) : Number(answer);
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
