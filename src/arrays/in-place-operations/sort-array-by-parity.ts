/*
export function moveElementsToLeft(array: number[], index: number): void {
    if (index >= array.length || index < 0) {
        return;
    }

    for (let i = 1; i <= index; i++) {
        array[i - 1] = array[i];
    }

    return;
}

export function sortArrayByParity(arr: number[]): number[] {
    if(!arr || arr.length === 0) {
        return;
    }

    let zeroIndex = 0;

    for (; zeroIndex < arr.length; zeroIndex++) {
        if (arr[zeroIndex] >= 0) {
            break;
        } else {
            arr[zeroIndex] *= -1;
        }
    }

    console.log(`DEBUG >> zeroIndex: `, zeroIndex);
    console.log(`DEBUG >> `, arr);

    let j = 0;
    let k = zeroIndex;

    while((k--) > -1) {
        for (let i = zeroIndex; i < arr.length; i++) {
            if (arr[j] > arr[i]) {
                const buff = arr[j];

                moveElementsToLeft(arr, i);
                arr[i] = buff;
            }
        }
    }

    console.log(`DEBUG >> `, arr);
}
*/

/*
export function sortArrayByParity(arr: number[]): number[] {
    if(!arr || arr.length === 0) {
        return;
    }

    let i = 0, j = arr.length - 1;

    while(i < j) {
        if ((arr[i] % 2 || arr[i] === 0) && (arr[j] % 2) === 0) {
            const buff = arr[i];

            arr[i] = arr[j];
            arr[j] = buff;
            j--;
        }

        i++;
    }

    return arr;
}
*/

export function sortArrayByParity (arr: number[]): number[] {
    if (!arr || arr.length === 0) {
        return arr;
    }

    let odd = 0;
    let even = 0;

    function isEven (val) {
        return val % 2 === 0 || val === 0;
    }

    function isOdd (val) {
        return val % 2 !== 0;
    }

    function swap (i, j) {
        const buff = arr[i];

        arr[i] = arr[j];
        arr[j] = buff;
    }

    // count odd and even; even first
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            even++;
        } else {
            odd++;
        }
    }

    let i = 0, j = arr.length - 1;

    while (i < even && j >= even) {
        if (isOdd(arr[i]) && isEven(arr[j]))  {
           swap(i, j);
        }

        if (isEven(arr[i])) {
           i++;
        }

        if (isOdd(arr[j])) {
            j--;
        }
    }

    return arr;
}
