/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let answer = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    answer = Math.max(answer, Math.min(height[left], height[right]) * width)

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
