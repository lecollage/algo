export function checkIfExist (arr: number[]): boolean {
    if (!arr || arr.length === 0) {
        return false;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        const m = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            const n = arr[j];

            if (m === 0 && n === 0) {
                return true;
            }

            if (m === 0 || n === 0) {
                continue;
            }

            if (n / m === 2 || m / n === 2) {
                return true;
            }
        }
    }

    return false;
}
