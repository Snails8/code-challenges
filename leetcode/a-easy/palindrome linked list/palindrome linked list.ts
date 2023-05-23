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

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return false;

    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    return check(arr);
};

function check(x: number[]) {
    let arr = [...x].reverse();
    for (let i = 0; i < arr.length; i++) {
        if (x[i] !== arr[i]) {
            return false;
        }
    }
    return true;
}
