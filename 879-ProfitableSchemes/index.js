/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
const profitableSchemes = function (n, minProfit, group, profit) {
  // n과 minProfit을 포함하는 2차원 배열
  let arr = new Array(n + 1).fill(0);
  arr = arr.map(() => new Array(minProfit + 1).fill(0));

  const mod = 10 ** 9 + 7;
  // 어떤 범죄도 선택하지 않았을 때 0원을 벌더라도 1의 경우가 성립하기 때문
  arr.forEach(c => c[0] = 1);

  group.forEach((item, key) => {
    // 현재 범죄의 인원수를 기준으로 반복문 실행
    // n(인원수)부터 현재 범죄의 인원수까지 역순으로 반복
    for (let i = n; i >= item; i--) {
      // 현재 범죄(profit)에서 얻을 수 있는 이익을 기준으로 반복문 실행
      for (let j = minProfit; j >= 0; j--) {
        // arr[i][j] = i명의 회원이 있고, 이익이 j인 경우에 group이 얻을 수 있는 이익의 총합
        // arr[i - item] = 현재 group의 회원수를 고려하여 이전 값을 참조
        // Math.max = 현재 group의 이익이 profit[key] 이상일 경우에만 이전 값을 사용할 수 있도록 함
        arr[i][j] = (arr[i][j] + arr[i - item][Math.max(0, j - profit[key])]) % mod
      }
    }
  })

  // 배열의 마지막 항목
  return arr[n][minProfit];
};

// console.log(profitableSchemes(5, 3, [2, 2], [2, 3]));
// console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]));
// console.log(profitableSchemes(1, 1, [2, 2, 2, 2, 2], [1, 2, 1, 1, 0]));
// console.log(profitableSchemes(1, 1, [1], [1]));
console.log(profitableSchemes(64, 0, [80, 40], [88, 88]));
