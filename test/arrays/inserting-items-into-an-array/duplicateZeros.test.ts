import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {duplicateZeros, moveElementsToRight} from "../../../src/arrays/inserting-items-into-an-array/duplicateZeros";

describe(`duplicateZeros`, () => {
    describe(`moveElementsToRight`, () => {
        it(`1`, () => {
            const arr: number[] = [1,0,2,3,0,4,5,0];
            const result: number[] = [1,0,2,2,3,0,4,5];

            moveElementsToRight(arr, 2);

            expect(arr).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [1,0];
            const result: number[] = [1,1];

            moveElementsToRight(arr, 0);

            expect(arr).to.be.deep.eq(result);
        });
    });
    describe(`duplicateZeros`, () => {
        it(`1`, () => {
            const arr: number[] = [1,0,2,3,0,4,5,0];
            const result: number[] = [1,0,0,2,3,0,0,4];

            duplicateZeros(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [1,2,3];
            const result: number[] = [1,2,3];

            duplicateZeros(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`3`, () => {
            const arr: number[] = [];
            const result: number[] = [];

            duplicateZeros(arr);

            expect(arr).to.be.deep.eq(result);
        });
        it(`4`, () => {
            const arr: number[] = [0];
            const result: number[] = [0];

            duplicateZeros(arr);

            expect(arr).to.be.deep.eq(result);
        });
    });
});
