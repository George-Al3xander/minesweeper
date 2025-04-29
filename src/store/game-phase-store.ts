import { create } from "zustand/react";

type TGamePhase = "menu" | "playing" | "ended";

type GamePhaseActions = {
    startGame: () => void;
    declareVictory: () => void;
    declareLoss: () => void;
};

type GamePhaseState = {
    phase: TGamePhase;
    hasWon: boolean;
    actions: GamePhaseActions;
};

const gamePhaseStore = create<GamePhaseState>((set) => ({
    phase: "menu",
    hasWon: false,
    actions: {
        startGame: () => set(() => ({ phase: "playing" })),
        declareVictory: () => set(() => ({ hasWon: true, phase: "ended" })),
        declareLoss: () => set(() => ({ phase: "ended" })),
    },
}));

export const useGamePhase = (): TGamePhase => gamePhaseStore((s) => s.phase);
export const useGamePhaseActions = () => gamePhaseStore((s) => s.actions);
