/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let answer = 0;
  let sum = 0;
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    sum += nums[r];

    while (sum >= target) {
      // 현재 부분 배열의 길이
      // 예를 들어 r = 5, l = 2라면 5-2+1=4
      let length = r - l + 1;
      // answer === 0 : 최소 길이를 아직 설정하지 않은 경우
      // length < answer : 현재 부분 배열의 길이가 최소 길이보다 작은 경우
      if (answer === 0 || length < answer) answer = length;
      // 현재 부분 배열의 합이 target보다 작아짐, 다음 배열 탐색 가능
      sum -= nums[l]
      l++
    }
    // 다음 원소를 부분배열에 추가할 수 있음
    r++
  }

  return answer;
};
