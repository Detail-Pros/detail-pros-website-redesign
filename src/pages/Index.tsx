
import Navbar from "@/components/layout/Navbar";
import MiniNavbar from "@/components/layout/MiniNavbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MiniNavbar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
