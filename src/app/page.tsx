// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import AdventureCarousel from "@/components/carousel";
import About from "@/components/about-us";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AdventureCarousel />
      <Feature />
      <MobileConvenience />
 
      <Faqs />
      <Footer />
    </>
  );
}
