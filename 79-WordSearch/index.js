// https://leetcode.com/problems/word-search/description/

const recursive = (board, word, row, col) => {
  if (!word.length) return true;
  // 범위를 벗어나면 false를 돌려준다
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false;
  // 탐색하고자 하는 문자가 아니라면 false를 돌려준다
  if (board[row][col] !== word[0]) return false;

  const cur = board[row][col];
  const str = word.substring(1);

  // 다시 탐색하지 않게 null로 해준다
  board[row][col] = null;

  const result = recursive(board, str, row + 1, col) || recursive(board, str, row - 1, col) || recursive(board, str, row, col + 1) || recursive(board, str, row, col - 1)

  // 탐색이 끝난 후 문자를 다시 돌려준다
  board[row][col] = cur;
  return result;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (recursive(board, word, i, j)) return true;
    }
  }

  return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'));
