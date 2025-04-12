'use client';

import { LucideArrowLeft, LucideArrowRight, LucideLocate } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const propertySlides = [
    [
        { title: "Bathroom", image: "/apartment.jpg" },
        { title: "Bedroom", image: "/apartment.jpg" },
        { title: "Living Room", image: "/apartment.jpg" },
    ],
    [
        { title: "Balcony", image: "/apartment.jpg" },
        { title: "Kitchen", image: "/apartment.jpg" },
        { title: "Dining Room", image: "/apartment.jpg" },
    ],
    // Add more slides as needed
];

export default function Marketplace() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? propertySlides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % propertySlides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000); // 6 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const progressWidth = `${((currentSlide + 1) / propertySlides.length) * 100}%`;

    return (
        <div className="h-screen w-full px-8">
            <div>
                <h1 className="text-3xl font-semibold py-8">Marketplace</h1>
            </div>
            <div className="w-full flex h-full">
                {/* Left side */}
                <div className="w-4/12 pr-6 flex flex-col h-4/6 justify-center gap-16">
                    <div className="pb-20">
                        <h1 className="text-black text-6xl font-medium">Minimal Living at its finest</h1>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <button onClick={handlePrev}>
                            <LucideArrowLeft size={30} />
                        </button>
                        <h1 className="font-medium text-lg">{String(currentSlide + 1).padStart(2, "0")}</h1>
                        <div className="h-1 w-40 bg-gray-300 rounded-lg relative overflow-hidden">
                            <div
                                className="h-full bg-[#7B4F3A] rounded-lg transition-all duration-700 ease-in-out"
                                style={{ width: progressWidth }}
                            />
                        </div>
                        <h1 className="text-lg">{String(propertySlides.length).padStart(2, "0")}</h1>
                        <button onClick={handleNext}>
                            <LucideArrowRight size={30} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
                        <div className="w-10 h-0.5 rounded-lg bg-[#7B4F3A]" />
                        <h1 className="text-base font-medium">See All Properties</h1>
                    </div>
                </div>

                {/* Right side carousel */}
                <div className="w-8/12 h-full flex flex-col gap-5">
                    <div className="w-full grid grid-cols-3 gap-6 h-4/6">
                        {propertySlides[currentSlide].map((property, index) => (
                            <div key={index} className="w-full h-full relative rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={property.image}
                                    width={500}
                                    height={500}
                                    alt={property.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 z-10"></div>
                                <div className="flex flex-col absolute bottom-3 left-5 z-20">
                                    <h1 className="text-xl font-medium text-white">{property.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <LucideLocate />
                            <div>
                                <h1 className="font-semibold">Gulshan Avenue, Dhaka</h1>
                                <h2 className="text-sm text-gray-600">Bangladesh</h2>
                            </div>
                        </div>
                        <span className="text-sm text-gray-500">*Auto-slide every 6s</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
