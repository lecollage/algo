import {} from 'jasmine';
import {expect} from 'chai';
import {} from 'mocha';
import {DoublyLinkedList} from "../../src/queue/lib/DoublyLinkedList";
import {Queue} from "../../src/queue/lib/Queue";
import {findBin} from "../../src/queue/FindBin";

describe(`Doubly linked list`, () => {
    it(`should work`, () => {
        const testCases = [
            {
                listA: [1,5,8],
            },
        ];

        const list = new DoublyLinkedList();

        testCases.forEach(({listA}) => {
            listA.forEach(v => {
                list.insertTail(v);
            });

            expect(list.toString()).eq('1,5,8');
        });
    });
});

describe(`Queue`, () => {
    it(`should work`, () => {
        const testCases = [
            {
                listA: [1,0,-1,2,0,9],
            },
        ];

        const queue = new Queue();

        testCases.forEach(({listA}) => {
            listA.forEach(v => {
                queue.enqueue(v);
            });

            queue.dequeue();
            queue.dequeue();

            expect(queue.dequeue()).eq(-1);
        });
    });
});


describe(`findBin`, () => {
    it(`should work`, () => {
        const testCases = [
            {
                n: 0,
                result: []
            },
            {
                n: 3,
                result: ['1', '10', '11']
            },
            {
                n: 5,
                result: ['1', '10', '11', '100', '101']
            },
        ];

        testCases.forEach(({n, result}) => {
            console.log(`DEBUG >> `, findBin(n));

            expect(findBin(n)).deep.eq(result);
        });
    });
});
