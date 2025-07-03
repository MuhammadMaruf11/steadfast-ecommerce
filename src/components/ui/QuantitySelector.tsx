'use client';

import { useState } from "react";

interface QuantitySelectorProps {
    value?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    value = 1,
    min = 1,
    max = 99,
    onChange,
}) => {
    const [quantity, setQuantity] = useState<number>(value);

    const updateQuantity = (val: number) => {
        const newVal = Math.max(min, Math.min(max, val));
        setQuantity(newVal);
        onChange?.(newVal);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val)) updateQuantity(val);
    };

    return (
        <div className="flex items-center border border-[#E2E8F0] rounded-full overflow-hidden w-fit p-0.5">
            <button
                type="button"
                onClick={() => updateQuantity(quantity - 1)}
                className="bg-[#F1F5F9] text-[#64748B] px-3 py-1 text-lg font-medium cursor-pointer border-none outline-none"
            >
                –
            </button>
            <input
                type="number"
                value={quantity}
                onChange={handleInput}
                className="w-32 text-center border-x outline-none no-spinner border-none "
                min={min}
                max={max}
            />
            <button
                type="button"
                onClick={() => updateQuantity(quantity + 1)}
                className="bg-[#F1F5F9] text-[#64748B] px-3 py-1 text-lg font-medium cursor-pointer  border-none outline-none"
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
