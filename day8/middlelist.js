/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let total = 0, count = 0;
  let newHead = head;

  while(newHead) {
    total++;
    newHead = newHead.next;
  }

  const middle = Math.floor(total / 2);

  while (count++ < middle) {
    head = head.next;
  }

  return head;
};
