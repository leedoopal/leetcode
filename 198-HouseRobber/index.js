/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let one = nums[0];
  let two = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const max = Math.max(nums[i] + one, two);

    one = two;
    two = max;
  }

  return two;
};

// console.log(rob([1, 2, 3, 1]));
// console.log(rob([2, 7, 9, 3, 1]));
// console.log(rob([1]));
console.log(rob([2,1]));
console.log(rob([2,1,1,2]));
