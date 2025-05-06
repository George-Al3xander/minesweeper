import { useGamePhaseActions, useLostStatus } from "@/store/game-phase-store";
import { SadIcon, SmileIcon } from "@/ui/icons";

export const ResetButton = () => {
    const { setGamePhase } = useGamePhaseActions();

    const resetGame = () => {
        setGamePhase("menu");
    };

    const Icon = useLostStatus() ? SadIcon : SmileIcon;

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
