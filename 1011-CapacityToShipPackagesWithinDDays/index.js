// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function(weights, days) {
  let min = 0;
  let max = 0;

  for (let w of weights) {
    min = Math.max(w, min);
    max += w;
  }


  while (min < max) {
    let mid = Math.floor((max + min) / 2);

    let sum = 0;
    let count = 1;

    for (let w of weights) {
      sum += w;
      if (sum > mid) {
        count++;
        sum = w;
      }
    }

    if (days < count) {
      min = mid + 1
    } else {
      max = mid;
    }
  }

  return min;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
