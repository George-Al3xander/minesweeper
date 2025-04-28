import { TCell } from "@/types/models/cell";
import { Coords } from "@/utils/coords";
import { getMatrixDimensions } from "@/utils/get-matrix-dimensions.ts";

export const revealEmptyCells = ({
    coords,
    cells,
}: {
    coords: Coords;
    cells: TCell[][];
}): TCell[][] => {
    const queue: Coords[] = [coords];
    const { rows, cols } = getMatrixDimensions(cells);

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
