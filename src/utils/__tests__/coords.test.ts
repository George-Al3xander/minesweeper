import { Coords } from "@/utils/coords.ts";
import { describe, expect, it } from "vitest";

const c1 = new Coords(1, 2);
const c2 = new Coords(c1);

describe("Coords class", () => {
    it("should initialize object with a correct number coordinates", () => {
        expect(c1.getX).toBe(1);
        expect(c1.getY).toBe(2);
    });

    it("should initialize object with a correct number coordinates", () => {
        expect(c2.getX).toBe(1);
        expect(c2.getY).toBe(2);
    });

    it("should convert to string correctly", () => {
        expect(c1.toString()).toBe("(1,2)");
        expect(new Coords(24, 25).toString()).toBe("(24,25)");
    });

    it("should initialize object with a correct string coordinates", () => {
        expect(new Coords("(12,24)").toString()).toBe("(12,24)");
    });

    it("should yield 8 neighboring Coords objects correctly", () => {
        const c = new Coords(1, 1);
        const neighbors = Array.from(c);

        const expected = [
            new Coords(0, 0),
            new Coords(0, 1),
            new Coords(0, 2),
            new Coords(1, 0),
            new Coords(1, 2),
            new Coords(2, 0),
            new Coords(2, 1),
            new Coords(2, 2),
        ];

        expect(neighbors.map((n) => n.toString()).sort()).toEqual(
            expected.map((e) => e.toString()).sort(),
        );
    });

    it("should not yield neighbors with negative coordinates", () => {
        const c = new Coords(0, 0);
        const neighbors = Array.from(c);

        const expected = [new Coords(0, 1), new Coords(1, 0), new Coords(1, 1)];

        expect(neighbors.map((n) => n.toString()).sort()).toEqual(
            expected.map((e) => e.toString()).sort(),
        );
    });
});
