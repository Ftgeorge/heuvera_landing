'use client';

import Button from "@/app/components/Button";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const propertySlides = [
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Karu, Abuja",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Lekki, Lagos",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Wuse 2, Abuja",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "GRA, Port Harcourt",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Ikeja, Lagos",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Asokoro, Abuja",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Enugu GRA, Enugu",
        country: "Nigeria",
    },
    {
        images: [
            { title: "Bedroom", image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Bathroom", image: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { title: "Living Room", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ],
        location: "Ring Road, Ibadan",
        country: "Nigeria",
    },
];


export default function Marketplace() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial

    const handlePrev = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev === 0 ? propertySlides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % propertySlides.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const progressWidth = `${((currentSlide + 1) / propertySlides.length) * 100}%`;

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    // Variants for image slides
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        })
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-screen bg-[#F8F7F2] dark:bg-[#333333] w-full flex items-center justify-center px-36"
        >
            <div className="w-full flex items-center justify-center h-full">
                {/* Left side */}
                <motion.div 
                    className="w-4/12 pr-6 flex flex-col h-4/6 justify-center gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <h4 className="text-[#7B4F3A] dark:text-[#8B5F4D] font-semibold">Marketplace</h4>
                    </motion.div>
                    <motion.div 
                        className="pb-28"
                        variants={itemVariants}
                    >
                        <h1 className="text-[#323232] dark:text-[#F8F7F2] text-7xl font-medium absolute z-20 [text-shadow:_3px_3px_6px_rgba(0,0,0,0.3)]">
                            Minimal Living a<span className="text-[#7B4F3A] dark:text-[#8B5F4D]">t its</span><br></br> finest
                        </h1>
                    </motion.div>
                    <motion.div 
                        className="flex flex-row gap-2 items-center"
                        variants={itemVariants}
                    >
                        <motion.button 
                            onClick={handlePrev}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <GoArrowLeft className="text-[#323232] dark:text-[#555555]" size={30} />
                        </motion.button>
                        <h1 className="font-medium text-lg">{String(currentSlide + 1).padStart(2, "0")}</h1>
                        <div className="h-1 w-40 bg-gray-300 dark:bg-[#555555] rounded-xl relative overflow-hidden">
                            <motion.div
                                className="h-full bg-[#7B4F3A] dark:bg-[#8B5F4D] rounded-xl"
                                initial={{ width: 0 }}
                                animate={{ width: progressWidth }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                            />
                        </div>
                        <h1 className="text-lg">{String(propertySlides.length).padStart(2, "0")}</h1>
                        <motion.button 
                            onClick={handleNext}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <GoArrowRight className="text-[#323232] dark:text-[#555555]" size={30} />
                        </motion.button>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button className="max-w-fit">
                                See All Properties
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ 
                                        repeat: Infinity, 
                                        duration: 1.5, 
                                        ease: "easeInOut",
                                        repeatDelay: 0.5 
                                    }}
                                >
                                    <ChevronRight />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right side carousel */}
                <div className="w-8/12 h-4/6 flex flex-col gap-5 relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div 
                            key={currentSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full grid grid-cols-3 gap-6 h-full z-10"
                        >
                            {propertySlides[currentSlide].images.map((property, index) => (
                                <motion.div 
                                    key={index}
                                    className="w-full h-full bg-[#F8F7F2] relative rounded-xl overflow-hidden shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { 
                                            delay: index * 0.1,
                                            duration: 0.5 
                                        }
                                    }}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        variants={imageVariants}
                                        className="h-full w-full"
                                    >
                                        <Image
                                            src={property.image}
                                            width={500}
                                            height={500}
                                            alt={property.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                                    <motion.div 
                                        className="flex flex-col absolute bottom-3 left-5 z-20"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ 
                                            opacity: 1, 
                                            y: 0,
                                            transition: { 
                                                delay: index * 0.1 + 0.3,
                                                duration: 0.5 
                                            }
                                        }}
                                    >
                                        <h1 className="text-xl font-medium text-white">{property.title}</h1>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <motion.div 
                        className="absolute -top-5 -left-5 w-20 h-20 bg-[#7B4F3A44] dark:bg-[#8B5F4D44] rounded-lg z-0"
                        animate={{
                            rotate: [0, 10, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute bottom-10 -right-5 w-20 h-20 bg-[#7B4F3A66] dark:bg-[#8B5F4D66] rounded-lg z-0"
                        animate={{
                            rotate: [0, -10, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />

                    <motion.div 
                        className="flex gap-2 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -3, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 1
                            }}
                        >
                            <MapPin className="text-[#7B4F3A] dark:text-[#8B5F4D]" />
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h1 className="font-semibold">{propertySlides[currentSlide].location}</h1>
                                <h2 className="text-sm text-gray-600 dark:text-[#666666]">{propertySlides[currentSlide].country}</h2>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                    <div className="w-full flex justify-center gap-2 mt-2">
                        {propertySlides.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index
                                        ? "bg-[#7B4F3A] dark:bg-[#8B5F4D] w-6"
                                        : "bg-gray-300 dark:bg-[#555555] w-3"
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { 
                                        delay: index * 0.05 + 0.5,
                                        duration: 0.3 
                                    }
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}