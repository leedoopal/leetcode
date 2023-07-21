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

    let currentArea = Math.min(height[left], height[right]) * width;
    answer = Math.max(answer, currentArea);

    // 높이가 더 낮은쪽을 이동
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
