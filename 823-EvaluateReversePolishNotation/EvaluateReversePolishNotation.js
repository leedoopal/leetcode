let firstNum, secondNum;
const operators = {
  '+': () => firstNum + secondNum,
  '-': () => firstNum - secondNum,
  '*': () => firstNum * secondNum,
  '/': () => ~~(firstNum / secondNum),
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const arr = [];

  for (let i of tokens) {
    if (operators[i]) {
      secondNum = arr.pop();
      firstNum = arr.pop();
      arr.push(operators[i]())
    } else {
      arr.push(~~i)
    }
  }

  return arr[0];
};

console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));
