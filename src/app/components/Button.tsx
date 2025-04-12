"use client";

import { ReactNode } from "react"
import { useRouter } from "next/navigation"

interface ButtonProps {
    children: ReactNode;
    className: string;
    href?: string;
}

export default function Button({ children, className, href }: ButtonProps) {
    const router = useRouter()

    const handleClick = () => {
        if (href) {
            router.push(href)
        }
    }

    return (
        <>
            <button
                type="submit"
                onClick={handleClick}
                className={`bg-[#7B4F3A] hover:bg-[#6A432F] text-white font-medium py-2 px-4 rounded-lg transition duration-150 flex items-center justify-center text-sm ${className}`}
            >
                {children}
            </button>
        </>
    )
}
