// https://leetcode.com/problems/linked-list-random-node/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
const Solution = function (head) {
  this.arr = [];
  while (head) {
    this.arr.push(head);
    head = head.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const i = Math.floor(Math.random() * this.arr.length);
  return this.arr[i].val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
