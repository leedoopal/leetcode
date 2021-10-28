// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  let firstX = false;
  let firstY = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstX = true;
        if (j === 0) firstY = true;

        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstX || firstY) {
    matrix.map((v, i) => {
      if (i === 0 && firstX) matrix[i] = Array.from({length: v.length}).fill(0)

      v.map((col, j) => {
        if (j === 0 && firstY) return v[j] = 0;
      })
    })
  }

  return matrix;
};

console.log(setZeroes([[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]]))
