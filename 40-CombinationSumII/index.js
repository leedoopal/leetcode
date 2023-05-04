/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum2 = function (candidates, target) {
  const result = [];

  candidates = candidates.sort((a, b) => a - b);

  function recursive(cur, sum, arr) {
    if (sum > target) return;
    if (sum === target) {
      return result.push(arr);
    }

    for (let i = cur; i < candidates.length; i++) {
      // i!== cur: 한 배열에서 중복된 숫자를 사용한 조합을 제외하고 찾기위해 추가
      // i === cur이라면 중복된 조합이 아니기 때문에 탐색
      // 현재 인덱스와 이전 인덱스의 값이 같다면 중복된 조합
      if (i !== cur && candidates[i] === candidates[i - 1]) continue;
      recursive(i + 1, sum + candidates[i], [...arr, candidates[i]])
    }
  }

  recursive(0, 0, []);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5));
