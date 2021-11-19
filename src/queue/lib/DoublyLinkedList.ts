import {Node} from './Node';

export class DoublyLinkedList<T> {
    private _length = 0;
    private head: Node<T> = null;
    private tail: Node<T> = null;

    get length () {
        return this._length;
    }

    insertTail (item: T) {
        const newNode = new Node<T>(item);

        if (this._length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this._length++;

        return newNode;
    }

    removeHead () {
        if (this._length === 0) {
            return null;
        }

        const nodeToRemove = this.head;

        if (this._length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToRemove.next;

            this.head.prev = null;
            nodeToRemove.next = null;
        }

        this._length--;

        return nodeToRemove.item;
    }

    firstNode (): T {
        if (!(this.head == null)) {
            return this.head.item;
        } else {
            return null;
        }
    }

    getHead (): T {
        if (!(this.head == null)) {
            return this.head.item;
        } else {
            return null;
        }
    }

    tailNode (): T {
        if (!(this.head == null)) {
            return this.tail.item;
        } else {
            return null;
        }
    }

    toString (): string {
        const list = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            list.push(JSON.stringify(currentNode.item));
            currentNode = currentNode.next;
        }

        return list.toString();
    }
}
