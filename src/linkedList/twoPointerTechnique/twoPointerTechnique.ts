class ListNode {
    val: number;
    next: ListNode | null;

    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function makeLinkNodes (arr: number[]) {
    return arr
        .map(val => new ListNode(val))
        .reduce((result, node) => {
            let target = result;

            while (target.next) {
                target = target.next;
            }
            target.next = node;

            return result;
        });
}

export function makeLinkNodesValues (list: ListNode) {
    const values: number[] = [];

    if (!list) {
        return values;
    }

    let node = list;

    while (node) {
        values.push(node.val);
        node = node.next;
    }

    return values;
}

export function hasCycle (head: ListNode | null): boolean {
    if (!head || !head.next) return false;

    let slow: ListNode = head;
    let fast: ListNode = head.next;

    while (slow !== fast) {
        if (!fast && !fast.next) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

export function detectCycle (head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;

    let slow: ListNode = head;
    let fast: ListNode = slow.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return null;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    let begin = head;

    while (begin.next !== slow || begin.next.next !== slow) {
        begin = begin.next;
    }

    return begin;
}

export function getIntersectionNode (headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let nodeA = headA;

    while (nodeA) {
        let nodeB = headB;

        while (nodeB) {
            if (nodeA === nodeB && nodeA.next === nodeB.next) {
                return nodeA;
            }

            nodeB = nodeB.next;
        }

        nodeA = nodeA.next;
    }

    return null;
}
/*

[1, 5]
[1, 5, 8]
    ^  |

*/

export function removeNthFromEnd (head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    let slow: ListNode = head;
    let fast: ListNode = head.next;

    if (!fast) {
        return null;
    }

    let end: ListNode = null;
    let count: number = 2;

    while (true) {
        if (!end) {
            if (fast.next) {
                if (fast.next.next) {
                    fast = fast.next.next;
                    count += 2;

                    // console.log(`DEBUG STEP 1 >> count: `, count);
                } else {
                    fast = fast.next;
                    end = fast;
                    count++;

                    // console.log(`DEBUG STEP 2 >> count: `, count);
                }
            } else {
                end = fast;
            }
        } else if (count - n - 1 > 0) {
            // console.log(`DEBUG >> count: `, count);
            slow = slow.next;
            count--;
        } else {
            if (count === n) {
                return slow.next;
            }

            if (slow.next) {
                slow.next = slow.next.next || null;
            } else {
                slow.next = null;
            }

            break;
        }
    }

    return head;
}

export function reverseList (head: ListNode | null): ListNode | null {
    let currentNode = head;
    let prevNode = null;
    let nextNode = currentNode ? currentNode.next : null;

    // prevNode
    // node
    // nextNode

    while (currentNode) {
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;

        if (currentNode) {
            nextNode = currentNode.next;
        }

        console.log();
        // break
    }

    head = prevNode;

    return head;
}

/*
 1 -> 2 -> 3 -> 4 -> null
 2 -> 1 -> 3 -> 4 -> null
 2 -> 3 -> 1 -> 4 -> null
 2 -> 3 -> 4 -> 1 -> null
*/

export function removeElements (head: ListNode | null, val: number): ListNode | null {
    let currentNode = head;
    let prevNode: ListNode | null = null;
    // let nextHead: ListNode | null = null;

    while (currentNode) {
        if (currentNode.val === val) {
            if (prevNode) {
                prevNode.next = currentNode.next;
            } else {
                head = head.next;
            }

            currentNode.next = null;
        } else {
            prevNode = currentNode;
        }

        currentNode = prevNode ? prevNode.next : null;
    }

    if (head && head.val === val && !head.next) {
        head = null;
    }

    return head;
}
