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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }

    list2.next = mergeTwoLists(list1, list2.next);
    return list2

};

// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   if (l1 === null) { return l2 }
//   if (l2 === null) { return l1 }

//   if (l1.val < l2.val) 
//        { l1.next = mergeTwoLists(l1.next, l2); return l1 } 
//   else { l2.next = mergeTwoLists(l1, l2.next); return l2 }
// }
