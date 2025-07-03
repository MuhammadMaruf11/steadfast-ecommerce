"use client";

import { FC } from "react";

interface CheckboxProps {
    id: string;
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, label, checked = false, onChange, className }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
            />
            {label && (
                <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
