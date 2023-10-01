/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let result = 0;

  while (l < r) {
    let width = r - l;

    let currentArea = Math.min(height[l], height[r]) * width;
    result = Math.max(result, currentArea);

    // 높이가 더 낮은쪽으로 이동
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
