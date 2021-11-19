/**
 Do not return anything, modify arr in-place instead.
 */
export function moveZeroes (arr: number[]): void {
    if (!arr || arr.length < 2) {
        return;
    }

    let writeIndex = 0;

    for (let searchIndex = 0; searchIndex < arr.length; searchIndex++) {
        if (arr[searchIndex] !== 0) {
            arr[writeIndex] = arr[searchIndex];
            writeIndex++;
        }
    }

    for (let zeroIndex = writeIndex; zeroIndex < arr.length; zeroIndex++) {
        arr[zeroIndex] = 0;
    }
}
