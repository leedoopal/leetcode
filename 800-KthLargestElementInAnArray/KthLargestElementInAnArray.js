/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const sortArr = nums.sort((a, b) => b - a)
  return sortArr[k - 1]
};

findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 2)
