const minScore = function (n, roads) {
  // 인덱스를 1부터 편하게 사용하기 위해 n + 1
  const graph = new Array(n + 1).fill().map(() => []);
  const visited = new Set([]);

  for (const [v1, v2, distance] of roads) {
    graph[v1].push([v2, distance])
    graph[v2].push([v1, distance])
  }

  // 시작 도시 번호
  const queue = [1];
  visited.add(1);
  let result = Infinity;

  while (queue.length > 0) {
    const node = queue.shift();
    for (const [next, distance] of graph[node]) {
      result = Math.min(result, distance);
      if (visited.has(next)) continue;

      visited.add(next);
      queue.push(next);
    }
  }

  return result;
}

console.log(minScore(4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]));
