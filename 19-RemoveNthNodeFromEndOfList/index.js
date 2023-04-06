function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let turtle = head;
  let rabbit = head;

  // rabbit이 n만큼 먼저 시작함
  for (let i = 0; i < n; i++) rabbit = rabbit.next;

  // 끝까지 도달했을 때 head.next가 뒤에서 n번째의 노드가 된다
  if (!rabbit) return head.next;

  // turtle이 마지막에 다다를때까지 같이 움직인다
  while (rabbit && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next;
  }

  // 다 돌았으니 turtle은 null이고, rabbit의 다음 노드를 삭제하면 된다
  // turtle.next를 turtle.next의 next를 한번 더 가리키도록 하면서 노드를 삭제시킨다
  // 예를 들어 [1, 2, 3, 4, 5] n = 2일 때
  // turtle.next = turtle.next.next(5)를 넘겨 줌으로써 3과 5가 연결되고, 4는 사라지게 된다
  turtle.next = turtle.next.next;

  return head;
}
