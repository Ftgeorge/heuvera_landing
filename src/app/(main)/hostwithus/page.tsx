"use client";

import Button from '@/app/components/Button';
import { Home, DollarSign, Calendar, Shield } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
    const backgroundImage = "https://mtrgycro9i.ufs.sh/f/8rGFBkantSc3KAU95Q4oABY0aqEjF4QrpIGc3dw68HTMCNuv"; // Make sure this image exists in your public folder

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background image with parallax effect */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover will-change-transform"
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
            <div className="absolute inset-0 bg-black/80 z-10" />
            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="hidden lg:block relative">
                        <Image
                            src="/apartment.jpg"
                            alt="Happy host greeting guests"
                            className="rounded-lg shadow-xl object-cover h-auto max-w-full"
                            width={700}
                            height={600}
                        />
                        <div className="absolute -bottom-6 -right-6 bg-[#F8F7F2] dark:bg-[#333333] p-6 rounded-lg shadow-lg max-w-xs">
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
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        <div className="mb-6">
                            <h4 className="text-[#7B4F3A] dark:text-[#8B5F4D] font-semibold mb-2">Host With Us</h4>
                            <h2 className="text-4xl font-bold text-[#F8F7F2] dark:text-[#F8F7F2] mb-4">Share Your Space, Earn Your Way</h2>
                            <div className="w-20 h-1 bg-[#7B4F3A] dark:bg-[#8B5F4D] rounded"></div>
                        </div>

                        <p className="text-[#A7A7A7] dark:text-[#A7A7A7] mb-8 text-lg">
                            Turn your property into income by joining thousands of successful hosts on Heivera.
                            Our platform makes it easy to list your space, connect with guests, and get paid securely.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A] dark:bg-[#8B5F4D] text-white">
                                        <Home size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">List Any Space</h5>
                                    <p className="mt-1 text-[#888888] dark:text-[#888888]">
                                        Whether it's a vacation home, spare room, or unique space, our platform welcomes all types of properties.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A] dark:bg-[#8B5F4D] text-white">
                                        <DollarSign size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">Earn More</h5>
                                    <p className="mt-1 text-[#888888] dark:text-[#888888]">
                                        Set your own prices and availability. Most hosts earn enough to cover their mortgage or rent—and then some.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7B4F3A] dark:bg-[#8B5F4D] text-white">
                                        <Shield size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-[#A7A7A7] dark:text-[#A7A7A7]">Host with Confidence</h5>
                                    <p className="mt-1 text-[#888888] dark:text-[#888888]">
                                        Our verification process, secure payments, and $1M property protection give you peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button className='max-w-fit'>
                            <Calendar size={18} className="mr-2" />
                            Start Hosting Today
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}