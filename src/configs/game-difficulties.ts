export type TGameDifficulty = "beginner" | "medium" | "advanced";

export const gameDifficultiesConfig: Record<
    TGameDifficulty,
    { rows: number; cols: number; mines: number }
> = {
    beginner: { rows: 9, cols: 9, mines: 10 },
    medium: { rows: 16, cols: 16, mines: 40 },
    advanced: { rows: 16, cols: 30, mines: 99 },
} as const;
