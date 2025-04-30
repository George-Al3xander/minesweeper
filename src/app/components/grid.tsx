import { CellContent } from "@/app/components/cell-content";
import { useGameBoard } from "@/app/hooks/use-game-board";
import { gameDifficultiesConfig } from "@/configs/game-difficulties";
import { useGameDifficulty } from "@/store/game-difficulty-store";

export const Grid = () => {
    const { cells, openCell, toggleFlagOnCell } = useGameBoard(
        gameDifficultiesConfig[useGameDifficulty()],
    );

    return (
        <table className="flex flex-col">
            <tbody className="three-d-borders-flipped box-border border-4">
                {cells.map((r, rowNum) => (
                    <tr key={"row-" + rowNum}>
                        {r.map((c) => (
                            <td
                                key={"row" + c.toString()}
                                className="relative size-8 text-center text-lg"
                                onClick={openCell(c.coords)}
                                onContextMenu={toggleFlagOnCell(c.coords)}
                            >
                                <CellContent {...c} />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
