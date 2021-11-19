import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {findNumbers} from "../../../src/arrays/introduction/find-numbers-with-even-number-of-digits";
import {findMaxConsecutiveOnes} from "../../../src/arrays/introduction/max-consecutive-ones";
import {findIndexFromMove, sortedSquares} from "../../../src/arrays/introduction/squares-of-a-sorted-array";

describe(`introduction`, () => {
    describe(`find-numbers-with-even-number-of-digits`, () => {
        it(`1`, () => {
            const arr: number[] = [12,345,2,6,7896];
            const expectedResult = 2;
            const result = findNumbers(arr);

            expect(expectedResult).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [555,901,482,1771];
            const expectedResult = 1;
            const result = findNumbers(arr);

            expect(expectedResult).to.be.deep.eq(result);
        });
    });
    describe(`max-consecutive-ones`, () => {
        it(`1`, () => {
            const arr: number[] = [1,1,0,1,1,1];
            const expectedResult = 3;
            const result = findMaxConsecutiveOnes(arr);

            expect(expectedResult).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const arr: number[] = [1,0,1,1,0,1];
            const expectedResult = 2;
            const result = findMaxConsecutiveOnes(arr);

            expect(expectedResult).to.be.deep.eq(result);
        });
    });
    describe(`squares-of-a-sorted-array`, () => {
        describe(`sortedSquares`, () => {
            it(`1`, () => {
                const arr: number[] = [-4,-1,0,3,10];
                const expectedResult = [0,1,9,16,100];
                const result = sortedSquares(arr);

                expect(expectedResult).to.be.deep.eq(result);
            });
            it(`2`, () => {
                const arr: number[] = [-7,-3,2,3,11];
                const expectedResult = [4,9,9,49,121];
                const result = sortedSquares(arr);

                expect(expectedResult).to.be.deep.eq(result);
            });
            it(`3`, () => {
                const arr: number[] = [0,1,2,3];
                const expectedResult = [0,1,4,9];
                const result = sortedSquares(arr);

                expect(expectedResult).to.be.deep.eq(result);
            });
            it(`4`, () => {
                const arr: number[] = [-5,-3,-2,-1];
                const expectedResult = [1,4,9,25];
                const result = sortedSquares(arr);

                expect(expectedResult).to.be.deep.eq(result);
            });
            it(`5`, () => {
                const arr: number[] = [-5,-3,-2,-1,0];
                const expectedResult = [0,1,4,9,25];
                const result = sortedSquares(arr);

                expect(expectedResult).to.be.deep.eq(result);
            });
        });
        describe(`findIndexFromMove`, () => {
            it(`1`, () => {
                const arr: number[] = [16,1,0,9,100];
                const expectedResult = 3;
                const result = findIndexFromMove(arr, 2, 16);

                expect(expectedResult).to.be.deep.eq(result);
            });
            it(`2`, () => {
                const arr: number[] = [16,1,0,9,16,16,100];
                const expectedResult = 3;
                const result = findIndexFromMove(arr, 2, 16);

                expect(expectedResult).to.be.deep.eq(result);
            });
            it(`3`, () => {
                const arr: number[] = [4,1,0,9,25];
                const expectedResult = 2;
                const result = findIndexFromMove(arr, 2, 16);

                expect(expectedResult).to.be.deep.eq(result);
            });
        });
    });
});
