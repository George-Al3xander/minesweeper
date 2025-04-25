import { TCell } from "@/types/models/cell";
import { Coords } from "@/utils/coords";

export const revealEmptyCells = ({
    coords,
    cells,
    rows,
    cols,
}: {
    coords: Coords;
    cells: TCell[][];
    rows: number;
    cols: number;
}): TCell[][] => {
    const queue: Coords[] = [coords];

    while (queue.length > 0) {
        const currentCoords = queue.shift()!;
        const currentCell = cells[currentCoords.getX][currentCoords.getY];
        currentCell.isOpen = true;

        if (currentCell.neighborMinesCount === 0) {
            for (const c of currentCoords) {
                const newRow = c.getX;
                const newCol = c.getY;

                if (
                    newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    !cells[newRow][newCol].isOpen &&
                    !cells[newRow][newCol].isFlagged
                ) {
                    queue.push(c);
                }
            }
        }
    }

    return cells;
};
