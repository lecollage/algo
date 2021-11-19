export class Stack<T> {
    constructor (
        private items: Array<T> = [],
        private top = null
    ) {
    }

    getTop (): T {
        if (this.items.length === 0) {
            return null;
        }

        return this.top;
    }

    isEmpty (): boolean {
        return this.items.length === 0;
    }

    size (): number {
        return this.items.length;
    }

    push (element: T): void {
        this.items.push(element);
        this.top = element;
    }

    pop (): T {
        if (this.items.length !== 0) {
            if (this.items.length === 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }
        } else {
            return null;
        }
    }
}
