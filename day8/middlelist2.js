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
  let newHead = head;

  while (newHead != null && newHead.next != null) {
    head = head.next;
    newHead = newHead.next.next;
  }

  return head;
};
