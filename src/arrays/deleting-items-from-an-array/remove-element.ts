export function moveElementsToLeft (array: number[], startIndex: number): void {
    if (startIndex >= array.length || startIndex < 0) {
        return;
    }

    let i = startIndex;

    while (i < array.length - 1) {
        array[i] = array[i + 1];
        i++;
    }

    array[array.length - 1] = null;

    return;
}

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function removeElement (nums: number[], val: number): number {
    let length = nums.length;
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === val) {
            moveElementsToLeft(nums, i);
            length--;

            continue;
        }

        i++;
    }

    return length;
}
