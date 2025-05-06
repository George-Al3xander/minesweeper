import { useGameConfig } from "@/app/hooks/use-game-config";
import { checkGameWin } from "@/app/utils/check-game-win";
import { createInitialGrid } from "@/app/utils/create-initial-grid";
import { placeMines } from "@/app/utils/place-mines";
import { revealEmptyCells } from "@/app/utils/reveal-empty-cells";
import { revealMines } from "@/app/utils/reveal-mines";
import {
    playEmptyRevealSound,
    playFlagPlaceSound,
    playFlagRemoveSound,
    playGameOverSound,
    playGameWinSound,
    playNumberRevealSound,
} from "@/app/utils/sfx";
import { useCells, useSetCells } from "@/store/cells-store";
import { useGamePhase, useGamePhaseActions } from "@/store/game-phase-store";
import { TCell } from "@/types/models/cell";
import { Coords } from "@/utils/coords";
import { MouseEventHandler, useEffect } from "react";

export const useGameBoard = () => {
    const config = useGameConfig();

    const cells = useCells();
    const setCells = useSetCells();

    const gamePhase = useGamePhase();
    const { declareVictory, declareLoss, setGamePhase } = useGamePhaseActions();

    const handleCellAction =
        (cb: (c: Coords, cells: TCell[][]) => void) =>
        (c: Coords): MouseEventHandler<HTMLElement> =>
        (e) => {
            e.preventDefault();
            if (gamePhase === "ended") return;
            if (gamePhase === "idle") {
                setGamePhase("playing");
                setCells(
                    placeMines({
                        cells,
                        mines: config.mines,
                        coordsToIgnore: [c],
                    }),
                );
            }
            cb(c, Array.from(cells));
        };

    const toggleFlagOnCell = handleCellAction((c, newCells) => {
        const cell = newCells[c.getX][c.getY];

        if (!cell.isOpen) {
            cell.isFlagged = !cell.isFlagged;
            setCells(newCells);
            if (cell.isFlagged) playFlagRemoveSound();
            else playFlagPlaceSound();
        }
    });

    const openCell = handleCellAction((c, newCells) => {
        const cell = newCells[c.getX][c.getY];

        if (!cell.isOpen && !cell.isFlagged) {
            cell.isOpen = true;

            if (cell.hasMine) {
                newCells = revealMines(newCells);
                declareLoss();
                playGameOverSound();
            } else if (cell.neighborMinesCount === 0) {
                playEmptyRevealSound();
                newCells = revealEmptyCells({
                    coords: c,
                    cells: newCells,
                });
            } else {
                playNumberRevealSound();
            }

            if (checkGameWin({ cells: newCells, mines: config.mines })) {
                declareVictory();
                playGameWinSound();
            }

            setCells(newCells);
        }
    });

    useEffect(() => {
        if (gamePhase === "idle") {
            setCells(createInitialGrid(config));
        }
    }, [gamePhase]);

    return { cells, toggleFlagOnCell, openCell };
};
