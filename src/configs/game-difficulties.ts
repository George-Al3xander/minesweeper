export type TGameDifficulty = "beginner" | "medium" | "advanced";

export const gameDifficultiesConfig: Record<
    TGameDifficulty,
    { rows: number; columns: number; mines: number }
> = {
    beginner: { rows: 9, columns: 9, mines: 10 },
    medium: { rows: 16, columns: 16, mines: 40 },
    advanced: { rows: 16, columns: 30, mines: 99 },
} as const;
