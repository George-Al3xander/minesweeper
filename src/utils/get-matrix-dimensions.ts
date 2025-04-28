export const getMatrixDimensions = <T>(
    matrix: T[][],
): { rows: number; cols: number } => {
    const rows = matrix.length;
    const cols = matrix[0]?.length ?? 0;

    return { rows, cols };
};
