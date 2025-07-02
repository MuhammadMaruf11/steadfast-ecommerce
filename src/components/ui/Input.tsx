import { FC, InputHTMLAttributes } from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
};

const Input: FC<InputProps> = ({ error, className = "", ...props }) => {
    return (
        <>
            <input
                className={`border-none outline-none px-3 py-2 focus:outline-none ${className}`}
                {...props}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </>
    );
};

export default Input;
