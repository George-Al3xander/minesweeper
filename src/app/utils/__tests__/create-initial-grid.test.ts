import { createInitialGrid } from "@/app/utils/create-initial-grid";
import { Coords } from "@/utils/coords";
import { describe, expect, it } from "vitest";

describe("createInitialGrid", () => {
    it("creates a grid with the correct dimensions", () => {
        const rows = 3;
        const columns = 4;
        const grid = createInitialGrid({ rows, columns });

        expect(grid.length).toBe(rows);
        for (const row of grid) {
            expect(row.length).toBe(columns);
        }
    });

    it("initializes all cells with correct default values", () => {
        const rows = 2;
        const columns = 2;
        const grid = createInitialGrid({ rows, columns });

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                const cell = grid[i][j];
                expect(cell.isFlagged).toBe(false);
                expect(cell.hasMine).toBe(false);
                expect(cell.isOpen).toBe(false);
                expect(cell.neighborMinesCount).toBe(0);
                expect(cell.coords.toString()).toBe(
                    new Coords(i, j).toString(),
                );
            }
        }
    });
});
