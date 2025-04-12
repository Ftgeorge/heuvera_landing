// components/HostWithUsSection.jsx
import { Home, DollarSign, Calendar, Shield, Calculator } from 'lucide-react';

export default function HostWithUsSection() {
    return (
        <section className="h-screen bg-indigo-50 flex items-center overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -mr-32 -mt-16 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full -ml-48 -mb-24 opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="hidden lg:block relative">
                        <img
                            src="/api/placeholder/600/700"
                            alt="Happy host greeting guests"
                            className="rounded-lg shadow-xl object-cover h-auto max-w-full"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/api/placeholder/80/80"
                                    alt="Host"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="font-medium text-gray-900">Sarah J.</h4>
                                    <p className="text-sm text-gray-600">Host since 2024</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic text-sm">
                                "Hosting on Heivera has been life-changing. I've met amazing people and earned enough to renovate my entire home!"
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        <div className="mb-6">
                            <h4 className="text-indigo-600 font-semibold mb-2">Host With Us</h4>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Share Your Space, Earn Your Way</h2>
                            <div className="w-20 h-1 bg-indigo-600 rounded"></div>
                        </div>

                        <p className="text-gray-700 mb-8 text-lg">
                            Turn your property into income by joining thousands of successful hosts on Heivera.
                            Our platform makes it easy to list your space, connect with guests, and get paid securely.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Home size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-gray-900">List Any Space</h5>
                                    <p className="mt-1 text-gray-600">
                                        Whether it's a vacation home, spare room, or unique space, our platform welcomes all types of properties.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <DollarSign size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-gray-900">Earn More</h5>
                                    <p className="mt-1 text-gray-600">
                                        Set your own prices and availability. Most hosts earn enough to cover their mortgage or rent—and then some.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Shield size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-medium text-gray-900">Host with Confidence</h5>
                                    <p className="mt-1 text-gray-600">
                                        Our verification process, secure payments, and $1M property protection give you peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h4 className="font-medium text-gray-900 mb-2">Potential earnings with Heivera</h4>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold text-indigo-600">$1,850</span>
                                <span className="ml-2 text-gray-600">/month average in your area</span>
                            </div>
                            <button className="mt-3 text-indigo-600 font-medium text-sm flex items-center">
                                <Calculator size={16} className="mr-1" /> Calculate your earnings
                            </button>
                        </div>

                        <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 flex items-center justify-center">
                            <Calendar size={18} className="mr-2" />
                            Start Hosting Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
