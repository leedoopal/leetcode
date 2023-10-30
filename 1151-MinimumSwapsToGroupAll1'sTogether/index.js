/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
    const width = data.filter((num) => num === 1).length;
    let l = 0;
    let r = 0;
    // 현재 윈도우 내의 1의 개수
    let count = 0;
    // 지금까지 발견한 최대 1의 개수
    let result = 0;

    while (r < data.length) {
        count += data[r];
        r++;

        if (r - l > width) {
            count -= data[l];
            l++;
        }

        result = Math.max(count, result);
    }

    return width - result;
};

console.log(minSwaps([1, 0, 1, 0, 1]));