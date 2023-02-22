// https://leetcode.com/explore/interview/card/top-interview-questions-medium/113/math/815/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const hashMap = new Set();

  function loopNumber(value) {
    if (value === 1) return true;

    const splitNumber = String(value).split('');
    const powNumber = splitNumber.reduce((sum, num) => sum += Math.pow(Number(num), 2), 0);

    if (hashMap.has(powNumber)) return false;
    hashMap.add(powNumber);

    return loopNumber(powNumber);
  }

  return loopNumber(n);
};

console.log(isHappy(567))
