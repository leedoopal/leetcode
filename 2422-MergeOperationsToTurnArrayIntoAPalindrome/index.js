/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let result = 0;

    while (l < r) {
        if (nums[l] === nums[r]) {
            l++;
            r--;
        }

        if (nums[l] < nums[r]) {
            nums.splice(l, 2, nums[l] + nums[l + 1]);
            result++;
            l--;
        }

        if (nums[l] > nums[r]) {
            nums.splice(r - 1, 2, nums[r] + nums[r - 1]);
            result++;
            r--;
        }
    }

    return result;
};

// console.log(minimumOperations([4, 3, 2, 1, 2, 3, 1]));
console.log(minimumOperations([1, 2, 3, 4]));