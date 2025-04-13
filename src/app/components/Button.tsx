"use client";

import { ReactNode } from "react"
import { useRouter } from "next/navigation"

interface ButtonProps {
    children: ReactNode;
    className?: string;
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
                className={`bg-[#7B4F3A] dark:bg-[#8B5F4D] hover:bg-[#6A432F] hover:dark:bg-[#7B4F3A] text-white font-medium px-8 md:px-8 lg:px-6 xl:px-8 2xl:px-8 py-3 md:py-3 lg:py-2 xl:py-3 2xl:py-3 rounded-lg transition duration-150 flex items-center justify-center text-xs md:text-sm ${className}`}
            >
                {children}
            </button>
        </>
    )
}
