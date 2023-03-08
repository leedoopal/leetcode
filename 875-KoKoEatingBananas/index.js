/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
  piles = piles.sort((a, b) => a - b);

  let l = 1;
  let r = piles[piles.length - 1];

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let sum = 0;

    for (const i in piles) {
      sum += Math.ceil(piles[i] / mid);
    }

    if (sum > h) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
};

console.log(minEatingSpeed([30,11,23,4,20], 5));

