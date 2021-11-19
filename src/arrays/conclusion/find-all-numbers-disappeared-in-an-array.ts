export function sortByIndex (arr: number[]): number[] {
    const index = (i) => {
        return i - 1;
    };

    const swap = (arr, i, j) => {
        const buff = arr[i];

        arr[i] = arr[j];
        arr[j] = buff;
    };

    for (let i = 0; i < arr.length; i++) {
        while (arr[index(arr[i])] !== arr[i]) {
            swap(arr, i, index(arr[i]));
        }
    }

    return arr;
}

export function findDisappearedNumbers (arr: number[]): number[] {
    if (!arr || arr.length === 0) {
        return;
    }

    const result = [];

    arr = sortByIndex(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            result.push(i + 1);
        }
    }

    return result;
}
