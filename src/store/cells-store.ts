import { TCell } from "@/types/models/cell";
import { create } from "zustand/react";

type CellsActions = {
    setCells: (c: TCell[][]) => void;
};

type CellsState = {
    cells: TCell[][];
    actions: CellsActions;
};

const cellsStore = create<CellsState>((set) => ({
    cells: [],
    actions: {
        setCells: (cells: TCell[][]) => set(() => ({ cells })),
    },
}));

export const useCells = () => cellsStore((s) => s.cells);
export const useSetCells = () => cellsStore((s) => s.actions.setCells);
