import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline" | "danger";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variants: Record<string, string> = {
        primary:
            "bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500",
        outline:
            "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-300",
        danger:
            "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
