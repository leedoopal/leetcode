const intToRoman = function (num) {
  const numToText = num.toString();
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const ths = ["", "M", "MM", "MMM"];
  return ths[numToText[0]] + hrns[numToText[1]] + tens[numToText[2]] + ones[numToText[3]];
}

console.log(intToRoman(1994));
