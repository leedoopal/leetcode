/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const result = {};

  for (let i = 0; i < strs.length; i++) {
    let sortString = strs[i].split('').sort().join('');

    if (!result[sortString]) {
      result[sortString] = [strs[i]]
    } else {
      result[sortString].push(strs[i])
    }
  }

  return Object.values(result);
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", ""]));
// console.log(groupAnagrams(["eat"]));
