"use client";

import Button from "../Button";
import { HeuveraLogo } from "../logo/HeuveraLogo";
import { ArrowRight, LogIn, Menu } from "lucide-react";

const navLinks = [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Host with Us", href: "/host" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function NavigationBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
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
                    <div className="flex-shrink-0 w-33">
                        <HeuveraLogo width={30} height={30} />
                    </div>

                    {/* Center: Navigation Links */}
                    <div className="hidden md:flex flex-1 justify-center lg:space-x-8 xl:space-x-10 2xl:space-x-12 text-sm font-medium text-[#F8F7F2]">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`hover:text-[#7b4f3a] transition animated-underline
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right: Login CTA */}
                    <div className="w-33">
                        <Button className="max-w-fit gap-2 flex-shrink-0" href="/login">
                            Login
                            <LogIn />
                        </Button>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
