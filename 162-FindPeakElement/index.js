// https://leetcode.com/problems/find-peak-element/solutions/?languageTags=javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
