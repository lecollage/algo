// val and next

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

class Entry {
    // val: number;
    // next: Entry | null;

    set val (v: number) {
        this._val = v;
    }

    get val () {
        return this._val;
    }

    set next (v: Entry) {
        this._next = v;
    }

    get next () {
        return this._next || null;
    }

    constructor (private _val: number, private _next: Entry | null) {
        this._next = this._next || null;
    }

    toString () {
        return `{value: ${this._val}, next: ` + this.next + '}';
    }

    toStringSimple () {
        return String(this._val) + ' ' + (this.next !== null ? this.next.toStringSimple() : '');
    }
}

export class MyLinkedList {
    private entries: Entry[] = [];
    private headEntry: Entry = null;
    private length = 0;

    constructor () {

    }

    get (index: number): number {
        if (index > this.length - 1 || index < 0) {
            return -1;
        }

        const currentEntry = this.getEntry(index);

        return currentEntry ? currentEntry.val : -1;
    }

    addAtHead (val: number): void {
        const firstEntry = this.headEntry;
        const newEntry = new Entry(val, firstEntry);

        this.entries.push(newEntry);
        this.headEntry = newEntry;
        this.length++;
    }

    addAtTail (val: number): void {
        if (!this.headEntry) {
            this.addAtHead(val);

            return;
        }

        let traverseEntry = this.headEntry;

        while (!!traverseEntry.next) {
            traverseEntry = traverseEntry.next;
        }

        const newEntry = new Entry(val, null);

        this.entries.push(newEntry);

        traverseEntry.next = newEntry;

        this.length++;
    }

    addAtIndex (index: number, val: number): void {
        if (index > this.entries.length || index < 0 || index > this.length) {
            return;
        }

        if (index === 0) {
            this.addAtHead(val);

            return;
        }

        if (index === this.length) {
            this.addAtTail(val);

            return;
        }

        const entry = this.getEntry(index);
        const newEntry = new Entry(val, entry);

        let traverseEntry = this.headEntry;

        while (traverseEntry.next !== entry) {
            traverseEntry = traverseEntry.next;
        }

        traverseEntry.next = newEntry;

        this.entries.push(newEntry);

        this.length++;
    }

    deleteAtIndex (index: number): void {
        if (index >= this.length || index < 0) {
            return;
        }

        if (index === 0) {
            this.deleteHead();

            return;
        }

        const entryAtIndex = this.getEntry(index);

        let traverseEntry = this.headEntry;

        while (traverseEntry.next !== entryAtIndex) {
            traverseEntry = traverseEntry.next;
        }

        if (entryAtIndex && entryAtIndex.next) {
            traverseEntry.next = entryAtIndex.next;

            entryAtIndex.next = null;
            entryAtIndex.val = null;
        } else {
            traverseEntry.next = null;

            // entryAtIndex.next = null;
            // entryAtIndex.val = null;
        }

        this.length--;
    }

    print (): void {
        console.log(this.headEntry.toString());
    }

    printSimple (prefix: string = '', suffix: string = ''): void {
        console.log(prefix + (this.headEntry ? this.headEntry.toStringSimple() : '') + `; length: ${this.length}; ` + suffix);
    }

    private getEntry (index: number): Entry {
        let currentEntry = this.headEntry;

        if (!currentEntry) {
            return null;
        }

        while (index > 0 && currentEntry.next) {
            currentEntry = currentEntry.next;
            index--;
        }

        return currentEntry || null;
    }

    private deleteHead (): void {
        const currentHeadEntry = this.headEntry;
        this.headEntry = this.headEntry.next;

        currentHeadEntry.next = null;
        currentHeadEntry.val = null;

        this.length--;
    }
}

/*
*
* 1
* 10
* 11
*
* */

class Entry2 {
    val: number = null;
    prev: Entry2 = null;
    next: Entry2 = null;

    constructor (val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

export class MyLinkedList2 {
    private head: Entry2 = null;
    private tail: Entry2 = null;
    private size = 0;

    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    print () {}

    printSimple (v, v2 = '') {}

    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get (index) {
        const node = this._getNode(index);
        return node ? node.val : -1;
    }

    _getNode (index) {
        const front = index < this.size;
        let count = front ? index : this.size - index - 1;
        const key = front ? 'next' : 'prev';
        let node = front ? this.head : this.tail;
        while (node && count--) {
            node = node[key];
        }
        return node || null;
    }

    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead (val) {
        const node = new Entry2(val);
        const { head } = this;
        this.head = node;
        if (!head) {
            this.tail = node;
        } else {
            node.next = head;
            head.prev = node;
        }
        this.size++;
    }

    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail (val) {
        const node = new Entry2(val);
        const { tail } = this;
        this.tail = node;
        if (!tail) {
            this.head = node;
        } else {
            tail.next = node;
            node.prev = tail;
        }
        this.size++;
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex (index, val) {
        if (index > this.size) {
            return;
        }
        if (index <= 0) {
            return this.addAtHead(val);
        }
        if (index === this.size) {
            return this.addAtTail(val);
        }
        const node = new Entry2(val);
        const next = this._getNode(index);
        const { prev } = next;
        prev.next = node;
        next.prev = node;
        node.prev = prev;
        node.next = next;
        this.size++;
    }

    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex (index) {
        if (this.size === 0 || index < 0 || index >= this.size) {
            return;
        }
        if (index === 0) {
            const { head } = this;
            this.head = head.next;
            if (this.head) {
                this.head.prev = null;
            }
            this.size--;
            return;
        }
        if (index === this.size - 1) {
            const { tail } = this;
            this.tail = tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
            this.size--;
            return;
        }
        const node = this._getNode(index);
        [node.prev.next, node.next.prev] = [node.next, node.prev];
        this.size--;
    }

    /**
     * Your MyLinkedList object will be instantiated and called as such:
     * var obj = new MyLinkedList()
     * var param_1 = obj.get(index)
     * obj.addAtHead(val)
     * obj.addAtTail(val)
     * obj.addAtIndex(index,val)
     * obj.deleteAtIndex(index)
     */
}
