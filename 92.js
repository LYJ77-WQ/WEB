var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let current = prev.next;
    let next = null;
    let tail = current;

    for (let i = 0; i < right - left + 1; i++) {
        next = current.next;
        current.next = prev.next;
        prev.next = current;
        current = next;
    }

    tail.next = current;

    return dummy.next;
};