import { describe, expect, it } from "vitest";
import { getMatrixDimensions } from "../get-matrix-dimensions";

describe("getMatrixDimensions", () => {
    it("returns correct dimensions for non-empty matrix", () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        expect(getMatrixDimensions(matrix)).toEqual({ rows: 2, cols: 3 });
    });

    it("returns (0,0) for an empty matrix", () => {
        expect(getMatrixDimensions([])).toEqual({ rows: 0, cols: 0 });
    });

    it("returns (1,0) for a matrix with one empty row", () => {
        expect(getMatrixDimensions([[]])).toEqual({ rows: 1, cols: 0 });
    });
});
