/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  // sort의 평균 시간복잡도는 O(n log n)
  citations.sort((a, b) => b - a); // 내림차순으로 정렬
  let hIndex = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      hIndex = i + 1; // h-index를 업데이트
    } else {
      break; // h-index의 조건을 만족하지 않으면 루프 종료
    }
  }

  return hIndex;
};

console.log(hIndex([3, 0, 6, 1, 5]));
