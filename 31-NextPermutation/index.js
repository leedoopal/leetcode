/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i > -1; i--) {
    // 뒤에서 앞으로 올 때 처음으로 감소하는 숫자 구하기
    if (nums[i] < nums[i + 1]) {
      // i보다 큰 인덱스 중 가장 큰 인덱스 j를 구함
      const large = nextLarge(i);
      // i와 j의 위치를 변경
      swap(i, large);
      // i의 오른쪽에 있는 숫자들을 오름차순으로 정렬
      reverse(i + 1);
      return;
    }
  }

  // 감소하는 지점 i를 찾지 못한다면, 주어진 배열이 이미 내림차순으로 정렬된 상태
  // reverse() 시키고 종료함
  nums.reverse();

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function reverse(index) {
    let start = index, end = nums.length - 1;
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  function nextLarge(i) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] > nums[i]) return j;
    }
  }
};

nextPermutation([7, 2, 3, 6, 5, 4, 1])
// nextPermutation([1,2,3])
