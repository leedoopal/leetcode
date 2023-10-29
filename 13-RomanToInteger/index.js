/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const table = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = table[s[i]];
    const next = table[s[i + 1]] ?? 0;

    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }

  return result;
};

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
