/**
 * @param {number} num
 * @return {string}
 */
const symbol = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}
const intToRoman = function (num) {
  let answer = ''

  let oneNum = num % 10;
  let tenNum = num % 100 - oneNum;
  let milNum = num % 1000 - tenNum - oneNum;
  let thouNum = num % 10000 - milNum - tenNum - oneNum;

  const one = loopRoman(oneNum, 1, answer)
  const ten = loopRoman(tenNum, 10, answer)
  const mil = loopRoman(milNum, 100, answer)

  while (thouNum > 0) {
    thouNum = thouNum - 1000;
    answer += symbol[1000]
  }

  return answer + mil + ten + one;
};

const loopRoman = (value, int, answer) => {
  while (value > 0) {
    if (value === 9 * int) {
      value = value - 9 * int;
      answer += symbol[int] ?? ''
      answer += symbol[int * 10] ?? ''
    } else if (value >= 5 * int) {
      value = value - 5 * int;
      answer += symbol[5 * int] ?? ''
    } else {
      if (value === 4 * int) {
        value = value - 4 * int;
        answer += symbol[1 * int] ?? ''
        answer += symbol[5 * int] ?? ''
      } else {
        value = value - 1 * int;
        answer += symbol[1 * int] ?? '';
      }
    }
  }

  return answer;
}

console.log(intToRoman(1994));
