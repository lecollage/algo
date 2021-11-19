export function thirdMax (arr: number[]): number {
    if (!arr || arr.length === 0) {
        return;
    }

    let first = arr[0], second = null, third = null;

    for (let i = 1; i < arr.length; i++) {
        if (second === null && arr[i] < first) {
            second = arr[i];
        }

        if (third === null && arr[i] < second) {
            third = arr[i];
        }

        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];

            continue;
        }

        if (second !== null && arr[i] > second && arr[i] < first) {
            if (third !== null) {
                third = second;
            }

            second = arr[i];
        }

        if (third !== null && arr[i] > third && arr[i] < second) {
           third = arr[i];
        }
    }

    return third !== null ? third : first;
}
