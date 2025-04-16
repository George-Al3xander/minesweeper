import { describe, expect, it } from "vitest";
import { shuffle } from "../shuffle";

describe("shuffle", () => {
    it("returns an array with the same elements", () => {
        const original = [1, 2, 3, 4, 5];
        const result = shuffle([...original]);
        expect(result.sort()).toEqual(original.sort());
    });

    it("does not change the length of the array", () => {
        const original = [1, 2, 3, 4, 5];
        const result = shuffle([...original]);
        expect(result).toHaveLength(original.length);
    });

    it("shuffles the array elements (not always the same)", () => {
        const original = [1, 2, 3, 4, 5];
        let isSame = true;

        for (let i = 0; i < 5; i++) {
            const result = shuffle([...original]);
            if (!result.every((val, idx) => val === original[idx])) {
                isSame = false;
                break;
            }
        }

        expect(isSame).toBe(false);
    });

    it("does not mutate the original array", () => {
        const original = [1, 2, 3, 4, 5];
        const copy = [...original];
        shuffle(copy);
        expect(original).toEqual([1, 2, 3, 4, 5]);
    });
});
