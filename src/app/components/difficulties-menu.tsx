import {
    gameDifficultiesConfig,
    TGameDifficulty,
} from "@/configs/game-difficulties.ts";
import { useSetGameDifficulty } from "@/store/game-difficulty-store";
import { useGamePhaseActions } from "@/store/game-phase-store";

const difficultyColors: Record<TGameDifficulty, string> = {
    beginner: "text-green-600",
    medium: "text-orange-500",
    advanced: "text-red-600",
};

export const DifficultiesMenu = () => {
    const { setGamePhase } = useGamePhaseActions();
    const setGameDifficulty = useSetGameDifficulty();

    const handleSelectDifficulty = (difficulty: TGameDifficulty) => {
        setGameDifficulty(difficulty);
        setGamePhase("idle");
    };

    return (
        <section className="text-center text-xl">
            <fieldset>
                <legend className="mb-2 text-2xl">
                    Choose game difficulty
                </legend>
                <ul className="flex flex-col gap-2">
                    {(
                        Object.keys(gameDifficultiesConfig) as TGameDifficulty[]
                    ).map((d) => (
                        <li key={d}>
                            <button
                                onClick={() => handleSelectDifficulty(d)}
                                className={`capitalize hover:cursor-pointer hover:underline focus:outline focus:outline-2 focus:outline-blue-500 ${difficultyColors[d]}`}
                            >
                                {d} ({gameDifficultiesConfig[d].rows}x
                                {gameDifficultiesConfig[d].cols},{" "}
                                {gameDifficultiesConfig[d].mines} mines)
                            </button>
                        </li>
                    ))}
                </ul>
            </fieldset>
        </section>
    );
};
