export class Node<T> {
    constructor (
        public item: T | null = null,
        public prev: Node<T> | null = null,
        public next: Node<T> | null = null
    ) {}
}
