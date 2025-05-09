type StringCoords = `(${number},${number})`;

export class Coords {
    private readonly x: number;
    private readonly y: number;

    constructor(с: Coords);
    constructor(с: StringCoords);
    constructor(x: number, y: number);
    //eslint-disable-next-line
    constructor(...args: any[]) {
        let coords: [number, number];

        if (args.length > 1) {
            coords = args as [number, number];
        } else {
            const c = args[0];
            if (typeof c === "string") {
                coords = c.replace(/[()]/g, "").split(",").map(Number) as [
                    number,
                    number,
                ];
            } else {
                coords = [c.x, c.y];
            }
        }

        this.x = coords[0];
        this.y = coords[1];
    }

    get getX(): number {
        return this.x;
    }

    get getY(): number {
        return this.y;
    }

    toString(): StringCoords {
        return `(${this.x},${this.y})`;
    }

    *[Symbol.iterator]() {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;

                const ni = this.x + dx;
                const nj = this.y + dy;

                if (ni >= 0 && nj >= 0) {
                    yield new Coords(ni, nj);
                }
            }
        }
    }
}
