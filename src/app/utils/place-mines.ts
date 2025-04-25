import { TCell } from "@/types/models/cell.ts";
import { Coords } from "@/utils/coords.ts";
import { shuffle } from "@/utils/shuffle.ts";

export const placeMines = ({
    initialGrid,
    minesCount,
    coordsToIgnore,
}: {
    initialGrid: TCell[][];
    minesCount: number;
    coordsToIgnore?: Coords[];
}): TCell[][] => {
    const cells = initialGrid;
    const flatInitialGridCoords: ReturnType<Coords["toString"]>[] = initialGrid
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
    const rows = initialGrid[0].length;
    const columns = initialGrid.length;

    const coordsWithMinesSet = new Set(
        shuffle(flatInitialGridCoords).slice(0, minesCount),
    );

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const c = cells[i][j].coords.toString();
            if (coordsWithMinesSet.has(c)) {
                cells[i][j].hasMine = true;

                for (const neighbourCellCoords of [...cells[i][j].coords]) {
                    if (
                        neighbourCellCoords.getX < rows &&
                        neighbourCellCoords.getY < columns &&
                        !cells[neighbourCellCoords.getX][
                            neighbourCellCoords.getY
                        ].hasMine
                    ) {
                        cells[neighbourCellCoords.getX][
                            neighbourCellCoords.getY
                        ].neighborMinesCount++;
                    }
                }
            }
        }
    }

    return cells;
};
