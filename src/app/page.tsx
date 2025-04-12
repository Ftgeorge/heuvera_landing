import AboutUsSection from "./(main)/about/page";
import ContactUsSection from "./(main)/contact/page";
import HostWithUsSection from "./(main)/hostwithus/page";
import Marketplace from "./(main)/marketplace/page";
import Hero from "./components/hero/Hero";
import NavigationBar from "./components/navigation/NavigationBar";

export default function Home() {
  return (
    <>
    <NavigationBar/>
    <Hero/>
    <Marketplace/>
    <HostWithUsSection/>
    <AboutUsSection/>
    <ContactUsSection/>
    </>
  );
}
