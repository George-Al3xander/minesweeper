import { describe, expect, it } from "vitest";
import { checkGameWin } from "../check-game-win";
import { createInitialGrid } from "../create-initial-grid";

describe("checkGameWin", () => {
    it("returns true if all non-mine cells are open", () => {
        const grid = createInitialGrid({ rows: 2, cols: 2 });

        grid[0][0].hasMine = true;

        grid[0][1].isOpen = true;
        grid[1][0].isOpen = true;
        grid[1][1].isOpen = true;

        const result = checkGameWin({ grid, minesCount: 1 });
        expect(result).toBe(true);
    });

    it("returns false if not all non-mine cells are open", () => {
        const grid = createInitialGrid({ rows: 2, cols: 2 });

        grid[0][0].hasMine = true;

        grid[0][1].isOpen = true;
        grid[1][0].isOpen = true;

        const result = checkGameWin({ grid, minesCount: 1 });
        expect(result).toBe(false);
    });

    it("returns true when grid has 0 mines and all are open", () => {
        const grid = createInitialGrid({ rows: 1, cols: 2 });

        grid[0][0].isOpen = true;
        grid[0][1].isOpen = true;

        const result = checkGameWin({ grid, minesCount: 0 });
        expect(result).toBe(true);
    });

    it("returns false when grid has 0 mines and not all are open", () => {
        const grid = createInitialGrid({ rows: 1, cols: 2 });

        grid[0][0].isOpen = true;

        const result = checkGameWin({ grid, minesCount: 0 });
        expect(result).toBe(false);
    });
});
