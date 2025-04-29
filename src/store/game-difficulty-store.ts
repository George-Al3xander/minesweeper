import { TGameDifficulty } from "@/configs/game-difficulties";
import { create } from "zustand/react";

type GameDifficultyActions = {
    setGameDifficulty: (d: TGameDifficulty) => void;
};

type GameDifficultyState = {
    difficulty: TGameDifficulty | null;
    actions: GameDifficultyActions;
};

const gameDifficultyStore = create<GameDifficultyState>((set) => ({
    difficulty: null,
    actions: {
        setGameDifficulty: (difficulty: TGameDifficulty) =>
            set(() => ({ difficulty })),
    },
}));

export const useGameDifficulty = (): TGameDifficulty => {
    const diff = gameDifficultyStore((s) => s.difficulty);
    if (!diff) throw new Error("Game Difficulty not set");

    return diff;
};
export const useSetGameDifficulty = () =>
    gameDifficultyStore((s) => s.actions.setGameDifficulty);
