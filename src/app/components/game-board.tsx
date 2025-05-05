import { FlagsCounterDisplay } from "@/app/components/flags-counter-display";
import { Grid } from "@/app/components/grid";
import { TimerDisplay } from "@/app/components/timer-display";

export const GameBoard = () => {
    return (
        <section className="bg-primary border-primary three-d-borders flex flex-col gap-4 overflow-hidden border-4 p-3">
            <div className="border-primary three-d-borders-flipped flex h-18 w-full items-center justify-between gap-4 border-4 p-2">
                <FlagsCounterDisplay />
                <TimerDisplay />
            </div>
            <div className="overflow-x-auto overflow-y-hidden">
                <Grid />
            </div>
        </section>
    );
};
