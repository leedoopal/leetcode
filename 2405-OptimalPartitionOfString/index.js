/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let map = new Map();
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      count++;
      map = new Map();
    }
    map.set(s[i], 1)
  }

  return count;
};

console.log(partitionString('abacaba'))
console.log(partitionString('ssssss'))
