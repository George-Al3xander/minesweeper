import { DigitalNumberDisplay } from "@/app/components/digital-number-display";
import { useFlagsCounter } from "@/store/flags-counter-store";

export const FlagsCounterDisplay = () => (
    <DigitalNumberDisplay value={useFlagsCounter()} />
);
