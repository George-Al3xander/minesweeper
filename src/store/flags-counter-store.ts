import { gameDifficultiesConfig } from "@/configs/game-difficulties";
import { useGameDifficulty } from "@/store/game-difficulty-store";
import { create } from "zustand/react";

type FlagsCounterActions = {
    setFlagsCount: (n: number) => void;
};

type FlagsCounterState = {
    flagsCount: number | null;
    actions: FlagsCounterActions;
};

const flagsCounterStore = create<FlagsCounterState>((set) => ({
    flagsCount: null,
    actions: {
        setFlagsCount: (n: number) => set(() => ({ flagsCount: n })),
    },
}));

export const useFlagsCounter = (): number => {
    const difficulty = useGameDifficulty();
    return (
        flagsCounterStore((s) => s.flagsCount) ??
        gameDifficultiesConfig[difficulty].mines
    );
};

export const useSetFlagsCounter = () =>
    flagsCounterStore((s) => s.actions.setFlagsCount);
