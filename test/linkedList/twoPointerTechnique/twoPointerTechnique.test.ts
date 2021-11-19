import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {MyLinkedList} from '../../../src/linkedList/singlyLinkedList/design-linked-list';
import {
    getIntersectionNode,
    makeLinkNodes, makeLinkNodesValues, removeElements, removeNthFromEnd, reverseList
} from '../../../src/linkedList/twoPointerTechnique/twoPointerTechnique';

describe(`Linked List Cycle II`, () => {
    it(`addAtHead`, () => {
        // const arr: number[] = [12,345,2,6,7896];
        //
        // expect(expectedResult).to.be.deep.eq(result);

        const list = new MyLinkedList();

        list.addAtHead(1);
        list.addAtHead(10);
        list.addAtHead(12);
        list.addAtHead(15);

        list.print();
    });
    it(`addAtTail`, () => {
        const list = new MyLinkedList();

        list.addAtTail(1);
        list.addAtTail(10);
        list.addAtTail(12);
        list.addAtTail(15);

        list.print();
    });
    it(`addAtHead + addAtTail`, () => {
        const list = new MyLinkedList();

        list.addAtTail(1);
        list.addAtHead(10);
        list.addAtTail(12);
        list.addAtHead(15);
        list.addAtHead(20);
        list.addAtTail(30);

        list.print();

        // 20 15 10 1 12 30
    });

    it(`addAtHead + addAtTail + get`, () => {
        const list = new MyLinkedList();

        list.addAtTail(1);

        expect(list.get(1)).to.be.deep.eq(-1);
        expect(list.get(0)).to.be.deep.eq(1);

        list.addAtHead(10);

        expect(list.get(0)).to.be.deep.eq(10);
        expect(list.get(1)).to.be.deep.eq(1);

        list.addAtTail(12);

        expect(list.get(0)).to.be.deep.eq(10);
        expect(list.get(1)).to.be.deep.eq(1);
        expect(list.get(2)).to.be.deep.eq(12);

        list.addAtHead(15);

        expect(list.get(0)).to.be.deep.eq(15);
        expect(list.get(1)).to.be.deep.eq(10);
        expect(list.get(2)).to.be.deep.eq(1);
        expect(list.get(3)).to.be.deep.eq(12);

        list.addAtHead(20);

        expect(list.get(0)).to.be.deep.eq(20);
        expect(list.get(1)).to.be.deep.eq(15);
        expect(list.get(2)).to.be.deep.eq(10);
        expect(list.get(3)).to.be.deep.eq(1);
        expect(list.get(4)).to.be.deep.eq(12);

        list.addAtTail(30);

        expect(list.get(0)).to.be.deep.eq(20);
        expect(list.get(1)).to.be.deep.eq(15);
        expect(list.get(2)).to.be.deep.eq(10);
        expect(list.get(3)).to.be.deep.eq(1);
        expect(list.get(4)).to.be.deep.eq(12);
        expect(list.get(5)).to.be.deep.eq(30);

        list.print();

        // 20 15 10 1 12 30
    });

    it(`addAtHead + addAtTail + get + addAtIndex`, () => {
        const list = new MyLinkedList();

        list.addAtHead(10);
        expect(list.get(1)).to.be.deep.eq(-1);
        expect(list.get(0)).to.be.deep.eq(10);

        list.addAtTail(12);
        expect(list.get(1)).to.be.deep.eq(12);

        list.addAtIndex(0, -1); // head
        expect(list.get(0)).to.be.deep.eq(-1);

        list.addAtHead(15);
        expect(list.get(0)).to.be.deep.eq(15);

        list.addAtIndex(4, -2); // tail
        expect(list.get(0)).to.be.deep.eq(15);
        expect(list.get(4)).to.be.deep.eq(-2);

        list.addAtHead(20);
        expect(list.get(0)).to.be.deep.eq(20);

        list.addAtTail(30);
        expect(list.get(6)).to.be.deep.eq(30);

        list.addAtIndex(2, -3);
        expect(list.get(2)).to.be.deep.eq(-3);

        list.addAtIndex(2, -4);
        expect(list.get(2)).to.be.deep.eq(-4);

        list.print();

        // 20 15 -4 -3 -1 10 12 -2 30
    });

    it(`addAtHead + deleteAtIndex`, () => {
        const list = new MyLinkedList();

        list.addAtHead(1);
        list.addAtHead(10);
        list.addAtHead(12);
        list.addAtHead(15);
        expect(list.get(1)).to.be.deep.eq(12);

        list.deleteAtIndex(0);
        expect(list.get(1)).to.be.deep.eq(10);

        list.addAtIndex(1, -1);
        expect(list.get(1)).to.be.deep.eq(-1);

        list.deleteAtIndex(1);
        expect(list.get(1)).to.be.deep.eq(10);

        list.print();

        // 15 12 10 1
        // 12 10 1
    });
    it(`1`, () => {
        const list = new MyLinkedList();

        // ["addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"]
        // [[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]

        list.addAtHead(2);
        list.deleteAtIndex(1);
        expect(list.get(0)).to.be.deep.eq(2);

        list.print();

        // 15 12 10 1
        // 12 10 1
    });
    it(`2`, () => {
        const list = new MyLinkedList();

        // ["addAtIndex","addAtIndex","addAtIndex","get"]
        // [[0,10],[0,20],[1,30],[0]]

        list.addAtIndex(0, 10);
        list.addAtIndex(0, 20);
        list.addAtIndex(1, 30);
        expect(list.get(0)).to.be.deep.eq(20);

        list.print();

        // 20 30 10
    });
    it(`2 - 1`, () => {
        const list = new MyLinkedList();

        list.addAtIndex(0, 10);
        list.addAtIndex(0, 20);
        list.addAtIndex(1, 30);
        expect(list.get(0)).to.be.deep.eq(20);

        list.deleteAtIndex(2);

        list.print();

        // 20 30
    });
    it(`2 - 2`, () => {
        const list = new MyLinkedList();

        list.addAtTail(47);
        list.addAtTail(8);
        list.addAtTail(66);
        list.addAtTail(86);
        list.addAtTail(40);
        list.addAtTail(31);
        list.addAtTail(64);
        list.addAtTail(47);
        list.addAtTail(15);
        list.addAtTail(52);
        list.addAtTail(37);
        list.addAtTail(4);
        list.addAtTail(24);
        list.addAtTail(38);
        list.addAtTail(66);
        list.addAtTail(61);
        list.addAtTail(76);
        list.addAtTail(95);
        list.addAtTail(26);
        list.addAtTail(85);
        list.addAtTail(23);
        list.addAtTail(93);
        list.addAtTail(21);
        list.addAtTail(2);
        list.addAtTail(17);
        list.addAtTail(11);
        list.addAtTail(55);
        list.addAtTail(95);
        list.addAtTail(23);
        list.addAtTail(39);

        console.log(`DEBUG >> `, list.get(30));

        list.print();

        // 20 30
    });
    it(`3`, () => {
        const list = new MyLinkedList();

        list.addAtHead(1);
        list.addAtTail(3);
        list.addAtIndex(1, 2);    // linked list becomes 1->2->3
        expect(list.get(1)).to.be.deep.eq(2);

        list.deleteAtIndex(1);    // now the linked list is 1->3
        expect(list.get(1)).to.be.deep.eq(3);

        list.print();

        // 20 30 10
    });
    it(`4`, () => {
        const list = new MyLinkedList();
        const commands = ['MyLinkedList','addAtHead','addAtTail','addAtTail','addAtTail','addAtTail','addAtTail','addAtTail','deleteAtIndex','addAtHead','addAtHead','get','addAtTail','addAtHead','get','addAtTail','addAtIndex','addAtTail','addAtHead','addAtHead','addAtHead','get','addAtIndex','addAtHead','get','addAtHead','deleteAtIndex','addAtHead','addAtTail','addAtTail','addAtIndex','addAtTail','addAtHead','get','addAtTail','deleteAtIndex','addAtIndex','deleteAtIndex','addAtHead','addAtTail','addAtHead','addAtHead','addAtTail','addAtTail','get','get','addAtHead','addAtTail','addAtTail','addAtTail','addAtIndex','get','addAtHead','addAtIndex','addAtHead','addAtTail','addAtTail','addAtIndex','deleteAtIndex','addAtIndex','addAtHead','addAtHead','deleteAtIndex','addAtTail','deleteAtIndex','addAtIndex','addAtTail','addAtHead','get','addAtIndex','addAtTail','addAtHead','addAtHead','addAtHead','addAtHead','addAtHead','addAtHead','deleteAtIndex','get','get','addAtHead','get','addAtTail','addAtTail','addAtIndex','addAtIndex','addAtHead','addAtTail','addAtTail','get','addAtIndex','addAtHead','deleteAtIndex','addAtTail','get','addAtHead','get','addAtHead','deleteAtIndex','get','addAtTail','addAtTail'];
        const values = [[],[38],[66],[61],[76],[26],[37],[8],[5],[4],[45],[4],[85],[37],[5],[93],[10,23],[21],[52],[15],[47],[12],[6,24],[64],[4],[31],[6],[40],[17],[15],[19,2],[11],[86],[17],[55],[15],[14,95],[22],[66],[95],[8],[47],[23],[39],[30],[27],[0],[99],[45],[4],[9,11],[6],[81],[18,32],[20],[13],[42],[37,91],[36],[10,37],[96],[57],[20],[89],[18],[41,5],[23],[75],[7],[25,51],[48],[46],[29],[85],[82],[6],[38],[14],[1],[12],[42],[42],[83],[13],[14,20],[17,34],[36],[58],[2],[38],[33,59],[37],[15],[64],[56],[0],[40],[92],[63],[35],[62],[32]];

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            const value = values[i];

            if (command === 'MyLinkedList') {
                continue;
            }

            // const result = list[command](...value);
            //
            // if (command === 'get') {
            //     expect(result).to.be.deep.eq(3);
            // }

            list[command](...value);
        }

        list.print();

        // 20 30 10
    });
    it(`5`, () => {
        const list = new MyLinkedList();
        const commands = [
            'addAtHead',
            'addAtTail',
            'addAtTail',
            'addAtTail',
            'addAtTail',
            'addAtTail',
            'addAtTail',
            'deleteAtIndex',
            'addAtHead',
            'addAtHead',
            'get',
            'addAtTail',
            'addAtHead',
            'get',
            'addAtTail',
            'addAtIndex',
            'addAtTail',
            'addAtHead',
            'addAtHead',
            'addAtHead',
            'get',
            'addAtIndex',
            'addAtHead',
            'get',
            'addAtHead',
            'deleteAtIndex',
            'addAtHead',
            'addAtTail',
            'addAtTail',
            'addAtIndex',
            'addAtTail',
            'addAtHead',
            'get',
            'addAtTail',
            'deleteAtIndex',
            'addAtIndex',
            'deleteAtIndex',
            'addAtHead',
            'addAtTail',
            'addAtHead',
            'addAtHead',
            'addAtTail',
            'addAtTail',
            'get',
            'get'
        ];
        const values = [
            [38],
            [66],
            [61],
            [76],
            [26],
            [37],
            [8],
            [5],
            [4],
            [45],
            [4],
            [85],
            [37],
            [5],
            [93],
            [10,23],
            [21],
            [52],
            [15],
            [47],
            [12],
            [6,24],
            [64],
            [4],
            [31],
            [6],
            [40],
            [17],
            [15],
            [19,2],
            [11],
            [86],
            [17],
            [55],
            [15],
            [14,95],
            [22],
            [66],
            [95],
            [8],
            [47],
            [23],
            [39],
            [30],
            [27]
        ];

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            const value = values[i];

            if (command === 'MyLinkedList') {
                continue;
            }

            // const result = list[command](...value);
            //
            // if (command === 'get') {
            //     expect(result).to.be.deep.eq(3);
            // }

            console.log(`i: ${i}; COMMAND: ${command}; VALUE: ${values[i]}; `);
            list.printSimple('BEFORE: ');
            const result = list[command](...value);
            list.printSimple('AFTER:  ', (result !== undefined ? `; result: ${result}\n` : '\n'));

            // if (command === 'deleteAtIndex') {
            //     list.printSimple();
            // }
        }

        list.print();

        // 20 30 10
    });
    it(`6`, () => {
        const list = new MyLinkedList();
        const commands = ['MyLinkedList','addAtHead','get','addAtIndex','addAtIndex','deleteAtIndex','addAtHead','addAtHead','deleteAtIndex','addAtIndex','addAtHead','deleteAtIndex'];
        const values = [[],[9],[1],[1,1],[1,7],[1],[7],[4],[1],[1,4],[2],[5]];

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            const value = values[i];

            if (command === 'MyLinkedList') {
                continue;
            }

            // const result = list[command](...value);
            //
            // if (command === 'get') {
            //     expect(result).to.be.deep.eq(3);
            // }

            console.log(`i: ${i}; COMMAND: ${command}; VALUE: ${values[i]}; `);
            list.printSimple('BEFORE: ');
            const result = list[command](...value);
            list.printSimple('AFTER:  ', (result !== undefined ? `; result: ${result}\n` : '\n'));

            // if (command === 'deleteAtIndex') {
            //     list.printSimple();
            // }
        }

        list.print();

        // 20 30 10
    });
    it(`7`, () => {
        const list = new MyLinkedList();
        const commands = ['MyLinkedList','addAtHead','addAtIndex','addAtTail','addAtTail','addAtTail','addAtIndex','addAtTail','addAtHead','deleteAtIndex','deleteAtIndex','deleteAtIndex','addAtIndex','addAtTail','get','get','addAtHead','addAtTail','addAtTail','get','addAtTail','addAtTail','deleteAtIndex','deleteAtIndex','addAtHead','addAtTail','addAtIndex','get','addAtTail','addAtIndex','addAtHead','addAtTail','addAtIndex','get','addAtHead','addAtTail','addAtIndex','addAtHead','addAtIndex','addAtTail','addAtHead','addAtIndex','addAtTail','addAtHead','deleteAtIndex','get','addAtIndex','get','addAtIndex','addAtTail','addAtTail','get','deleteAtIndex','get','addAtHead','addAtTail','addAtIndex','addAtIndex','addAtIndex','addAtHead','addAtTail','addAtIndex','deleteAtIndex','addAtHead','addAtHead','addAtTail','get','addAtTail','addAtIndex','addAtHead','deleteAtIndex','addAtHead','deleteAtIndex','get','get','addAtTail','addAtIndex','get','deleteAtIndex','deleteAtIndex','addAtHead','addAtHead','addAtIndex','get','addAtTail','addAtHead','addAtIndex','get','addAtHead','deleteAtIndex','deleteAtIndex','deleteAtIndex','addAtHead','addAtTail','get','addAtHead','addAtTail','addAtHead','addAtHead','deleteAtIndex','get','addAtHead'];
        const values = [[],[55],[1,90],[51],[91],[12],[2,72],[17],[82],[4],[7],[7],[5,75],[54],[6],[2],[8],[35],[36],[10],[40],[43],[12],[3],[78],[89],[3,41],[10],[96],[5,37],[51],[26],[16,91],[18],[11],[66],[22,20],[44],[17,16],[95],[2],[14,2],[99],[51],[1],[11],[22,99],[20],[25,42],[72],[45],[2],[4],[32],[55],[84],[32,64],[26,14],[30,80],[88],[51],[27,71],[15],[8],[60],[37],[25],[96],[25,53],[36],[8],[85],[42],[20],[34],[78],[42,76],[26],[30],[39],[27],[93],[19,75],[8],[24],[32],[25,98],[21],[95],[18],[45],[24],[38],[8],[20],[83],[71],[78],[55],[29],[11],[84]];

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            const value = values[i];

            if (command === 'MyLinkedList') {
                continue;
            }

            // const result = list[command](...value);
            //
            // if (command === 'get') {
            //     expect(result).to.be.deep.eq(3);
            // }

            console.log(`i: ${i}; COMMAND: ${command}; VALUE: ${values[i]}; `);
            list.printSimple('BEFORE: ');
            const result = list[command](...value);
            list.printSimple('AFTER:  ', (result !== undefined ? `; result: ${result}\n` : '\n'));

            // if (command === 'deleteAtIndex') {
            //     list.printSimple();
            // }
        }

        list.print();

        // 20 30 10
    });
    it(`8`, () => {
        const list = new MyLinkedList();
        const commands = ['MyLinkedList','addAtHead','addAtTail','addAtTail','addAtTail','addAtTail','addAtTail','addAtTail','deleteAtIndex','addAtHead','addAtHead','get','addAtTail','addAtHead','get','addAtTail','addAtIndex','addAtTail','addAtHead','addAtHead','addAtHead','get','addAtIndex','addAtHead','get','addAtHead','deleteAtIndex','addAtHead','addAtTail','addAtTail','addAtIndex','addAtTail','addAtHead','get','addAtTail','deleteAtIndex','addAtIndex','deleteAtIndex','addAtHead','addAtTail','addAtHead','addAtHead','addAtTail','addAtTail','get','get','addAtHead','addAtTail','addAtTail','addAtTail','addAtIndex','get','addAtHead','addAtIndex','addAtHead','addAtTail','addAtTail','addAtIndex','deleteAtIndex','addAtIndex','addAtHead','addAtHead','deleteAtIndex','addAtTail','deleteAtIndex','addAtIndex','addAtTail','addAtHead','get','addAtIndex','addAtTail','addAtHead','addAtHead','addAtHead','addAtHead','addAtHead','addAtHead','deleteAtIndex','get','get','addAtHead','get','addAtTail','addAtTail','addAtIndex','addAtIndex','addAtHead','addAtTail','addAtTail','get','addAtIndex','addAtHead','deleteAtIndex','addAtTail','get','addAtHead','get','addAtHead','deleteAtIndex','get','addAtTail','addAtTail'];
        const values = [[],[38],[66],[61],[76],[26],[37],[8],[5],[4],[45],[4],[85],[37],[5],[93],[10,23],[21],[52],[15],[47],[12],[6,24],[64],[4],[31],[6],[40],[17],[15],[19,2],[11],[86],[17],[55],[15],[14,95],[22],[66],[95],[8],[47],[23],[39],[30],[27],[0],[99],[45],[4],[9,11],[6],[81],[18,32],[20],[13],[42],[37,91],[36],[10,37],[96],[57],[20],[89],[18],[41,5],[23],[75],[7],[25,51],[48],[46],[29],[85],[82],[6],[38],[14],[1],[12],[42],[42],[83],[13],[14,20],[17,34],[36],[58],[2],[38],[33,59],[37],[15],[64],[56],[0],[40],[92],[63],[35],[62],[32]];
        const expected = [null,null,null,null,null,null,null,null,null,null,null,61,null,null,61,null,null,null,null,null,null,85,null,null,37,null,null,null,null,null,null,null,null,23,null,null,null,null,null,null,null,null,null,null,-1,95,null,null,null,null,null,31,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,6,47,null,23,null,null,null,null,null,null,null,93,null,null,null,null,48,null,93,null,null,59,null,null];

        let length = 0;

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];
            const value = values[i];

            if (command === 'MyLinkedList') {
                continue;
            }

            if (['addAtHead', 'addAtTail', 'addAtIndex'].includes(command)) {
                length++;
            }

            if (['deleteAtIndex'].includes(command)) {
                length--;
            }

            // const result = list[command](...value);
            //
            // if (command === 'get') {
            //     expect(result).to.be.deep.eq(3);
            // }

            console.log(`i: ${i}; COMMAND: ${command}; VALUE: ${values[i]}; `);
            list.printSimple('BEFORE: ');
            let result = list[command](...value);
            list.printSimple('AFTER:  ', (result !== undefined ? `; result: ${result}` : '') + `; should have length: ${length}` + '\n');

            result = (result || result === 0) ? result : null;

            expect(result).to.be.deep.eq(expected[i]);

            // if (command === 'deleteAtIndex') {
            //     list.printSimple();
            // }
        }

        list.print();

        // 20 30 10
    });
});

