/**
 * @param {string} s
 * @return {number}
 */

/**
 * 각 문자열마다 빈도를 기록한다.
 * i: left
 * j: right
 * set에 문자가 없으면 j를 한칸씩 증가시키고, set에 j번째 인덱스에 추가한다.
 * set에 문자가 있다면 i를 한칸씩 증가시키고, set에서 i번째 인덱스를 제거한다.
 */
const lengthOfLongestSubstring = function (s) {
  let answer = 0;
  let set = new Set();
  let i = 0;
  let j = 0;

  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      // set에 string[j] 추가
      set.add(s[j]);
      // right - left + 1 (1은 길이를 세야하니깐 더해주기)
      answer = Math.max(answer, j - i + 1);
      // j index 한칸 이동
      j++;
    } else {
      // 똑같은 문자열이 있으면 set에서 string[i] 제거하고 인덱스 증가
      set.delete(s[i]);
      // i index 한칸 이동
      i++;
    }
  }

  return answer;
};

console.log(lengthOfLongestSubstring('abcabc'));
