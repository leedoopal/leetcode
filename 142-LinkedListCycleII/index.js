function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  let turtle = head;
  let rabbit = head;

  while (rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;

    if (turtle === rabbit) {
      turtle = head;
      while (turtle !== rabbit) {
        turtle = turtle.next;
        rabbit = rabbit.next;
      }
      return turtle;
    }
  }

  return null;
};
