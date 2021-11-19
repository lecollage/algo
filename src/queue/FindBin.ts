import {Queue} from './lib/Queue';

export function findBin (count) {
    const result = [];

    if (!count) {
        return result;
    }

    const queue = new Queue<string>();

    queue.enqueue('1');

    for (let i = 0; i < count; i++) {
        const current = queue.dequeue();

        result.push(current);

        const s1 = current + '0';
        const s2 = current + '1';

        queue.enqueue(s1);
        queue.enqueue(s2);
    }

    return result;
}
