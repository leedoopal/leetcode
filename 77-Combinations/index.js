/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = [];
  let arr = [];

  function recursive(num) {
    if (arr.length === k) {
      result.push([...arr])
      return;
    }

    for (let i = num; i <= n; i++) {
      arr.push(i);
      recursive(i + 1);
      arr.pop();
    }
  }

  recursive(1, [])
  return result;
};

console.log(combine(4, 2));
// console.log(combine(1, 1));
