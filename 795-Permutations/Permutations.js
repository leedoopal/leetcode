/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];

  function loop(arr) {
    if (arr.length === nums.length) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        loop([...arr, nums[i]])
      }
    }
  }

  loop([])

  return result;
};

console.log(permute([1, 2, 3]));
