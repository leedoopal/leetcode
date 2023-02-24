/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = nums => {
  // 홀수인경우 *= 2
  nums.forEach((n, i) => n % 2 && (nums[i] *= 2))

  // 중복 제거하고 내림차순 정렬
  nums = [...new Set(nums)].sort((n, m) => m - n)

  let len = nums.length - 1;
  let answer = nums[0] - nums[len]
  let i;

  // 짝수일때
  while (nums[0] % 2 === 0) {
    // /=2 한 값이 오른쪽 숫자보다 작다면 정렬 필요
    if ((nums[0] /= 2) < nums[1]) {
      // 들어갈 자리를 찾는중
      i = nums.findIndex(n => n < nums[0]);
      // nums에 현재 값 집어넣기
      nums.splice(i < 0 ? len : i - 1, 0, nums.shift())
    }

    // 작은 값으로 다시 set
    // 0번째와 마지막 사이를 비교하여 더 작은 값으로
    answer = Math.min(answer, nums[0] - nums[len])
  }
  return answer
}

console.log(minimumDeviation([1, 2, 3, 4]));
// console.log(minimumDeviation([4,1,5,20,3]));
// console.log(minimumDeviation([2,10,8]));
