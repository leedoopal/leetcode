/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const mid = Math.floor(length / 2);
  const array = [...nums1, ...nums2].sort((a, b) => a - b);

  if (length % 2 === 0) {
    return (array[mid - 1] + array[mid]) / 2
  } else {
    return array[mid]
  }
};

console.log(findMedianSortedArrays([3], [-2, -1]));
