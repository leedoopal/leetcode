/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    if (numbers[start] + numbers[end] === target) {
      // 결과는 인덱스를 1부터 시작하는 것으로 넘겨야함. (문제가 그렇다)
      return [start + 1, end + 1];
    }

    // 더한 값이 target보다 크다면 크거나 같아질때까지 계속 반복
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }

  return [];
};
