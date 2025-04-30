import { FC } from "react";

type Props = {
    value: number;
    minimumIntegerDigits?: number;
};

export const DigitalNumberDisplay: FC<Props> = ({
    value,
    minimumIntegerDigits = 3,
}) => {
    const number = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits,
        useGrouping: false,
    }).format(value);

    return (
        <div className="three-d-borders-flipped flex flex-col border-2 bg-black px-4 text-4xl leading-[0.8] tracking-tight text-red-600 tabular-nums">
            {number}
        </div>
    );
};
