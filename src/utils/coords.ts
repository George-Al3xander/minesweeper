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
}
