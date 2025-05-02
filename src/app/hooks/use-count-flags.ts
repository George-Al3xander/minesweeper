import { useGameConfig } from "@/app/hooks/use-game-config";
import { countFlags } from "@/app/utils/count-flags";
import { useCells } from "@/store/cells-store";

export const useCountFlags = () => {
    const cells = useCells();
    const { mines } = useGameConfig();

    return countFlags({ cells, mines });
};
