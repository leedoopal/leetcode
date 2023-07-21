/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];

  function findCombination(start, sum, arr) {
    if (sum === target) {
      result.push([...arr]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      arr.push([candidates[i]]);
      findCombination(i, sum + candidates[i], arr);
      // findCombination에서 못찾았다면 다른 후보에게 기회를 주기 위해 마지막 요소 제거
      arr.pop();
    }
  }

  findCombination(0, 0, []);
  return result;
};
