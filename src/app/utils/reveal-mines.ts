import { TCell } from "@/types/models/cell";

export const revealMines = (initialGrid: TCell[][]): TCell[][] => {
    const cells = Array.from(initialGrid);
    const flatGrid = initialGrid.flat();
    const cellsWithMines = flatGrid.filter((c) => c.hasMine);

    for (const { coords } of cellsWithMines) {
        cells[coords.getX][coords.getY].isOpen = true;
    }

    return cells;
};
