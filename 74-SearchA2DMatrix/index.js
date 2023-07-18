/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  let left = 0;
  let right = row * col - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = matrix[Math.floor(mid / col)][mid % col];

    if (midVal === target) {
      return true;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
