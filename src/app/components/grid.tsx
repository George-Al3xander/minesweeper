import { CellContent } from "@/app/components/cell-content";
import { useGameBoard } from "@/app/hooks/use-game-board";

export const Grid = () => {
    const { cells, openCell, toggleFlagOnCell } = useGameBoard();

    return (
        <table className="table-fixed border-collapse flex-col">
            <tbody className="three-d-borders-flipped box-border border-4">
                {cells.map((r, rowNum) => (
                    <tr key={"row-" + rowNum}>
                        {r.map((c) => (
                            <td
                                key={"row" + c.toString()}
                                className="min-size-8 relative size-8 min-h-8 min-w-8 p-0 text-center text-lg"
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
