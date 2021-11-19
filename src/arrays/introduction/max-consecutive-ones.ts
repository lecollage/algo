export function findMaxConsecutiveOnes (arr: number[]): number {
    if (!arr || arr.length === 0) {
        return 0;
    }

    let maxCount = 0;
    let currentCount = 0;

    function process (i, finish = false) {
        if (arr[i] === 1 && !finish) {
            currentCount++;
        } else {
            maxCount = currentCount > maxCount ? currentCount : maxCount;
            currentCount = 0;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        process(i);
    }

    process(arr.length - 1, true);

    return maxCount;
}
