import { createInitialGrid } from "@/app/utils/create-initial-grid";
import { placeMines } from "@/app/utils/place-mines";
import { Coords } from "@/utils/coords";
import * as shuffleModule from "@/utils/shuffle";
import { describe, expect, it, vi } from "vitest";

describe("placeMines", () => {
    it("should place the correct number of mines", () => {
        const grid = createInitialGrid({ rows: 3, cols: 3 });
        const result = placeMines({ initialGrid: grid, mines: 3 });

        const placedMines = result.flat().filter((cell) => cell.hasMine);
        expect(placedMines.length).toBe(3);
    });

    it("should avoid placing mines on coordsToIgnore", () => {
        const grid = createInitialGrid({ rows: 3, cols: 3 });
        const ignoreCoords = [new Coords(1, 1)];

        const result = placeMines({
            initialGrid: grid,
            mines: 5,
            coordsToIgnore: ignoreCoords,
        });

        const ignoredCell = result[1][1];
        expect(ignoredCell.hasMine).toBe(false);
    });

    it("should update neighborMinesCount correctly", () => {
        vi.spyOn(shuffleModule, "shuffle").mockImplementation((arr) => {
            return ["(1,1)", ...arr.filter((c) => c !== "(1,1)")];
        });

        const grid = createInitialGrid({ rows: 3, cols: 3 });
        const result = placeMines({ initialGrid: grid, mines: 1 });

        expect(result[1][1].hasMine).toBe(true);

        const expectedNeighbors = [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ];

        for (const [x, y] of expectedNeighbors) {
            expect(result[x][y].neighborMinesCount).toBe(1);
        }

        vi.restoreAllMocks();
    });
});
