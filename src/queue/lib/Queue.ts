import {DoublyLinkedList} from './DoublyLinkedList';
import {Node} from './Node';

export class Queue<T> {
    private readonly items: DoublyLinkedList<T> = null;

    constructor () {
        this.items = new DoublyLinkedList();
    }

    isEmpty (): boolean {
        return this.items.length === 0;
    }

    getFront (): T {
        if (!(this.isEmpty())) {
            return this.items.getHead();
        } else {
            return null;
        }
    }

    getTail (): T {
        if (!(this.isEmpty())) {
            return this.items.tailNode();
        } else {
            return null;
        }
    }

    size (): number {
        return this.items.length;
    }

    enqueue (element: T): Node<T> {
        return this.items.insertTail(element);
    }

    dequeue (): T {
        return this.items.removeHead();
    }
}
