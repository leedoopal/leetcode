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
  let one = num % 10;
  let ten = num % 100 - one;
  let mil = num % 1000 - ten - one;
  let thou = num % 10000 - mil - ten - one;

  let answer = '';

  const thouAnswer = recursive(thou, 1000, answer)
  const milAnswer = recursive(mil, 100, answer);
  const tenAnswer = recursive(ten, 10, answer);
  const oneAnswer = recursive(one, 1, answer);

  return thouAnswer + milAnswer + tenAnswer + oneAnswer
}

function recursive(num, int, answer) {
  while (num > 0) {
    if (num === 9 * int) {
      num = num - 9 * int;
      answer += symbol[int] + symbol[int * 10]
    } else if (num >= 5 * int) {
      num = num - 5 * int;
      answer += symbol[5 * int]
    } else if (num === 4 * int) {
      num = num - 4 * int;
      answer += symbol[int] + symbol[int * 5]
    } else {
      num = num - int;
      answer += symbol[int]
    }
  }

  return answer;
}

// console.log(intToRoman(1994));
console.log(intToRoman(58));
