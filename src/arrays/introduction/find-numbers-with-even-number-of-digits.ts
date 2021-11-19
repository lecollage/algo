export function findNumbers (arr: number[]): number {
    if (!arr || arr.length === 0) {
        return 0;
    }

    let countOfEven = 0;

    function isEven (val) {
        return val % 2 === 0 || val === 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (isEven(String(arr[i]).length)) {
            countOfEven++;
        }
    }

    return countOfEven;
}
