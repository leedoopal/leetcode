/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let leftArr = [];
  let leftMultiplication = 1;

  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *= nums[i];
  }

  let rightArr = [];
  let rightMultiplication = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i];
  }

  return rightArr
};
