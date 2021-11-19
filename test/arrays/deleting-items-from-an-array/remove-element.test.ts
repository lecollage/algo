import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {moveElementsToLeft, removeElement} from '../../../src/arrays/deleting-items-from-an-array/remove-element';

describe(`remove-element`, () => {
    describe(`moveElementsToLeft`, () => {
        it(`1`, () => {
            const arr: number[] = [1,0,2,3,0,4,5,0];
            const result: number[] = [1,3,0,4,5,0,null,null];

            moveElementsToLeft(arr, 1);
            moveElementsToLeft(arr, 1);

            expect(arr).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [1,0];
            const result: number[] = [0,null];

            moveElementsToLeft(arr, 0);

            expect(arr).to.be.deep.eq(result);
        });
    });
    describe(`removeElement`, () => {
        it(`1`, () => {
            const arr: number[] = [3,2,2,3]
                , val = 3
            ;
            const result: number[] = [2,2,null,null];
            const length = removeElement(arr, val);

            expect(arr).to.be.deep.eq(result);
            expect(length).to.be.eq(2);
        });
        it(`2`, () => {
            const arr: number[] = [0,1,2,2,3,0,4,2]
                , val = 2
            ;
            const result: number[] = [0,1,3,0,4,null,null,null];
            const length = removeElement(arr, val);

            expect(arr).to.be.deep.eq(result);
            expect(length).to.be.eq(5);
        });
    });
});
