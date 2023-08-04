/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // k가 nums의 길이보다 큰 경우를 고려하여 k를 nums.length로 나눈 나머지를 사용
  // 예) nums = [1, 2, 3, 4, 5], k = 7이라면
  // 실제로는 배열을 오른쪽으로 2번(7 % 5)회전한 것과 같은 결과를 얻음
  k = k % nums.length;

  // 1. 배열 전체를 뒤집음
  reverse(nums, 0, nums.length - 1);
  // 2. 0부터 k-1까지의 부분 배열을 뒤집음
  reverse(nums, 0, k - 1);
  // 3. k부터 배열의 끝까지의 부분 배열을 뒤집음
  reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
