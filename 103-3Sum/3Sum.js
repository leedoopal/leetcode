/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const numbers = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    if (numbers[i] > 0 || numbers[numbers.length] < 0) break;
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let l = i + 1;
    let r = numbers.length - 1;

    while (l < r) {
      const sum = numbers[i] + numbers[l] + numbers[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([numbers[i], numbers[l], numbers[r]]);

        const max = l < r;
        while (max && numbers[l] === numbers[l + 1]) l++;
        while (max && numbers[r] === numbers[r - 1]) r--;

        l++;
        r--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
