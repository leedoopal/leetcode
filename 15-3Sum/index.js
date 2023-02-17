/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue

    let l = i + 1;
    let r = arr.length - 1;

    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r];

      if (sum === 0) {
        result.push([arr[i], arr[l], arr[r]]);

        while (arr[l] === arr[l + 1]) l++; // 중복 건너뛰기
        while (arr[r] === arr[r - 1]) r--; // 중복 건너뛰기

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([1,-1,-1,0]));
console.log(threeSum([-2, 0, 0, 2, 2]));
