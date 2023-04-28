// https://leetcode.com/problems/surrounded-regions/

function dfs(board, i, j) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === 'X' || board[i][j] === 'V') return;

  board[i][j] = 'V';
  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);

  return;
}

const solve = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if ((i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) && board[i][j] === 'O') dfs(board, i, j)
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'V') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  return board;
};

console.log(solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]));
