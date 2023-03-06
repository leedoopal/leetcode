/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
  const result = [];
  let index = 0;
  let current = 1;

  while (result.length < k) {
    if (current === arr[index]) {
      index++;
    } else {
      result.push(current)
    }

    current++
  }

  return result[k - 1];
};

console.log(findKthPositive([1, 2, 3, 4], 2));
console.log(findKthPositive([1, 3], 1));
// console.log(findKthPositive([2, 3, 4, 7, 11], 5));
