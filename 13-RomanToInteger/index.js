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

  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = table[s[i]] ?? 0;
    const next = table[s[i + 1]] ?? 0;

    if (current < next) {
      answer += next - current;
      i++
    } else {
      answer += current;
    }
  }

  return answer;
};

console.log(romanToInt('MCMXCIV'));
