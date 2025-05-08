import { useGameStatus } from "@/store/game-phase-store";
import ConfettiReact from "react-confetti";

export const Confetti = () => (
    <ConfettiReact
        run={useGameStatus() === "win"}
        className="max-w-full"
        recycle={false}
    />
);
