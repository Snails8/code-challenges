/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function middleNode(head: ListNode | null): ListNode | null {
    let rabbit = head.next;
    let tortle = head;

    while(rabbit) {
        rabbit = rabbit.next?.next;
        tortle = tortle.next;
    }
    
    return tortle;
};
