"use client";

import Button from '@/app/components/Button';
import { Home, DollarSign, Calendar, Shield } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HostWithUsSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Requesting animation frame for smoother performance
            window.requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        // Add event listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial call to set position
        handleScroll();

        // Cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Using a reduced multiplier for more subtle effect
    const parallaxOffset = scrollY * 0.2;

    // Use a local image path instead of remote URL for better reliability
    const backgroundImage = "http://images.unsplash.com/photo-1728825445493-1a6e89164511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Make sure this image exists in your public folder

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };
    
    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };
    
    const staggerFeatures = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const featureItem = {
        hidden: { x: -20, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            } 
        }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            } 
        }
    };

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background image with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover will-change-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    height: '120%', // Oversize the image slightly to avoid blank areas when scrolling
                    top: '-50%',
                    transform: `translateY(${parallaxOffset}px)`,
                    transition: 'transform 0.1s ease-out',
                    zIndex: 0,
                }}
            />

            {/* Overlay */}
            <motion.div 
                className="absolute inset-0 bg-black/80 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
            
            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="hidden lg:block relative">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            <Image
                                src="/host.jpg"
                                alt="Happy host greeting guests"
                                className="rounded-lg shadow-xl object-cover h-auto max-w-full"
                                width={700}
                                height={600}
                            />
                        </motion.div>
                        <motion.div 
                            className="absolute -bottom-6 -right-6 bg-[#F8F7F2] dark:bg-[#333333] p-6 rounded-lg shadow-lg max-w-xs"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={scaleIn}
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/apartment.jpg"
                                    alt="Host"
                                    height={80}
                                    width={80}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">Sarah J.</h4>
                                    <p className="text-sm text-[#444444] dark:text-[#666666]">Host since 2024</p>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-[#777777] italic text-sm">
                                "Hosting on Heuvera has been life-changing. I've met amazing people and earned enough to renovate my entire home!"
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        <motion.div 
                            className="mb-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideUp}
                        >
                            <h4 className="text-[#7B4F3A] dark:text-[#8B5F4D] font-semibold mb-2">Host With Us</h4>
                            <h2 className="text-4xl font-bold text-[#F8F7F2] dark:text-[#F8F7F2] mb-4">Share Your Space, Earn Your Way</h2>
                            <motion.div 
                                className="w-20 h-1 bg-[#7B4F3A] dark:bg-[#8B5F4D] rounded"
                                initial={{ width: 0 }}
                                animate={{ width: 80 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            ></motion.div>
                        </motion.div>

                        <motion.p 
                            className="text-[#A7A7A7] dark:text-[#A7A7A7] mb-8 text-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            Turn your property into income by joining thousands of successful hosts on Heivera.
                            Our platform makes it easy to list your space, connect with guests, and get paid securely.
                        </motion.p>

                        <motion.div 
                            className="space-y-6 mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerFeatures}
                        >
                            <motion.div className="flex" variants={featureItem}>
                                <div className="flex-shrink-0">
                                    <motion.div 
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A] dark:bg-[#8B5F4D] text-white"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Home size={24} />
                                    </motion.div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">List Any Space</h5>
                                    <p className="mt-1 text-[#888888] dark:text-[#888888]">
                                        Whether it's a vacation home, spare room, or unique space, our platform welcomes all types of properties.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="flex" variants={featureItem}>
                                <div className="flex-shrink-0">
                                    <motion.div 
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A] dark:bg-[#8B5F4D] text-white"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <DollarSign size={24} />
                                    </motion.div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">Earn More</h5>
                                    <p className="mt-1 text-[#888888] dark:text-[#888888]">
                                        Set your own prices and availability. Most hosts earn enough to cover their mortgage or rent—and then some.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="flex" variants={featureItem}>
                                <div className="flex-shrink-0">
                                    <motion.div 
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A] dark:bg-[#8B5F4D] text-white"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Shield size={24} />
                                    </motion.div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">Host with Confidence</h5>
                                    <p className="mt-1 text-[#888888] dark:text-[#888888]">
                                        Our verification process, secure payments, and $1M property protection give you peace of mind.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Button className='max-w-fit'>
                                <motion.div
                                    className="flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Calendar size={18} className="mr-2" />
                                    Start Hosting Today
                                </motion.div>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}