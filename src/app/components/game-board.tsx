import { FlagsCounterDisplay } from "@/app/components/flags-counter-display";
import { Grid } from "@/app/components/grid";
import { ResetButton } from "@/app/components/reset-button";
import { TimerDisplay } from "@/app/components/timer-display";
import { useGameStatus } from "@/store/game-phase-store";
import { cn } from "@/utils/cn";

export const GameBoard = () => {
    const status = useGameStatus();

    return (
        <section
            className={cn(
                "bg-primary border-primary three-d-borders flex flex-col gap-4 overflow-hidden border-4 p-3",
                {
                    "animate-shake": status === "loss",
                },
            )}
        >
            <div className="border-primary three-d-borders-flipped flex h-18 w-full items-center justify-between gap-4 border-4 p-2">
                <FlagsCounterDisplay />
                <ResetButton hasLost={status === "loss"} />
                <TimerDisplay />
            </div>
            <div className="overflow-x-auto overflow-y-hidden">
                <Grid />
            </div>
        </section>
    );
};
