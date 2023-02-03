/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;
  const number = x.toString()
  const length = Math.floor(number.length / 2)
  let left = 0;
  let right = x.toString().length - 1;

  for (let i = 0; i < length; i++) {
    if (number[left] === number[right]) {
      left++
      right--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(123421));
