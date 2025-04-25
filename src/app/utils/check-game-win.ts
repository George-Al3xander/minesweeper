import { TCell } from "@/types/models/cell";

export const checkGameWin = ({
    grid,
    minesCount,
}: {
    grid: TCell[][];
    minesCount: number;
}): boolean => {
    const flatGrid = grid.flat();

    const cellsCountRequiredToWin = flatGrid.length - minesCount;
    const openedCellsCount = flatGrid.filter(
        (c) => !c.hasMine && c.isOpen,
    ).length;

    return cellsCountRequiredToWin === openedCellsCount;
};
