// https://leetcode.com/problems/minimum-time-to-complete-trips/description/

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = function (time, totalTrips) {
  let l = 1;
  let r = Math.max(...time) * totalTrips;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    let sum = 0;

    for (const t of time) {
      sum += Math.floor(mid / t);
    }

    if (sum >= totalTrips) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

console.log(minimumTime([1, 2, 3], 5));
// console.log(minimumTime([5, 10, 10], 9));
// console.log(minimumTime([1], 4));
