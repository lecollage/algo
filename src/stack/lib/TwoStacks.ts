const INITIAL_VALUE = 0;

export class TwoStacks {
    public items: Array<number> = [];
    private length1 = 0;
    private length2 = 0;

    constructor (
        private commonLength: number = 0
    ) {
        this.items = new Array<number>(commonLength).fill(INITIAL_VALUE);
    }

    push1 (value: number): void {
        if (this.items.length - this.length1 - this.length2 === 0) {
            return;
        }

        const index = this.length1;

        this.items[index] = value;
        this.length1++;

        return;
    }

    push2 (value: number): void {
        if (this.items.length - this.length1 - this.length2 === 0) {
            return;
        }

        const index = this.items.length - this.length2 - 1;

        this.items[index] = value;
        this.length2++;

        return;
    }

    pop1 (): number {
        if (this.items.length === 0 || this.length1 === 0) {
            return null;
        }

        const index = this.length1 - 1;
        const item = this.items[index];

        this.items[index] = INITIAL_VALUE;
        this.length1--;

        return item;
    }

    pop2 (): number {
        if (this.items.length === 0 || this.length2 === 0) {
            return null;
        }

        const index = this.items.length - this.length2;
        const item = this.items[index];

        this.items[index] = INITIAL_VALUE;
        this.length2--;

        return item;
    }
}
