/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let count = 0;
  let tmp = 0;

  for (let i of nums) {
    if (count === 0) tmp = i;
    count += i === tmp ? 1 : -1;
  }

  return tmp;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