describe(`Intersection of Two Linked Lists`, () => {
    it(`should work`, () => {
        const testCases = [
            {
                list: [4,1,8,4,5],
                listB: [5,6,1,8,4,5],
                result: 1
            },
            {
                list: [1,9,1,2,4],
                listB: [3,2,4],
                result: 2
            }
        ];

        testCases.forEach(testCase => {
            const listA = makeLinkNodes(testCase.list);
            const listB = makeLinkNodes(testCase.listB);

            console.log('listA: ', JSON.stringify(listA));
            console.log('listB: ', JSON.stringify(listB));
            console.log('');

            const node = getIntersectionNode(listA, listB);

            console.log('node: ', JSON.stringify(node));

            const value = node ? node.val : 0;

            expect(value).to.be.eq(testCase.result);
        });
    });
});

describe(`Remove Nth Node From End of List`, () => {
    it(`should work`, () => {
        const testCases = [
            {
                list: [1,5,8],
                n: 2,
                result: [1,8]
            },
            {
                list: [1,2,3,4,5],
                n: 2,
                result: [1,2,3,5]
            },
            {
                list: [1],
                n: 1,
                result: []
            },
            {
                list: [1,2],
                n: 1,
                result: [1]
            },
            {
                list: [1,2],
                n: 2,
                result: [2]
            }
        ];

        testCases.forEach(testCase => {
            const n = testCase.n;
            const listA = makeLinkNodes(testCase.list);

            console.log('listA: ', JSON.stringify(listA));
            console.log('n: ', JSON.stringify(n));

            const resultList = removeNthFromEnd(listA, n);
            const resultValues = makeLinkNodesValues(resultList);

            console.log('result: ', JSON.stringify(resultList));
            console.log('result values: ', resultValues);
            console.log('');

            expect(resultValues).to.be.deep.eq(testCase.result);
        });
    });
});

