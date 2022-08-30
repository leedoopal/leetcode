const calcPow = function (x, n) {
  if (n === 1) return x;
  // 부동소수점 해결을 위해 floor 추가
  const num = calcPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num
  }
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) return 1;
  if (n > 0) return calcPow(x, n);
  if (n < 0) return 1 / calcPow(x, -n);
};


console.log(myPow(4.00000, 4))
