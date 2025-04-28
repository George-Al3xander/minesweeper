import { createInitialGrid } from "@/app/utils/create-initial-grid";
import { revealMines } from "@/app/utils/reveal-mines";
import { describe, expect, it } from "vitest";

describe("revealMines", () => {
    it("opens only the cells that have mines", () => {
        const grid = createInitialGrid({ rows: 3, cols: 3 });

        grid[0][0].hasMine = true;
        grid[2][2].hasMine = true;

        const revealed = revealMines(grid);

        expect(revealed[0][0].isOpen).toBe(true);
        expect(revealed[2][2].isOpen).toBe(true);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if ((i === 0 && j === 0) || (i === 2 && j === 2)) continue;
                expect(revealed[i][j].isOpen).toBe(false);
            }
        }
    });

    it("returns a new grid reference (not the same object)", () => {
        const grid = createInitialGrid({ rows: 2, cols: 2 });
        grid[0][0].hasMine = true;

        const revealed = revealMines(grid);

        expect(revealed).not.toBe(grid);

        expect(revealed[0]).toBe(grid[0]);
    });
});
