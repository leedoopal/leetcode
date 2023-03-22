const arr = new Map();
const start = new Set();
const end = new Set();

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  for (let [k, v] of prerequisites) {
    const all = arr.get(k) || [];
    all.push(v);
    arr.set(k, all);
  }

  for (const [k, v] of arr) {
    if (recursive(k)) return false;
  }

  return true;
};

const recursive = (course) => {
  start.add(course);
  const cur = arr.get(course);

  if (cur) {
    for (let v of cur) {
      if (end.has(v)) continue;
      if (start.has(v)) return true;
      if (recursive(v)) return true;
    }
  }

  end.add(course);
  start.delete(course);

  return false;
}

console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]));
// console.log(canFinish(2, [[1,0]]));
// console.log(canFinish(2, [[0,1],[1,0]]));
// console.log(canFinish(2, [[0,1]]));
