"use client";

import { useEffect, useState } from "react";
import Button from "../Button";
import { ChevronRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallaxOffset = scrollY * 0.2;

    const videoSrc = "/video.mp4";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const buttonHoverVariants = {
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full"
            >
                <video
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    style={{
                        transform: `translateY(${parallaxOffset}px)`,
                        transition: 'transform 0.1s ease-out',
                        zIndex: 0,
                    }}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-black/40 z-10"
            />

            
            <div className="relative h-full flex flex-col items-center justify-center z-20 px-4 md:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center text-white max-w-4xl mx-auto mb-10"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
                    >
                        Welcome to Heuvera
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-200 mb-8"
                    >
                        Discover virtual real estate reimagined. Explore, host, and connect in a whole new way.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
                    >
                        <motion.div
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button className="px-8 py-3 gap-2">
                                Explore Properties
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Compass />
                                </motion.div>
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button className="px-8 py-3 bg-transparent dark:bg-transparent hover:bg-white/10 dark:hover:bg-white/10 border-2 border-white text-white transition-colors">
                                Learn More
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}