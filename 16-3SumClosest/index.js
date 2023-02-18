/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else {
        r--;
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
    }
  }

  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
