"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const videos = [
        "https://cdn.coverr.co/videos/coverr-aerial-view-of-beach-resort-6782/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-sunrise-over-the-ocean-8860/1080p.mp4",
        "https://cdn.coverr.co/videos/coverr-snowy-mountain-scenery-1277/1080p.mp4",
    ];

    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const videoChangeInterval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 10000); // 10 seconds for slow transition, adjust as needed

        return () => clearInterval(videoChangeInterval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video Slideshow */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                key={videos[currentVideo]} // Update the video source on each change
                style={{ animation: "slow-fade 10s infinite" }}
                ref={(videoElement) => {
                    if (videoElement) {
                        videoElement.playbackRate = 0.5; // Set the playback speed (0.5x)
                    }
                }}
            >
                <source src={videos[currentVideo]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

            {/* Text Content */}
            <div className="absolute bottom-10 left-8 z-20 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome to Heuvera</h1>
                <p className="text-base md:text-lg text-gray-200 max-w-md">
                    Discover virtual real estate reimagined. Explore, host, and connect in a whole new way.
                </p>
            </div>
        </section>
    );
}
