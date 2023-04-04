/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const result = [];

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      // 다음 자리수로 자릿수 올릴 때 사용하는 인덱스
      // 10의 자리수 저장
      const prev = i + j + 1;
      const cur = i + j;
      const sum = (result[prev] ?? 0) + num1[i] * num2[j];
      result[cur] = (result[cur] ?? 0) + Math.floor(sum / 10);
      result[prev] = sum % 10;
    }
  }

  result[0] === 0 && result.shift();
  return result.join('')
};

console.log(multiply('123', '456'));
