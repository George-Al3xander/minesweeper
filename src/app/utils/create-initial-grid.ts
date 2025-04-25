import { TCell } from "@/types/models/cell";
import { Coords } from "@/utils/coords";

export const createInitialGrid = ({
    rows,
    columns,
}: {
    rows: number;
    columns: number;
}): TCell[][] => {
    const cells: TCell[][] = [];

    for (let i = 0; i < rows; i++) {
        const row: TCell[] = [];
        for (let j = 0; j < columns; j++) {
            const coords = new Coords(i, j);
            row.push({
                isFlagged: false,
                hasMine: false,
                isOpen: false,
                coords,
                neighborMinesCount: 0,
            });
        }
        cells.push(row);
    }

    return cells;
};