describe(`Reverse linked list`, () => {
    it(`should work`, () => {
        const testCases = [
            {
                list: [1,2,5],
                result: [5,2,1]
            },
            {
                list: [1,2,3,4,5],
                result: [5,4,3,2,1]
            }
        ];

        testCases.forEach(testCase => {
            const listA = makeLinkNodes(testCase.list);

            console.log('listA: ', JSON.stringify(listA));

            const resultList = reverseList(listA);
            const resultValues = makeLinkNodesValues(resultList);

            console.log('result: ', JSON.stringify(resultList));
            console.log('result values: ', resultValues);
            console.log('');

            expect(resultValues).to.be.deep.eq(testCase.result);
        });
    });
});

describe(`Remove Linked List Elements`, () => {
    it(`should work`, () => {
        const testCases = [
            // {
            //     listA: [1,2],
            //     val: 2,
            //     result: [1],
            // },
            // {
            //     listA: [1,2,6,3,4,5,6],
            //     val: 6,
            //     result: [1,2,3,4,5],
            // },
            {
                list: [7,7,7,7],
                val: 7,
                result: []
            },
            {
                list: [1,2],
                val: 1,
                result: [2]
            }
        ];

        testCases.forEach(testCase => {
            const listA = makeLinkNodes(testCase.list);

            console.log('listA: ', JSON.stringify(listA));
            console.log('val: ', JSON.stringify(testCase.val));

            const resultList = removeElements(listA, testCase.val);
            const resultValues = makeLinkNodesValues(resultList);

            console.log('result: ', JSON.stringify(resultList));
            console.log('result values: ', resultValues);
            console.log('');

            expect(resultValues).to.be.deep.eq(testCase.result);
        });
    });
});
