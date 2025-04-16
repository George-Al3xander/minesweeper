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
});
