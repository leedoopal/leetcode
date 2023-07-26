/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우

  let oranges = 0;
  const queue = [];

  // 초기 썩은 오렌지를 큐에 추가하고, 신선한 오렌지 개수를 센다.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        oranges++;
      } else if (grid[i][j] === 2) {
        // 썩은 오렌지의 위치와 경과 시간을 큐에 저장
        queue.push([i, j, 0])
      }
    }
  }

  let minutes = 0;
  while (queue.length > 0) {
    const [i, j, time] = queue.shift();

    for (const [di, dj] of directions) {
      const newRow = i + di;
      const newCol = j + dj;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
        // 신선한 오렌지를 썩은 오렌지로 변경
        grid[newRow][newCol] = 2;
        oranges--;
        queue.push([newRow, newCol, time + 1]);
        minutes = time + 1;
      }
    }
  }

  return oranges === 0 ? minutes : -1;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
