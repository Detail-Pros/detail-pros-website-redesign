
import Navbar from "@/components/layout/Navbar";
import MiniNavbar from "@/components/layout/MiniNavbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (<>
        <Hero />
        <Services />
        <Testimonials />
        <CallToAction /></>
  );
};

export default Index;
