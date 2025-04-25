import { Coords } from "@/utils/coords";

export type TCell = {
    coords: Coords;
    hasMine: boolean;
    isOpen: boolean;
    isFlagged: boolean;
    neighborMinesCount: number;
};
