"use client";

import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import { HeuveraLogo } from "../logo/HeuveraLogo";
import { LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Marketplace", href: "marketplace" },
    { name: "Host with Us", href: "host" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
];

export default function NavigationBar() {
    const [currentPage, setCurrentPage] = useState<string>("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setCurrentPage(sectionId);
            setIsMobileMenuOpen(false);
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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    
    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "100vh",
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

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

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex-shrink-0 w-33"
                    >
                        <HeuveraLogo width={30} height={30} />
                    </motion.div>


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


                    <motion.div
                        className="hidden md:block w-33"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <Button className="max-w-fit gap-2 flex-shrink-0" href="/login">
                            Login
                            <LogIn />
                        </Button>
                    </motion.div>


                    <motion.div
                        className="md:hidden z-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button
                            className="text-[#F8F7F2] p-2 rounded-full focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </motion.div>
                </div>
            </div>


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg z-40 pt-20 px-6 flex flex-col"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex flex-col items-center space-y-8 mt-12">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-xl font-medium text-[#F8F7F2] hover:text-[#7b4f3a] transition w-full text-center py-3"
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}


                            <motion.div
                                className="w-full mt-6"
                                variants={itemVariants}
                            >
                                <Button
                                    className="w-full justify-center gap-2 py-4"
                                    href="/login"
                                >
                                    Login
                                    <LogIn />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}