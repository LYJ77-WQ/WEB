var copyRandomList = function(head) {
    if (!head) return null;

    const map = new Map();
    let current = head;

    // First pass: create all new nodes and map them
    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: assign next and random pointers
    current = head;
    while (current) {
        const newNode = map.get(current);
        newNode.next = map.get(current.next) || null;
        newNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
};