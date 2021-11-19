export function replaceElements (arr: number[]): number[] {
    if (!arr || arr.length === 0) {
        return;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let max = arr[i + 1];

        for (let j = i + 1; j < arr.length; j++) {
            max = arr[j] > max ? arr[j] : max;
        }

        arr[i] = max;
    }

    arr[arr.length - 1] = -1;

    return arr;
}
