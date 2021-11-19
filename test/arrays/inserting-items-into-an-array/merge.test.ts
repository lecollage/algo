import {} from 'jasmine';
import * as assert from 'assert';
import {expect} from 'chai';
import {} from 'mocha';
import {merge} from "../../../src/arrays/inserting-items-into-an-array/merge";

describe(`merge`, () => {
    describe(`merge`, () => {
        it(`1`, () => {
            const
                nums1 = [1,2,3,0,0,0],
                m = 3,
                nums2 = [2,5,6],
                n = 3,
                result = [1,2,2,3,5,6]
            ;

            merge(nums1, m, nums2, n);

            expect(nums1).to.be.deep.eq(result);
        });
        it(`2`, () => {
            const
                nums1 = [1],
                m = 1,
                nums2 = [],
                n = 0,
                result = [1]
            ;

            merge(nums1, m, nums2, n);

            expect(nums1).to.be.deep.eq(result);
        });
        it(`3`, () => {
            const
                nums1 = [0],
                m = 0,
                nums2 = [1],
                n = 1,
                result = [1]
            ;

            merge(nums1, m, nums2, n);

            expect(nums1).to.be.deep.eq(result);
        });
        it(`4`, () => {
            const
                nums1 = [1,2,4,5,6,0],
                m = 5,
                nums2 = [3],
                n = 1,
                result = [1,2,3,4,5,6]
            ;

            merge(nums1, m, nums2, n);

            expect(nums1).to.be.deep.eq(result);
        });
        it(`5`, () => {
            const
                nums1 = [4,0,0,0,0,0],
                m = 1,
                nums2 = [1,2,3,5,6],
                n = 5,
                result = [1,2,3,4,5,6]
            ;

            merge(nums1, m, nums2, n);

            expect(nums1).to.be.deep.eq(result);
        });
        it(`6`, () => {
            const
                nums1 = [0,0,3,0,0,0,0,0,0],
                m = 3,
                nums2 = [-1,1,1,1,2,3],
                n = 6,
                result = [-1,0,0,1,1,1,2,3,3]
            ;

            merge(nums1, m, nums2, n);

            expect(nums1).to.be.deep.eq(result);
        });
    });
});
