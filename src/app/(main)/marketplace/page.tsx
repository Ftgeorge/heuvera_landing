'use client';

import Button from "@/app/components/Button";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const propertySlides = [
    {
        images: [
            { title: "Bedroom", image: "/bedroom.jpg" },
            { title: "Bathroom", image: "/bathroom.jpg" },
            { title: "Living Room", image: "/living-room.jpg" },
        ],
        location: "Karu, Abuja",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom2.jpg" },
            { title: "Bathroom", image: "/bathroom2.jpg" },
            { title: "Living Room", image: "/living-room2.jpg" },
        ],
        location: "Lekki, Lagos",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom3.jpg" },
            { title: "Bathroom", image: "/bathroom3.jpg" },
            { title: "Living Room", image: "/living-room3.jpg" },
        ],
        location: "Wuse 2, Abuja",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom4.jpg" },
            { title: "Bathroom", image: "/bathroom4.jpg" },
            { title: "Living Room", image: "/living-room4.jpg" },
        ],
        location: "GRA, Port Harcourt",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom5.jpg" },
            { title: "Bathroom", image: "/bathroom5.jpg" },
            { title: "Living Room", image: "/living-room5.jpg" },
        ],
        location: "Ikeja, Lagos",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom6.jpg" },
            { title: "Bathroom", image: "/bathroom6.jpg" },
            { title: "Living Room", image: "/living-room6.jpg" },
        ],
        location: "Asokoro, Abuja",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom7.jpg" },
            { title: "Bathroom", image: "/bathroom7.jpg" },
            { title: "Living Room", image: "/living-room7.jpg" },
        ],
        location: "Enugu GRA, Enugu",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "/bedroom8.jpg" },
            { title: "Bathroom", image: "/bathroom8.jpg" },
            { title: "Living Room", image: "/living-room8.jpg" },
        ],
        location: "Ring Road, Ibadan",
        country: "Nigeria",
    },
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
                        {propertySlides[currentSlide].images.map((property, index) => (
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

                    <div className="flex gap-2 items-center">
                        <MapPin />
                        <div>
                            <h1 className="font-semibold">{propertySlides[currentSlide].location}</h1>
                            <h2 className="text-sm text-gray-600">{propertySlides[currentSlide].country}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
