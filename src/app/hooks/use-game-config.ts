import { gameDifficultiesConfig } from "@/configs/game-difficulties";
import { useGameDifficulty } from "@/store/game-difficulty-store";

export const useGameConfig = () => gameDifficultiesConfig[useGameDifficulty()];
