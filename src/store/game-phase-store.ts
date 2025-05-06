import { create } from "zustand/react";

type TGamePhase = "menu" | "idle" | "playing" | "ended";

type GamePhaseActions = {
    setGamePhase: (phase: TGamePhase) => void;
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
        setGamePhase: (phase: TGamePhase) => set(() => ({ phase })),
        declareVictory: () => set(() => ({ hasWon: true, phase: "ended" })),
        declareLoss: () => set(() => ({ phase: "ended" })),
    },
}));

export const useGamePhase = (): TGamePhase => gamePhaseStore((s) => s.phase);
export const useGamePhaseActions = () => gamePhaseStore((s) => s.actions);
export const useLostStatus = (): boolean => {
    const phase = gamePhaseStore((s) => s.phase);
    const hasWon = gamePhaseStore((s) => s.hasWon);

    return phase === "ended" && !hasWon;
};
