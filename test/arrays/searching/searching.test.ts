import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {moveElementsToLeft, removeElement} from '../../../src/arrays/deleting-items-from-an-array/remove-element';
import {checkIfExist} from "../../../src/arrays/searching/check-if-N-and-its-double-exist";
import {validMountainArray} from "../../../src/arrays/searching/valid-mountain-array";

describe(`searching`, () => {
    describe(`checkIfExist`, () => {
        it(`1`, () => {
            const arr: number[] = [10,2,5,3];
            const result = checkIfExist(arr);

            expect(result).to.be.true;
        });
        it(`2`, () => {
            const arr: number[] = [7,1,14,11];
            const result = checkIfExist(arr);

            expect(result).to.be.true;
        });
        it(`3`, () => {
            const arr: number[] = [3,1,7,11];
            const result = checkIfExist(arr);

            expect(result).to.be.false;
        });
        it(`4`, () => {
            const arr: number[] = [0,0];
            const result = checkIfExist(arr);

            expect(result).to.be.true;
        });
    });
    describe(`validMountainArray`, () => {
        it(`1`, () => {
            const arr = [2,1];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
        it(`2`, () => {
            const arr = [3,5,5];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
        it(`3`, () => {
            const arr = [0,3,2,1];
            const result = validMountainArray(arr);

            expect(result).to.be.true;
        });
        it(`4`, () => {
            const arr = [0,3,2,1,1];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
        it(`5`, () => {
            const arr = [0,0,3,2,1];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
        it(`6`, () => {
            const arr = [0,3,5,7,86,1];
            const result = validMountainArray(arr);

            expect(result).to.be.true;
        });
        it(`7`, () => {
            const arr = [0,3,5,7,86,89];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
        it(`8`, () => {
            const arr = [0,3,5,7,86,89,88];
            const result = validMountainArray(arr);

            expect(result).to.be.true;
        });
        it(`9`, () => {
            const arr = [0,3,5,7,86,89,89];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
        it(`10`, () => {
            const arr = [9,8,7,6,5,4,3,2,1,0];
            const result = validMountainArray(arr);

            expect(result).to.be.false;
        });
    });
});
