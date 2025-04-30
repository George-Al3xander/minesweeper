import { useGamePhase } from "@/store/game-phase-store";
import { FC, ReactNode } from "react";

type Props = {
    menu: ReactNode;
    playing: ReactNode;
};

export const GameStage: FC<Props> = ({ menu, playing }) => {
    const gamePhase = useGamePhase();

    if (gamePhase === "menu") return menu;

    return playing;
};
