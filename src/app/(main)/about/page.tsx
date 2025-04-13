// components/AboutUsSection.jsx
"use client";

import Button from '@/app/components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Building, Key, Map, Wifi, Globe, Compass, Cpu, Database, Lock, Shield, Clock, Award, Users } from 'lucide-react';


export default function AboutUsSection() {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const slideRight = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const slideLeft = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const statsContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const statItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const valuesContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const valueItem = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const VirtualRealEstateDecorations = () => {
        return (
            <>
                <motion.div
                    className="absolute w-16 h-16 opacity-30 left-4 top-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        x: [0, 50, 100, 50, 0],
                        y: [0, 50, 100, 50, 0],
                        opacity: [0.3, 0.4, 0.3, 0.4, 0.3],
                        rotate: [0, 45, 90, 45, 0],
                        scale: [0.8, 1, 0.9, 1, 0.8]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "easeInOut"
                    }}
                >
                    <Home className="w-full h-full stroke-[#7B4F3A] dark:stroke-[#8B5F4D]" strokeWidth={1.5} />
                </motion.div>

                {/* Top-Right Corner: Building Icon */}
                <motion.div
                    className="absolute w-16 h-16 opacity-30 right-4 top-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        x: [0, -50, -100, -50, 0],
                        y: [0, 50, 100, 50, 0],
                        opacity: [0.3, 0.4, 0.3, 0.4, 0.3],
                        rotate: [0, -45, -90, -45, 0],
                        scale: [0.8, 1, 0.9, 1, 0.8]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 45,
                        ease: "easeInOut"
                    }}
                >
                    <Building className="w-full h-full stroke-[#7B4F3A] dark:stroke-[#8B5F4D]" strokeWidth={1.5} />
                </motion.div>

                {/* Bottom-Left Corner: Key Icon */}
                <motion.div
                    className="absolute w-16 h-16 opacity-30 left-4 bottom-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        x: [0, 50, 100, 50, 0],
                        y: [0, -50, -100, -50, 0],
                        opacity: [0.3, 0.4, 0.3, 0.4, 0.3],
                        rotate: [0, 45, 90, 45, 0],
                        scale: [0.8, 1, 0.9, 1, 0.8]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 42,
                        ease: "easeInOut"
                    }}
                >
                    <Key className="w-full h-full stroke-[#7B4F3A] dark:stroke-[#8B5F4D]" strokeWidth={1.5} />
                </motion.div>

                {/* Bottom-Right Corner: Cpu (Digital Property) Icon */}
                <motion.div
                    className="absolute w-16 h-16 opacity-30 right-4 bottom-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        x: [0, -50, -100, -50, 0],
                        y: [0, -50, -100, -50, 0],
                        opacity: [0.3, 0.4, 0.3, 0.4, 0.3],
                        rotate: [0, -45, -90, -45, 0],
                        scale: [0.8, 1, 0.9, 1, 0.8]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 48,
                        ease: "easeInOut"
                    }}
                >
                    <Cpu className="w-full h-full stroke-[#7B4F3A] dark:stroke-[#8B5F4D]" strokeWidth={1.5} />
                </motion.div>

            </>
        );
    };

    return (
        <section className="h-screen bg-[#F8F7F2] dark:bg-[#333333] flex items-center relative overflow-hidden">
            {/* Background decorative elements */}
            <VirtualRealEstateDecorations />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <motion.div
                            className="mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideRight}
                        >
                            <h4 className="text-[#7B4F3A] dark:text-[#8B5F4D] font-semibold mb-2">About Us</h4>
                            <h2 className="text-4xl font-bold text-[#323232] dark:text-[#555555] dark:text-[#A7A7A7] mb-4">Reimagining Real Estate for the Digital Age</h2>
                            <motion.div
                                className="w-20 h-1 bg-[#7B4F3A] dark:bg-[#8B5F4D] rounded"
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            ></motion.div>
                        </motion.div>

                        <motion.p
                            className="text-[#444444] dark:text-[#555555] mb-6 text-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            Founded in 2024, Heuvera is on a mission to transform how people discover, book, and share living spaces around the world. We believe finding your perfect place to stay should be as exciting as the journey itself.
                        </motion.p>

                        <motion.p
                            className="text-[#444444] dark:text-[#555555] mb-8 text-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            Our platform connects travelers and renters with unique properties while giving property owners a simple, secure way to earn income from their spaces. With presence in over 30 countries, we're building a global community of hosts and guests.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-y-8 gap-x-12 mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={statsContainer}
                        >
                            <motion.div className="flex items-center" variants={statItem}>
                                <div className="flex-shrink-0 mr-3">
                                    <motion.div
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A44] dark:bg-[#8B5F4D44] text-[#7B4F3A] dark:text-[#8B5F4D]"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Users size={22} />
                                    </motion.div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[#444444] dark:text-[#555555]">10,000+</h5>
                                    <p className="text-sm text-gray-600 dark:text-[#A7A7A7]">Happy Users</p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center" variants={statItem}>
                                <div className="flex-shrink-0 mr-3">
                                    <motion.div
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A44] dark:bg-[#8B5F4D44] text-[#7B4F3A] dark:text-[#8B5F4D]"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Award size={22} />
                                    </motion.div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[#444444] dark:text-[#555555]">4.8/5</h5>
                                    <p className="text-sm text-gray-600 dark:text-[#A7A7A7]">Average Rating</p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center" variants={statItem}>
                                <div className="flex-shrink-0 mr-3">
                                    <motion.div
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A44] dark:bg-[#8B5F4D44] text-[#7B4F3A] dark:text-[#8B5F4D]"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Clock size={22} />
                                    </motion.div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[#444444] dark:text-[#555555]">24/7</h5>
                                    <p className="text-sm text-gray-600 dark:text-[#A7A7A7]">Customer Support</p>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center" variants={statItem}>
                                <div className="flex-shrink-0 mr-3">
                                    <motion.div
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A44] dark:bg-[#8B5F4D44] text-[#7B4F3A] dark:text-[#8B5F4D]"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Globe size={22} />
                                    </motion.div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[#444444] dark:text-[#555555]">30+</h5>
                                    <p className="text-sm text-gray-600 dark:text-[#A7A7A7]">Countries</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Button className='max-w-fit'>
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Our Story
                                </motion.span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column - Team Image & Values */}
                    <div className="relative">
                        <motion.div
                            className="relative z-10 rounded-lg overflow-hidden shadow-xl mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideLeft}
                        >
                            <Image
                                src="/team.jpg"
                                alt="Heivera Team"
                                className="w-full object-cover"
                                width={600}
                                height={400}
                            />
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-[#323232] rounded-lg shadow-lg p-6 ml-8 relative z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideUp}
                        >
                            <h4 className="text-xl font-semibold text-[#444444] dark:text-[#A7A7A7] mb-4">Our Values</h4>
                            <motion.div
                                className="space-y-4"
                                variants={valuesContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div className="flex items-start" variants={valueItem}>
                                    <motion.div
                                        className="h-1 w-4 bg-[#7B4F3A] dark:bg-[#8B5F4D] mt-3 rounded-full mr-3"
                                        whileInView={{ width: 16 }}
                                        viewport={{ once: true }}
                                        initial={{ width: 0 }}
                                        transition={{ duration: 0.3 }}
                                    ></motion.div>
                                    <div>
                                        <h5 className="font-medium text-[#444444] dark:text-[#A7A7A7]">Trust & Safety</h5>
                                        <p className="text-gray-600 dark:text-[#777777] text-sm">We prioritize creating a secure platform where everyone feels confident.</p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start" variants={valueItem}>
                                    <motion.div
                                        className="h-1 w-4 bg-[#7B4F3A] dark:bg-[#8B5F4D] mt-3 rounded-full mr-3"
                                        whileInView={{ width: 16 }}
                                        viewport={{ once: true }}
                                        initial={{ width: 0 }}
                                        transition={{ duration: 0.3 }}
                                    ></motion.div>
                                    <div>
                                        <h5 className="font-medium text-[#444444] dark:text-[#A7A7A7]">Community First</h5>
                                        <p className="text-gray-600 dark:text-[#777777] text-sm">Building connections between hosts and guests is at our core.</p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start" variants={valueItem}>
                                    <motion.div
                                        className="h-1 w-4 bg-[#7B4F3A] dark:bg-[#8B5F4D] mt-3 rounded-full mr-3"
                                        whileInView={{ width: 16 }}
                                        viewport={{ once: true }}
                                        initial={{ width: 0 }}
                                        transition={{ duration: 0.3 }}
                                    ></motion.div>
                                    <div>
                                        <h5 className="font-medium text-[#444444] dark:text-[#A7A7A7]">Innovation</h5>
                                        <p className="text-gray-600 dark:text-[#777777] text-sm">We continuously improve our platform to provide the best experience.</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="absolute top-4 -right-4 w-20 h-20 bg-[#7B4F3A44] dark:bg-[#8B5F4D44] rounded-lg z-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                                rotate: [0, 10, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ></motion.div>
                        <motion.div
                            className="absolute -bottom-4 left-4 w-20 h-20 bg-[#7B4F3A66] dark:bg-[#8B5F4D66] rounded-lg z-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
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
                        ></motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}