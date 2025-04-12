"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

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

    return (
        <section className="h-screen bg-[#F8F7F2] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <div className="text-center mb-12">
                    <h4 className="text-[#7B4F3A] font-semibold mb-2">Get In Touch</h4>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Have questions about Heuvera? Our team is here to help you with anything you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-[#7B4F3A06] p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <div className="bg-[#7B4F3A44] p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-[#7B4F3A]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">Email Us</h4>
                                    <p className="mt-1 text-gray-600">support@heivera.com</p>
                                    <p className="mt-1 text-gray-600">partnerships@heivera.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#7B4F3A06] p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <div className="bg-[#7B4F3A44] p-3 rounded-full">

                                    <Phone className="h-6 w-6 text-[#7B4F3A]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">Call Us</h4>
                                    <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                                    <p className="mt-1 text-gray-600">Mon-Fri, 9am-6pm EST</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#7B4F3A06] p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <div className="bg-[#7B4F3A44] p-3 rounded-full">

                                    <MapPin className="h-6 w-6 text-[#7B4F3A]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">Visit Us</h4>
                                    <p className="mt-1 text-gray-600">123 Innovation Drive</p>
                                    <p className="mt-1 text-gray-600">San Francisco, CA 94103</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#7B4F3A06] p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                            <div className="flex items-start">
                                <div className="bg-[#7B4F3A44] p-3 rounded-full">
                                    <MessageSquare className="h-6 w-6 text-[#7B4F3A]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">Live Chat</h4>
                                    <p className="mt-1 text-gray-600">Chat with our support team</p>
                                    <button className="mt-2 text-[#6A432F] font-medium text-sm">
                                        Start Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-[#F8F7F2] rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="How can we help you?"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#7B4F3A] hover:bg-[#6A432F] text-white font-medium py-3 px-4 rounded-lg transition duration-150 flex items-center justify-center"
                            >
                                <Send className="h-5 w-5 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}