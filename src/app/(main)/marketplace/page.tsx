'use client';

import Button from "@/app/components/Button";
import { ChevronRight, LucideArrowLeft, LucideArrowRight, LucideLocate, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdArrowForward } from "react-icons/md";

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
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const progressWidth = `${((currentSlide + 1) / propertySlides.length) * 100}%`;

    return (
        <div className="h-screen bg-[#F8F7F2] w-full flex items-center justify-center px-36">

            <div className="w-full flex items-center justify-center h-full">
                {/* Left side */}
                <div className="w-4/12 pr-6 flex flex-col h-4/6 justify-center gap-16">
                    <div>
                        <h4 className="text-[#7B4F3A] font-semibold">Marketplace</h4>
                    </div>
                    <div className="pb-28">
                        <h1 className="text-black text-7xl font-medium absolute z-20">Minimal Living a<span className="text-white">t its</span><br></br> finest</h1>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <button onClick={handlePrev}>
                            <GoArrowLeft size={30} />
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
                            <GoArrowRight size={30} />
                        </button>
                    </div>
                    <Button className="max-w-fit">
                        See All Properties
                        <ChevronRight />
                    </Button>
                </div>

                {/* Right side carousel */}
                <div className="w-8/12 h-4/6 flex flex-col gap-5 relative">
                    <div className="w-full grid grid-cols-3 gap-6 h-full z-10">
                        {propertySlides[currentSlide].map((property, index) => (
                            <div key={index} className="w-full h-full bg-[#F8F7F2] relative rounded-xl overflow-hidden shadow-md">
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
                    <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#7B4F3A44] rounded-lg z-0"></div>
                    <div className="absolute bottom-10 -right-5 w-20 h-20 bg-[#7B4F3A66] rounded-lg z-0"></div>

                    <div className="w-full flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <MapPin />
                            <div>
                                <h1 className="font-semibold">Gulshan Avenue, Dhaka</h1>
                                <h2 className="text-sm text-gray-600">Bangladesh</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
