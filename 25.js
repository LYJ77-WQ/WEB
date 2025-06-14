var reverseKGroup = function(head, k) {
    // 检查是否有足够的节点可以翻转
    let count = 0;
    let node = head;
    while (node && count < k) {
        node = node.next;
        count++;
    }
    if (count < k) return head;

    // 翻转当前k个节点
    let prev = null;
    let curr = head;
    for (let i = 0; i < k; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 递归处理剩余的节点
    head.next = reverseKGroup(curr, k);

    return prev;
};

// ListNode构造函数
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}