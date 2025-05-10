
import Navbar from "@/components/layout/Navbar";
import MiniNavbar from "@/components/layout/MiniNavbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/home/CallToAction";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MiniNavbar />
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Frequently Asked <span className="text-detailpros-pink">Questions</span>
            </h1>
            <p className="text-lg mb-6">
              Find answers to our most commonly asked questions about our services.
            </p>
            {/* Content will be added based on future design specifications */}
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
