export function moveElementsToRight (array: number[], startIndex: number): void {
    if (startIndex >= array.length) {
        return;
    }

    let i = array.length - 1;

    while (i > startIndex) {
        array[i] = array[i - 1];
        i--;
    }

    return;
}

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge (nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    const end = n > m ? n : m;

    if (m > 0) {
        for (let i = 0; i < nums1.length && j < n; i++) {
            if (nums1[i] > nums2[j]) {
                moveElementsToRight(nums1, i);
                nums1[i] = nums2[j];
                j++;
            }
        }
    }

    while (j < n) {
        nums1[m + j] = nums2[j];
        j++;
    }
}
