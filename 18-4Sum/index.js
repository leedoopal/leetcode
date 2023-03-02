/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    const result = [];
    const arr = nums.sort((a, b) => a - b);

    // 4개의 숫자 array를 반환해야하기 때문에 -3
    for (let i = 0; i < arr.length - 3; i++) {
      // j는 i + 1부터 계산, i보다 한칸 오른쪽으로 이동했으니 -2
      for (let j = i + 1; j < arr.length - 2; j++) {
        // left pointer = j + 1
        let l = j + 1;
        // right pointer = arr.length - 1
        let r = arr.length - 1;

        while (l < r) {
          const sum = arr[i] + arr[l] + arr[r] + arr[j];

          if (sum > target) {
            r--;
          } else if (sum < target) {
            l++;
          } else {
            result.push([arr[i], arr[l], arr[r], arr[j]]);
            // 중복 방지를 위해 l을 오른쪽으로 이동시키기
            do {
              l++;
            } while (arr[l] === arr[l - 1]);
            // 중복 방지를 위해 r을 왼쪽으로 이동시키기
            do {
              r--;
            } while (arr[r] === arr[r + 1]);
          }
        }
        // 중복 방지를 위해 다음 숫자와 똑같다면 j++
        while (arr[j] === arr[j + 1]) j++
      }
      // 여기도 중복 방지를 위해 다음 숫자와 똑같다면 i++
      while (arr[i] === arr[i + 1]) i++
    }
    return result;
  }
;

// console.log(fourSum([-3, -1, 0, 2, 4, 5], 0));
// console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9));
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
