import { describe, expect, it } from "vitest";
import { checkGameWin } from "../check-game-win";
import { createInitialGrid } from "../create-initial-grid";

describe("checkGameWin", () => {
    it("returns true if all non-mine cells are open", () => {
        const cells = createInitialGrid({ rows: 2, cols: 2 });

        cells[0][0].hasMine = true;

        cells[0][1].isOpen = true;
        cells[1][0].isOpen = true;
        cells[1][1].isOpen = true;

        const result = checkGameWin({ cells, mines: 1 });
        expect(result).toBe(true);
    });

    it("returns false if not all non-mine cells are open", () => {
        const cells = createInitialGrid({ rows: 2, cols: 2 });

        cells[0][0].hasMine = true;

        cells[0][1].isOpen = true;
        cells[1][0].isOpen = true;

        const result = checkGameWin({ cells, mines: 1 });
        expect(result).toBe(false);
    });

    it("returns true when cells has 0 mines and all are open", () => {
        const cells = createInitialGrid({ rows: 1, cols: 2 });

        cells[0][0].isOpen = true;
        cells[0][1].isOpen = true;

        const result = checkGameWin({ cells, mines: 0 });
        expect(result).toBe(true);
    });

    it("returns false when cells has 0 mines and not all are open", () => {
        const cells = createInitialGrid({ rows: 1, cols: 2 });

        cells[0][0].isOpen = true;

        const result = checkGameWin({ cells, mines: 0 });
        expect(result).toBe(false);
    });
});
