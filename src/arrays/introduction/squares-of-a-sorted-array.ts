export function moveElementsToLeft (array: number[], index: number): void {
    if (index >= array.length || index < 0) {
        return;
    }

    let i = 0;

    while (i < index) {
        array[i] = array[i + 1];
        i++;
    }

    return;
}

export function findIndexFromMove (array: number[], indexFrom: number, element: number): number {
    for (let i = indexFrom; i < array.length; i++) {
        if (array[i] > element) {
           return i - 1;
        }
    }

    return array.length - 1;
}

export function sortedSquares (arr: number[]): number[] {
    if (!arr || arr.length === 0) {
        return arr;
    }

    let countOfNegative = 0;

    if (arr[countOfNegative] < 0) {
        while (arr[countOfNegative] < 0) {
            countOfNegative++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }

    if (countOfNegative) {
        let indexFrom = countOfNegative;

        for (let i = 0; i < countOfNegative; i++) {
            const indexFromMove = findIndexFromMove(arr, indexFrom, arr[0]);
            const buff = arr[0];

            moveElementsToLeft(arr, indexFromMove);
            arr[indexFromMove] = buff;
            indexFrom--;
        }
    }

    return arr;
}
