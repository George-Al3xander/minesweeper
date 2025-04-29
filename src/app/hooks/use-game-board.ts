import { checkGameWin } from "@/app/utils/check-game-win";
import { countFlags } from "@/app/utils/count-flags";
import { createInitialGrid } from "@/app/utils/create-initial-grid";
import { placeMines } from "@/app/utils/place-mines";
import { revealEmptyCells } from "@/app/utils/reveal-empty-cells";
import { revealMines } from "@/app/utils/reveal-mines";
import { useSetFlagsCounter } from "@/store/flags-counter-store";
import { useGamePhase, useGamePhaseActions } from "@/store/game-phase-store";
import { TCell } from "@/types/models/cell";
import { Coords } from "@/utils/coords";
import { useState } from "react";

export const useGameBoard = (config: {
    rows: number;
    cols: number;
    mines: number;
}) => {
    const [cells, setCells] = useState<TCell[][]>(createInitialGrid(config));
    const [isFirstClick, setIsFirstClick] = useState(true);
    const gamePhase = useGamePhase();
    const { declareVictory, declareLoss } = useGamePhaseActions();
    const setFlagsCounter = useSetFlagsCounter();

    const toggleFlagOnCell = (c: Coords): void => {
        const newCells: TCell[][] = Array.from(cells);
        const cell = newCells[c.getX][c.getY];
        const isOperable = !cell.isOpen && gamePhase != "ended";

        if (isOperable) {
            cell.isFlagged = !cell.isFlagged;
            setFlagsCounter(countFlags({ cells: newCells, ...config }));
            setCells(newCells);
        }
    };

    const openCell = (c: Coords): void => {
        let newCells: TCell[][] = Array.from(cells);

        if (isFirstClick) {
            setIsFirstClick(false);
            newCells = placeMines({
                cells,
                coordsToIgnore: [c],
                ...config,
            });
        }

        const cell = newCells[c.getX][c.getY];
        const isOperable =
            !cell.isOpen && !cell.isFlagged && gamePhase != "ended";
        const hasMine = cell.hasMine;
        const isEmpty = cell.neighborMinesCount === 0;

        if (isOperable) {
            cell.isOpen = true;

            if (hasMine) {
                newCells = revealMines(newCells);
                declareLoss();
            } else if (isEmpty) {
                newCells = revealEmptyCells({
                    coords: c,
                    cells: newCells,
                });
            }
            if (checkGameWin({ cells: newCells, ...config })) declareVictory();
            setCells(newCells);
        }
    };

    const resetGame = () => {
        setCells(createInitialGrid(config));
        setIsFirstClick(true);
        setFlagsCounter(config.mines);
    };

    return { cells, toggleFlagOnCell, openCell, resetGame };
};
