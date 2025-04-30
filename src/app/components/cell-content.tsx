import { TCell } from "@/types/models/cell";
import { FlagIcon, MineIcon } from "@/ui/icons";
import { cn } from "@/utils/cn";
import { FC, memo, ReactNode } from "react";

type Props = TCell;

const colorKeys = [
    "text-one",
    "text-one",
    "text-two",
    "text-three",
    "text-four",
    "text-five",
    "text-six",
    "text-seven",
    "text-eight",
];

export const CellContent: FC<Props> = memo(
    ({
        hasMine,
        isFlagged,
        isOpen,

        neighborMinesCount,
    }) => {
        let content: ReactNode = null;

        if (isOpen) {
            if (hasMine) {
                content = <MineIcon size={18} className="text-black" />;
            } else if (neighborMinesCount > 0) {
                content = (
                    <span className={colorKeys[neighborMinesCount]}>
                        {neighborMinesCount}
                    </span>
                );
            }
        } else if (isFlagged) {
            content = <FlagIcon className="text-red-600" />;
        }

        return (
            <span
                className={cn(
                    "cell absolute inset-0 flex size-full items-center justify-center",
                    {
                        "cell-closed three-d-borders": !isOpen,
                        "cell-opened": isOpen,
                    },
                )}
            >
                {content}
            </span>
        );
    },
    (curr, next) =>
        curr.isOpen === next.isOpen && curr.isFlagged === next.isFlagged,
);
