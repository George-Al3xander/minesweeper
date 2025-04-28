import { TCell } from "@/types/models/cell";

export const checkGameWin = ({
    cells,
    mines,
}: {
    cells: TCell[][];
    mines: number;
}): boolean => {
    const flatGrid = cells.flat();

    const cellsCountRequiredToWin = flatGrid.length - mines;
    const openedCellsCount = flatGrid.filter(
        (c) => !c.hasMine && c.isOpen,
    ).length;

    return cellsCountRequiredToWin === openedCellsCount;
};
