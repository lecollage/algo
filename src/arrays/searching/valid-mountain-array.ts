export function validMountainArray (arr: number[]): boolean {
    if (!arr || arr.length < 3) {
        return false;
    }

    let pickReached = false;
    let uphill = false;

    for (let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i], next = arr[i + 1];

        if (curr === next) {
            return false;
        }

        if (!pickReached) {
            if (curr > next) {
                pickReached = true;
            } else {
                uphill = true;
            }
        } else {
            if (next >= curr) {
               return false;
            }

            if (!uphill) {
                return false;
            }
        }
    }

    return pickReached;
}
