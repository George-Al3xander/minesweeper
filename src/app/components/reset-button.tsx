import { useGamePhaseActions } from "@/store/game-phase-store";
import { SadIcon, SmileIcon } from "@/ui/icons";
import { FC } from "react";

type Props = {
    hasLost: boolean;
};

export const ResetButton: FC<Props> = ({ hasLost }) => {
    const { setGamePhase } = useGamePhaseActions();

    const resetGame = () => {
        setGamePhase("menu");
    };

    const Icon = hasLost ? SadIcon : SmileIcon;

    return (
        <button
            onClick={resetGame}
            className="three-d-borders active:!border-secondary size-10 border-4 active:border-r-2 active:border-b-2"
        >
            <span className="sr-only">Restart game</span>
            <Icon size={24} className="text-smile mx-auto" />
        </button>
    );
};
