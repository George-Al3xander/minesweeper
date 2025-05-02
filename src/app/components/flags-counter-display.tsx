import { DigitalNumberDisplay } from "@/app/components/digital-number-display";
import { useCountFlags } from "@/app/hooks/use-count-flags";

export const FlagsCounterDisplay = () => (
    <DigitalNumberDisplay value={useCountFlags()} />
);
