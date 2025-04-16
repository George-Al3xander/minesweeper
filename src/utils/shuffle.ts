export const shuffle = <T>(arr: T[]): T[] => {
    const result: T[] = [...arr];

    for (let i = arr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [result[i], result[random]] = [result[random], result[i]];
    }

    return result;
};
