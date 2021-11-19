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

export function removeDuplicates (arr: number[]): number {
    if (!arr || arr.length === 0) {
        return;
    }

    let i = 0;
    let countOfNull = 0;

    while (arr[i] != null && i !== arr.length - 1) {
        if (arr[i] === arr[i + 1]) {
            moveElementsToLeft(arr, i + 1);
            countOfNull++;
        } else {
            i++;
        }
    }

    return arr.length - countOfNull;
}
