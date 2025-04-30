import { DigitalNumberDisplay } from "@/app/components/digital-number-display";
import { useGamePhase } from "@/store/game-phase-store";
import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

export const TimerDisplay = () => {
    const gamePhase = useGamePhase();
    const { totalSeconds, start, pause, reset } = useStopwatch({
        autoStart: false,
    });

    useEffect(() => {
        if (gamePhase === "playing") start();
        else if (gamePhase === "ended") pause();
        else if (gamePhase === "idle") reset(undefined, false);
    }, [gamePhase]);

    return <DigitalNumberDisplay value={totalSeconds} />;
};
