/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const currentMap = new Map();
  let i = 0;

  while (i < nums.length) {
    currentMap.set(nums[i], (currentMap.get(nums[i]) || 0) + 1);

    if (currentMap.get(nums[i]) > 2) {
      nums.splice(i, 1);
    } else {
      i++
    }
  }

  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
