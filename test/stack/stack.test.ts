import {} from 'jasmine';
import {expect} from 'chai';
import {} from 'mocha';
import {TwoStacks} from '../../src/stack/lib/TwoStacks';

describe(`Two stacks`, () => {
    it(`should work`, () => {
        const stack = new TwoStacks(5);
        console.log(`STEP 1: `, stack.items);

        stack.push1(1);
        console.log(`STEP 2: `, stack.items);

        stack.push2(1);
        console.log(`STEP 3: `, stack.items);

        stack.push1(2);
        console.log(`STEP 4: `, stack.items);

        stack.push2(2);
        console.log(`STEP 5: `, stack.items);

        stack.push2(3);
        console.log(`STEP 6: `, stack.items);

        //////////////////

        stack.push1(-1);
        stack.push1(-1);
        console.log(`STEP 7: `, stack.items);

        stack.push2(-1);
        stack.push2(-1);
        console.log(`STEP 8: `, stack.items);

        //////////////////

        let item = stack.pop1();
        console.log(`STEP 9: `, item, stack.items);
        item = stack.pop1();
        console.log(`STEP 9.1: `, item, stack.items);

        item = stack.pop2();
        console.log(`STEP 10: `, item, stack.items);
        item = stack.pop2();
        console.log(`STEP 10.1: `, item, stack.items);

        item = stack.pop1();
        console.log(`STEP 11: `, item, stack.items);
        item = stack.pop2();
        console.log(`STEP 11.1: `, item, stack.items);
        item = stack.pop2();
        console.log(`STEP 11.2: `, item, stack.items);
    });
});
