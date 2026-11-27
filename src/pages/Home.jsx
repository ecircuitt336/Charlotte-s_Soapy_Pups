import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Team from "../components/sections/Team";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import PricingPreview from "../components/sections/PricingPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Gallery />
      <Testimonials />
      <PricingPreview />
    </>
  );
}
