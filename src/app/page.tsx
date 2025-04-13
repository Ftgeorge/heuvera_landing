"use client";

import { useEffect } from "react";
import AboutUsSection from "./(main)/about/page";
import ContactUsSection from "./(main)/contact/page";
import HostWithUsSection from "./(main)/hostwithus/page";
import Marketplace from "./(main)/marketplace/page";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavigationBar from "./components/navigation/NavigationBar";

export default function Home() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <>
      <NavigationBar />
      <Hero />
      <div id="marketplace">
        <Marketplace />
      </div>
      <div id="host">
        <HostWithUsSection />
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="contact">
        <ContactUsSection />
      </div>
      <Footer />
    </>
  );
}
