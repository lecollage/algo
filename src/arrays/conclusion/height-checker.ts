export const merge = (left: number[], right: number[]): number[] => {
    const sorted: number[] = [];

    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else if (left[i] === right[j]) {
            sorted.push(...[left[i], right[j]]);
            i++; j++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        sorted.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sorted.push(right[j]);
        j++;
    }

    return sorted;
};

export const mergeSort = (arr) => {
    if (!arr || arr.length === 0) {
        return null;
    }

    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
};

export function heightChecker (arr: number[]): number {
    const rightHeights = mergeSort(arr);

    let incorrectIndexes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== rightHeights[i]) {
            incorrectIndexes++;
        }
    }

    return incorrectIndexes;
}
