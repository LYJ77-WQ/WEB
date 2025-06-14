var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let ptrA = headA;
    let ptrB = headB;

    while (ptrA !== ptrB) {
        ptrA = ptrA ? ptrA.next : headB;
        ptrB = ptrB ? ptrB.next : headA;
    }

    return ptrA;
};