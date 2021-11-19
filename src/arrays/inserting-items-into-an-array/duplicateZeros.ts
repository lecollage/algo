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
 Do not return anything, modify arr in-place instead.
 */
export function duplicateZeros (arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            moveElementsToRight(arr, i);
            i++;
        }
    }
}
