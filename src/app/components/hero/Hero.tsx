"use client";

import { useEffect, useState } from "react";
import Button from "../Button";
import { ChevronRight, Compass } from "lucide-react";
export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backgroundImages = [
        "https://mtrgycro9i.ufs.sh/f/8rGFBkantSc3KAU95Q4oABY0aqEjF4QrpIGc3dw68HTMCNuv",
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 ease-out"
                style={{
                    backgroundImage: `url(${backgroundImages[0]})`,
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative h-full flex flex-col items-center justify-center z-20 px-4 md:px-8">
                <div className="text-center text-white max-w-4xl mx-auto mb-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Welcome to Heuvera</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                        Discover virtual real estate reimagined. Explore, host, and connect in a whole new way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        <Button className="px-8 py-3 gap-2">
                            Explore Properties
                            <Compass/>
                        </Button>
                        <Button className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white transition-colors">
                            Learn More
                            <ChevronRight/>
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}