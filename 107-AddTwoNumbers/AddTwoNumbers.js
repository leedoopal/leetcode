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
  let result = new ListNode(0);
  let resultArchive = result;

  let division = 0;

  while(node1 || node2 || division) {
    let value1 = node1 ? node1.val : 0;
    let value2 = node2 ? node2.val : 0;
    let sum = value1 + value2 + division;

    division = Math.floor(sum / 10);
    resultArchive.next = new ListNode(division % 10);

    node1 = node1 && node1.next;
    node2 = node2 && node2.next;

    resultArchive = resultArchive.next;
  }

  if (division > 0) resultArchive.next = new ListNode(division);

  return result.next;
};
