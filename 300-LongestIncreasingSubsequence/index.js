/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    let num = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        num = Math.max(num, dp[j]);
      }
    }

    dp[i] = num + 1;
    result = Math.max(result, dp[i])
  }

  return result;
};

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
