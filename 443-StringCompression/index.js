/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let result = '';
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    let current = chars[i];
    let next = chars[i + 1];
    if (current === next) {
      count++;
    } else {
      result[i] = chars[i] + count
      count = 1;
    }
  }

  return result.split('');
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
