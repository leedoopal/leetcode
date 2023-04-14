/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  let sum = 0;
  for (let num of nums) sum += num;

  if (sum % 2) return false;

  sum /= 2;

  const dp = new Array(nums.length + 1).fill(0).map(() => new Array(sum + 1));

  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = false;
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let cur = nums[i - 1];

      // dp[i - 1][j]는 nums[i - 1] 값을 사용하지 않은 경우
      // dp[i - 1][j - cur]은 nums[i - 1] 값을 사용한 경우
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - cur];
    }
  }

  return dp[nums.length][sum] ?? false;
};

// console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 5]));
