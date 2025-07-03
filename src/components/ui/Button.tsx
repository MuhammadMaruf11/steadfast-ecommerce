import { ButtonHTMLAttributes, FC } from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
};

const Button: FC<ButtonProps> = ({
    children,
    variant = "primary",
    fullWidth = false,
    className = "",
    ...props
}) => {
    const baseStyle = "px-4 py-2 font-medium transition duration-200 border-none outline-none cursor-pointer";
    const variants: Record<string, string> = {
        primary: "bg-[#00A788] text-white hover:bg-[#00aa88]",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
