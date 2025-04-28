import { TCell } from "@/types/models/cell.ts";
import { Coords } from "@/utils/coords.ts";
import { getMatrixDimensions } from "@/utils/get-matrix-dimensions.ts";
import { shuffle } from "@/utils/shuffle.ts";

export const placeMines = ({
    cells,
    mines,
    coordsToIgnore,
}: {
    cells: TCell[][];
    mines: number;
    coordsToIgnore?: Coords[];
}): TCell[][] => {
    const cellsWithMines = cells;
    const flatInitialGridCoords: ReturnType<Coords["toString"]>[] = cells
        .flat()
        .map((s) => s.coords.toString())
        .filter((c) => {
            if (coordsToIgnore) {
                return !coordsToIgnore
                    .map((toIgnore) => toIgnore.toString())
                    .includes(c);
            }
            return true;
        });
    const { rows, cols } = getMatrixDimensions(cells);

    const coordsWithMinesSet = new Set(
        shuffle(flatInitialGridCoords).slice(0, mines),
    );

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const c = cellsWithMines[i][j].coords.toString();
            if (coordsWithMinesSet.has(c)) {
                cellsWithMines[i][j].hasMine = true;

                for (const neighbourCellCoords of [
                    ...cellsWithMines[i][j].coords,
                ]) {
                    if (
                        neighbourCellCoords.getX < rows &&
                        neighbourCellCoords.getY < cols &&
                        !cellsWithMines[neighbourCellCoords.getX][
                            neighbourCellCoords.getY
                        ].hasMine
                    ) {
                        cellsWithMines[neighbourCellCoords.getX][
                            neighbourCellCoords.getY
                        ].neighborMinesCount++;
                    }
                }
            }
        }
    }

    return cellsWithMines;
};
