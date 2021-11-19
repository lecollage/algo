import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {replaceElements} from "../../../src/arrays/in-place-operations/replace-elements-with-greatest-element-on-right-side";
import {removeDuplicates} from "../../../src/arrays/in-place-operations/remove-duplicates-from-sorted-array";
import {moveZeroes} from "../../../src/arrays/in-place-operations/move-zeroes";
import {sortArrayByParity} from "../../../src/arrays/in-place-operations/sort-array-by-parity";

describe(`in-place-operations`, () => {
    describe(`replaceElements`, () => {
        it(`1`, () => {
            const arr: number[] = [17,18,5,4,6,1];
            const result = [18,6,6,6,1,-1];

            replaceElements(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [400];
            const result = [-1];

            replaceElements(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`3`, () => {
            const arr: number[] = [17,18,5,4,6,1];
            const result = [18,6,6,6,1,-1];

            replaceElements(arr);

            expect(arr).to.be.deep.eq(result);
        });
    });
    describe(`removeDuplicates`, () => {
        it(`1`, () => {
            const arr: number[] = [1,1,2];
            const result = [1,2,null];

            const x = removeDuplicates(arr);

            expect(arr).to.be.deep.eq(result);
            expect(x).to.be.eq(2);
        });
        it(`2`, () => {
            const arr: number[] = [0,0,1,1,1,2,2,3,3,4];
            const result = [0,1,2,3,4,null,null,null,null,null];

            const x = removeDuplicates(arr);

            expect(arr).to.be.deep.eq(result);
            expect(x).to.be.eq(5);
        });
    });
    describe(`moveZeroes`, () => {
        it(`1`, () => {
            const arr: number[] = [0,0,0,1,0,2,2,3,0,0,0,9,9];
            const result = [1,2,2,3,9,9,0,0,0,0,0,0,0];

            moveZeroes(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [0,1,0,3,12];
            const result = [1,3,12,0,0];

            moveZeroes(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`3`, () => {
            const arr: number[] = [0];
            const result = [0];

            moveZeroes(arr);

            expect(arr).to.be.deep.eq(result);
        });
    });
    describe(`sortArrayByParity`, () => {
        it(`1`, () => {
            const arr: number[] = [3,1,2,4];
            const result = [4,2,1,3];

            // [3,1,3,2,4]
            // [2,8,9,1,3,1,3,2,4] [3,1,9,1,3,8,2,2,4]
            // [3,2,2,2,2]
            // [2,2,2,2,3]

            sortArrayByParity(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [2,8,9,1,3,1,3,2,4];
            const result = [2,8,4,2,3,1,3,1,9];

            sortArrayByParity(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`3`, () => {
            const arr: number[] = [1,0,3];
            const result = [0,1,3];

            // [0,1,0,1,0,1];

            sortArrayByParity(arr);

            expect(arr).to.be.deep.eq(result);
        });
    });
});
