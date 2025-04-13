"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUsSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        // Show success message
        alert('Thank you for your message! We will get back to you shortly.');
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        },
        hover: {
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 }
        },
        rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }
    };

    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    const iconVariants = {
        hover: { rotate: 15 }
    };

    return (
        <motion.section
            className="min-h-fit xl:h-screen bg-[#F8F7F2] dark:bg-[#333333] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-20 xl:py-20 2xl:py-12 w-full">
                <motion.div
                    className="text-center mb-12"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h4
                        className="text-[#7B4F3A] dark:text-[#8B5F4D] font-semibold mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Get In Touch
                    </motion.h4>
                    <motion.h2
                        className="text-4xl font-bold text-[#323232] dark:text-[#A7A7A7] mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Contact Us
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-[#444444] dark:text-[#555555]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Have questions about Heuvera? Our team is here to help you with anything you need.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="lg:col-span-1 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Email Card */}
                        <motion.div
                            className="bg-[#7B4F3A06] dark:bg-[#44444422] p-6 rounded-lg"
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                        >
                            <div className="flex items-start">
                                <motion.div
                                    className="bg-[#7B4F3A44] dark:bg-[#8B5F4D44] p-3 rounded-full"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <Mail className="h-6 w-6 text-[#7B4F3A] dark:text-[#8B5F4D]" />
                                </motion.div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-[#323232] dark:text-[#A7A7A7]">Email Us</h4>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">support@heivera.com</p>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">partnerships@heivera.com</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            className="bg-[#7B4F3A06] dark:bg-[#44444422] p-6 rounded-lg"
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                        >
                            <div className="flex items-start">
                                <motion.div
                                    className="bg-[#7B4F3A44] dark:bg-[#8B5F4D44] p-3 rounded-full"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <Phone className="h-6 w-6 text-[#7B4F3A] dark:text-[#8B5F4D]" />
                                </motion.div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-[#323232] dark:text-[#A7A7A7]">Call Us</h4>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">+1 (555) 123-4567</p>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">Mon-Fri, 9am-6pm EST</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Location Card */}
                        <motion.div
                            className="bg-[#7B4F3A06] dark:bg-[#44444422] p-6 rounded-lg"
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                        >
                            <div className="flex items-start">
                                <motion.div
                                    className="bg-[#7B4F3A44] dark:bg-[#8B5F4D44] p-3 rounded-full"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <MapPin className="h-6 w-6 text-[#7B4F3A] dark:text-[#8B5F4D]" />
                                </motion.div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-[#323232] dark:text-[#A7A7A7]">Visit Us</h4>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">123 Innovation Drive</p>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">San Francisco, CA 94103</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Chat Card */}
                        <motion.div
                            className="bg-[#7B4F3A06] dark:bg-[#44444422] p-6 rounded-lg"
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                        >
                            <div className="flex items-start">
                                <motion.div
                                    className="bg-[#7B4F3A44] dark:bg-[#8B5F4D44] p-3 rounded-full"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <MessageSquare className="h-6 w-6 text-[#7B4F3A] dark:text-[#8B5F4D]" />
                                </motion.div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-[#323232] dark:text-[#A7A7A7]">Live Chat</h4>
                                    <p className="mt-1 text-[#444444] dark:text-[#555555]">Chat with our support team</p>
                                    <motion.button
                                        className="mt-2 text-[#6A432F] dark:text-[#7B4F3A] font-medium text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Start Chat
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2 bg-[#F8F7F2] dark:bg-[#333333] rounded-lg shadow-lg p-8"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-[#323232] dark:text-[#A7A7A7] mb-6">Send Us a Message</h3>

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-[#444444] dark:text-[#555555] mb-1">
                                        Your Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-[#555555] rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-[#444444] dark:text-[#555555] mb-1">
                                        Your Email
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-[#555555] rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                className="mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label htmlFor="subject" className="block text-sm font-medium text-[#444444] dark:text-[#555555] mb-1">
                                    Subject
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-[#555555] rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="How can we help you?"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                className="mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-[#444444] dark:text-[#555555] mb-1">
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-[#555555] rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                ></motion.textarea>
                            </motion.div>

                            <motion.button
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                                type="submit"
                                className="w-full bg-[#7B4F3A] hover:bg-[#6A432F] text-white font-medium py-3 px-4 rounded-lg transition duration-150 flex items-center justify-center"
                            >
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Send className="h-5 w-5 mr-2" />
                                </motion.div>
                                Send Message
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}