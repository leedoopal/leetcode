/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
  let number = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    number = number * 26 + (columnTitle.charCodeAt(i) - 64);
  }

  return number;
};

titleToNumber('FXSHRXW')
