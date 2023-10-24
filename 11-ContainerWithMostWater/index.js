/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let water = width * h;

    result = Math.max(result, water);

    if (height[left] < height[right]) {
      left++
    } else {
      right--;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));