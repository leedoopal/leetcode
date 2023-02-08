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
    // 작은 값을 담아야 양 끝이 모두 막혀있는 것
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
