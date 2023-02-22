/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const result = [];
  const arr = nums.sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 1; i++) {
    let l = i + 1;
    let r = arr.length - 1;

    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([arr[i], arr[l], arr[r]]);

        l++;
        r--;
      }
    }
  }

  // const answer = new Set(structuredClone(result))
  console.log(new Set(result.map((v) => structuredClone(v))));

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
