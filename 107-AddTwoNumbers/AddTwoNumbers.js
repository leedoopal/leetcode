/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {string[]}
 */
const addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;

  // listNode의 헤드노드 먼저 생성
  let result = new ListNode(0);
  // 각 리스트가 연결되어야 하기에 해당 레퍼런스를 담당할 변수 설정
  let resultArchive = result;

  let division = 0;

  while(node1 || node2 || division) {
    const value1 = node1 ? node1.val : 0;
    const value2 = node2 ? node2.val : 0;
    const sum = value1 + value2 + division;

    // 이걸 저장해놔야 그 다음 while 문에서 10 이상일 경우 1의 값을, 20 이상이라면 2의 값을 올려줄 수 있다.
    division = Math.floor(sum / 10);

    // **역순으로 저장중**
    // 나머지 값을 먼저 next에 집어넣고
    resultArchive.next = new ListNode(sum % 10);
    // 그 다음 값으로 위 next 값을 저장한다.
    resultArchive = resultArchive.next;

    // listnode의 헤더가 마지막에 반환되어야 하기 때문에 node(n).next를 반환해준다.
    node1 = node1 && node1.next;
    node2 = node2 && node2.next;
  }

  // while문이 끝났지만 division 값이 있다면 추가해준다.
  if (division > 0) resultArchive.next = new ListNode(division);

  return result.next;
};
