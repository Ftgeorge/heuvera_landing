"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import { HeuveraLogo } from "../logo/HeuveraLogo";
import { ArrowRight, LogIn, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Marketplace", href: "marketplace" },
    { name: "Host with Us", href: "host" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
];

export default function NavigationBar() {
    const [currentPage, setCurrentPage] = useState<string>(""); 

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setCurrentPage(sectionId);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentPage(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md"
        >
            <style jsx global>{`
            .animated-underline {
                position: relative;
                display: inline-block;
            }

            .animated-underline::after {
                content: "";
                position: absolute;
                width: 0;
                height: 1px;
                bottom: -2px;
                left: 0;
                background-color: #7B4F3A;
                transition: width 0.3s ease-in-out;
            }

            .animated-underline:hover::after {
                width: 100%;
            }
            `}</style>

            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Left: Logo */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex-shrink-0 w-33"
                    >
                        <HeuveraLogo width={30} height={30} />
                    </motion.div>

                    {/* Center: Navigation Links */}
                    <div className="hidden md:flex flex-1 justify-center lg:space-x-8 xl:space-x-10 2xl:space-x-12 text-sm font-medium text-[#F8F7F2]">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="hover:text-[#7b4f3a] transition animated-underline"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300,
                                    delay: 0.4 + index * 0.1,
                                    duration: 0.3,
                                }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: Login CTA */}
                    <motion.div
                        className="w-33"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <Button className="max-w-fit gap-2 flex-shrink-0" href="/login">
                            Login
                            <LogIn />
                        </Button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="text-gray-700">
                            <Menu size={24} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}
