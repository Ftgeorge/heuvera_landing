// components/AboutUsSection.jsx
import { Users, Award, Clock, Globe } from 'lucide-react';

export default function AboutUsSection() {
    return (
        <section className="h-screen bg-white flex items-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-50 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full -ml-20 -mb-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <div className="mb-8">
                            <h4 className="text-indigo-600 font-semibold mb-2">About Us</h4>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reimagining Real Estate for the Digital Age</h2>
                            <div className="w-20 h-1 bg-indigo-600 rounded"></div>
                        </div>

                        <p className="text-gray-700 mb-6 text-lg">
                            Founded in 2024, Heivera is on a mission to transform how people discover, book, and share living spaces around the world. We believe finding your perfect place to stay should be as exciting as the journey itself.
                        </p>

                        <p className="text-gray-700 mb-8 text-lg">
                            Our platform connects travelers and renters with unique properties while giving property owners a simple, secure way to earn income from their spaces. With presence in over 30 countries, we're building a global community of hosts and guests.
                        </p>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-8">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <Users size={22} />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-900">10,000+</h5>
                                    <p className="text-sm text-gray-600">Happy Users</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <Award size={22} />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-900">4.8/5</h5>
                                    <p className="text-sm text-gray-600">Average Rating</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <Clock size={22} />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-900">24/7</h5>
                                    <p className="text-sm text-gray-600">Customer Support</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <Globe size={22} />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-900">30+</h5>
                                    <p className="text-sm text-gray-600">Countries</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md">
                                Our Story
                            </button>
                            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200">
                                Join Our Team
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Team Image & Values */}
                    <div className="relative">
                        <div className="relative z-10 rounded-lg overflow-hidden shadow-xl mb-8">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Heivera Team"
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 ml-8">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h4>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="h-1 w-4 bg-indigo-600 mt-3 rounded-full mr-3"></div>
                                    <div>
                                        <h5 className="font-medium text-gray-900">Trust & Safety</h5>
                                        <p className="text-gray-600 text-sm">We prioritize creating a secure platform where everyone feels confident.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="h-1 w-4 bg-indigo-600 mt-3 rounded-full mr-3"></div>
                                    <div>
                                        <h5 className="font-medium text-gray-900">Community First</h5>
                                        <p className="text-gray-600 text-sm">Building connections between hosts and guests is at our core.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="h-1 w-4 bg-indigo-600 mt-3 rounded-full mr-3"></div>
                                    <div>
                                        <h5 className="font-medium text-gray-900">Innovation</h5>
                                        <p className="text-gray-600 text-sm">We continuously improve our platform to provide the best experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-4 -right-4 w-20 h-20 bg-indigo-100 rounded-lg z-0"></div>
                        <div className="absolute -bottom-4 left-4 w-20 h-20 bg-indigo-200 rounded-lg z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}