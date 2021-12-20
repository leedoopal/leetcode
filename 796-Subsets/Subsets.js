/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const result = new Set();
  result.add([])

  for (let i = 0; i < nums.length; i++) {
    const arr = [...result];
    arr.forEach((n) => {
      let current = n.slice(0);
      current.push(nums[i]);
      result.add(current);
    })
  }

  return [...result];
};

console.log(subsets([1, 2, 3]));
