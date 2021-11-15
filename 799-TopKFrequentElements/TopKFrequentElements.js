/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const result = [];
  let index = 0;

  if (nums.length === 1) return nums;

  const arr = nums.reduce((prev, next) => {
    prev[next] = prev[next] > 0 ? prev[next] + 1 : 1;
    return prev;
  }, {})

  const sortArr = Object.entries(arr).sort(([, a], [, b]) => b - a)

  while (index < k) {
    result.push(sortArr[index][0])
    index++;
  }

  return result;
};

topKFrequent([1, 1, 1, 2, 2, 3, 3, 3], 2);
