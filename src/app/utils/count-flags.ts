import { TCell } from "@/types/models/cell";

export const countFlags = ({
    cells,
    mines,
}: {
    cells: TCell[][];
    mines: number;
}): number => {
    const flagsCount = cells.flat().filter((cell) => cell.isFlagged).length;
    return mines - flagsCount;
};
